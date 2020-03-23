import React from 'react';
import AgentCard from './agentCard';

const agents = props => {
  // console.log('props', props);
  let agents = props.agents;
  agents = agents.map((a, index) => (
    <AgentCard key={index} agent_type agent={a} />
  ));
  return (
    <div className='agents'>
      <h2>Listing Agents</h2>
      {agents}
    </div>
  );
};

export default agents;
