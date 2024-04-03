import React from "react";
import Markdown from "react-markdown";
import { Link } from "react-router-dom";

const ReactPage = () => {
  const notes = `

**Core concepts**

**What and Why React?**

React is a JavaScript library for building user interfaces, particularly for single-page applications where the content on a page can dynamically change without requiring a full page reload. It was developed by Facebook and is maintained by both Facebook and a community of developers. React allows developers to build reusable UI components and manage the state of an application efficiently.

- Declarative: React makes it easy to understand and reason about the application's state, making the code more predictable.

- Component-Based: React follows a component-based architecture, allowing developers to build UIs by breaking them down into independent, reusable components.

- Virtual DOM: React uses a virtual DOM to optimize the rendering process, making updates more efficient by minimizing direct manipulation of the actual DOM.

- One-Way Data Binding: React uses a unidirectional data flow, making it easier to understand how changes to state or props affect the user interface.

## React Components and Lifecycle

React components are reusable code units that encapsulate UI and behavior. They come in two types:

**Functional Components:**

- Simple functions taking props, returning React elements.
- Can manage state and use lifecycle methods with Hooks.

**Class Components:**

- ES6 classes extending React.Component.
- Have local state and lifecycle methods.

**Lifecycle**

The React component lifecycle refers to the series of phases a component goes through from initialization to rendering, updating, and finally unmounting. Key lifecycle methods include:

- **Mounting Phase**: Methods like constructor, render, componentDidMount are called during the initial rendering.

- **Updating Phase**: Methods like shouldComponentUpdate, render, componentDidUpdate are called when the component is re-rendered due to changes in props or state.

- **Unmounting Phase**: The componentWillUnmount method is called just before a component is removed from the DOM.

These lifecycle methods provide hooks for developers to execute code at specific points in a component's life. This overview should give you a good starting point for understanding React and its core concepts. If you have any specific questions or need further clarification on any topic, feel free to ask!

## DOM

DOM stands for ‘Document Object Model’. In simple terms, it is a structured representation of the HTML elements that are present in a webpage or web app. DOM represents the entire UI of your application. The DOM is represented as a tree data structure. It contains a node for each UI element present in the web document. It is very useful as it allows web developers to modify content through JavaScript, also it being in structured format helps a lot as we can choose specific targets and all the code becomes much easier to work with.

## Disadvantages of Direct DOM Manipulation

Every time the DOM gets updated, the updated element and its children have to be rendered again to update the UI of our page. For this, each time there is a component update, the DOM needs to be updated and the UI components have to be re-rendered.


## Virtual DOM

React uses Virtual DOM exists which is like a lightweight copy of the actual DOM(a virtual representation of the DOM). So for every object that exists in the original DOM, there is an object for that in React Virtual DOM. It is exactly the same, but it does not have the power to directly change the layout of the document.

Manipulating DOM is slow, but manipulating Virtual DOM is fast as nothing gets drawn on the screen. So each time there is a change in the state of our application, the virtual DOM gets updated first instead of the real DOM.

## How does virtual DOM actually make things faster?

When anything new is added to the application, a virtual DOM is created and it is represented as a tree. Each element in the application is a node in this tree. So, whenever there is a change in the state of any element, a new Virtual DOM tree is created. This new Virtual DOM tree is then compared with the previous Virtual DOM tree and make a note of the changes. After this, it finds the best possible ways to make these changes to the real DOM. Now only the updated elements will get rendered on the page again.

## How virtual DOM Helps React?

In React, everything is treated as a component be it a functional component or class component. A component can contain a state. Whenever the state of any component is changed react updates its Virtual DOM tree. Though it may sound like it is ineffective the cost is not much significant as updating the virtual DOM doesn’t take much time.

React maintains two Virtual DOM at each time, one contains the updated Virtual DOM and one which is just the pre-update version of this updated Virtual DOM. Now it compares the pre-update version with the updated Virtual DOM and figures out what exactly has changed in the DOM like which components have been changed. This process of comparing the current Virtual DOM tree with the previous one is known as ‘diffing’. Once React finds out what exactly has changed then it updates those objects only, on real DOM.

React uses something called batch updates to update the real DOM. It just means that the changes to the real DOM are sent in batches instead of sending any update for a single change in the state of a component.

We have seen that the re-rendering of the UI is the most expensive part and React manages to do this most efficiently by ensuring that the Real DOM receives batch updates to re-render the UI. This entire process of transforming changes to the **real DOM is called Reconciliation**.

This significantly improves the performance and is the main reason why React and its Virtual DOM are much loved by developers all around.

![Virtual DOM](https://media.geeksforgeeks.org/wp-content/uploads/20230725135348/Browser-DOM-Virtual-DOM-copy.webp)

## Virtual DOM Key Concepts

- Virtual DOM is the virtual representation of Real DOM
- React update the state changes in Virtual DOM first and then it syncs with Real DOM
- Virtual DOM is just like a blueprint of a machine, can do changes in the blueprint but those changes will not directly apply to the machine.
- Virtual DOM is a programming concept where a virtual representation of a UI is kept in memory synced with “Real DOM ” by a library such as ReactDOM and this process is called reconciliation
- Virtual DOM makes the performance faster, not because the processing itself is done in less time. The reason is the amount of changed information – rather than wasting time on updating the entire page, you can dissect it into small elements and interactions

## Browsers and React

Once the JSX is transformed into plain JavaScript, browsers can understand and execute it like any other JavaScript code. The resulting JavaScript code contains calls to React functions that manage the virtual DOM and update the actual DOM efficiently.

In summary, React uses JSX as a more readable and expressive syntax for defining components, and tools like Babel are used to transform JSX into standard JavaScript that browsers can interpret. The transformed code utilizes React functions to create and manage the virtual DOM, enabling efficient updates to the actual DOM.
  `;
  return (
    <div className="mx-5 p-4 w-[1500px] flex flex-col cursor-pointer">
      <Link to="/topics/development">
        <div className="flex flex-row gap-[5px] items-center mb-5">
          <box-icon name="chevron-left"></box-icon>Back
        </div>
      </Link>
      <div>
        <Markdown className="font-medium">{notes}</Markdown>
      </div>
    </div>
  );
};

export default ReactPage;
