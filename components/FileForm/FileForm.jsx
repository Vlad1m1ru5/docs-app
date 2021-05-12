import AppButton from "@components/AppButton";
import AppHeading from "@components/AppHeading";
import { useRef } from "react";
import ContainerForm from "./components/ContainerForm";
import FileInput from "./components/FileInput";

export default function FileForm({ onFormSubmit }) {
  const fileInput = useRef();

  const handleOnUploadClick = (event) => {
    event.preventDefault();
    fileInput.current.click();
  };

  const handleOnFormSubmit = (event) => {
    event.preventDefault();
    const body = new FormData(event.target);
    onFormSubmit(body);
  };

  return (
    <ContainerForm onSubmit={handleOnFormSubmit}>
      <AppHeading>Upload Document File</AppHeading>
      <AppButton type="button" onClick={handleOnUploadClick}>
        Upload
      </AppButton>
      <FileInput htmlRef={fileInput} />
      <AppButton type="submit">Submit</AppButton>
    </ContainerForm>
  );
}
