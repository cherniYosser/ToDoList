import React from "react";
import { useAuth } from "../context/Auth";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

function Header() {
    const { authTokens,setAuthTokens } = useAuth();

    function logOut() {
        setAuthTokens();
      }

  return (

    <div class="container mx-auto">
        <ul class="flex">
      <li class="mr-6">
        <a class="text-blue-500 hover:text-blue-800">To Do List</a>
      </li>
      <li class="mr-6">
        <Link class="text-blue-500 hover:text-blue-800" to="/">Home</Link>
      </li>
      <li class="mr-6">
        <Link class="text-blue-500 hover:text-blue-800" to="/admin">Tache</Link>
      </li>
      <li class="mr-6">
        {
            authTokens ? <a class="text-blue-500 hover:text-blue-800" onClick={logOut}>Deconnexion</a>
            : <Link class="text-blue-500 hover:text-blue-800" to="/login">Login</Link>
        }
        
      </li>
    </ul>
    </div>
   
    
   
  );
}

export default Header;