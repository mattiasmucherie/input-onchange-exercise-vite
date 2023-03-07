export function MyCustomInput(props) {
  return (
    <>
      <input
        value={props.value}
        onChange={props.handleChange}
        type={props.inputType}
      />

      <br />
    </>
  );
}
