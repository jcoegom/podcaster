import MainBar from "../components/mainbar/MainBar";
import Spinner from "../components/spinner/Spinner";
import HomeHeader from "../components/home/header/HomeHeader";
import useQueryData from "../common/hooks/UseQueryData";
import configApi from "../common/config/configApi.json";
import "./Home.css";
import "../App.css";

const Home = () => {
  const [loading, result, error] = useQueryData(configApi.urlMain, true);
  return (
    <div className="home-main layout">
      <MainBar title={"Podcaster"} actions={<Spinner show={loading} />} />
      <HomeHeader />
    </div>
  );
};

export default Home;
