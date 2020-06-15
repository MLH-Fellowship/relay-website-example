import React from "react";
import "./App.css";
import { preloadQuery, usePreloadedQuery } from "react-relay/hooks";
import RelayEnvironment from "./RelayEnvironment";
import graphql from "babel-plugin-relay/macro";

// Define a query
const CountriesQuery = graphql`
  query CountriesCountriesQuery {
    continents {
      code
      name
      countries {
        name
      }
    }
    countries {
      name
      languages {
        name
      }
    }
  }
`;

// Immediately load the query as our app starts. For a real app, we'd move this
// into our routing configuration, preloading data as we transition to new routes.
const preloadedQuery = preloadQuery(RelayEnvironment, CountriesQuery, {
  /* query variables */
});

// Inner component that reads the preloaded query results via `usePreloadedQuery()`.
// This works as follows:
// - If the query has completed, it returns the results of the query.
// - If the query is still pending, it "suspends" (indicates to React is isn't
//   ready to render yet). This will show the nearest <Suspense> fallback.
// - If the query failed, it throws the failure error. For simplicity we aren't
//   handling the failure case here.
function Countries({ preloadedQuery }) {
  const data = usePreloadedQuery(CountriesQuery, preloadedQuery);
  return (
    <>
      <h3>Continents &amp; Countries</h3>
      <p>
        The sample pulls data from{" "}
        <a
          target="_blang"
          noreferrer
          href="https://countries.trevorblades.com/"
          title="Click to explore the schema"
        >
          countries.trevorblands.com
        </a>
      </p>

      <ul style={{ padding: 0, listStyle: "none", textIndent: 0, margin: 0 }}>
        {data.continents.map(c => (
          <li title={c.code}>
            <p style={{ marginBottom: 0, textDecoration: "underline" }}>
              {c.name}
            </p>{" "}
            <small>{c.countries.length} Countries</small>
          </li>
        ))}
      </ul>

      <h3>Countries &amp; Languages</h3>

      <ul style={{ padding: 0, listStyle: "none", textIndent: 0, margin: 0 }}>
        {data.countries.map(c => (
          <li>
            <p style={{ marginBottom: 0, textDecoration: "underline" }}>
              {c.name}
            </p>{" "}
            <small>{c.languages.length} Official languages</small>
          </li>
        ))}
      </ul>
    </>
  );
}

function CountriesPreloader() {
  return <Countries preloadedQuery={preloadedQuery} />;
}

export default CountriesPreloader;
