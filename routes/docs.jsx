import AppHeading from "@components/app-heading";
import DocsTable from "@components/docs-table";
import PageLayout from "@components/page-layout";
import { useEffect, useState } from "react";

const DOCS_KEYS = ["Name", "Group", "Artifact", "Version"];

export default function Docs({ search }) {
  const [state, setState] = useState({
    docs: [],
    message: "",
    isLoading: true,
  });

  useEffect(() => {
    async function fetchDocs() {
      const body = new URLSearchParams({ search });
      const options = { method: "POST", body };
      const response = await fetch("/api/docs", options);
      const { docs, message } = await response.json();
      setState((state) => ({ ...state, docs, message, isLoading: false }));
    }

    search !== undefined && fetchDocs();
  }, [search]);

  return (
    <PageLayout>
      <AppHeading>Документы по запросу: {search}</AppHeading>
      {(state.isLoading && <div>Loading...</div>) ||
        (state.message.length > 0 && <p>{state.message}</p>) || (
          <DocsTable rows={state.docs} cols={DOCS_KEYS} />
        )}
    </PageLayout>
  );
}
