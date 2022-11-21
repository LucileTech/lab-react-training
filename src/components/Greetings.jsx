import React from 'react';

const Greetings = ({ lang, children, name }) => {
  if (lang === 'de') {
    return (
      <div className="Greetings">
        <h3>Hallo {name}</h3>
      </div>
    );
  } else if (lang === 'fr') {
    return (
      <div className="Greetings">
        <h3>Bonjour {name}</h3>
      </div>
    );
  } else if (lang === 'en') {
    return (
      <div className="Greetings">
        <h3>Hello {name}</h3>
      </div>
    );
  } else if (lang === 'es') {
    return (
      <div className="Greetings">
        <h3>Hola {name}</h3>
      </div>
    );
  }
};

export default Greetings;
