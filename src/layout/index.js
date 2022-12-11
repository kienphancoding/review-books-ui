import Header from "./components/Header";
import Footer from "./components/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
