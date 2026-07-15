function ProfileCard({ user }) {
  return (
    <div className="flex justify-center mt-10">

      <div
        className="
          bg-white
          rounded-2xl
          shadow-xl
          p-8
          w-full
          max-w-md
          text-center
          hover:shadow-2xl
          transition
          duration-300
        "
      >

        <img
          src={user.avatar_url}
          alt={user.login}
          className="
            w-32
            h-32
            rounded-full
            mx-auto
            border-4
            border-blue-500
          "
        />


        <h2
          className="
            text-2xl
            font-bold
            mt-5
          "
        >
          {user.name || user.login}
        </h2>


        <p
          className="
            text-gray-600
            mt-2
          "
        >
          {user.bio || "No bio available"}
        </p>


        <div
          className="
            flex
            justify-around
            mt-6
            text-sm
            font-semibold
          "
        >

          <div>
            <p className="text-blue-600 text-xl">
              {user.followers}
            </p>

            <p>
              Followers
            </p>
          </div>


          <div>
            <p className="text-blue-600 text-xl">
              {user.public_repos}
            </p>

            <p>
              Repositories
            </p>
          </div>


        </div>


        <div className="flex justify-center mt-6">

          <a
            href={user.html_url}
            target="_blank"
            rel="noreferrer"
            className="
              bg-gray-900
              text-white
              px-5
              py-2
              rounded-lg
              hover:bg-gray-700
              transition
            "
          >
            View GitHub Profile
          </a>

        </div>


      </div>

    </div>
  );
}

export default ProfileCard;