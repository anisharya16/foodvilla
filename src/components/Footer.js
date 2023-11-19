import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="flex justify-between bg-blue-300 rounded-t-2xl mt-5">
      <p className="p-8" id="title3" key="p">
        Crafted with 💗 by {user.name}
      </p>
      <ul className="flex p-8">
        <li className="px-2">Facebook</li>
        <li className="px-2">Instagram</li>
        <li className="px-2">Twitter</li>
        <li className="px-2">Chat With Us</li>
      </ul>
    </div>
  );
};

export default Footer;
