import AppLink from "@components/app-link";
import SearchForm from "@components/search-form";

export default function Home() {
  return (
    <>
      <SearchForm action="/docs" />
      <AppLink
        href="/upload"
        className="px-2 py-2 text-lg bg-blue-400 text-white rounded outline-none focus:bg-blue-700"
      >
        Add Document
      </AppLink>
    </>
  );
}
