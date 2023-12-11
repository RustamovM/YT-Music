import Header from "../components/header/header";
import Main from "../components/main/main";
import YoutubeProvide, { MoviesProvide } from "../context/youtube-contetx";

const Home = () => {
  return (
    <>
      <YoutubeProvide>
        <Header />
        <Main />
      </YoutubeProvide>
    </>
  );
};
export default Home;
