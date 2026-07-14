function SearchBar({ username, setUsername, handleSearch }) {
  function handleSubmit(event) {
    event.preventDefault();
    handleSearch();
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