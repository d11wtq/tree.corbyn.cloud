const React = require('react');
const Info = require('./Info');
const FamilyTree = require('./FamilyTree');
const Tree = {Node} = require('./Tree');
const Person = require('./Person');

const App = () => {
  return (
    <main>
      <h1>Corbyn Family Tree</h1>

      <div className="intro">
        <div>
          <p>
            Each tree shown below can be scrolled horizontally.
          </p>
        </div>

        <Info
          birth="Birth"
          marriage="Marriage"
          death="Death"
        />
      </div>

      <h2>From the perspective of William Corbyn, 1850</h2>

      <FamilyTree>
        <Tree>
          <WilliamCorbyn1850 />
        </Tree>
      </FamilyTree>

      <h2>From the perspective of Mary Brannigan, 1875</h2>

      <FamilyTree>
        <Tree>
          <MaryBrannigan1875 />
        </Tree>
      </FamilyTree>
    </main>
  );
};

module.exports = App;

const WilliamCorbyn1850 = () => {
  return (
    <Node>
      <Person
        name="William Corbyn"
        birth="Dec 1850, Norfolk"
        death="Oct-Dec 1890, Middlesbrough"
      />
      <Person
        name="Sarah Ann Starling"
        birth="Apr-Jun 1853, Norfolk"
        marriage="Jul-Sep 1875, Newcastle"
        death="Oct-Dec 1941, Middlesbrough (as Lipscombe)"
      />

      <Tree>
        <Node>
          <Person
            name="William James Corbyn"
            birth="Apr-Jun 1876, Newcastle"
          />
        </Node>

        <Node>
          <Person
            name="Edward Albert Corbyn"
            birth="Jul-Sep 1878, Newcastle"
          />
        </Node>

        <Node>
          <Person
            name="Robert Christmas Corbyn"
            birth="Jan-Mar 1879, Norfolk"
            death="Apr-Jun 1880, Norfolk"
          />
        </Node>

        <Node>
          <Person
            name="Ernest Frank Corbyn"
            birth="Dec 1880, Norfolk"
            death="Oct-Dec 1937, Middlesbrough"
          />

          <Person
            name="Ann Ryan"
            marriage="Apr-Jun 1901, Middlesbrough"
          />
        </Node>

        <Node>
          <Person
            name="John Henry Corbyn"
            birth="Jan-Mar 1883, Guisborough"
            death="Jan-Mar 1883, Guisborough"
          />
        </Node>

        <Node>
          <Person
            name="Pearce Corbyn"
            birth="Jan-Mar 1884, Guisborough"
            death="Oct-Dec 1953, Middlesbrough"
          />
        </Node>

        <RobertHenryCorbyn1886 />

        <Node>
          <Person
            name="James William Corbyn"
            birth="Oct-Dec 1889, Middlesbrough"
            death="Apr-Jun 1958, Manchester"
          />

          <Person
            name="Minnie Eliza Newman"
            birth="Oct-Dec 1891, Manchester"
            marriage="Apr-Jun 1909, Middlesbrough"
          />
        </Node>
      </Tree>
    </Node>
  );
};

const RobertHenryCorbyn1886 = () => {
  return (
    <Node>
      <Person
        name="Robert Henry Corbyn"
        birth="Apr-Jun 1886, Guisborough"
        death="Jul-Sep 1939, Middlesbrough"
      />

      <Person
        name="Edith Nixon"
        birth="Oct-Dec 1889, Middlesbrough"
        marriage="Oct-Dec 1909, Middlesbrough"
        death="Jan-Mar 1943, Middlesbrough"
      />

      <Tree>
        <Node>
          <Person
            name="Edith Corbyn"
            birth="Apr-Jun 1911, Middlesbrough"
          />

          <Person
            name="Robert James Linklater"
            birth="Oct-Dec 1907, Middlesbrough"
            marriage="Oct-Dec 1933, Middlesbrough"
            death=" Apr-Jun 1938, Middlesbrough"
          />
        </Node>

        <Node>
          <Person
            name="Sarah A Corbyn"
            birth="Apr-Jun 1913, Middlesbrough"
            death="Oct-Dec 1918, Middlesbrough"
          />
        </Node>

        <Node>
          <Person
            name="Robert Henry Corbyn"
            birth="Nov 1915, Middlesbrough"
            death="Jan-Mar 1978, Middlesbrough"
          />

          <Person
            name="Violet M Reader"
            birth="Oct-Dec 1923, Middlesbrough"
            marriage="Jul-Sep 1951, Middlesbrough"
          />
        </Node>

        <Node>
          <Person
            name="Edgar Corbyn"
            birth="Oct-Dec 1922, Middlesbrough"
          />
        </Node>

        <WilliamACorbyn1928 />

        <Node>
          <Person
            name="May Corbyn"
            birth="Jan-Mar 1931, Middlesbrough"
            death="Jan-Mar 1931, Middlesbrough"
          />
        </Node>
      </Tree>
    </Node>
  );
};

const WilliamACorbyn1928 = () => {
  return (
    <Node>
      <Person
        name="William A Corbyn"
        birth="Jan-Mar 1928, Middlesbrough"
      />

      <Person
        name="Edna Norman"
        birth="Oct 1930, Middlesbrough"
        marriage="Apr-Jun 1950, Middlesbrough"
      />

      <RecentFamilyTree />
    </Node>
  );
};

