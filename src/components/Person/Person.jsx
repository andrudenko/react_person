import React from 'react';

export function Person({ person: {
  name, age, sex, isMarried, partnerName,
} }) {
  return (
    <section className="Person">
      <h2 className="Person__name">
        {`My name is ${name}`}
      </h2>
      <p className="Person__age">
        {age && `I am ${age}`}
      </p>
      <p className="Person__partner">
        {isMarried ? `${partnerName} is my ${sex === 'm' ? 'wife' : 'husband'}` : 'I am not married'}
      </p>
    </section>
  );
}
