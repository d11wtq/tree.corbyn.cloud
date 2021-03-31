const React = {useRef, useEffect} = require('react');

const FamilyTree = ({children}) => {
  const ref = useRef(null);

  // Scroll the tree to the center for initial display.
  useEffect(() => {
    const element = ref.current;

    if (element && window && typeof window.getComputedStyle == 'function') {
      const computedStyle = getComputedStyle(element);

      element.scrollTo(
        (element.scrollWidth / 2) - (parseInt(computedStyle.width) / 2),
        0,
      );
    }
  });

  return (
    <div className="family-tree" ref={ref}>
      {children}
    </div>
  );
};

module.exports = FamilyTree;
