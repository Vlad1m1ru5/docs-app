import Home from "./home";
import Login from "./login";
import Docs from "./docs";
import Upload from "./upload";

const routes = {
  home: {
    name: "Home",
    component: Home,
    path: "/",
  },
  login: {
    name: "Login",
    component: Login,
    path: "/login",
  },
  docs: {
    name: "Documents",
    component: Docs,
    path: "/docs",
  },
  upload: {
    name: "Upload",
    component: Upload,
    path: "/upload",
  },
};

export default routes;
