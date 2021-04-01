const React = {useRef, useEffect} = require('react');
const {toPng} = require('html-to-image');

const FamilyTree = ({name, children}) => {
  const ref = useRef(null);

  // Scroll the tree to the center for initial display.
  useEffect(() => {
    const element = ref.current;

    if (element && typeof getComputedStyle == 'function') {
      const computedStyle = getComputedStyle(element);

      element.scrollTo(
        (element.scrollWidth - parseInt(computedStyle.width)) / 2,
        0,
      );
    }
  });

  /**
   * Handle downloading the tree as a PNG.
   *
   * This works by creating a canvas and rendering the tree on it, then
   * exporting the tree as data URI with base64-encoded PNG data. We download
   * this blob by linking to it and clicking the link.
   */
  const downloadPng = async () => {
    const element = ref.current;

    if (element) {
      try {
        // In order to initiate a download, we fake clicking on a link.
        //
        // The link element is garbage collected after use because it's never
        // added to the DOM.
        const a = document.createElement('a');
        alert(
          (await toPng(
            element.firstChild,
            {
              pixelRatio: 3.0,
              backgroundColor: 'rgba(255, 253, 247, 1.0)', // Pale yellow/sepia
            },
          )).substring(0, 40),
        );

        // Set the href to the data URI.
        a.setAttribute(
          'href',
          await toPng(
            element.firstChild,
            {
              pixelRatio: 3.0,
              backgroundColor: 'rgba(255, 253, 247, 1.0)', // Pale yellow/sepia
            },
          ),
        );

        a.setAttribute('type', 'image/png');

        // Set the download name on the link.
        a.setAttribute('download', `${name}.png`);

        a.click();
      } catch (e) {
        if (typeof alert == 'function') {
          alert(`Unable to download PNG: ${e.message}`);
        }
      }
    }
  };

  return (
    <>
      <div className="" onClick={downloadPng}>Download</div>
      <div className="family-tree" ref={ref} onDoubleClick={downloadPng}>
        <article>
          {children}
        </article>
      </div>
    </>
  );
};

module.exports = FamilyTree;
