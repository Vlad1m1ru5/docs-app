import FormContainer from "./components/FormContainer";
import FormInput from "./components/FormInput";
import FormSubmit from "./components/FormSubmit";

export default function SearchForm({ action }) {
  return (
    <FormContainer action={action}>
      <FormInput />
      <FormSubmit />
    </FormContainer>
  );
}
