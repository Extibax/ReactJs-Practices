import React from "react";

import "./styles/Badge.css";

import confLogo from "../img/platziconf-logo.svg";
import avatarImg from "../img/JuanBedoya.jpg";

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Conference Logo" />
        </div>
        <div className="Badge__section-name">
          <img src={avatarImg} alt="Avatar" className="Badge__avatar" />
          <h1>
            {this.props.firstname} <br /> {this.props.lastname}
          </h1>
        </div>
        <div className="Badge__section-info">
          <h3>{this.props.jobtitle}</h3>
          <p>@{this.props.twitter}</p>
        </div>
        <div className="Badge__footer">#bethebest</div>
      </div>
    );
  }
}

export default Badge;
