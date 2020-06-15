import React from "react";

function Guide() {
  return (
    <div>
      <h3>Getting Started</h3>
      <p>This starter will help you get started with React Relay.</p>
      <ol>
        <li>
          <span>Check out the file </span>
          <code>FetchGraphQL.js </code>
          <span>
            {" "}
            to see how the data is sourced. Eventually, you'll want to update
            this with your own GraphQL endpoint.
          </span>
        </li>
        <li>
          <span>Take a peek at </span>
          <code>RelayEnvironment.js </code>
          <span>
            {" "}
            to see how our <code>FetchGraphQL</code> function gets wired up into
            the Relay environment.
          </span>
        </li>
        <li>
          <span>
            Play with the GraphQL query in <code>Countries.js</code> and update
            the rendered output. You can find out more about the available data
            by visiting the{" "}
            <a
              target="_blang"
              noreferrer
              href="https://countries.trevorblades.com/"
              title="Click to explore the schema"
            >
              interactive query tool
            </a>{" "}
            for this data.
          </span>
        </li>
        <li>
          <span>
            Try refactoring the <code>Countries</code> component into two
            separate components, one for Continents &amp; Countries, and one for
            Countries &amp; Languanges.
          </span>
        </li>
      </ol>
    </div>
  );
}

export default Guide;
