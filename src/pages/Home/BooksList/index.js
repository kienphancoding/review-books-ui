import clsx from "clsx";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import style from "./BooksList.module.scss";

const BooksLists = () => {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    const url = "http://localhost/review-books-api/api/read.php";
    fetch(url)
      .then((response) => response.json())
      .then((data) => setBooks(data.body));
  }, []);

  return (
    <div className={clsx(style.list)}>
      {books.map((x, index) => {
        return (
          <Link
            key={index}
            to={`/books/${x.id}`}
            className={clsx(style.item)}
          >
            <img src={x.image} alt={x.name} />
            <h1>{x.name}</h1>
            <p>{x.category}</p>
          </Link>
        );
      })}
    </div>
  );
};

export default BooksLists;
