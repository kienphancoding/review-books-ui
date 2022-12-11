import Books from "../pages/Books";
import Home from "../pages/Home";
// import Search from "../pages/Search";
import PageNotFound from "../pages/PageNotFound";

const routes = [
  { path: "/", component: Home },
  //   { path: "/search", component: Search },
  { path: "/books", component: Books },

    { path: "*", component: PageNotFound },
];

export { routes };
