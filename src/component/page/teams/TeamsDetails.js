import React from "react";
import MemberSocialAccount from "./MemberSocialAccount";
import { useLoaderData } from "react-router-dom";
function TeamsDetails() {
    const member = useLoaderData();
    document.title=`CSIT BMC | ${member.name}`
  return (
    <>
      <div className="bg-gray-100 h-fit py-5 flex flex-wrap justify-center">
        <div className="bg-primary rounded-lg  top-2 mx-[5%] w-[90%] p-10 pb-32 tablet:w-[45%] tablet:max-w-[25rem] tablet:bg-[unset] tablet:m-0 tablet:p-0">
          <img
            src={member.img}
            alt={member.name}
            className="w-full rounded-3xl object-cover h-[25rem] tablet:p-4 tablet:w-[32rem]"
          />
          <div className="text-white my-5 tablet:mx-5 tablet:text-primary tablet:my-2">
          <h1 className="font-medium tablet:font-bold">{member.name}</h1>
          <p>{member.post}</p>
          </div>
        </div>
        <div className="m-12 mb-0 rounded-lg p-5 -mt-32 bg-white max-w-[50rem] tablet:w-[90%]  tablet:m-0 tablet:p-10 desktop:w-full">
          <p className=" tablet:min-h-[20rem] tablet:h-fit">
            {member.message}
          </p>
          <hr className="my-3 border-gray-200 "/>
        <div>
            <MemberSocialAccount social={member.social}/>
        </div>
        </div>
      </div>
    </>
  );
}

export default TeamsDetails;

export const TeamsDetailsLoader = async ({ params }) => {
  // eslint-disable-next-line
  const { idNo, name } = params;
  const response = await fetch(
    "https://csit-asc-default-rtdb.firebaseio.com/Members/" + idNo + ".json"
  );
  return response.json();
};
