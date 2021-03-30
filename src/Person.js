const React = require('react');
const Info = require('./Info');

const Person = ({name, birth, marriage, death}) => {
  return (
    <div className="card">
      {name}
      <Info
        birth={birth}
        marriage={marriage}
        death={death}
      />
    </div>
  );
};

module.exports = Person;
