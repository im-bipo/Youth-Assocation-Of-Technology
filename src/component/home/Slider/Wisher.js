import React from "react";

function Wisher(props) {
  return (
    <div className="flex flex-col desktop:flex-row desktop:pl-[20rem] text-center">
      <div className="flex desktop:flex flex-col items-center justify-center desktop:w-[20%] text-sm">
        <img
          src={props.img}
          alt={props.Name}
          className="w-[5rem] h-[5rem] rounded-[50%] object-cover"
        />
        <h4 className="text-secondary font-medium pt-2">{props.Name}</h4>
        <h3 className="font-semibold">{props.Post}</h3>
      </div>
      <div className="desktop:w-[50%] flex items-center font-semibold">
        <p className="p-5 text-[.9rem] w-full">
          <svg
            viewBox="0 0 512 512"
            className="quoteIcon inline-block fill-secondary mx-1"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path>
          </svg>
          {props.testimony}
        </p>
      </div>
    </div>
  );
}

export default Wisher;
