import React from "react";
import "./profile.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMobile,
  faPerson,
  faLocationDot,
  faCalendarDays,
} from "@fortawesome/free-solid-svg-icons";

const Profile = () => {
  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <div className="card-profile-stats d-flex justify-content-center">
            <img src="/man.png" alt="" />
          </div>
          <div className="text-center">
            <h3> Rashidul Islam</h3>
            <h4>
              <FontAwesomeIcon className="email mt-1" icon={faEnvelope} />
              &nbsp;:-
              <span>AboutRashidul@gmail.com</span>
            </h4>
            <h5>
              <FontAwesomeIcon className="email mt-1" icon={faMobile} />{" "}
              &nbsp;:- <span>01723854890</span>{" "}
            </h5>
            <h4>
              <FontAwesomeIcon className="email mt-1" icon={faPerson} />
              &nbsp;:- <span>Male</span>{" "}
            </h4>
            <h4>
              <FontAwesomeIcon icon={faLocationDot} />
              <i className="fa-solid fa-location-pin location"></i>&nbsp;:-{" "}
              <span>Pabna 6620</span>
            </h4>
            <h4>
              Status&nbsp;:- <span>Active</span>
            </h4>
            <h5>
              <FontAwesomeIcon
                className="calendar mt-1"
                icon={faCalendarDays}
              />
              &nbsp;Date Created&nbsp;:- <span></span>
            </h5>
            <h5>
              <FontAwesomeIcon className="calendar" icon={faCalendarDays} />
              &nbsp;Date Updated&nbsp;:- <span></span>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
