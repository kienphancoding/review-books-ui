import Home from "../pages/Home";
// import Search from "../pages/Search";
import PageNotFound from "../pages/PageNotFound";

const routes = [
  { path: "/", component: Home },
  //   { path: "/search", component: Search },

    { path: "*", component: PageNotFound },
];

export { routes };
