import React from "react";
import "./App.css";
import { RelayEnvironmentProvider } from "react-relay/hooks";
import RelayEnvironment from "./RelayEnvironment";
import Header from "./Header";
import Guide from "./Guide";
import Countries from "./Countries";

const { Suspense } = React;

function App() {
  return (
    <div className="App">
      <Header />
      <div className="col50">
        <div className="pad-md">
          <Guide />
        </div>
      </div>
      <div className="col50">
        <div className="pad-md">
          <Countries />
        </div>
      </div>
    </div>
  );
}

// The above component needs to know how to access the Relay environment, and we
// need to specify a fallback in case it suspends:
// - <RelayEnvironmentProvider> tells child components how to talk to the current
//   Relay Environment instance
// - <Suspense> specifies a fallback in case a child suspends.
function AppRoot(props) {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={"Loading Continent/Country Data..."}>
        <App />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default AppRoot;
