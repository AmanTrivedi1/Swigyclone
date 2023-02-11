export function filterData(searchText, restaurant) {
  const filterdData = restaurant.filter((restaurant) =>
    restaurant.data.name.toLowerCase()?.includes(searchText.toLowerCase())
  );
  return filterdData;
}
