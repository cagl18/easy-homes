import React, { Component } from 'react';
import Nav from '../UI/navbar';
import { Link } from 'react-router-dom';
import SearchBar from '../searchBar';
import Footer from '../footer';
import { redirectToURL, getURLParams } from '../../../shared/utility';
import { connect } from 'react-redux';
import { fetchOneAgent } from '../../../store/actions';

class AgentDetails extends Component {
  // state = { agent: '' };
  componentDidMount() {
    const agentID = this.props.match.params.id;
    this.props.fetchOneAgent(agentID);

    // const agent = this.getAgentByID(agentID);
    // this.setState({ agent });
  }

  // getAgentByID = (id) => {
  //   const agent = agents.find((a) => a.id.toString() === id);
  //   return agent;
  // };

  redirectToSearchPage = () => {
    const searchTerm = getURLParams('q', this.props.location);
    if (searchTerm.length) {
      redirectToURL('/search', this.props.history);
    }
  };
  render() {
    let agent = {};
    if (this.props.agent) agent = this.props.agent;
    let biography = null;
    if (agent && agent.biography) {
      biography = agent.biography.map((el, index) => <p key={index}>{el}</p>);
    }
    return (
      <div>
        <Nav className="sticky">
          <SearchBar onSearch={() => this.redirectToSearchPage()} />
        </Nav>
        <div className="agentDetails container">
          <img className="agentDetails--img" src={agent.photo} alt="" />

          <div className="agentCard">
            <h1 className="agentCard--name">{agent.name}</h1>
            <p>{agent.title}</p>
            <p>{agent.email}</p>
            <p className="agentCard--phone">M: {agent.phone}</p>
            <button className="btn btn primary">Work with {agent.name}</button>
          </div>

          <div className="sidebar">
            <h2>Experience</h2>
            <div className="press">
              <h2>Press</h2>
              <Link to="#">
                Brooklyn Real Estate Six Months Later: One Sold, One in , One
                Off Market, One Still Available
              </Link>

              <Link to="#">
                Brownstoner: Prospect Lefferts Garden Freestanding Queen
                Anne-Style Home
              </Link>
              <Link to="#">Brownstoner: Greenwood Heights Townhouse</Link>
              <Link to="#">
                Top 10 Brooklyn Real Estate Listings: 720 4th Ave
              </Link>
              <Link to="#">
                New York Times: On the Market in NYC - 720 4th Ave
              </Link>
              <Link to="#">Stunning Eco-Friendly Homes: 651 New York Ave</Link>
              <Link to="#">Stunning Eco-Friendly Homes: 1311 Pacific St</Link>
            </div>
            <div className="social">
              <h3>Social Media</h3>
              <div className="social__box">
                <div className="social__icon">
                  <i className="fab fa-instagram"></i>
                  <Link to="#">{agent.name}</Link>
                </div>
                <div className="social__icon">
                  <i className="fab fa-facebook-f"></i>
                  <Link to="#">{agent.name}</Link>
                </div>
                <div className="social__icon">
                  <i className="fab fa-linkedin-in"></i>
                  <Link to="#">{agent.name}</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="biography">
            <h2>About {agent.name}</h2>
            {biography}
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    agent: state.agents.data,
  };
};

export default connect(mapStateToProps, { fetchOneAgent })(AgentDetails);
