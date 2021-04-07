import React from "react";
import { useAuth } from "../context/Auth";
import { BrowserRouter as Router, Link } from "react-router-dom";

function Header() {
    const { authTokens,setAuthTokens } = useAuth();

    function logOut() {
        setAuthTokens();
      }

  return (

    <div class=" mx-auto">
        <ul class="flex bg-gray-300	px-4 pt-4 pb-4">
      <li class="mr-6">
        <a class="text-blue-500 hover:text-blue-800">To Do List</a>
      </li>
      <li class="mr-6">
        <Link class="text-blue-500 hover:text-blue-800" to="/">Accueil</Link>
      </li>
      <li class="mr-6">
        <Link class="text-blue-500 hover:text-blue-800" to="/tasks">Tâches</Link>
      </li>
      <li class="mr-6">
        {
            authTokens ? <a class="text-blue-500 hover:text-blue-800" onClick={logOut}>Déconnexion</a>
            : <Link class="text-blue-500 hover:text-blue-800" to="/login">Login</Link>
        }
        
      </li>
    </ul>
    </div>
   
    
   
  );
}

export default Header;