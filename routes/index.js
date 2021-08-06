import Home from "./home";
import Login from "./login";
import Docs from "./docs";
import Upload from "./upload";
import Document from "./document";

const routes = {
  home: {
    component: Home,
    path: "/",
  },
  login: {
    component: Login,
    path: "/login",
  },
  docs: {
    component: Docs,
    path: "/docs",
  },
  document: {
    component: Document,
    path: "/docs/:groupId/:version/:artifactId/:name",
  },
  upload: {
    component: Upload,
    path: "/upload",
  },
};

export default routes;
