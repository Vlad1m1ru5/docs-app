import Home from "./Home";
import Login from "./Login";
import Docs from "./Docs";
import Upload from "./Upload";

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
