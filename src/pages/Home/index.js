import clsx from "clsx";
import style from "./Home.module.scss";
import Categories from "./Categories";
import BooksLists from "./BooksList";

const Home = () => {
  return (
    <div className={clsx(style.wrapper)}>
      <Categories />
      <BooksLists />
    </div>
  );
};

export default Home;
