/**
 * @flow
 * @relayHash ce806e2736eeb3a5348b25ab43583539
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CountriesCountriesQueryVariables = {||};
export type CountriesCountriesQueryResponse = {|
  +continents: ?$ReadOnlyArray<?{|
    +code: ?string,
    +name: ?string,
    +countries: ?$ReadOnlyArray<?{|
      +name: ?string
    |}>,
  |}>,
  +countries: ?$ReadOnlyArray<?{|
    +name: ?string,
    +languages: ?$ReadOnlyArray<?{|
      +name: ?string
    |}>,
  |}>,
|};
export type CountriesCountriesQuery = {|
  variables: CountriesCountriesQueryVariables,
  response: CountriesCountriesQueryResponse,
|};
*/


/*
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
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v1 = [
  (v0/*: any*/)
],
v2 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "continents",
    "storageKey": null,
    "args": null,
    "concreteType": "Continent",
    "plural": true,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "code",
        "args": null,
        "storageKey": null
      },
      (v0/*: any*/),
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "countries",
        "storageKey": null,
        "args": null,
        "concreteType": "Country",
        "plural": true,
        "selections": (v1/*: any*/)
      }
    ]
  },
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "countries",
    "storageKey": null,
    "args": null,
    "concreteType": "Country",
    "plural": true,
    "selections": [
      (v0/*: any*/),
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "languages",
        "storageKey": null,
        "args": null,
        "concreteType": "Language",
        "plural": true,
        "selections": (v1/*: any*/)
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "CountriesCountriesQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v2/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "CountriesCountriesQuery",
    "argumentDefinitions": [],
    "selections": (v2/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "CountriesCountriesQuery",
    "id": null,
    "text": "query CountriesCountriesQuery {\n  continents {\n    code\n    name\n    countries {\n      name\n    }\n  }\n  countries {\n    name\n    languages {\n      name\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'fc5dab9d64fed091645ce7b7e5d4ad15';

module.exports = node;
