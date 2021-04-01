const React = {useRef, useEffect} = require('react');
const {toPng} = require('html-to-image');
const {FontAwesomeIcon: Icon} = require('@fortawesome/react-fontawesome');
const {faDownload, faAlignCenter} = require('@fortawesome/free-solid-svg-icons');

const FamilyTree = ({name, children}) => {
  const ref = useRef(null);

  /**
   * Center the tree within the viewport.
   *
   * This is useful when on a smaller screen and you don't know where you are.
   */
  const alignToCenter = () => {
    const element = ref.current;

    if (element && typeof getComputedStyle == 'function') {
      const computedStyle = getComputedStyle(element);

      element.scrollTo(
        {
          left: (element.scrollWidth - parseInt(computedStyle.width)) / 2,
          behavior: 'smooth',
        },
      );
    }
  };

  // Scroll the tree to the center for initial display.
  useEffect(() => {
    setTimeout(alignToCenter, 250);
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
        // Generate a data: URI for the PNG.
        const dataURI = await toPng(
          element.firstChild,
          {
            pixelRatio: 3.0,
            backgroundColor: 'rgba(255, 253, 247, 1.0)', // Pale yellow/sepia
          },
        );

        // Some browsers (e.g. Mobile Safari) don't work.
        if (!dataURI.startsWith('data:image/png')) {
          throw new Error('Failed to generate PNG data');
        }

        // In order to initiate a download, we fake clicking on a link.
        //
        // The link element is garbage collected after use because it's never
        // added to the DOM.
        const a = document.createElement('a');

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
      <div className="toolbar">
        <a href="javascript:;" onClick={downloadPng}>
          <Icon icon={faDownload} /> Download
        </a>
        <a href="javascript:;" onClick={alignToCenter}>
          <Icon icon={faAlignCenter} /> Re-center
        </a>
      </div>
      <div className="family-tree" ref={ref}>
        <article>
          {children}
        </article>
      </div>
    </>
  );
};

module.exports = FamilyTree;
