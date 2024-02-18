# React state

In React, a [component’s local state](https://legacy.reactjs.org/docs/state-and-lifecycle.html) is a plain JavaScript object that holds information that might affect its rendering. In React, is essential to be familiar with components inner working mechanism. The behavior of a component mainly depends on its props or state. The difference between them is that state is private to a component and is not visible to the outside world. In other words, state is responsible for the behavior of a component behind the scenes and can be considered the source of truth for it. There are multiple ways to manage the state for a component like [local state](https://blog.logrocket.com/component-state-local-state-redux-store-and-loaders/), Redux store, and even the use of this.

## Description

* What the state of a component or a container is
* The lifecycle of a component
* How to modify a state and execute code in the right order
* What a controlled component is
* How to use Forms in React
* How to reuse smaller components, keep them pure, and lift its state to principal containers
* The use of a React Hook and how to create one
* How to test State changes with Enzyme

### [0. Adding a local state for notifications](./task_0/dashboard/src/App/App.js)

In React, you can pass functions as props to child components. This allows child components to communicate back to their parent, enabling them to update the parent’s state.
