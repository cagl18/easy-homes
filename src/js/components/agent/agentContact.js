import React from 'react';

const agentContact = props => {
  return (
    <div className='contact_agent'>
      <h5>CONTACT AGENT(S)</h5>
      <form action=''>
        <input id='name' type='text' name='name' placeholder='Name' />
        <input id='email' type='email' name='email' placeholder='Email' />
        <input id='phone' type='phone' name='phone' placeholder='Phone' />
        <textarea
          name='message'
          rows='6'
          cols='20'
          placeholder={`I would like more information about ${props.address}`}
        ></textarea>
        <button className='btn btn primary'>Send Message</button>
      </form>
    </div>
  );
};

export default agentContact;
