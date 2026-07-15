import { useState } from "react";

function useGitHubUser() {

  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");


  async function handleSearch(username) {

    if (!username.trim()) {
      setError("Please enter a username.");
      return;
    }


    setLoading(true);
    setError("");
    setUser(null);
    setRepos([]);


    try {

      // Fetch user
      const userResponse = await fetch(
        `https://api.github.com/users/${username}`
      );


      // Check if user exists
      if (userResponse.status === 404) {
        throw new Error("GitHub user not found.");
      }


      if (!userResponse.ok) {
        throw new Error("Something went wrong. Try again.");
      }


      const userData = await userResponse.json();

      setUser(userData);



      // Fetch repositories
      const repoResponse = await fetch(
        `https://api.github.com/users/${username}/repos`
      );


      if (!repoResponse.ok) {
        throw new Error("Repositories could not be loaded.");
      }


      const repoData = await repoResponse.json();

      setRepos(repoData);



    } catch (error) {

      setUser(null);
      setRepos([]);
      setError(error.message);

    } finally {

      setLoading(false);

    }

  }


  return {
    user,
    repos,
    loading,
    error,
    handleSearch,
  };

}

export default useGitHubUser;