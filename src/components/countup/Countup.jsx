import {React, useState} from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'


const Countup = ({num, title}) => {
    const [counterOn, setCounterOn] = useState (false);
  return (
    
    <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)} >
        <div>
        <div className='lg:text-8xl md:text-2xl text-4xl text-white font-bold'>      
       + {counterOn &&
<CountUp className='text-8xl text-white font-bold'  start={0} end={num} duration={3} delay={0}/>
        }
</div>
        <p className='text-white font-bold lg:text-2xl text-center mt-4'>
{title}
        </p>
        
        </div>
    </ScrollTrigger>
  )
}

export default Countup