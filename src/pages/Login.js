import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
// import logoImg from "../img/logo.jpg";
import { Card, Logo, Form, Input, Button, Error } from "../components/AuthForm";
import { useAuth } from "../context/Auth";

function Login() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthTokens } = useAuth();

  function postLogin(e) {
    e.preventDefault();
    
    if (userName === "test@test.com" && password === "test") {
      setAuthTokens(
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
      );
      setLoggedIn(true);
    } else {
      setIsError(true);
    }
  }

  if (isLoggedIn) {
    return <Redirect to="/" />;
  }

  return (


    <div class="flex items-center justify-center h-screen">
  <form class="bg-white shadow-md rounded px-10 pt-6 pb-8 mb-4">
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Adresse e-mail
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
       id="username" type="text"  value={userName} onChange={(e) => { setUserName(e.target.value);}}/>
    </div>
    <div class="mb-6">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" value={password}
           onChange={(e) => {setPassword(e.target.value);}}/>
    </div>
    <div class="flex items-center justify-between">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={postLogin}>
        Soumettre
      </button>

       {isError && (
         <Error>The username or password provided were incorrect!</Error>
       )}
      
    </div>
  </form>
 
</div>

  
  );
}

export default Login;
