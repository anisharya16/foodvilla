import { useEffect, useState } from "react";
import { FETCH_MENU_URL } from "../constants";

const useRestaurant = (resID) => {
  const [restaurant, setRestaurant] = useState(null);
  const [menuList, setMenuList] = useState([]);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(FETCH_MENU_URL + resID);
    const json = await data.json();
    setRestaurant(json.data?.cards[0]?.card?.card?.info);
    setMenuList(
      json.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
        ?.card?.itemCards
    );
  }

  return { restaurant, menuList };
};

export default useRestaurant;
