import React from 'react';

// So far we've just been using function components.
// Now that we need to worry about state in our component, we need to use the ES6 class syntax.
// To turn an ES6 class into a React component, you extend React.Component
// (or `import {Component} from 'react'` and use that)
//
// Exercise:
//
// Our EditNote component needs to have two input fields for title and content. 
// Changes on this fields needs to be saved in the local component state and displayed on the screen.
class EditNote extends React.Component {
    render() {
        return "Incomplete";
    }
}

export const Example = () => <EditNote />;
