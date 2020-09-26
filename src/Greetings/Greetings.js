import React from 'react';

const getGreet = (lang) => {
  switch (lang) {
    case 'de':
      return 'Hallo';
    case 'fr':
      return 'Bonjour';
    case 'en':
      return 'Hello';
    default:
      return 'Hola';
  }
};

export default function Greetings({ lang, children }) {
  let greet = getGreet(lang);

  return (
    <div>
      <p>
        {greet} {children}
      </p>
    </div>
  );
}
