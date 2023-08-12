import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import "./Event.css";
function Event() {
  const EventData = useLoaderData();
  console.log(EventData);
  return (
    <>
      <div className="heroEvent p-10">
        <h1 className="text-secondary text-center pt-10 font-bold text-3xl">
          EVENTS
        </h1>
        <h2 className="m-auto w-[60%] text-center font-bold my-2 text-primary">
          ORGANIZED BY
          <br /> CSIT ASSOCATION OF BMC
        </h2>
      </div>
        <div className="bg-gray-100 mt-0 rounded-xl flex justify-center items-start flex-wrap pt-5 desktop:pt-5">
          {EventData.map((item) => (
            <div
            key={item.id}
            className="bg-white flex flex-wrap justify-start items-center mx-2 w-[80%] tablet:mx-5 tablet:w-[25%] desktop:w-[19%] desktop:mx-5 rounded-lg my-5 cursor-pointer"
            >
            <Link to={`${item.id}`}>
                <img src={item.img} alt={item.title} className="rounded-t-lg" />
                <div className="w-[100%] flex justify-end ">
                  <h4 className="bg-green-500 px-2 rounded-lg relative right-1 text-white bottom-8 w-fit">
                    {item.status}
                  </h4>
                </div>
                <div className="p-5 pt-0">
                  <h3 className="text-xl font-semibold text-primary">
                    {item.title}
                  </h3>
                  <p className="text-primary text-sm">{item.decs}</p>
                  <h6 className="w-fit text-sm font-medium text-secondary pt-2">
                    View
                    <hr className="border-primary relative left-2 w-[70%] border" />
                  </h6>
                </div>
          </Link>
            </div>
          ))}
        </div>
    </>
    );
}

export default Event;

export const EventLoader = async () => {
  const response = await fetch(
    "https://csit-asc-default-rtdb.firebaseio.com/events/.json"
  );
  return response.json();
};
