import React from "react";
import FoodCard from "../components/FoodCard";

const foods = [
  { name: "Pizza", description: "Cheesy pizza", price: 250, image: "https://www.bing.com/th/id/OIP.z_ilCv9sIs4AnOpF_9GB5AHaEo?w=245&h=211&c=8&rs=1&qlt=90&o=6&cb=iavawebpc1&dpr=1.8&pid=3.1&rm=2" },
  { name: "Burger", description: "Veg loaded burger", price: 120, image: "https://www.bing.com/th/id/OIP.QMfTfmOQurM_v-QNX6o1KAHaE8?w=244&h=211&c=8&rs=1&qlt=90&o=6&cb=iavawebpc1&dpr=1.8&pid=3.1&rm=2" },
  { name: "Pasta", description: "Creamy pasta", price: 180, image: "https://www.bing.com/th/id/OIP.wjmwzDQ87Zl1Lt1mLswrFgHaE7?w=146&h=120&c=8&rs=1&qlt=90&o=6&cb=iavawebpc1&dpr=1.8&pid=3.1&rm=2" },
    { name: "Rolls", description: "Kathi rolls", price: 180, image: "https://th.bing.com/th/id/OIP.jB5OHm8-AY9HXzUsK_sWVgHaEK?w=284&h=180&c=7&r=0&o=7&dpr=1.8&pid=1.7&rm=3" },
    { name: "Sushi", description: "Fresh sushi rolls", price: 300, image: "https://i0.wp.com/www.speisekarte.de/blog/wp-content/uploads/2011/02/Assortment_of_sushi_May_2010_Steve-Snodgrass.jpg?ssl=1" },
    { name: "Sandwich", description: "Veg loaded sandwich", price: 150, image: "https://www.bing.com/th/id/OIP.sfcvRSHS7Y85OwKQWGAKeQHaF6?w=224&h=211&c=8&rs=1&qlt=90&o=6&cb=iavawebpc1&dpr=1.8&pid=3.1&rm=2" },
    { name: "Ice Cream", description: "Delicious ice cream", price: 80, image: "https://purepng.com/public/uploads/large/purepng.com-ice-creamfood-ice-cream-tasty-ice-taste-eat-cool-941524634554arith.png" },
    { name: "Salad", description: "Fresh garden salad", price: 100, image: "https://th.bing.com/th/id/OIP.AkriBJbGcXA0G69_QQp8owHaEK?w=290&h=180&c=7&r=0&o=7&dpr=1.8&pid=1.7&rm=3" }
    
];

function Home() {
  return (
    <div className="container mt-4">
      <div className="row">
        {foods.map((food, index) => (
          <div key={index} className="col-sm-6 col-md-4 col-lg-3 d-flex">
            <FoodCard food={food} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
