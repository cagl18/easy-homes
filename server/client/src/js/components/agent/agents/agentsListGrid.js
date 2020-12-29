import React from 'react';
import ItemsGridList from '../../UI/ItemsGridList';
import AgentCard from '../card/listGrid';

const agents = (props) => {
  let resultTotal = '';
  resultTotal = `${props.totalResult} Agents Found`;

  let itemsList = '';
  if (!props.data || !props.data.length) return itemsList;

  return (
    <div className="agents-results container u-margin-top-small">
      <h4
        className="heading-quaternary u-margin-bottom-small"
        style={{ color: 'black' }}
      >
        {resultTotal}
      </h4>
      <ItemsGridList
        data={props.data}
        itemsShownPerPage={props.itemsShownPerPage}
        listName="agents"
        spacing={0}
        xs={12}
        sm={6}
        md={4}
        lg={3}
        xl={3}
      >
        <AgentCard />
      </ItemsGridList>
    </div>
  );
};

export default agents;

// import React from 'react';
// import AgentCard from '../card/listRow';

// const agents = (props) => {
//   // console.log('props', props);
//   let agents = props.agents;
//   agents = agents.map((a, index) => (
//     <AgentCard key={index} agent_type agent={a} />
//   ));
//   return (
//     <div className="agents">
//       <h2>Listing Agents</h2>
//       {agents}
//     </div>
//   );
// };

// export default agents;
