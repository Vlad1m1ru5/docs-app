import routes from "@routes/index";
import { useRouter } from "next/router";
import React from "react";

export default function Docs() {
  const { query } = useRouter();
  return React.createElement(routes.docs.component, { search: query.search });
}
