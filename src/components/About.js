import React from "react";
import ProfileClass from "./ProfileClass";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  render() {
    // https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
    return (
      <div className="m-5">
        <p className="text-lg font-bold">About Us</p>
        <UserContext.Consumer>
          {({ user }) => {
            return (
              <p>
                Made with 💗 by {user.name} - {user.email}
              </p>
            );
          }}
        </UserContext.Consumer>
        <ProfileClass />
      </div>
    );
  }
}
export default About;
