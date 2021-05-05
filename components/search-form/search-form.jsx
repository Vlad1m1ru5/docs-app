import FormContainer from "./components/form-container";
import FormInput from "./components/form-input";
import FormSubmit from "./components/form-submit";

export default function SearchForm({ action }) {
  return (
    <FormContainer action={action}>
      <FormInput />
      <FormSubmit />
    </FormContainer>
  );
}
