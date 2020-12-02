const Listings = require('../models/listingModel');
const Agents = require('../models/agentModel');

exports.searchPropertiesAndAgents = async (req, res) => {
  const { q } = req.query;
  delete req.query.q;

  let results = [];
  let resultCount = 0;

  //   const features = new APIFeatures(Model.find(filter), req.query)
  //   .filter()
  //   .sort()
  //   .limitFields()
  //   .paginate();

  const filter1 = { $text: { $search: q } };
  const filter2 = { score: { $meta: 'textScore' } };

  if (q.length > 1) {
    let [listingsResults, agentsResults] = await Promise.all([
      Listings.find(filter1, filter2)
        .lean()
        .sort({ score: { $meta: 'textScore' } })
        .limit(10),

      Agents.find({ name: { $regex: new RegExp(q), $options: 'i' } })
        .lean()
        .limit(5),
    ]);
    if (listingsResults.length) {
      listingsResults = listingsResults.map((l) => {
        l.collection = 'listings';
        return l;
      });
      results = [...listingsResults];
      resultCount += listingsResults.length;
    }
    if (agentsResults.length) {
      agentsResults = agentsResults.map((a) => {
        a.collection = 'agents';
        return a;
      });
      results = [...agentsResults, ...results];
      resultCount += agentsResults.length;
    }
  }

  res
    .status(200)
    .json({ status: 'success', results: resultCount, data: results });
};
