import React from 'react';
import { Link } from 'react-router-dom';

const agentCard = (props) => {
  if (!props.data) {
    return <div></div>;
  }
  const photoStyle = {
    background: `url(${props.data.photo})`,
  };
  return (
    <div className="agent_card grid">
      <h3 className="agent_card--title">{props.title}</h3>
      <div className="agent_card__container">
        <Link to={`/agents/${props.data.slug}/${props.data.id}`}>
          <div className="agent__photo" style={photoStyle}></div>
        </Link>
        <div className="agent__info">
          <div>
            <h4 className="agent__info--name">
              <Link to={`/agents/${props.data.slug}/${props.data.id}`}>
                {props.data.name}
              </Link>
            </h4>

            {props.agent_type ? (
              <p className="agent__info--agent_type">
                {props.agent.agent_type}
              </p>
            ) : (
              ''
            )}
          </div>
          <div className="agent__info--contact">
            <a
              href={`mailto:${props.data.email}?subject=Inquiry from EasyHomes`}
            >
              {props.data.email}
            </a>
            <a href={`tel:${props.data.phone}`}>P: {props.data.phone}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default agentCard;
