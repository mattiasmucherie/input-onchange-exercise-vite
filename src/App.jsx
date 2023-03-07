import { useState } from "react";

import { MyCustomInput } from "./MyCustomInput";

function App() {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Doe");
  const [age, setAge] = useState("26");
  const [city, setCity] = useState("Sockholm");
  const [country, setCountry] = useState("Sweden");
  const [study, setStudy] = useState("JS dev");
  const [company, setCompany] = useState("Brights");

  return (
    <div>
      <p>
        Hello, my name is {firstName} {lastName}. I am {age} years old. I live
        in the {city} of {country}. I'm studying to be a {study} at {company}
      </p>
      <MyCustomInput
        value={firstName}
        handleChange={(event) => setFirstName(event.target.value)}
        inputType="text"
      />
      <MyCustomInput
        value={lastName}
        handleChange={(event) => setLastName(event.target.value)}
        inputType="text"
      />
      <MyCustomInput
        value={age}
        handleChange={(event) => setAge(event.target.value)}
        inputType="number"
      />
      <MyCustomInput
        value={city}
        handleChange={(event) => setCity(event.target.value)}
        inputType="text"
      />
      <MyCustomInput
        value={country}
        handleChange={(event) => setCountry(event.target.value)}
        inputType="text"
      />
      <MyCustomInput
        value={study}
        handleChange={(event) => setStudy(event.target.value)}
        inputType="text"
      />
      <MyCustomInput
        value={company}
        handleChange={(event) => setCompany(event.target.value)}
        inputType="text"
      />
    </div>
  );
}

export default App;
