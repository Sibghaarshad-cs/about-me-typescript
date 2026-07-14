import { useState } from "react";
import SearchBar from "./components/SearchBar";

function App() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSearch() {

    // start loading
    setLoading(true);

    // remove previous error
    setError("");

    try {
      const response = await fetch(
        `https://api.github.com/users/${username}`
      );


      if (!response.ok) {
        throw new Error("User not found.");
      }


      const data = await response.json();

      setUser(data);

    } catch (error) {

      setUser(null);
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

          <p>
            Followers: {user.followers}
          </p>


          <p>
            Following: {user.following}
          </p>


          <p>
            Public Repositories: {user.public_repos}
          </p>


        </div>

      )}


    </div>
  );
}

export default App;