import { useContext } from "react";
import { FavouriteContext } from "../Context/FavouriteContext";


function Favorites() {

  const { favorites } = useContext(FavouriteContext);


  return (

    <div className="max-w-4xl mx-auto mt-10">


      <h1
        className="
          text-3xl
          font-bold
          text-center
          mb-8
        "
      >
         Favorite Repositories
      </h1>



      {
        favorites.length === 0 ? (

          <div
            className="
              bg-white
              shadow-lg
              rounded-xl
              p-8
              text-center
            "
          >

            <p className="text-gray-600 text-lg">
              No favorites yet.
            </p>


            <p className="text-gray-500 mt-2">
              Go to Home page and add repositories to favorites.
            </p>


          </div>


        ) : (


          <div className="grid gap-5">


            {
              favorites.map((repo)=>(


                <div

                  key={repo.id}

                  className="
                    bg-white
                    shadow-lg
                    rounded-xl
                    p-6
                    hover:shadow-2xl
                    transition
                  "

                >


                  <h3
                    className="
                      text-xl
                      font-bold
                    "
                  >
                    {repo.name}
                  </h3>



                  <p
                    className="
                      text-gray-600
                      mt-2
                    "
                  >
                    {repo.description || "No description available."}
                  </p>



                  <p className="mt-3">

                    ⭐ Stars: {repo.stargazers_count}

                    <span className="mx-2">
                      |
                    </span>

                    🍴 Forks: {repo.forks_count}

                  </p>



                  <a

                    href={repo.html_url}

                    target="_blank"

                    rel="noreferrer"

                    className="
                      inline-block
                      mt-4
                      bg-gray-900
                      text-white
                      px-5
                      py-2
                      rounded-lg
                      hover:bg-gray-700
                      transition
                    "

                  >

                    View Repository

                  </a>


                </div>


              ))

            }


          </div>


        )

      }


    </div>

  );

}


export default Favorites;