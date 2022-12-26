import clsx from "clsx";
import { useEffect, useState } from "react";
import style from "./BooksList.module.scss";

const BooksLists = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    const url = "http://localhost:9990/";
    fetch(url)
      .then((response) => response.json())
      .then((x) => {
        setData(x);
        setLoading(false);
      })
  }, []);

  return (
    <div className={clsx(style.list)}>
      {loading && (
        <div className={clsx(style.loading)}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      )}
      {!loading &&
        data.map((x, index) => {
          return (
            <a key={index} href={x.href} className={clsx(style.item)}>
              <img src={x.img} alt="Anh bia sach" />
              <h1>
                {x.title
                  .replace("Tóm tắt sách ", "")
                  .replace("[Nghe sách nói] ", "")
                  .replace("&#8211", "")
                  .replace("&#038", "")
                  .replace("&#8230", "")}
              </h1>
            </a>
          );
        })}
    </div>
  );
};

export default BooksLists;
