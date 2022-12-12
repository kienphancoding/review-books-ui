import clsx from "clsx";
import { Link } from "react-router-dom";
import style from "./Books.module.scss";
import Intro from "./Intro";
import { useEffect, useState } from "react";

const Books = () => {
  const [content,setContent]= useState({})
  useEffect(() => {
    const params = window.location.pathname.replace("/books/", "");
    const url = `http://localhost/review-books-api/api/single_read.php/?id=${params}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setContent(data));
  }, []);

  const handleScroll = () => {
    document
      .getElementsByClassName(clsx(style.content))[0]
      .scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });
  };
  return (
    <div className={clsx(style.wrapper)}>
      <Intro handleScroll={handleScroll} content={content}/>

      <div className={clsx(style.content)}>
        <p>
          {content.content}
        </p>
      </div>

      <h1 className={clsx(style.title)}>Những quyển sách cùng thể loại</h1>
      <div className={clsx(style.list)}>
        <Link to="/books" className={clsx(style.item)}>
          <img
            src="https://salt.tikicdn.com/cache/750x750/ts/product/61/18/e2/186ccb6b02386d0bcb3f24203d713a2c.jpg.webp"
            alt="Anh sach"
          />
          <h1>Benh nhan cam lang</h1>
          <p>The loai : Kinh di</p>
        </Link>

        <Link to="/books" className={clsx(style.item)}>
          <img
            src="https://salt.tikicdn.com/cache/750x750/ts/product/61/18/e2/186ccb6b02386d0bcb3f24203d713a2c.jpg.webp"
            alt="Anh sach"
          />
          <h1>Benh nhan cam lang</h1>
          <p>The loai : Kinh di</p>
        </Link>

        <Link to="/books" className={clsx(style.item)}>
          <img
            src="https://salt.tikicdn.com/cache/750x750/ts/product/61/18/e2/186ccb6b02386d0bcb3f24203d713a2c.jpg.webp"
            alt="Anh sach"
          />
          <h1>Benh nhan cam lang</h1>
          <p>The loai : Kinh di</p>
        </Link>

        <Link to="/books" className={clsx(style.item)}>
          <img
            src="https://salt.tikicdn.com/cache/750x750/ts/product/61/18/e2/186ccb6b02386d0bcb3f24203d713a2c.jpg.webp"
            alt="Anh sach"
          />
          <h1>Benh nhan cam lang</h1>
          <p>The loai : Kinh di</p>
        </Link>
      </div>
    </div>
  );
};

export default Books;
