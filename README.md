# redux-state-api-call

Redux state of api call

![Travis](https://travis-ci.org/RodolfoSilva/redux-state-api-call.svg?branch=master)
[![npm version](https://img.shields.io/npm/v/redux-state-api-call.svg?style=flat-square)](https://www.npmjs.com/package/redux-state-api-call)
[![npm downloads](https://img.shields.io/npm/dm/redux-state-api-call.svg?style=flat-square)](https://www.npmjs.com/package/redux-state-api-call)
[![GitHub license](https://img.shields.io/github/license/RodolfoSilva/redux-state-api-call.svg)](LICENSE)

## Installation

```bash
npm install --save redux-state-api-call
```

or

```bash
yarn add redux-state-api-call
```

## Usage

### Api reducer

The store should know how to handle actions coming from the async actions. To enable this, we need to pass the apiReducer to your store. It serves for all of your async actions ended with `_(REQUEST|FAILURE|SUCCESS)`, so you only have to pass it once.

```javascript
import { combineReducers } from 'redux';
import { reducer as apiReducer } from 'redux-state-api-call';

export const rootReducer = combineReducers({
  // ...your other reducers here
  // you have to pass apiReducer under 'api' key
  api: apiReducer
});
```

### Async Actions

actions.js

```javascript
import { createActions } from 'redux-actions';
export const {
  fetchAllRequest,
  fetchAllFailure,
  fetchAllSuccess
} = createActions(
  {
    FETCH_ALL_REQUEST: undefined,
    FETCH_ALL_FAILURE: undefined,
    FETCH_ALL_SUCCESS: undefined
  },
  { prefix: 'app/user' }
);
```

### Selectors

#### Loading Selector

```javascript
import { createLoadingSelector } from 'redux-state-api-call';
import * as actions from './actions';

export const isFetching = createLoadingSelector([actions.fetchAllRequest]);
```

#### Error Selector

```javascript
import { createErrorMessageSelector } from 'redux-state-api-call';
import * as actions from './actions';

export const getFetchError = createErrorMessageSelector([
  actions.fetchAllRequest
]);
```
