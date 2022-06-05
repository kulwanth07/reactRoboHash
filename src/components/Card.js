import React from "react";

const Card = ({id,name,email}) => {
  return (
    <div className="tc bg-washed-red br3 pa3 ma2 bw2 shadow-5 grow dib">
      <img alt="" src={`https://robohash.org/${id}?set=set3`}  />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
