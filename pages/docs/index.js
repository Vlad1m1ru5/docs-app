import routes from "@routes/index";
import { useRouter } from "next/router";

export default function Docs() {
  const DocsComponent = routes.docs.component;
  const { query } = useRouter();
  return <DocsComponent search={query.search} />;
}
