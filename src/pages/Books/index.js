import clsx from "clsx";
import style from "./Books.module.scss";
import Intro from "./Intro";

const Books = () => {
  return (
    <div className={clsx(style.wrapper)}>
      <Intro />

      <div className={clsx(style.content)}>
        
      </div>
    </div>
  );
};

export default Books;
