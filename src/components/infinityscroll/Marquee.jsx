import React from "react";
import './style.css'

const Scrollmarquee = () => {
  return (
<>

<div class="wrapper">
  <div class="itemLeft item1 bg-gray-100">
  <img className=" rotate lg:w-[5vw] w-1/4  rounded-3xl" src="./assets/anim5.png" alt="yoga"/>
  </div>
  <div class="itemLeft item2 bg-pink-200">Amour</div>
  <div class="itemLeft item3 bg-gray-100">
    <img className=" rotate lg:w-[5vw] w-1/4  rounded-3xl" src="./assets/anim6.png" alt="yoga"/>
  </div>
  <div class="itemLeft item4 bg-lime-200">Paix</div>
  <div class="itemLeft item5 bg-green-200">Sécurité</div>
  <div class="itemLeft item6 bg-gray-100">
  <img className=" lg:w-[5vw] w-1/4  rounded-3xl" src="./assets/anim4.png" alt="yoga"/>
  </div>
  <div class="itemLeft item7 bg-violet-200">Force</div>
  <div class="itemLeft item8 bg-yellow-200">Santé</div>
</div>

<div class="wrapper">
<div class="itemRight item1 bg-gray-100">
  <img className=" rotate lg:w-[5vw] w-1/4  rounded-3xl" src="./assets/anim5.png" alt="yoga"/>
  </div>
  <div class="itemRight item2 bg-green-200">Paix</div>
  <div class="itemRight item3 bg-gray-100">
    <img className=" lg:w-[5vw] w-1/4  rounded-3xl" src="./assets/anim4.png" alt="yoga"/>
  </div>
  <div class="itemRight item4 bg-lime-200">Joie</div>
  <div class="itemRight item5 bg-violet-200">Méditation</div>
  <div class="itemRight item6 bg-gray-100">
    <img className=" rotate lg:w-[5vw] w-1/4  rounded-3xl" src="./assets/anim6.png" alt="yoga"/>
  </div>
  <div class="itemRight item7 bg-blue-200">Harmonie</div>
  <div class="itemRight item8 bg-pink-200">Relaxation</div>
</div>
</>
  );
};

export default Scrollmarquee;
