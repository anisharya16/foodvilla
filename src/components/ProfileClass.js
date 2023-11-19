import React from "react";

class ProfileClass extends React.Component {
  constructor() {
    super();
    this.state = {
      userInfo: [],
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/anisharya16");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }

  render() {
    return (
      <div className="border border-sky-500 bg-slate-100 my-2 p-2 rounded-lg">
        <div className="flex">
          <img
            src={this.state.userInfo.avatar_url}
            className="border border-cyan-300 rounded-lg"
          />
          <div className="mx-10">
            <p className="text-xl">{this.state.userInfo.name}</p>
            <p className="text-xl">{this.state.userInfo.location}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileClass;
