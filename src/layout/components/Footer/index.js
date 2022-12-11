import {
  faGithubSquare,
  faInstagramSquare,
  faSquareFacebook,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import style from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={clsx(style.wrapper)}>
      <FontAwesomeIcon className={clsx(style.icon)} icon={faSquareFacebook} style={{color:"blue"}}/>
      <FontAwesomeIcon className={clsx(style.icon)} icon={faInstagramSquare} style={{color:"purple"}}/>
      <FontAwesomeIcon className={clsx(style.icon)} icon={faGithubSquare} style={{color:"black"}}/>
    </div>
  );
};

export default Footer;
