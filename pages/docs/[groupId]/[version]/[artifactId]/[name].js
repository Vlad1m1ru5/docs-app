import routes from "@routes/index";
import { useRouter } from "next/router";

export default function Document() {
  const { query } = useRouter();
  const { groupId, version, artifactId, name } = query;
  const DocumentComponent = routes.document.component;
  return (
    <DocumentComponent
      groupId={groupId}
      artifactId={artifactId}
      version={version}
      name={name}
    />
  );
}
