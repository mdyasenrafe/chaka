import React from "react";
import { Link } from "react-router-dom";

const NotMatch = () => {
  return (
    <div>
      <img
        className="w-100"
        src="https://i.ibb.co/TY8KxmN/404-Error-Page-not-Found-with-people-connecting-a-plug-bro.png"
        alt=""
      />
      <div className="text-center">
        <Link to="/home">
          <button className="btn bg-red mb-5">Back to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default NotMatch;
