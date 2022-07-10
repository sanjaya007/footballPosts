import React, { useState, useEffect } from "react";
import "../../css/header.css";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import img from "../../images/football.png";

function Header() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  const logOut = () => {
    dispatch({ type: "LOGOUT", payload: null });
    navigate("/auth");
  };

  return (
    <>
      <div className="head-container">
        <div className="head-box flex-css-row-sb">
          <div className="logo-box flex-css-row-start">
            <img src={img} alt="football" />
            <h1>Football</h1>
          </div>
          {user ? (
            <div className="profile-data flex-css-row">
              <div className="img-container">
                <img
                  src={
                    user?.accountType === "google"
                      ? user?.result?.imageUrl
                      : user?.result?.file
                  }
                  alt="image"
                />
              </div>
              <h5>{user?.result?.name}</h5>
              <Button
                className="header-btn logout-btn"
                onClick={() => logOut()}
                variant="contained"
                size="large"
              >
                Log Out
              </Button>
            </div>
          ) : (
            <div className="signin-btn flex-css">
              <Button
                className="header-btn signin-btn"
                variant="contained"
                size="large"
                onClick={() => navigate("/auth")}
              >
                Sign In
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Header;
