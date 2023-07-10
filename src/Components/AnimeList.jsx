import React from "react";

const AnimeList = ({ animelist, setAnimeInfo }) => {
  return (
    <>
      {animelist
        ? animelist.map((anime, index) => {
            return (
              <div
                className="card"
                key={index}
                onClick={() => setAnimeInfo(anime)}
              >
                <img src={anime.images.jpg.large_image_url} alt="anime art" />
                <div className="anime-info">
                  <h4>{anime.title}</h4>
                </div>
              </div>
            );
          })
        : "Not Found"}
    </>
  );
};

export default AnimeList;
