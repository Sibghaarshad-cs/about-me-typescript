import { useState } from "react";
import SearchBar from "./components/SearchBar";
import RepositoryList from "./components/RepositoryList";

function App() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSearch() {
    setLoading(true);
    setError("");
    setUser(null);
    setRepos([]);

    try {
      // Fetch user profile
      const response = await fetch(
        `https://api.github.com/users/${username}`
      );

      if (!response.ok) {
        throw new Error("User not found.");
      }

      const data = await response.json();
      setUser(data);

      // Fetch repositories
      const repoResponse = await fetch(
        `https://api.github.com/users/${username}/repos`
      );

      const repoData = await repoResponse.json();
      setRepos(repoData);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h1>GitHub Profile Explorer</h1>

      <SearchBar
        username={username}
        setUsername={setUsername}
        handleSearch={handleSearch}
      />

      {loading && <p>Loading...</p>}

      {error && <p>{error}</p>}

      {user && (
        <div>
          <img
            src={user.avatar_url}
            alt={user.name}
            width="150"
          />

          <h2>{user.name}</h2>

          <p>{user.bio}</p>

          <p>Followers: {user.followers}</p>

          <p>Following: {user.following}</p>

          <p>Public Repositories: {user.public_repos}</p>
        </div>
      )}

      {repos.length > 0 && <RepositoryList repos={repos} />}
    </div>
  );
}

export default App;