function SearchBar({ search, setSearch }) {
  return (
    <div>
    <input
  className="search-input"
  type="text"
  placeholder="🔍 Search for a city..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
/>
    </div>
  );
}

export default SearchBar;