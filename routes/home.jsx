import AppButton from "@components/app-button";
import AppInput from "@components/app-input";
import AppLayout from "@components/app-layout";
import AppLink from "@components/app-link";
import routes from "./index";

export default function Home() {
  const { docs, upload } = routes;
  return (
    <AppLayout>
      <form action={docs.path} className="flex flex-row w-full space-x-2">
        <AppInput
          type="search"
          name="search"
          placeholder="Search the Docs"
          ariaLabelledby="search-button"
        />
        <AppButton type="submit" id="search-button">
          Search
        </AppButton>
      </form>
      <AppLink
        href={upload.path}
        className="px-2 py-2 text-lg bg-blue-400 text-white rounded outline-none focus:bg-blue-700"
      >
        Add Document
      </AppLink>
    </AppLayout>
  );
}
