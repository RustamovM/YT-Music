import home from "../../assets/home.png";
import fair from "../../assets/fire.png";
import subscribe from "../../assets/subscribe.png";
import library from "../../assets/library.svg";
import history from "../../assets/history.svg";
import watchLater from "../../assets/watch.svg";
import favourites from "../../assets/favourites.svg";
import like from "../../assets/liked.svg";
import music from "../../assets/music.svg";
import games from "../../assets/games.svg";
import avatar1 from "../../assets/avatar-1.png";
import avatar2 from "../../assets/avatar-2.png";
import "./main.scss";
import { Link } from "react-router-dom";
import { useYoutubeContext } from "../../context/youtube-contetx";

function Main() {
  const { data } = useYoutubeContext();
  const mock = [
    {
      icon: home,
      title: "Home",
    },
    {
      icon: fair,
      title: "Trending",
    },
    {
      icon: subscribe,
      title: "Subscribe",
    },
  ];
  const mockData = [
    {
      icon: library,
      title: "Library",
    },

    {
      icon: history,
      title: "History",
    },
    {
      icon: watchLater,
      title: "Watch later",
    },
    {
      icon: favourites,
      title: "Favourites",
    },
    {
      icon: like,
      title: "Liked videos",
    },
    {
      icon: music,
      title: "Music",
    },
    {
      icon: games,
      title: "Games",
    },
  ];
  const subscriptions = [
    {
      icon: avatar1,
      title: "Gussie Singleton",
    },
    {
      icon: avatar2,
      title: "Nora Francis",
    },
    {
      icon: avatar1,
      title: "Belle Briggs",
    },
    {
      icon: avatar2,
      title: "Eunice Cortez",
    },
    {
      icon: avatar1,
      title: "Emma Hanson",
    },
    {
      icon: avatar2,
      title: "Leah Berry",
    },
  ];

  return (
    <section className=" ">
      <div className="container mx-auto">
        <div className="wrapper__main py-[100px]">
          <div className="saidbar w-[180px] h-screen text-[#898989]">
            <ul className="said_list">
              {mock.map((mock, index) => (
                <li
                  key={index}
                  className="said_item flex items-center hover:bg-[#f2f2f2] p-2 rounded-xl font-bold cursor-pointer  my-4"
                >
                  <img
                    src={mock.icon}
                    alt=""
                    width={20}
                    height={19}
                    className="me-2"
                  />
                  <h4>{mock.title}</h4>
                </li>
              ))}
            </ul>
            <div className="subscrib">
              <ul className="sub__list flex flex-col items-start">
                {mockData.map((cast, icon) => (
                  <li
                    key={icon}
                    className="flex items-center justify-evenly my-4 hover:bg-[#f2f2f2] p-2 rounded-xl"
                  >
                    <img
                      src={cast.icon}
                      width={20}
                      height={19}
                      alt="home"
                      className=" me-2"
                    />
                    <h4 className="font-semibold">{cast.title}</h4>
                  </li>
                ))}
              </ul>
              <ul className="flex flex-col items-start hover:bg-[#f2f2f2] p-2 rounded-xl">
                {subscriptions.map((sub, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-evenly my-4 gap-1.5"
                  >
                    <img src={sub.icon} width={20} height={19} alt="home" />
                    <h4 className="font-semibold  cursor-pointer">
                      {sub.title}
                    </h4>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="page ms-[200px]">
            <div className="container mx-auto">
              <div className="wrapp grid grid-cols-4">
                {data &&
                  data.items.map((el, index) => (
                    <div
                      key={index}
                      className="wrap-box flex flex-col ps-4 my-3"
                    >
                      <Link to={`/videos/${el.id?.videoId}`}>
                        <img
                          className="rounded-xl"
                          src={el.snippet.thumbnails.default.url}
                          width={280}
                          height={150}
                        />
                        <h3 className="pt-2.5 pb-1 text-[#19202C] font-bold font-4">
                          {el.snippet.title}
                        </h3>
                        <div className="flex gap-10 text-[#C2C2C2] font-normal">
                          <p className="">{el.snippet.publishedAt}</p>
                        </div>
                      </Link>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Main;
