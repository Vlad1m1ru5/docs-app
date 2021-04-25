export default function AppInput({
  type,
  name,
  placeholder,
  id,
  isRequired,
  ariaLabelledby,
}) {
  const inputProps = {
    type,
    name,
    ...(id && { id }),
    ...(placeholder && { placeholder }),
    ...(isRequired && { required: isRequired }),
    ...(ariaLabelledby && { "aria-labelledby": ariaLabelledby }),
  };

  return (
    <input
      {...inputProps}
      className="px-2 py-2 w-full bg-gray-100 rounded outline-none focus:border focus:border-blue-700 focus:-m-px"
    />
  );
}
