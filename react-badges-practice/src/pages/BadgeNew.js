import React from "react";

import "./styles/BadgeNew.css";

import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";

import headerLogo from "../img/badge-header.svg";

class BadgeNew extends React.Component {
  state = {
    form: {
      firstname: '',
      lastname: '',
      email: '',
      jobtitle: '',
      twitter: '',
    }
  };

  handleChange = e => {
    /* const nextForm = this.state.form;
    nextForm[e.target.name] = e.target.value; */

    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img src={headerLogo} alt="Logo" className="img-fluid" />
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-5">
              <Badge
                firstname={this.state.form.firstname}
                lastname={this.state.form.lastname}
                jobtitle={this.state.form.jobtitle}
                twitter={this.state.form.twitter}
                email={this.state.form.email}
              />

              <div className="col-5">
                <BadgeForm onChange={this.handleChange} formValues={this.state.form} />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default BadgeNew;
