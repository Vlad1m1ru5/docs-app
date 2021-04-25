import { useRef } from "react";
import AppButton from "./app-button";
import AppHeading from "./app-heading";

export default function DocumentForm({ onFormSubmit }) {
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
    <form
      action=""
      className="flex flex-col space-y-2 p-4 rounded bg-white"
      method="POST"
      encType="multipart/form-data"
      onSubmit={handleOnFormSubmit}
    >
      <AppHeading>Upload Document File</AppHeading>
      <AppButton type="button" onClick={handleOnUploadClick}>
        Upload
      </AppButton>
      <input
        type="file"
        name="file"
        id="file"
        required
        ref={fileInput}
        className="h-0 w-0 opacity-0"
        tabIndex={-1}
        accept=".md"
      />
      <AppButton type="submit">Submit</AppButton>
    </form>
  );
}
