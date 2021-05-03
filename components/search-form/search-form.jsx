import FormContaoiner from "./components/form-container";
import FormInput from "./components/form-input";
import FormSubmit from "./components/form-submit";

export default function SearchForm({ action }) {
  return (
    <FormContaoiner action={action}>
      <FormInput />
      <FormSubmit />
    </FormContaoiner>
  );
}
