import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Search from './Search '
import AppsIcon from "@material-ui/icons/Apps";
import { Avatar } from "@material-ui/core";

function Home() {
  return (
    <div className="home">
      <div className="home__header">
        <div className="home__headerleft">
          <Link to="/about">About</Link>

          <Link to="/store">Store</Link>
        </div>

        <div className="home__headerright">
          <Link to="/gmail">Gmail</Link>

          <Link to="/images">Images</Link>
          <AppsIcon />
          <Avatar />
        </div>
      </div>

      <div className="home__body">
        <img
          alt=""
          src="http://pngimg.com/uploads/google/google_PNG102344.png"
        />

        <div className="home__input">
            <Search />
        </div>
      </div>
    </div>
  );
}

export default Home;
