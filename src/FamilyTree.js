const React = require('react');

const FamilyTree = ({children}) => {
  return (
    <div className="family-tree">
      {children}
    </div>
  );
};

module.exports = FamilyTree;
