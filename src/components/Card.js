import React from "react";

function Card({item}) {
//   const imageURL =
//     "https://robohash.org/%7B1%7D.png?set=set1&size=400x400&format=json";
  return (
    
      <div className="flex flex-col items-center justify-center bg-cyan-600	 m-5 py-2 rounded-md border-solid border-3 border-sky-500">
        <div className="image">
          <img src={`https://robohash.org/robot${item.id}.png?set=set1&size=200x200&format=json`} alt="" />
        </div>
        <div className="subTitle">
          <h4 className="py-2 text-2xl">{item.login.username}</h4>
          <p className="pb-2 text-xl">{item.email}</p>
        </div>
      </div>
    
  );
}

export default Card;
