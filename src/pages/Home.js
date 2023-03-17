import MainBar from "../components/mainbar/MainBar";
import Spinner from "../components/spinner/Spinner";
import HomeHeader from "../components/home/header/HomeHeader";
import "./Home.css";
import "../App.css";

const Home = () => {
  return (
    <div className="home-main layout">
      <MainBar title={"Podcaster"} actions={<Spinner show={true} />} />
      <HomeHeader />
    </div>
  );
};

export default Home;
