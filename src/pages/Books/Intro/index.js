import clsx from "clsx";
import style from "./Intro.module.scss";

const Intro = () => {
  return (
    <div className={clsx(style.header)}>
      <div className={clsx(style.logo)}>
        <img
          className={clsx(style.img)}
          src="https://salt.tikicdn.com/cache/750x750/ts/product/61/18/e2/186ccb6b02386d0bcb3f24203d713a2c.jpg.webp"
          alt="Anh bia"
        />
      </div>
      <div className={clsx(style.info)}>
        <div className={clsx(style.name)}>Bệnh nhân câm lặng</div>
        <div className={clsx(style.author)}>Tác giả : Carl Jung</div>
        <div className={clsx(style.category)}>Thể loại : Kinh di</div>
        <div className={clsx(style.view)}>Lượt xem : 300</div>
        <h1>Giới thiệu</h1>
        <div className={clsx(style.intro)}>
          <p>
            sduhfskd fhksafhaksdahkhkfaf ks dfaks fhaks fas fs fkasfhask fksa
            fkas fas fsdf asdkfaskfaskf s fkasfhsakdf
          </p>
          <p>
            sduhfskd fhksafhaksdahkhkfaf ks dfaks fhaks fas fs fkasfhask fksa
            fkas fas fsdf asdkfaskfaskf s fkasfhsakdf
          </p>
        </div>
        <div className={clsx(style.read)}>Read Now</div>
      </div>
    </div>
  );
};

export default Intro;
