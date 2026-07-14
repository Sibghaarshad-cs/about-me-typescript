import { useState } from "react";

function SearchBar() {
  const [username, setUsername] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log(username);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />

      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;