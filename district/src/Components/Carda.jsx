import React from "react";

export default function Carda({ data, title}) {
  return (
    <div className="mb-15" id="card">
        <h2 className="py-6 px-30 text-2xl font-semibold">{title}</h2>
        <div className="flex justify-evenly items-center flex-wrap gap-6">
          {data.map((e, i) => (
            <div key={i} className="h-150 border-2 border-gray-100 shadow-lg w-80 rounded-2xl">
              <div>
                <img src={e.img} className="rounded-t-2xl w-full object-cover" alt={e.title}/>
              </div>

              {e.offer && (
                <div className="bg-gradient-to-r from-[#6545e4] to-[#8b77de] text-white text-sm font-semibold flex items-center h-6">
                  <img src="src/img/11.svg" className="rotate-90 mx-3" alt="" />
                  <p>{e.offer}</p>
                </div>
              )}

              <div className="font-medium m-4 text-sm">
                <p className="text-[#bcb992]">{e.date}</p>
                <h2 className="text-[17px] my-1">{e.title}</h2>
                <h4 className="text-[13px]">{e.venue}</h4>
                <p className="text-gray-400">{e.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
}