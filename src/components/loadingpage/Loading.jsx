import React from 'react';
import './style.css'

const Loading = () => {
  return (   
<div class=" slide-in w-full bg-slate-100 h-[100vh] justify-center flex items-center">

<div class="card ">
  <div class="loader">
    <p className='text-3xl font-bold'>Manger</p>
    <div class="words">
      <span class="word text-3xl font-bold">Sainement</span>
      <span class="word text-3xl font-bold">Bio</span>
      <span class="word text-3xl font-bold">Equilibrer</span>
      <span class="word text-3xl font-bold">Yupi</span>
    </div>
  </div>
</div>

</div>
  );
};

export default Loading;