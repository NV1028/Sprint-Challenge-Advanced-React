- [ ] Why would you use class component over function components (removing hooks from the question)?
If you need a state in your component you will either need to create a class component or you lift the state up to the parent component and pass it down the functional component via props.  Another reason to use class components is the lifecycle hook which has certain lifecycle parts that can be exploited for the programmer's benefit.

- [ ] Name three lifecycle methods and their purposes.
render() method is the most useful and most widely used because it is required in a class component.  It does as it says rendering the component to the UI.  
componentDidUpdate() is invoked as soon as the updating happens.  Its most common use is for updating the DOM in response to prop or state changes.
componentWillUnmount() is another lifecycle method called before the component is unmounted and destroyed.  If there are any clean up actions that yo uneed to do this is the spot to do it.

- [ ] What is the purpose of a custom hook?
Custom hooks are the mechanism to reuse stateful logic; such as the dark-mode project remembered whether the dark-mode was turned on when the website was left or not.  It was saved to localstorage in the dark-mode project using a custom hook.

- [ ] Why is it important to test our apps?
Good testing should verify the behavior of the component in all its states or lifecycles.