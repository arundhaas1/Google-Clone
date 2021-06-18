import React from "react";
import { useDataLayerValue } from "../Datalayer";
import useGoogleSearch from "../useGoogleSearch";
import "./Searchpage.css";
import SearchIcon from "@material-ui/icons/Search";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Link } from "react-router-dom";
import Search from "./Search ";

function Searchpage() {
  const [{ term }, dispatch] = useDataLayerValue();
  const { data } = useGoogleSearch(term);

  console.log("data is", data);
  return (
    <div className="searchpage">
      <div className="searchpage__header">
        <div className="heads">
          <Link to="/">
            <img
              className="search__logo"
              alt=""
              src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
            />
          </Link>

          <div className="search__headerbody">
            <Search hide />
          </div>
        </div>
        <div className="ops">
          <div className="options">
            <div className="searchleft">
              <div className="option">
                <SearchIcon />
                <Link className="links" to="/all">
                  All
                </Link>
              </div>

              <div className="option">
                <DescriptionIcon />
                <Link className="links" to="/news">
                  News
                </Link>
              </div>

              <div className="option">
                <ImageIcon />
                <Link className="links" to="/images">
                  Images
                </Link>
              </div>

              <div className="option">
                <LocalOfferIcon />
                <Link className="links" to="/shopping">
                  Shopping
                </Link>
              </div>

              <div className="option">
                <RoomIcon />
                <Link className="links" to="/maps">
                  Maps
                </Link>
              </div>

              <div className="option">
                <MoreVertIcon />
                <Link className="links" to="/more">
                  More
                </Link>
              </div>
              <div className="searchright">
                <Link className="links" to="/settings">
                  <span className="option">Settings</span>
                </Link>
                <Link className="links" to="/tools">
                  <span className="option">Tools</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {term && (
        <div className="searchpage__results">
          <p>
            <div className="result__count">
              About {data?.searchInformation.formattedTotalResults} results (
              {data?.searchInformation.formattedSearchTime} seconds) for {term}
            </div>
          </p>
          {data?.items.map((item) => (
            <div className="result">
              <a className="tit" href={item.link}>
                  {item.pagemap?.cse_image?.length >0 && item.pagemap?.cse_image[0]?.src && (
                      <img className="result__image" src={item.pagemap?.cse_image?.length >0 && item.pagemap?.cse_image[0]?.src} alt="" />
                  )}
                  {item.displayLink}</a>
              <a className="result__title" href={item.link}>
                <h2>{item.title}</h2>
              </a>
              <p className="result__snippet">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Searchpage;
