import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/authContext";

const Header = () => {
  const context = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <header style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>
      <h1>My App</h1>
      {context.isAuthenticated ? (
        <p>
          Welcome {context.userName}! 
          <button onClick={() => context.signout()}>Sign out</button>
        </p>
      ) : (
        <p>
          <button onClick={() => navigate('/login')}>Login</button>
          {" "}
          <button onClick={() => navigate('/signup')}>Sign up</button>
        </p>
      )}
    </header>
  );
};

export default Header;