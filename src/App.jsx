function App() {
  const firstName = "John";
  const lastName = "Doe";
  const age = "26";
  const city = "Stockholm";
  const country = "Sweden";
  const study = "Javascript developer";
  const company = "tretton37";

  return (
    <div>
      <p>
        Hello, my name is {firstName} {lastName}. I am {age} years old. I live
        in the {city} of {country}. I'm studying to be a {study} at {company}
      </p>
    </div>
  );
}

export default App;
