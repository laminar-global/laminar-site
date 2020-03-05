import React from 'react';
import { useState } from 'react';
import LabelText from '../components/LabelText';

// const sizes = {
//   default: `py-3 px-8`,
//   lg: `py-4 px-12`,
//   xl: `py-5 px-16 text-lg`
// };

const Button = ({ children, className = '', disabled, ...props }) => {
  return (
    <button
      className={`
        py-3 px-8
        ${className}
        font-display
        uppercase
        ${disabled ? 'bg-primary-lighter' : 'hover:bg-primary-darker bg-primary'}
        rounded
        text-white
        hover:text-white
      `}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

const Form = () => {
  const [status, setStatus] = useState('invalid');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = evt => {
    const name = evt.target.value;
    setName(name);
    handleCheck({ name, email, message });
  };
  const handleEmailChange = evt => {
    const email = evt.target.value;
    setEmail(email);
    handleCheck({ name, email, message });
  };
  const handleMessageChange = evt => {
    const message = evt.target.value;
    setMessage(message);
    handleCheck({ name, email, message });
  };
  const handleCheck = ({ name, email, message }) => {
    const isEmailValid = email.match(
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    if (!!name && !!email && isEmailValid) {
      setStatus('valid');
    } else {
      setStatus('invalid');
    }
  };
  const handleSubmit = () => {
    setStatus('sent');
    fetch('/.netlify/functions/contact', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        message
      })
    });
  };

  return status === 'sent' ? (
    <p className="mt-2 font-semibold text-primary mx-auto w-full md:w-1/2">
      Thanks for contacting us, we will get in touch soon.
    </p>
  ) : (
    <div>
      <p className="mt-2 mx-auto w-full md:w-1/2">
        Get in touch with us to understand how we can transform your business
      </p>
      <form className="px-4 py-4">
        <div className="md:flex md:flex-row">
          <label className="block flex-1 py-4 md:pr-3 text-left">
            <LabelText className="pb-1 text-gray-600">Name</LabelText>
            <input
              type="text"
              className="w-full text-xl p-4 rounded"
              value={name}
              onChange={handleNameChange}
            />
          </label>
          <label className="block flex-1 py-4 md:pl-3 text-left">
            <LabelText className="pb-1 text-gray-600">Email</LabelText>
            <input
              type="email"
              className="w-full text-xl p-4 rounded"
              value={email}
              onChange={handleEmailChange}
            />
          </label>
        </div>
        <label className="block py-4 text-left">
          <LabelText className="pb-1 text-gray-600">Message</LabelText>
          <textarea
            type="email"
            className="w-full h-64 text-xl p-4 rounded"
            value={message}
            onChange={handleMessageChange}
          />
        </label>

        <p className="mt-8">
          <Button size="l" disabled={status === 'invalid'} onClick={handleSubmit}>
            Get in Touch
          </Button>
        </p>
      </form>
    </div>
  );
};

export default Form;
