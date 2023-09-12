import React from "react";
function Intro() {
  return (
    <>
        <div className="flex h-[35rem] flex-wrap justify-center items-center  p-2 tablet:h-72 desktop:h-[18rem] bg-[#FCF9F9]">
          <div className="flex justify-center tablet:w-[48%] items-center desktop:w-[33%]">
            <div
              className='bg-[#3061F2] p-2 rounded-[50%] h-14 w-14 flex justify-center items-center'
            >
              <i className='fa-solid fa-calendar-days text-white text-xl'></i>
            </div>
            <div className="w-[70%] flex justify-center pl-8 flex-col">
              <h3 className="font-semibold text-xl">Event Organizer</h3>
              <p className="text-gray-700 text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, voluptatem.</p>
            </div>
          </div>
          <div className="flex justify-center tablet:w-[48%] items-center desktop:w-[33%]">
            <div
              className='bg-[#F25757] p-2 rounded-[50%] h-14 w-14 flex justify-center items-center'
            >
              <i className='fa-solid fa-layer-group text-white text-xl'></i>
            </div>
            <div className="w-[70%] flex justify-center pl-8 flex-col">
              <h3 className="font-semibold text-xl">Resources</h3>
              <p className="text-gray-700 text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, voluptatem.</p>
            </div>
          </div>
          <div className="flex justify-center tablet:w-[48%] items-center desktop:w-[33%]">
            <div
              className='bg-[#34BF57] p-2 rounded-[50%] h-14 w-14 flex justify-center items-center'
            >
              <i className='fa-brands fa-codepen text-white text-xl'></i>
            </div>
            <div className="w-[70%] flex justify-center pl-8 flex-col">
              <h3 className="font-semibold text-xl">Project Gallery</h3>
              <p className="text-gray-700 text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci, voluptatem.</p>
            </div>
          </div>
      </div>
    </>
  );
}

export default Intro;
