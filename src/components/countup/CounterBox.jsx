import React from 'react'
import Countup from './Countup'


const CounterBox = () => {
  return (
    <div className='md:grid grid-cols-3 py-10 md:py-[100px] lg:space-x-10 '>
        <div className='col-span-1 gap-4 flex flex-col justify-center items-center text-3xl mb-4 md:mb-0 text-white font-bold bg-violet-300 rounded-3xl p-20 h-[30vh] md:h-[30vh] lg:h-[320px] '>
         <h1 className='text-3xl text-white font-bold text-center'>Rejoignez</h1>
        <div>
         <Countup num={30} title={'Cours'}/>
        </div>
        </div>


        <div className='col-span-1 gap-4 flex flex-col justify-center items-center text-3xl mb-4 md:mb-0 text-white font-bold bg-violet-300 rounded-3xl p-20 h-[30vh] md:h-[30vh] lg:h-[320px] '>
         <h1 className='text-3xl text-white font-bold text-center'>Rejoignez</h1>
        <div>
         <Countup num={50} title={'Étudiants Satisfaits'}/>
        </div>
        </div>


        <div className='col-span-1 gap-4 flex flex-col justify-center items-center text-3xl mb-4 md:mb-0 text-white font-bold bg-violet-300 rounded-3xl p-20 h-[30vh] md:h-[30vh] lg:h-[320px] '>
         <h1 className='text-3xl text-white font-bold text-center'>Rejoignez</h1>
        <div>
         <Countup num={3} title={'Sessions Uniques'}/>
        </div>
        </div>

    </div>
  )
}

export default CounterBox
