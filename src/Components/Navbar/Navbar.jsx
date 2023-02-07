import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Badge from "@mui/material/Badge";
import Saved from "../Saved/Saved";
import { useSelector } from "react-redux";

const Navbar = ({ saved, setsaved }) => {
  const [openSaved, setopenSaved] = useState(false);
  const [openMenu, setopenMenu] = useState(false);
  const savedCourses = useSelector((state) => state.saved);
  const toggleSaved = () => {
    setopenSaved(!openSaved);
  };
  return (
    <>
      <div className="container-nav">
        <nav className="navbar">
          <div className="left">
            <Link to="/">
              <h4 className="brand">Codeango</h4>
            </Link>
          </div>
          {
            <div className={openMenu ? "close" : " saved-responsive"} onClick={toggleSaved}>
              <Badge id="saved" badgeContent={savedCourses.length} color="primary">
                <BookmarkIcon />
              </Badge>
            </div>
          }
          <div className={`${openMenu ? " active right" : "right close"} `}>
            <ul className="navbar-ul">
              <li onClick={() => setopenMenu(false)}>
                <Link to="/">Home</Link>
              </li>
              <li onClick={() => setopenMenu(false)}>
                <Link to="/about">About</Link>
              </li>
              <li onClick={() => setopenMenu(false)}>
                <Link to="/courses">Courses</Link>
              </li>
              {
                <div className={openMenu ? "close" : " saved"} onClick={toggleSaved}>
                  <Badge id="saved" badgeContent={savedCourses.length} color="primary">
                    <BookmarkIcon />
                  </Badge>
                </div>
              }

              <div className="login" onClick={() => setopenMenu(false)}>
                <Link to="/login"> Login </Link>
              </div>
            </ul>
          </div>
        </nav>
        <div className="menu">
          {openMenu ? (
            <span className="close-menu" onClick={() => setopenMenu(!openMenu)}>
              <CloseIcon />
            </span>
          ) : (
            <span className="open-menu" onClick={() => setopenMenu(!openMenu)}>
              <MenuIcon />
            </span>
          )}
        </div>
      </div>
      {openSaved && <Saved toggleSaved={toggleSaved} saved={saved} setsaved={setsaved} />}
    </>
  );
};

export default Navbar;
