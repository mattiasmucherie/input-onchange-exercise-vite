# Welcome to the exercise

In this exercise, you will learn how to use React's state to store input values and display them on the screen. Follow the steps below to complete the tasks.

# Task 1

- In the code provided, you will see several constant variables (`firstName`, `lastName`, `age`, etc.) that are used to store the input values from the user.
- Replace these constant variables with state values using the useState hook. For example, replace `const firstName = "John"` with `const [firstName, setFirstName] = useState("");`.
- Repeat this process for all the other input fields, such as `lastName`, `age`, `email`, etc....

# Task 2

- Now that you have state values for each input field, you can update them dynamically as the user types. To do this, you will need to add an `onChange` event to each input field.
- For each state value, add a new input field to the JSX with the `value` prop set to the corresponding state value and an `onChange` event that updates the state value with the new input.
- In the `onChange` event, you can get the current value of the input field using `event.target.value`. Use this value to update the corresponding state value with the `set` function.
- Once you've updated the state values on input change, display them on the screen using JSX.

> Note: Remember to import the useState hook at the top of your file using import React, { useState } from 'react';.

# Task 3

- Make the input field it's own component that takes in the following props
  - value: the value
  - handleChange: a function that is called onChange
  - inputType: what type the input should be (number, text)
  - Make age a number and the input type a number (maybe give them as props)

# Task 4

```js
{
  firstName: "John",
  lastName: "Doe",
  age: "26",
  city: "Stockholm",
  country: "Sweden",
  study: "Javascript developer",
  company: "Acme"
}
```

- In this task, you will create a single state object that contains all the input values, rather than having separate state values for each input field.
- Define a new state value called `person` using the `useState` hook, with an initial value set to an empty object `{}`.
- For each input field, update the `value` prop to be the corresponding value from the `person` state object, for example: `value={person.firstName}`.
- Create a new function called `handleChange` that takes in two arguments: a `key` and a `value`.
- In the `handleChange` function, update the `person` state object by creating a new object with the updated `key` and `value`, and using the `setPerson` function to update the state. For example: `setPerson({...person, [key]: value})`.
- For each input field, update the `handleChange` prop to call the `handleChange` function with the appropriate `key` and `event.target.value`.
- Once you've made these changes, test the application to ensure that the input fields still work as expected and that the `person` state object is being updated correctly.

```js
<InputField
  value={person.firstName}
  handleChange={(e) => handleChange("firstName", e.target.value)}
  inputType="text"
/>
```

# Task 5

- In this task, you will replace the text input fields for `firstName` and `lastName` with a `<select>` input that allows the user to choose from a list of predefined names.

- Define two arrays of names, one for first names and one for last names.

  For example:

  ```javascript
  const firstNames = ["John", "Jane", "Bob"];
  const lastNames = ["Doe", "Smith", "Johnson"];
  ```

- Create two new state values called `selectedFirstName` and `selectedLastName` using the `useState` hook, with initial values set to the first item in each array.

  For example:

  ```javascript
  const [selectedFirstName, setSelectedFirstName] = useState(firstNames[0]);
  const [selectedLastName, setSelectedLastName] = useState(lastNames[0]);
  ```

- Figure it out from here :)
