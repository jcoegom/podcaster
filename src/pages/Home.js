import MainBar from "../components/mainbar/MainBar";
import Spinner from "../components/spinner/Spinner";
import "./Home.css";
import "../App.css";

const Home = () => {
  return (
    <div className="home-main layout">
      <MainBar title={"Podcaster"} actions={<Spinner />} />
    </div>
  );
};

export default Home;