const MaryBrannigan1875 = () => {
  return (
    <Node>
      <Person
        name="Mary Brannigan"
        birth="Jan-Mar 1875, Blaina, Wales"
        death="Jul-Sep 1955, Middlesbrough"
      />

      <Person
        name="George Dryden"
        birth="Jan-Mar 1873, Middlesbrough"
        marriage="Jul-Sep 1898, Middlesbrough"
        death="Apr-Jun 1953, Middlesbrough"
      />

      <Tree>
        <Node>
          <Person
            name="Mary Ann Dryden"
            birth="Apr-Jun 1899, Middlesbrough"
          />
        </Node>

        <Node>
          <Person
            name="James Dryden"
            birth="Oct-Dec 1900, Middlesbrough"
            death="Jul-Sep 1953, Middlesbrough"
          />
        </Node>

        <Node>
          <Person
            name="George Dryden"
            birth="Oct 1902, Middlesbrough"
            death="Jan-Mar 1972, Middlesbrough"
          />
        </Node>

        <Node>
          <Person
            name="John Dryden"
            birth="Oct-Dec 1904, Middlesbrough"
          />
        </Node>

        <Node>
          <Person
            name="Thomas Dryden"
            birth="Oct-Dec 1906, Middlesbrough"
          />
        </Node>

        <JuliaDryden1909 />

        <Node>
          <Person
            name="Eugene Dryden"
            birth="Jul 1911, Middlesbrough"
            death="Jan-Mar 1999, Middlesbrough"
          />
        </Node>

        <Node>
          <Person
            name="Robert Dryden"
            birth="Apr-Jun 1913, Middlesbrough"
            death="Apr-Jun 1932, Middlesbrough"
          />
        </Node>

        <Node>
          <Person
            name="David Dryden"
            birth="Oct-Dec 1919, Middlesbrough"
            death="Oct-Dec 1919, Middlesbrough"
          />
        </Node>
      </Tree>
    </Node>
  );
};

const JuliaDryden1909 = () => {
  return (
    <Node>
      <Person
        name="Julia Dryden"
        birth="Jan 1909, Middlesbrough"
        death="Apr-Jun 1981, Middlesbrough"
      />

      <Person
        name="Leonard Wallace Norman"
        birth="Aug 1906, Middlesbrough"
        marriage="Oct-Dec 1928, Middlesbrough"
        death="Jul-Sep 1983, Middlesbrough"
      />

      <Tree>
        <Node>
          <Person
            name="Mary Norman"
            birth="Apr-Jun 1929, Middlesbrough"
          />

          <Person
            name="Wilfred Hill"
            marriage="Jul-Sep 1955, Middlesbrough"
          />
        </Node>

        <EdnaNorman1930 />

        <Node>
          <Person
            name="Margaret Norman"
            birth="Oct-Dec 1932, Middlesbrough"
          />
        </Node>

        <Node>
          <Person
            name="Julia Norman"
            birth="Apr-Jun 1934, Middlesbrough"
          />

          <Person
            name="Edward Ferguson"
            marriage="Jan-Mar 1954, Middlesbrough"
          />
        </Node>

        <Node>
          <Person
            name="Renee Norman"
            birth="Apr-Jun 1936, Middlesbrough"
          />

          <Person
            name="Robert W Flint"
            birth="Jul-Sep 1937, Middlesbrough"
            marriage="Jan-Mar 1966, Middlesbrough"
          />
        </Node>

        <Node>
          <Person
            name="Leonard G Norman"
            birth="Apr-Jun 1938, Middlesbrough"
          />

          <Person
            name="Maureen Williams"
            marriage="Apr-Jun 1962, Middlesbrough"
          />
        </Node>

        <Node>
          <Person
            name="Rose Norman"
            birth="Apr-Jun 1940, Middlesbrough"
          />

          <Person
            name="Colin Ferguson"
            marriage="Jul-Sep 1960, Middlesbrough"
          />
        </Node>

        <Node>
          <Person
            name="Eugene Norman"
            birth="Jul-Sep 1942, Middlesbrough"
          />
        </Node>

        <Node>
          <Person
            name="James Norman"
            birth="Jan-Mar 1945, Middlesbrough"
          />
        </Node>

        <Node>
          <Person
            name="Ann Norman"
            birth="Apr-Jun 1947, Middlesbrough"
          />

          <Person
            name="Thomas V Cave"
            marriage="Oct-Dec 1966, Middlesbrough"
          />
        </Node>

        <Node>
          <Person
            name="Sheila Norman"
            birth="Oct-Dec 1948, Middlesbrough"
          />
        </Node>

        <Node>
          <Person
            name="Anthony Norman"
            birth="Jan-Mar 1950, Middlesbrough"
          />
        </Node>

        <Node>
          <Person
            name="Michael Norman"
            birth="Jan-Mar 1952, Middlesbrough"
          />
        </Node>
      </Tree>
    </Node>
  );
};

const EdnaNorman1930 = () => {
  return (
    <Node>
      <Person
        name="Edna Norman"
        birth="Oct 1930, Middlesbrough"
      />

      <Person
        name="William A Corbyn"
        birth="Jan-Mar 1928, Middlesbrough"
        marriage="Apr-Jun 1950, Middlesbrough"
      />

      <RecentFamilyTree />
    </Node>
  );
};

/**
 * This is shared across all trees to show the current family members.
 */
const RecentFamilyTree = () => {
  return (
    <Tree>
      <Node>
        <Person
          name="Patricia Corbyn"
          birth="Aug 1951, France"
        />
      </Node>

      <Node>
        <Person
          name="Catherine Corbyn"
          birth="Apr-Jun 1954, Middlesbrough"
        />
      </Node>

      <Node>
        <Person
          name="Christine Corbyn"
          birth="Apr-Jun 1961, Middlesbrough"
        />
      </Node>

      <Node>
        <Person
          name="Andrew William Corbyn"
          birth="Jun 1962, Middlesbrough"
        />
      </Node>
    </Tree>
  );
};
