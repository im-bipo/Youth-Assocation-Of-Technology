import React from "react";
import President from "../../assets/img/president.jpg";
function MessageAdmin() {
  return (
    <>
      <div className="bg-blue-50 py-10">
        <div className="flex justify-end">
          <div className=" bg-primary rounded-l-xl p-6 text-sm pb-2 w-[60%] tablet:w-[30rem] desktop:w-[20rem]">
            <img src={President} alt="" />
            <h2 className="text-end pt-2 text-white">-Donald Trump Bashyal</h2>
            <h3 className="text-end text-white">President</h3>
          </div>
        </div>
        <div className="p-5 tablet:w-[40rem] m-auto text-center desktop:block desktop:m-[unset] desktop:-mt-[25rem] desktop:min-h-[25rem] desktop:text-left desktop:ml-28 desktop:w-[50%]">
          <h1 className="text-xl font-semibold text-secondary text-center py-8">
            Message Form President
          </h1>
          <div className="font-medium text-sm">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              tempora animi voluptate ea aspernatur alias et quia quisquam in
              culpa repellat id magnam, molestias consectetur nisi reiciendis
              eum quas voluptatem aut pariatur modi quos dolores? Assumenda quos
              sed sit nemo voluptates, minima illo impedit aspernatur quo
              suscipit fugiat, excepturi ut?
            </p>
            <p className="py-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
              sunt porro nihil tempora aliquam quas culpa quam, explicabo quasi
              odio obcaecati perspiciatis molestiae nostrum cumque sapiente,
              perferendis incidunt eveniet libero!
            </p>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat
              ex nihil accusamus nam, aliquam fugit quia inventore labore, odit
              deserunt, natus dolorem adipisci hic. Perspiciatis, eius
              voluptatibus ipsum incidunt quos provident nihil mollitia officiis
              porro, eaque, exercitationem dolorum deleniti voluptas.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MessageAdmin;
