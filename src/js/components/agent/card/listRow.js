import React from 'react';
import { Link } from 'react-router-dom';

const agentCard = (props) => {
  if (!props.agent) {
    return <div></div>;
  }
  const photoStyle = {
    background: `url(${props.agent.img})`,
  };
  return (
    <div className="agent_card">
      <h3 className="agent_card--title">{props.title}</h3>
      <div className="agent_card__container">
        <Link to={`/agent/${props.agent.id}`}>
          <div className="agent__photo" style={photoStyle}></div>
        </Link>
        <div className="agent__info">
          <div>
            <h4 className="agent__info--name">
              <Link to={`/agent/${props.agent.id}`}>{props.agent.name}</Link>
            </h4>

            {props.agent_type ? (
              <p className="agent__info--agent_type">
                {props.agent.agent_type}
              </p>
            ) : (
              ''
            )}
            <p className="agent__info--company">{props.agent.company}</p>
          </div>
          <div className="agent__info--contact">
            <a
              href={`mailto:${props.agent.email}?subject=Inquiry from EasyHomes`}
            >
              {props.agent.email}
            </a>
            <a href={`tel:${props.agent.phone}`}>P: {props.agent.phone}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default agentCard;
