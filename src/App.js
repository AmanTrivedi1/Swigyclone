import styles from "./index.css";
import logo from "../src/company-logo.478e4b19a79eb5f3671f.png";
function App() {
  return (
    <>
    <Header/>
      {resraurantList.map((restaurant) => {
        return (
          <RestrautCard
            restaurant
            {...restaurant.data}
            key={restaurant.data.id}
          />
        );
      })}
    </>
  );
}

export default App;

const Header = () => {
  return <>
  <div className="flex font-poppins  pl-10 pr-10 justify-between items-center">
    <div>
    <img src={logo} className="w-[54px]" alt="Company Logo"/>
    </div>
    <div className="text-gray-900 cursor-pointer">
      <ul className="flex items-center  gap-x-12">
        <li>Home</li>
        <li>Food</li>
        <li>Location</li>
      </ul>
    </div>
    <div className="cursor-pointer" >
      <ul className=" flex gap-12 ">
        <li className="bg-teal-800 hover:shadow-md text-[#fff] pr-[10px] pt-[4px] pb-[5px] pl-[10px]">Login</li>
        <li className="bg-teal-800 hover:shadow-md text-[#fff] pr-[10px] pt-[4px] pb-[5px] pl-[10px]">SignUp</li>
      </ul>
    </div>
  </div>
  </>;
};

const RestrautCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  totalRatingsString,
  deliveryTime,
  costForTwoString,
}) => {
  return (
    <>
      <div className="flex justify-center ">
        <div className=" hover:border hover:shadow-md cursor-pointer bg-white p-5  max-w-xs">
          <img
            className=""
            src={
              "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
              cloudinaryImageId
            }
            alt="Just a food image"
          />

          <div className="mb-4 mt-4">
            <p className="  text-black font-poppins ">{name}</p>
            <p className="text-gray-600  ">{cuisines.join(",")}</p>
            <div className="flex text-xs mb-2 border-b  mt-4 font-poppins text-gray-600 justify-between items-center">
              <p className="bg-green-400 p-1">{totalRatingsString}</p>
              <p className="">{deliveryTime} Mins</p>
              <p className="">{costForTwoString}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const resraurantList = [
  {
    type: "restaurant",
    data: {
      type: "F",
      id: "645694",
      name: "The Old Delhi",
      uuid: "403505a7-0475-46eb-abeb-d7c97167c381",
      city: "39",
      area: "Swaroop Nagar",
      totalRatingsString: "20+ ratings",
      cloudinaryImageId: "17c032af694049f36c06983db4a0bcc3",
      cuisines: ["Snacks", "Biryani", "Kebabs"],
      tags: [],
      costForTwo: 30000,
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 40,
      minDeliveryTime: 40,
      maxDeliveryTime: 40,
      slaString: "40 MINS",
      lastMileTravel: 5.599999904632568,
      slugs: {
        restaurant: "the-old-delhi-swaroop-nagar-swaroop-nagar",
        city: "kanpur",
      },
      cityState: "39",
      address:
        "Ground Floor Part 7/135 Swaroop Nagar, Nagar Nigam Food Safety Zone Z-16, Kanpur Nagar, Uttar Pradesh 208002",
      locality: "Nagar Nigam Food Safety Zone Z-16",
      parentId: 260417,
      unserviceable: false,
      veg: false,
      select: false,
      favorite: false,
      tradeCampaignHeaders: [],
      aggregatedDiscountInfo: {
        header: "50% off",
        shortDescriptionList: [
          {
            meta: "50% off | Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      aggregatedDiscountInfoV2: {
        header: "50% OFF",
        shortDescriptionList: [
          {
            meta: "Use WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        descriptionList: [
          {
            meta: "50% off up to ₹100 | Use code WELCOME50",
            discountType: "Percentage",
            operationType: "RESTAURANT",
          },
        ],
        subHeader: "",
        headerType: 0,
        superFreedel: "",
      },
      ribbon: [
        {
          type: "PROMOTED",
        },
      ],
      chain: [],
      feeDetails: {
        fees: [],
        totalFees: 0,
        message: "",
        title: "",
        amount: "",
        icon: "",
      },
      availability: {
        opened: true,
        nextOpenMessage: "",
        nextCloseMessage: "",
      },
      longDistanceEnabled: 0,
      rainMode: "NONE",
      thirdPartyAddress: false,
      thirdPartyVendor: "",
      adTrackingID: "cid=5784906~p=1~eid=00000186-27be-cf6b-167a-da5700e30148",
      badges: {
        imageBased: [],
        textBased: [],
        textExtendedBadges: [],
      },
      lastMileTravelString: "5.5 kms",
      hasSurge: false,
      sla: {
        restaurantId: "645694",
        deliveryTime: 40,
        minDeliveryTime: 40,
        maxDeliveryTime: 40,
        lastMileTravel: 5.599999904632568,
        lastMileDistance: 0,
        serviceability: "SERVICEABLE",
        rainMode: "NONE",
        longDistance: "NOT_LONG_DISTANCE",
        preferentialService: false,
        iconType: "EMPTY",
      },
      promoted: true,
      avgRating: "3.7",
      totalRatings: 20,
      new: false,
    },
    subtype: "basic",
  },
];
