const React = require('react');

const Info = ({birth, marriage, death}) => {
  return (
    <div className="info">
      {birth && (
        <div>
          <abbr className="label" title="Birth">b</abbr>
          {birth}
        </div>
      )}
      {marriage && (
        <div>
          <abbr className="label" title="Marriage">m</abbr>
          {marriage}
        </div>
      )}
      {death && (
        <div>
          <abbr className="label" title="Death">d</abbr>
          {death}
        </div>
      )}
    </div>
  );
};

module.exports = Info;
