import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Menubar from "./Menubar";
import MenuItems from "./MenuItems";
import "./Headerdown.css";

function Headerdown() {
  return (
    <div className="headerdown">
      <Link to="/menuitems">
        <MenuItems />
      </Link>
      <div className="headerdown__info">
        <span> Today's Deal </span>
        <span> Isha's Amazon.com </span>
        <span> Customer Service </span>
        <select name="history">
          <option> Browsering History </option>
        </select>
        <span> Gift Cards </span>
        <span> Registry </span>
        <span> Sell </span>
        <span> Buy Again </span>
      </div>
      <div className="headerdown__covid">
        <span>Amazon Response to covid-19</span>
      </div>
    </div>
  );
}

export default Headerdown;
