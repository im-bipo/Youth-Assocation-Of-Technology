import React from "react";
import EventHeader from "./EventHeader";
import { Link, useLoaderData } from "react-router-dom";
function Event() {
  const EventData = useLoaderData().slice().reverse();

  const linkDisplay = (data) => {
    console.log(data);
    if (data !== ""){
        return (
        <Link to={data}>
        <h6 className="w-fit text-sm font-medium text-secondary pt-2">
        View
        <hr className="border-primary relative left-2 w-[70%] border" />
        </h6>
        </Link>
        );
      }
  };
  return (
    <>
      <EventHeader
        title="EVENTS"
        subtitle="ORGANIZED BY CSIT ASSOCATION OF BMC"
      />
      <div className="bg-gray-100 mt-0 rounded-xl flex justify-center items-start flex-wrap pt-5 desktop:pt-5">
        {EventData.map((item) => (
          <div
            key={item.id}
            className="bg-white flex flex-wrap justify-start items-center mx-2 w-[80%] tablet:mx-5 tablet:w-[25%] desktop:w-[19%] desktop:mx-5 rounded-lg my-5 "
          >
            <img
              src={item.img}
              alt={item.title}
              className="rounded-t-lg min-h-80"
            />
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
              {linkDisplay(item.formLink)}
            </div>
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
