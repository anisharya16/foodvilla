import { useContext } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

const Title = () => (
  <a href="/">
    <img
      src="https://dz8fbjd9gwp2s.cloudfront.net/logos/6389e494e4b0a2e361db7362.png?v=6"
      className="h-25 p-2"
      alt="logo"
      width="100px"
    />
  </a>
);

const Header = () => {
  const isOnline = useOnline();

  const { user } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-blue-300 border rounded-b-2xl shadow-2xl mb-5">
      <Title />
      <p className="py-10">
        {isOnline ? <span>✅ Hello {user.name}</span> : <span>🔴 Offline</span>}
      </p>
      <ul className="flex py-10 mr-5">
        <li className="px-2 hover:bg-blue-400 rounded-2xl text-slate-600">
          <Link to="/">Home</Link>
        </li>
        <li className="px-2 hover:bg-blue-400 rounded-2xl text-slate-600">
          <Link to="/contact">Contact Us</Link>
        </li>
        <li className="px-2 hover:bg-blue-400 rounded-2xl text-slate-600">
          <Link to="/about">About</Link>
        </li>
        <li className="px-2 hover:bg-blue-400 rounded-2xl text-slate-600">
          <Link to="/instamart">Instamart</Link>
        </li>
        <li className="px-2 hover:bg-blue-400 rounded-2xl text-slate-600">
          <Link to="/cart">Cart({cartItems.length})</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
