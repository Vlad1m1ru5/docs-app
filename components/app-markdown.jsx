import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGFM from "remark-gfm";

export default function AppMarkdown({ markdown }) {
  const [plugins] = useState([remarkGFM]);

  return (
    <ReactMarkdown className="prose" plugins={plugins}>
      {markdown}
    </ReactMarkdown>
  );
}
