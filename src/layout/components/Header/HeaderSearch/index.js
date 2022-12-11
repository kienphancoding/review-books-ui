import { memo, useState } from "react";
import clsx from "clsx";
import style from "./HeaderSearch.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const HeaderLogo = () => {
  const [value, setValue] = useState("");
  return (
    <div className={clsx(style.wrapper)}>
      <input
        className={clsx(style.input)}
        spellCheck="false"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <div className={clsx(style.search)}>
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className={clsx(style.searchIcon)}
        />
      </div>
    </div>
  );
};

export default memo(HeaderLogo);
