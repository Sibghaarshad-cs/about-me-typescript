import { useState } from "react";

import SearchBar from "../components/SearchBar";
import RepositoryList from "../components/RepositoryList";
import ProfileCard from "../components/ProfileCard";

import useGitHubUser from "../hooks/useGitHubUser";


function Home() {


const [username,setUsername] = useState("");



const {
 user,
 repos,
 loading,
 error,
 handleSearch

} = useGitHubUser();



return (

<div>


<SearchBar

username={username}

setUsername={setUsername}

searchUser={()=>handleSearch(username)}

/>



{
loading &&

<p className="text-center mt-5">
Loading...
</p>

}



{
error &&

<p className="text-center text-red-500">
{error}
</p>

}



{
user &&

<ProfileCard user={user}/>

}



{
repos.length > 0 &&

<RepositoryList repos={repos}/>

}



</div>

);

}


export default Home;