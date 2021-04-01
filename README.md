# Corbyn Family Tree

This is a purely personal project that traces my ancestry, currently into the
19th century, though this may evolve over time.

The project is a Github Pages website, currently just a single page. It
displays the family tree with a couple of variations following different
branches.

The content is generated as static HTML from a simple React app. It's all very
minimal.

## Project Setup

You'll need:

  * A modern version of nodejs
  * A Procfile runner (I use goreman)
  * A working installation of nginx

Install the nodejs dependencies:

```
yarn install
```

## Running the App

You can just run:

```
yarn webpack
```

And then open the `index.html` via a `file://` URI in a local browser, though
when working on the site it's more practical run a web server and the webpack
watcher together, which rebuilds on any changes.

```
goreman start
```

Substitute goreman for whatever Procfile runner you're using.

The nginx server is accessible on port 9000.

Webpack builds the `index.html` and the contents of the `dist/` directory.

## Deploying the App

Just commit the `index.html` and the `dist/` directory and push to github.

## Code Structure

All definitions are added to `<App />`, which is the single-page app.

The code is pretty easy to follow. People are represented by the `<Person />`
component, which takes `name`, `birth`, `marriage` and `death` properties, all
free-form strings.

The family tree is wraped inside a `<FamilyTree />` component, which accepts a
`name` property (used to generate a filenane for PNG image download) and a
number of children.

The children of the `<FamilyTree />` are always `<Tree />` and
`<Tree.Node />`. Think of it like a nested `<ul />` (which is how it's
implented under the hood). Each `<Tree />` contains one more more `<Node />`s
to represent descendants. Each `<Node />` may contain a subtree.

Married couples are represented by adding more than one `<Person />` to a
`<Node />`, where the first is the biological descendant and the remainder are spouses (there may be more than one). By convention I only define `marriage`
on any spouses and not on the biological descendant, as this would create
ambiguity when there is more than one spouse over time.

### Example

``` javascript
<FamilyTree name="My Family">
  <Tree>
    <Node>
      <Person name="Dad" birth="1962" />
      <Person name="Mum" birth="1964" marriage="1982" />

      <Tree>
        <Node>
          <Person name="First Child" birth="1983" />
          <Person name="Daughter In-Law" birth="1982" marriage="2015" />
        </Node>

        <Node>
          <Person name="Second Child" birth="1985" />
        </Node>

        <Node>
          <Person name="Third Child" birth="1987" />
        </Node>
      </Tree>
    </Node>
  </Tree>
</FamilyTree>
```

To aid maintainability or larger trees, it is advisable to break the tree into
smaller components based on where the branching occurs and then glue the
components together accordingly. For example, if the first child above goes on
to have children, break the node that contains the first child into a named
component like `<FirstChild />`, which includes its children, then render
`<FirstChild />` in its place on the original tree. This flattens everything
out a lot and helps with merge conflicts when adding new ancestors to the
tree.
