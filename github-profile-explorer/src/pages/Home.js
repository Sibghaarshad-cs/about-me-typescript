import { useState } from "react";
import SearchBar from "../components/SearchBar";
import RepositoryList from "../components/RepositoryList";
import useGitHubUser from "../hooks/useGitHubUser";

function App() {
  const [username, setUsername] = useState("");

  const {
    user,
    repos,
    loading,
    error,
    handleSearch,
  } = useGitHubUser();

  return (
    <div>
      <h1>GitHub Profile Explorer</h1>

      <SearchBar
        username={username}
        setUsername={setUsername}
        handleSearch={() => handleSearch(username)}
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