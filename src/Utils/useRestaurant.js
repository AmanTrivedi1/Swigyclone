import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../Componants/Constants";
const useReastaurant = (resId) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    getRestraurntInfo();
  }, []);

  async function getRestraurntInfo() {
    const data = await fetch(FETCH_MENU_URL + resId);

    const json = await data.json();
    console.log(json.data);
    setRestaurant(json.data);
  }
  return [restaurant];
};

export default useReastaurant;
