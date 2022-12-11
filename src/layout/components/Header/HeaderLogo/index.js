import { memo } from "react";
import clsx from "clsx";
import style from "./HeaderLogo.module.scss";

const HeaderLogo = () => {
  return <div className={clsx(style.wrapper)}>ReviewBooks</div>;
};

export default memo(HeaderLogo);
