const React = require('react');

const Tree = ({children}) => {
  return (
    <ul>
      {children}
    </ul>
  );
};

const Node = ({children}) => {
  return (
    <li>
      {children}
    </li>
  );
};

Tree.Node = Node;

module.exports = Tree;
