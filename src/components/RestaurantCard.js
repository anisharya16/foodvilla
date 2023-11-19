import { IMG_CDN_URL } from "../constants";

const RestaurantCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  areaName,
  avgRatingString,
}) => {
  return (
    <div className="w-60 h-full p-2 hover:bg-red-400 shadow-xl rounded-md sm:bg-purple-500 md:bg-red-500 lg:bg-blue-300">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt="food_image" />
      <p className="font-bold text-gray-700 text-xl underline my-2">{name}</p>
      <p>{cuisines.join(", ")}</p>
      <p>Location: {areaName}</p>
      <p>Avg. Rating: {avgRatingString}⭐</p>
    </div>
  );
};

export default RestaurantCard;
