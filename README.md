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

- Create one state called person that contains all the values like following

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "age": "26",
  "city": "Stockholm",
  "country": "Sweden",
  "study": "Javascript developer",
  "company": "Acme"
}
```

- Create a handleChange that takes in two arguments. First a key for our person object and a value for that key
- Us the handleChange method for all input onChange
- In the function handleChange figure out how to update just the value for the given key of our person state object
- Update the person state value with the new value

Hint:

- Can we make a copy of the state person and then use state[key] = value?
- Can we make a new copy with Object.assign()?

# Task 5

- Let's change the input for firstName and lastName to a `<select>` input. You should only be able to select from a list of names
