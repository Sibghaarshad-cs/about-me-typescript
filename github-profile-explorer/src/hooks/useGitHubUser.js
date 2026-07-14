import { useState } from "react";

function useGitHubUser() {
  const [user, setUser] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSearch(username) {
    if (!username) return;

    setLoading(true);
    setError("");
    setUser(null);
    setRepos([]);

    try {
      const response = await fetch(
        `https://api.github.com/users/${username}`
      );

      if (!response.ok) {
        throw new Error("User not found.");
      }

      const data = await response.json();
      setUser(data);

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

  return {
    user,
    repos,
    loading,
    error,
    handleSearch,
  };
}

export default useGitHubUser;