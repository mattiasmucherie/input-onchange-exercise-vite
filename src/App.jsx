import { useState } from "react";

import { MyCustomInput } from "./MyCustomInput";

function App() {
  const [person, setPerson] = useState({
    firstName: "John",
    lastName: "Doe",
    age: "26",
    city: "Stockholm",
    country: "Sweden",
    study: "Javascript developer",
    company: "Acme",
  });

  const handleChange = (key, value) => {
    setPerson({ ...person, [key]: value });
  };

  const elements = Object.keys(person).map((el) => {
    return (
      <MyCustomInput
        value={person[el]}
        handleChange={(event) => handleChange(el, event.target.value)}
        inputType={el !== "age" ? "text" : "number"}
        key={el}
      />
    );
  });

  return (
    <div>
      <p>
        Hello, my name is {person.firstName} {person.lastName}. I am{" "}
        {person.age} years old. I live in the {person.city} of {person.country}.
        I'm studying to be a {person.study} at {person.company}
      </p>
      {elements}
    </div>
  );
}

export default App;
