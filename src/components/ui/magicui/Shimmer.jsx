import ShimmerButton from "./ui-components/ShimmerButton";
import React from 'react'

const Shimmer = ({url, title}) => {
  return (
      <a href={url} >
    <div className=" flex mt-8 items-center">
    <ShimmerButton className="w-full md:w-fit py-4 px-10">
      <span className="whitespace-pre-wrap text-center uppercase text-lg font-bold text-white dark:from-white dark:to-slate-900/10 lg:text-xl">
        {title}
      </span>
    </ShimmerButton>
  </div>
  </a>
  )
}

export default Shimmer