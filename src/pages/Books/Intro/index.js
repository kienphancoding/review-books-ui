import clsx from "clsx";
import style from "./Intro.module.scss";

const Intro = ({handleScroll,content}) => {
  return (
    <div className={clsx(style.header)}>
      <div className={clsx(style.logo)}>
        <img
          className={clsx(style.img)}
          src={content.image}
          alt={content.name}
        />
      </div>
      <div className={clsx(style.info)}>
        <div className={clsx(style.name)}>{content.name}</div>
        <div className={clsx(style.author)}>Tác giả : {content.author}</div>
        <div className={clsx(style.category)}>Thể loại : {content.category}</div>
        <div className={clsx(style.view)}>Lượt xem : {content.views}</div>
        <h1>Giới thiệu</h1>
        <div className={clsx(style.intro)}>
          <p>
            {content.intro}
          </p>
        </div>
        <div className={clsx(style.read)} onClick={handleScroll}>Đọc ngay</div>
      </div>
    </div>
  );
};

export default Intro;
