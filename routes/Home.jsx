import AppLink from "@components/AppLink";
import PageLayout from "@components/PageLayout";
import SearchForm from "@components/SearchForm";
import routes from "./index";

export default function Home() {
  const { docs, upload } = routes;

  return (
    <PageLayout>
      <SearchForm action={docs.path} />
      <AppLink
        href={upload.path}
        className="px-2 py-2 text-lg bg-blue-400 text-white rounded outline-none focus:bg-blue-700"
      >
        Add Document
      </AppLink>
    </PageLayout>
  );
}
