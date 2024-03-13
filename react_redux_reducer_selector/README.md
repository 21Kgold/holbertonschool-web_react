# React Redux reducer+selector

In Redux, a selector is a pure function that takes the Redux store state as an argument and returns some information extracted from that state. Selectors are primarily used to encapsulate the logic for looking up specific values from the state, deriving values, and improving performance by avoiding unnecessary recalculations. They are not technically part of Redux itself but are an officially endorsed pattern for accessing and deriving data from the Redux store.

## Description
* [State, Actions, and Reducers](https://redux.js.org/tutorials/fundamentals/part-1-overview#state-actions-and-reducers) in Redux apps
* The purpose of a reducer and the role it plays within your application
* Why a reducer should stay as pure as possible
* Why mutations should not happen within a reducer
* The use of [Immutable](https://immutable-js.com/docs/v4.3.5/) within the reducer
* The use of Normalizr within the app
* Selectors: what they are and when to use them

## Setup
```
$npm install immutable
```