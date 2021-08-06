import AppLoader from "@components/app-loader";
import AppMarkdown from "@components/app-markdown";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const INITIAL_STATE = { content: "", message: "", isLoading: true };

export default function Document() {
  const { query } = useRouter();
  const [state, setState] = useState(INITIAL_STATE);

  useEffect(() => {
    async function fetchContent() {
      const { groupId, version, artifactId, name } = query;

      const body = JSON.stringify({ groupId, artifactId, version, name });
      setState((state) => ({ ...state, isLoading: true }));
      const response = await fetch("/api/document", { method: "POST", body });
      const { content, message } = await response.json();
      setState((state) => ({ ...state, content, message, isLoading: false }));
    }

    fetchContent();
  }, [query]);

  return (
    <AppLoader isLoading={state.isLoading} error={state.message}>
      <AppMarkdown markdown={state.content} />
    </AppLoader>
  );
}
