import React from "react";

import "./styles/BadgeNew.css";

import Navbar from "../components/Navbar";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";

import headerLogo from "../img/badge-header.svg";

class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img src={headerLogo} alt="Logo" className="img-fluid" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstname="Juan"
                lastname="Bedoya"
                jobtitle="Full Stack Developer"
                twitter="extibax"
              />

              <div className="col">
                <BadgeForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
