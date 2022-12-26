import clsx from "clsx";
import style from "./Home.module.scss";
import BooksLists from "./BooksList";

const Home = () => {
  return (
    <div className={clsx(style.wrapper)}>
      <BooksLists />
    </div>
  );
};

export default Home;
