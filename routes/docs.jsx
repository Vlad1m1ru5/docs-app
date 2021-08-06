import AppLoader from "@components/app-loader";
import DocsTable from "@components/docs-table";
import { useEffect, useState } from "react";

const DOCS_KEYS = ["Name", "Group", "Artifact", "Version"];

const INITIAL_STATE = { docs: [], message: "", isLoading: true };

export default function Docs({ search }) {
  const [state, setState] = useState(INITIAL_STATE);

  useEffect(() => {
    async function fetchDocs() {
      const body = new URLSearchParams({ search });
      const options = { method: "POST", body };
      setState((state) => ({ ...state, isLoading: true }));
      const response = await fetch("/api/docs", options);
      const { docs, message } = await response.json();
      setState((state) => ({ ...state, docs, message, isLoading: false }));
    }

    function showEmptyDocs() {
      setState(INITIAL_STATE);
    }

    search === undefined ? showEmptyDocs() : fetchDocs();
  }, [search]);

  function docToRow(doc) {
    const group = doc["Group"];
    const artifact = doc["Artifact"];
    const version = doc["Version"];
    const name = doc["Name"];
    const uri = ["docs", group, version, artifact, name].join("/");
    return { uri, value: doc };
  }

  return (
    <AppLoader isLoading={state.isLoading} error={state.message}>
      <DocsTable
        caption="Search results"
        rows={state.docs.map(docToRow)}
        cols={DOCS_KEYS}
      />
    </AppLoader>
  );
}
