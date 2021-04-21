export default function AppInput({
  type,
  name,
  placeholder,
  id,
  isRequired,
  ariaLabelledby,
}) {
  const inputProps = { type, name, placeholder };

  id && (inputProps.id = id);
  isRequired && (inputProps.required = isRequired);
  ariaLabelledby && (inputProps["aria-labelledby"] = ariaLabelledby);

  return (
    <input
      {...inputProps}
      className="px-2 py-2 w-full bg-gray-100 rounded outline-none focus:border focus:border-blue-700 focus:-m-px"
    />
  );
}
