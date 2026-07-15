import { useContext } from "react";
import { FavouriteContext } from "../Context/FavouriteContext";

function Favorites() {
  const { favorites } = useContext(FavouriteContext);

  return (
    <div>
      <h1>Favorite Repositories</h1>

      {favorites.length === 0 ? (
        <p>No favorites yet.</p>
      ) : (
        favorites.map((repo) => (
          <div key={repo.id}>
            <h3>{repo.name}</h3>

            <p>{repo.description || "No description available."}</p>

            <p>
              ⭐ Stars: {repo.stargazers_count} | 🍴 Forks: {repo.forks_count}
            </p>

            <a
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
            >
              View Repository
            </a>

            <hr />
          </div>
        ))
      )}
    </div>
  );
}

export default Favorites;