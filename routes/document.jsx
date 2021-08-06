import ReactMarkdown from "react-markdown";
import remarkGFM from "remark-gfm";
import PageLayout from "@components/page-layout";
import { useEffect, useState } from "react";

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
    <PageLayout>
      <ReactMarkdown className="prose" plugins={state.plugins}>
        {state.isLoading ? "Loading..." : state.content}
      </ReactMarkdown>
    </PageLayout>
  );
}
