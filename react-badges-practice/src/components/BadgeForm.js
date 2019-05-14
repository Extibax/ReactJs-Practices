import React from "react";

class BadgeForm extends React.Component {

	state = {
		jobtitle: 'Designer'
	}

  handleChange = (e) => {
    this.setState({
			[e.target.name]: e.target.value,
		});
  };

  handleClick = e => {
    console.log("Button was clicked");
  };

  handleSubmit = e => {
    e.preventDefault();
		console.log("Form was submitted");
		console.log(this.state);
  };

  render() {
    return (
      <div>
        <h1>New Attendant</h1>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstname">First Name</label>
            <input
              onChange={this.handleChange}
              type="text"
              name="firstname"
							className="form-control"
							value={this.state.firstname}
            />
          </div>
					<div className="form-group">
            <label htmlFor="lastname">Last Name</label>
            <input
              onChange={this.handleChange}
              type="text"
              name="lastname"
							className="form-control"
							value={this.state.lastname}
            />
          </div>
					<div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              onChange={this.handleChange}
              type="email"
              name="email"
							className="form-control"
							value={this.state.email}
            />
          </div>
					<div className="form-group">
            <label htmlFor="email">Job Title</label>
            <input
              onChange={this.handleChange}
              type="text"
              name="jobtitle"
							className="form-control"
							value={this.state.jobtitle}
            />
          </div>
					<div className="form-group">
            <label htmlFor="twitter">Twitter</label>
            <input
              onChange={this.handleChange}
              type="text"
              name="twitter"
							className="form-control"
							value={this.state.twitter}
            />
          </div>

          <button onClick={this.handleClick} className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    );
  }
}

export default BadgeForm;
