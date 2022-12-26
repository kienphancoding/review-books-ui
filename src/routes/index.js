import Home from "../pages/Home";
import PageNotFound from "../pages/PageNotFound";

const routes = [
  { path: "/", component: Home },
  { path: "*", component: PageNotFound },
];

export { routes };
