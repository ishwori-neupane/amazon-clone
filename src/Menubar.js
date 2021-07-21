import React, { useState, Profiler } from "react";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SendIcon from "@material-ui/icons/Send";
import ExploreIcon from "@material-ui/icons/Explore";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import Avatar from "@material-ui/core/Avatar";
import "./Header.css";
import { FormHelperText, Button, TextareaAutosize } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { Input } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import TurnedInIcon from "@material-ui/icons/TurnedIn";
import SettingsIcon from "@material-ui/icons/Settings";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import "./MenuItems.css";

function getModalStyle() {
  const top = 50;
  const left = 50;
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}
const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 350,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid lightgrey",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Header() {
  const classes = useStyles();
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const openPopUp = (event) => {
    setOpen(true);
  };

  return (
    <div>
      <Router>
        <div className="menuItems">
          <div className="menuitem__info">
            <Button type="submit" onClick={openPopUp}>
              <LocationOnIcon className="headerdown__menu" />

              <h6 className="headerdown__text">
                Deliver to
                <br /> Nepal
              </h6>
            </Button>
            <Modal open={open} onClose={() => setOpen(false)}>
              <div style={modalStyle} className={classes.paper}>
                <div className="model__icon">
                  <div className="profile__icon">
                    <Button path="/Profile">
                      <h5>Choose Your Location</h5>
                    </Button>
                    <hr />
                  </div>
                  <div className="save__icon">
                    <h6>
                      Delivery options and delivery speeds may vary for
                      different
                      <br /> locations
                    </h6>
                    <br />
                    <br />
                    <Link>Manage Your Address Book</Link>
                    <br />
                    <center>or enter a US zip code</center>
                    <br />
                    <div className="menuItems__submit">
                      <input type="text" className="menuItems__input" />
                      <Button>
                        <h5>Apply</h5>
                      </Button>
                    </div>
                    <br />
                    <div className="break">
                      <hr />
                      <h3>or</h3>
                      <hr />
                    </div>
                  </div>
                  <div className="Setting__icon">
                    <select name="Country">
                      <option>nepal</option>
                      <option>nepal</option>
                      <option>nepal</option>
                      <option>nepal</option>
                    </select>
                  </div>
                  <hr />
                </div>
                <hr />
                <Button>
                  <h5 className="menuItems__done" path="/Done">
                    Done
                  </h5>
                </Button>
              </div>
            </Modal>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default Header;
