import Header from "../../components/Shared/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Shared/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Header></Header>
      <div className="min-h-[60vh] mt-16">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
