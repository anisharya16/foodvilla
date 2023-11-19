import React from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../constants";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  //   const myParam = useParams();
  const { resID } = useParams();
  const { restaurant, menuList } = useRestaurant(resID);
  const dispatch = useDispatch();

  const addFoodItem = (dishName) => {
    dispatch(addItem(dishName.card.info));
  };

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="flex m-5">
      {/* <p>Restaurant Id: {myParam.resID}</p> */}
      <div>
        <p className="italic mb-2">Restaurant Id: {resID}</p>
        <p className="font-bold text-gray-500 text-xl my-6">
          {restaurant.name}
        </p>
        <img
          src={IMG_CDN_URL + restaurant.cloudinaryImageId}
          className="rounded-lg border border-cyan-500"
        />
        <p className="my-2 text-lg">
          Average Rating: {restaurant.avgRatingString} ⭐
        </p>
        <p className="my-2 text-lg">Cost: {restaurant.costForTwoMessage}</p>
      </div>
      <div className="ml-20">
        <h1 className="text-3xl text-red-500 underline mb-4 p-2 m-2">
          Menu List
        </h1>
        {menuList.map((dishName) => {
          return (
            <div className="flex justify-between" key={dishName.card.info.id}>
              <span className="p-2 m-2">{dishName.card.info.name}</span>
              <button
                className="bg-blue-200 rounded-md m-2 p-2"
                onClick={() => addFoodItem(dishName)}
              >
                Add
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
