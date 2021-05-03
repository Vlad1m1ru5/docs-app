import PageLayout from "@components/page-layout";
import FileForm from "@components/file-form";

export default function Upload() {
  const handleOnFormSubmit = async (body) => {
    const options = { method: "POST", body };
    const response = await fetch("/api/upload", options);
    const data = await response.json();
    alert(data.message); //TODO: show toast with message
  };

  return (
    <PageLayout>
      <FileForm onFormSubmit={handleOnFormSubmit} />
    </PageLayout>
  );
}
