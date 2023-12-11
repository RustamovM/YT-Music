import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

const YoutubeContext = createContext();

export const useYoutubeContext = () => useContext(YoutubeContext);

export const YoutubeProvide = ({ children }) => {
  const [data, setData] = useState();

  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "d5933db5e6msh1e85870fd34625dp188af9jsn862571c20d5f",
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  };

  useEffect(() => {
    fetch(
      "https://youtube-v31.p.rapidapi.com/search?relatedToVideoId=7ghhRHRP6t4&part=id%2Csnippet&type=video&maxResults=50",
      options
    )
      .then((response) => response.json())
      .then((response) => setData(response))
      .catch((err) => console.error(err));
  }, []);
  console.log(data);

  const getYoutubeById = useCallback((videoId) => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "d5933db5e6msh1e85870fd34625dp188af9jsn862571c20d5f",
        "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
      },
    };

    fetch(
      `https://youtube-v31.p.rapidapi.com/videos?part=contentDetails%2Csnippet%2Cstatistics&id=${videoId}`,
      options
    )
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((err) => console.error(err));
  }, []);

  return (
    <YoutubeContext.Provider value={{ data }}>
      {children}
    </YoutubeContext.Provider>
  );
};
export default YoutubeProvide;
