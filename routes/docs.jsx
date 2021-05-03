import AppHeading from "@components/app-heading";
import PageLayout from "@components/page-layout";
import { useEffect, useState } from "react";

export default function Docs({ search }) {
  const [state, setState] = useState({ docs: [], isLoading: true });

  useEffect(() => {
    async function fetchDocs() {
      const options = { method: "POST", body: { search } };
      const response = await fetch("/api/docs", options);
      const docs = await response.json();
      setState((state) => ({ ...state, docs, isLoading: false }));
    }

    fetchDocs();
  }, [search]);

  return (
    <PageLayout>
      <AppHeading>Документы по запросу: {search}</AppHeading>
      {(state.isLoading && <div>Loading...</div>) || (
        <ul>
          {state.docs.map((doc, index) => (
            <li key={index}>{doc}</li>
          ))}
        </ul>
      )}
    </PageLayout>
  );
}
