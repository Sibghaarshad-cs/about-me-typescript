function SearchBar({ username, setUsername, searchUser }) {
  return (
    <div className="flex justify-center mt-10">

      <div className="flex gap-3 w-full max-w-xl">

        <input
          type="text"
          placeholder="Search GitHub username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="
            flex-1
            px-4
            py-3
            rounded-lg
            border
            border-gray-300
            shadow-sm
            focus:outline-none
            focus:ring-2
            focus:ring-blue-500
          "
        />

        <button
          onClick={searchUser}
          className="
            bg-blue-600
            text-white
            px-6
            py-3
            rounded-lg
            font-semibold
            hover:bg-blue-700
            transition
            duration-300
          "
        >
          Search
        </button>

      </div>

    </div>
  );
}

export default SearchBar;