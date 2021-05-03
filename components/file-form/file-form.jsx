import AppButton from "@components/app-button";
import AppHeading from "@components/app-heading";
import { useRef } from "react";
import ContainerForm from "./components/container-form";
import FileInput from "./components/file-input";

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
