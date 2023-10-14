"use client"
import React, { useState, useEffect } from "react";
function Characters({ data }: any) {


  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-2"

    >
      {data?.length > 1 ? data?.map((c: any) => (
        <div key={c?.character?.mal_id} className="">
          <div className="flex justify-between">
            <div className="flex gap-2">
              <img className="w-[60px] h-[60px] rounded-full object-cover " src={c?.image} />
              <div className="flex flex-col justify-between">
                <small className=" p-1 text-start">{c?.name?.full}</small>
                <small className="text-gray-400 text-start p-1">
                  {c?.role}
                </small>
              </div>
            </div>

            <div className="flex gap-2">
              <div className="flex flex-col justify-between">
                <small className=" p-1 text-end">
                  {/* {c?.actor[0]?.person?.name} */}
                </small>
                {/* <small className="text-gray-400 text-end p-1">{c?.actor[0]?.language}</small> */}
              </div>

              {/* <img className="w-[60px] h-[80px] " src={c?.actor[0]?.person?.images?.jpg?.image_url} /> */}
            </div>
          </div>
        </div>
      )) : ""}
    </div>
  );
}

export default Characters;
