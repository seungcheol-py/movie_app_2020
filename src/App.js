import React from "react";
import propTypes from "prop-types";

const foodArray = [
  {
    id: 1,
    name: "kimchi",
    image:
      "https://c.ndtvimg.com/2020-01/e4l8n4e8_kimchi_625x300_28_January_20.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "gimbap",
    image:
      "https://mykoreankitchen.com/wp-content/uploads/2006/10/1.-Easy-Kimbap.jpg",
    rating: 4,
  },
  {
    id: 3,
    name: "jajangmyeon",
    image:
      "https://previews.123rf.com/images/nontoxicguy/nontoxicguy1611/nontoxicguy161100429/66442156-jajangmyeon-black-bean-sauce-noodles.jpg",
    rating: 4,
  },
  {
    id: 4,
    name: "japchae",
    image:
      "https://okonomikitchen.com/wp-content/uploads/2019/07/vegan-japchae-recipe-1-of-1.jpg",
    rating: 4,
  },
];
// API를 통해서 얻은 data라고 가정

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5</h4>
      <img src={picture} alt={name}></img>
    </div>
  );
}

Food.propTypes = {
  name: propTypes.string.isRequired,
  picture: propTypes.string.isRequired,
  rating: propTypes.number.isRequired,
};

function App() {
  return (
    <div>
      {foodArray.map((dish) => (
        <Food
          name={dish.name}
          picture={dish.image}
          key={dish.id}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;
