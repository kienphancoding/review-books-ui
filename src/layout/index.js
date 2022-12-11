import Header from "./components/Header";
import Footer from "./components/Footer";
import clsx from "clsx";
import style from "./Layout.module.scss";

const Layout = ({ children }) => {
  return (
    <div className={clsx(style.wrapper)}>
      <Header />
      <div className={clsx(style.content)}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
