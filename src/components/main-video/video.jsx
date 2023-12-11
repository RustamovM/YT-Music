import "./video.scss";
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useYoutubeContext } from "../../context/youtube-contetx";
import { hover } from "@testing-library/user-event/dist/hover";

export const Video = () => {
  const { data } = useYoutubeContext();
  const { videoId } = useParams();
  const [video, setVideo] = useState();

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "8e2ad1ec74mshf0476501262e15ep192ccbjsn153e27b55080",
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  };

  useEffect(() => {
    fetch(
      `https://youtube-v31.p.rapidapi.com/videos?part=contentDetails%2Csnippet%2Cstatisticsid=${videoId}`,
      options
    )
      .then((response) => response.json())
      .then((response) => setVideo(response))
      .catch((err) => console.error(err));
  }, []);
  console.log(video);
  return (
    <section className="video pt-10 overflow-y-hidden">
      <div className="container mx-auto">
        <div className="videoList h-screen">
          <div className="flex me-10">
            <div className="video_play ">
              <iframe
                className="w-[900px] h-[500px] p-5"
                allowFullScreen
                src={`https://www.youtube.com/embed/${videoId}`}
                alt=""
              />
              <h3 className="font-medium text-4xl ps-5">Video nomi chiqmadi</h3>
            </div>
            <div className="saidbar-right fixed end-0 w-[370px] h-screen overflow-y-scroll ">
              {data &&
                data.items.map((el, index) => (
                  <Link
                    to={`/videos/${el.id?.videoId}`}
                    className="main__videos "
                  >
                    <div key={index} className="py-5">
                      <img
                        className="videos__img rounded-2xl"
                        src={el.snippet.thumbnails.default.url}
                        alt=""
                        width={280}
                        height={150}
                      />
                      <h3 className="videos__title">{el.snippet.title}</h3>
                      <p className="videos__text">{el.snippet.publishedAt}</p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Video;
