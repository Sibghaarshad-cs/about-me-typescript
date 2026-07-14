function RepositoryList({ repos }) {
  return (
    <div>
      <h2>Repositories</h2>

      {repos.map((repo) => (
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
      ))}
    </div>
  );
}

export default RepositoryList;