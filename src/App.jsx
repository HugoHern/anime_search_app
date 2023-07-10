import { useEffect, useState } from "react";
import "./Components/styles.css";
import AnimeList from "./Components/AnimeList";
import AnimeInfo from "./Components/AnimeInfo";

function App() {
  //States
  const [search, setSearch] = useState("Naruto");
  const [animeData, setAnimeData] = useState([]);
  const [animeInfo, setAnimeInfo] = useState();
  ////////////////////////////////
  const getData = async () => {
    const res = await fetch(
      `https://api.jikan.moe/v4/anime?q=${search}&sfw&limnit=20`
    );
    const resData = await res.json();
    setAnimeData(resData.data);
  };

  useEffect(() => {
    getData();
  }, []);
  ////JSX////
  return (
    <>
      <div className="header">
        <h1>Anime List</h1>
        <div className="search-box">
          <input
            type="search"
            placeholder="search your anime"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="container">
        <div className="animeInfo">
          {animeInfo && <AnimeInfo animeInfo={animeInfo} />}
        </div>
        <div className="anime-row">
          <h2 className="text-heading">Anime</h2>
          <div className="row">
            <AnimeList animelist={animeData} setAnimeInfo={setAnimeInfo} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
