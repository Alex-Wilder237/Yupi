import React from 'react'
import RippleAnim from './ui-components/RippleDemo';


const RippleLoading = () => {
    return (
        <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden ">
          <p className="z-10 whitespace-pre-wrap text-center text-2xl md:text-4xl font-bold text-violet-900">
            AWAKEN
          </p>
          <RippleAnim />
        </div>
      );
}

export default RippleLoading