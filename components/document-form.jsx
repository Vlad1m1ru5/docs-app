import { useRef } from "react";

export default function DocumentForm() {
  const fileInput = useRef();

  const handleOnUploadClick = (event) => {
    event.preventDefault();
    fileInput.current.click();
  };

  const handleOnUploadSubmit = (event) => {
    event.target.file.files;
  };

  return (
    <form
      action=""
      className="flex flex-col space-y-2 p-4 rounded bg-white"
      method="POST"
      encType="multipart/form-data"
      onSubmit={handleOnUploadSubmit}
    >
      <h2 className="text-2xl font-bold">Upload Document File</h2>
      <button
        type="submit"
        className="px-2 py-2 text-lg bg-blue-400 text-white rounded outline-none focus:bg-blue-700"
        onClick={handleOnUploadClick}
      >
        Upload
      </button>
      <input
        type="file"
        name="file"
        id="file"
        required
        ref={fileInput}
        className="h-0 w-0"
        accept=".md"
      />
      <button
        type="submit"
        className="px-2 py-2 text-lg bg-blue-400 text-white rounded outline-none focus:bg-blue-700"
      >
        Submit
      </button>
    </form>
  );
}
