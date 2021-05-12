import AppInput from "@components/AppInput";

export default function FormInput() {
  return (
    <AppInput
      type="search"
      name="search"
      placeholder="Search the Docs"
      ariaLabelledby="search-button"
    />
  );
}
