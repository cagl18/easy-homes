import React, { Component } from 'react';
import Header from './header';
import Footer from '../../components/footer';
import AgentsList from '../../components/agent/agents/agentsListGrid';
import { connect } from 'react-redux';
import { fetchAgents } from '../../../store/actions';

// import { redirectToURL, getURLParams } from '../../../shared/utility';
// import { redirectToSearchPage } from '../search/search_utils';

class Agents extends Component {
  // redirectToSearchPage = () => {
  //   const searchTerm = getURLParams('q', this.props.location);
  //   if (searchTerm.length) {
  //     redirectToURL('/search', this.props.history);
  //   }
  // };

  componentDidMount() {
    this.props.fetchAgents();
  }

  componentDidUpdate() {
    // this.redirectToSearchPage();
  }

  render() {
    return (
      <div className="agents">
        <Header /* onSearchSubmited={() => this.redirectToSearchPage()} */ />
        <AgentsList
          totalResult={this.props.agentCount}
          data={this.props.agents}
        />
        {/* <Cities />
        <Market /> */}
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    agents: state.agents.data,
    agentCount: state.agents.results,
  };
};

export default connect(mapStateToProps, { fetchAgents })(Agents);
