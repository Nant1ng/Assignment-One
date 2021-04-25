import React from "react";
import Card from "./Card";
import buildingimage from "../images/building.jpg";

const Propertys = [
  {
    Image: {buildingimage},
    Title: "Title",
    Desc:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.",
    Price: 500,
  },
  {
    Image: { buildingimage },
    Title: "Title",
    Desc:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.",
    Price: 100,
  },
];

function CardList() {
  return (
    <div>
      {Propertys.map((service) => {
        return (
          <Card
            image={service.Image}
            title={service.Title}
            desc={service.Desc}
            price={service.Price}
          />
        );
      })}
    </div>
  );
}

export default CardList;
