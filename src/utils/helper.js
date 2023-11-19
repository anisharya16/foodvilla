export function filterData(searchText, restaurants) {
  const searchedRestaurant = restaurants.filter((restaurant) =>
    restaurant?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
  );
  return searchedRestaurant;
}
