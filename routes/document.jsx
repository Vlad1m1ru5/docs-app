import AppLoader from "@components/app-loader";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGFM from "remark-gfm";

const INITIAL_STATE = {
  content: "",
  message: "",
  isLoading: false,
  plugins: [remarkGFM],
};

export default function Document({ groupId, artifactId, version, name }) {
  const [state, setState] = useState(INITIAL_STATE);

  useEffect(() => {
    async function fetchContent() {
      const body = JSON.stringify({ groupId, artifactId, version, name });
      setState((state) => ({ ...state, isLoading: true }));
      const response = await fetch("/api/document", { method: "POST", body });
      const { content, message } = await response.json();
      setState((state) => ({ ...state, content, message, isLoading: false }));
    }

    fetchContent();
  }, [groupId, artifactId, version, name]);

  return (
    <AppLoader isLoading={state.isLoading} error={state.message}>
      <ReactMarkdown className="prose" plugins={state.plugins}>
        {state.content}
      </ReactMarkdown>
    </AppLoader>
  );
}
