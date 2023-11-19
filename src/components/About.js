import React from "react";
import { Link, Outlet } from "react-router-dom";
import ProfileClass from "./ProfileClass";
import Profile from "./Profile";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent - constructor");
  }
  componentDidMount() {
    console.log("Parent - componentDidMount");
  }

  render() {
    // https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
    console.log("Parent - render");
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

        <p className="italic mb-2">
          This is Namaste React live course Chapter 7 - Finding the path 😁
        </p>
        <Link className="underline hover:bg-blue-100" to="profile">
          Profile Page
        </Link>
        <Outlet />
        {/* <ProfileClass name="Anish ClassComponent" /> */}
        <Profile name="Anish" />
        <ProfileClass name="First Child" />
        {/* <ProfileClass name="Second Child" /> */}
      </div>
    );
  }
}
export default About;
