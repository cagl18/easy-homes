import React, { Component } from 'react';
import Header from './header';
import Footer from '../../components/footer';
import AgentsList from '../../components/agent/agents/agentsListGrid';
import { connect } from 'react-redux';
import { fetchAgents } from '../../../store/actions';
import Loader from '../../components/UI/loader';

class Agents extends Component {
  componentDidMount() {
    this.props.fetchAgents();
  }

  componentDidUpdate() {
    // this.redirectToSearchPage();
  }

  render() {
    const pageBody = !this.props.agentCount ? (
      <Loader />
    ) : (
      <AgentsList
        totalResult={this.props.agentCount}
        data={this.props.agents}
      />
    );
    return (
      <div className="agents">
        <Header /* onSearchSubmited={() => this.redirectToSearchPage()} */ />
        {pageBody}
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
