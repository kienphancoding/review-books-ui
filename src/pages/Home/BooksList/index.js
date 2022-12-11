import clsx from "clsx";
import style from "./BooksList.module.scss";

const BooksLists = () => {
  return (
    <div className={clsx(style.list)}>
      <div className={clsx(style.item)}>
        <img src="https://salt.tikicdn.com/cache/750x750/ts/product/61/18/e2/186ccb6b02386d0bcb3f24203d713a2c.jpg.webp" />
        <h1>Benh nhan cam lang</h1>
        <p>The loai : Kinh di</p>
      </div>
    </div>
  );
};

export default BooksLists;
