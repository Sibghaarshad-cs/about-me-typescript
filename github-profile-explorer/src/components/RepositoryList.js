import { useContext } from "react";

import { FavouriteContext } from "../Context/FavouriteContext";


function RepositoryList({ repos }) {


const {
addToFavorites

} = useContext(FavouriteContext);



return (

<div className="max-w-4xl mx-auto mt-10">


<h2 className="text-3xl font-bold mb-6 text-center">

Repositories

</h2>



{
repos.map((repo)=>(


<div

key={repo.id}

className="
bg-white
shadow-lg
rounded-xl
p-6
mb-5
"


>


<h3 className="text-xl font-bold">

{repo.name}

</h3>



<p className="text-gray-600 mt-2">

{repo.description || "No description available"}

</p>



<p className="mt-3">

⭐ Stars: {repo.stargazers_count}

&nbsp;&nbsp;
 Forks: {repo.forks_count}

</p>



<button

onClick={()=>addToFavorites(repo)}

className="
mt-4
bg-yellow-500
text-white
px-5
py-2
rounded-lg
hover:bg-yellow-600
"

>

⭐ Add to Favorites

</button>



<a

href={repo.html_url}

target="_blank"

rel="noreferrer"

className="
ml-4
text-blue-600
"

>

View Repo

</a>



</div>


))

}


</div>

);

}


export default RepositoryList;