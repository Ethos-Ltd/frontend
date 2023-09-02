import React from 'react'

const Dash = () => {
  return (
    <div className="flex flex-row gap-2">
        <div className="bg-[#565656] basis-2/5 sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 style={{ fontFamily: 'Ubuntu, sans-serif' }} className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
                LHS
            </h2>
        </div>
        <div className=" bg-[#656565] basis-3/5">
            RHS
        </div>
    </div>
  )
}

export default Dash