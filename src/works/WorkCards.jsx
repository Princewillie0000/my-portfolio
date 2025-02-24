import React from "react";
const { Meta } = Card;
import { Card } from "antd";

const WorkCards = (props) => {
  return (
    <div>
      <Card
        cover={
          <img
            className="w-[200px] h-[500px] "
            alt={props.title}
            src={props.image}
          />
        }
      ></Card>
      <Meta title={props.title} className="text-3xl mt-3" />
      <Meta
        description={props.description}
        className="text-lg text-gray-500 mb-4"
      />

      {<button>{props.Repo}</button>}
      <a
        className="bg-black text-white p-2 rounded-md cursor-pointer "
        href={props.link}
      >
        {" "}
        {<button className="cursor-pointer">Click to view</button>}
      </a>
    </div>
  );
};

export default WorkCards;
