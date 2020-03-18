import React from 'react';

const agentCard = props => {
  const photoStyle = {
    background: `url(${props.agent.img})`
  };
  return (
    <div className='agent_card'>
      <h3 className='agent_card--title'>Listing Agent</h3>
      <div className='agent_card__container'>
        <div className='agent__photo' style={photoStyle}></div>
        <div className='agent__info'>
          <h4 className='agent__info--name'>{props.agent.name}</h4>
          <p className='agent__info--company'>{props.agent.company}</p>
          <div className='agent__info--contact'>
            <p>{props.agent.email}</p>
            <p>P: {props.agent.phone}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default agentCard;
