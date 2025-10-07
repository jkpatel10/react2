import React from 'react'

export default function Cardb({ title, datab }) {
  return (
    <div className="mb-15 mx-30">
      <div className="w-[70%]">
        <h2 className="py-6 px-2 text-2xl font-semibold">{title}</h2>
        <div className="flex justify-between items-center gap-6">
          {datab.map((e, i) => (
            <div key={i} className="h-90 border-2 border-gray-200 w-60 rounded-2xl">
              <div>
                <img src={e.img} className="rounded-t-2xl h-65 w-full" alt="" />
              </div>
              <div className="font-medium m-2">
                <h2 className="my-1 text-[17px]">{e.title}</h2>
                <p className="text-gray-500 text-sm">{e.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
