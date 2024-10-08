import React from "react";
import { Cn } from "../magicui/lib/Utils";
import Marquee from "./ui-components/MarqueeScroll";
import { Star } from "@mui/icons-material";


const reviews = [
  {
    name: "Marie D.",
    username: "– Bruxelles",
    body: "j'apprécie de savoir que je soutiens les producteurs locaux. C'est une solution pratique et écologique pour manger sainement",
    img: "./assets/img/sections/profile/pic1.jpg",
  },
  {
    name: "Lucas V.",
    username: "– Liège",
    body: "Le service Yupi est impeccable ! La sélection de produits est variée et la livraison est toujours ponctuelle. Je recommande vivement !",
    img: "./assets/img/sections/profile/pic2.jpg",
  },
  {
    name: "Sophie L.",
    username: "– Namur",
    body: "Yupi a complètement changé ma façon de consommer. Les paniers sont bien garnis et les produits sont d'une qualité exceptionnelle.",
    img: "./assets/img/sections/profile/pic3.jpg",
  },
  {
    name: "Julien P.",
    username: "– Anvers",
    body: "C'est une surprise de découvrir ce que je vais recevoir. Et le fait que les produits viennent de Belgique rend l'expérience encore plus satisfaisante !",
    img: "./assets/img/sections/profile/pic4.jpg",
  },
  {
    name: "Elise M.",
    username: "– Gand",
    body: "Les paniers sont toujours remplis de fruits et légumes savoureux, et l'abonnement Mixte me permet de varier les plaisirs. C'est un vrai gain de temps pour moi et ma famille.",
    img: "./assets/img/sections/profile/pic5.jpg",
  },
  {
    name: "Thomas R.",
    username: "– Charleroi",
    body: "Les paniers sont bien équilibrés, avec des produits frais et de qualité. J'apprécie particulièrement l'engagement de Yupi envers les producteurs locaux et la durabilité.",
    img: "./assets/img/sections/profile/pic6.jpg",
  },
];


const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={Cn(
        "relative lg:w-[25vw] lg:h-[20vw] flex flex-col gap-4 w-[300px] justify-between cursor-pointer overflow-hidden rounded-3xl border p-8 border-gray-950/[.1] bg-white shadow-xl hover:bg-green-100 hover:-translate-y-2 ease-in transition-all",

      )}
    >



       <div className="flex">
        <Star className="text-yellow-300"/>
        <Star className="text-yellow-300"/>
        <Star className="text-yellow-300"/>
        <Star className="text-yellow-300"/>
        <Star className="text-yellow-300"/>
       </div>
      <blockquote className="mt-2 md:text-md lg:text-lg">{body}</blockquote>
      <div className="flex flex-row items-center gap-4 ">
        <img className="rounded-full w-[40px] h-[40px] object-cover "  alt="" src={img} />
        <div className="flex flex-col ">
          <figcaption className="text-lg font-bold dark:text-white">
            {name}
          </figcaption>
          <p className="text-sm font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      
    </figure>
  );
};

 function MarqueeDemo() {
  return (
    <div className="relative flex h-[auto] w-full flex-col items-center justify-center overflow-hidden ">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
   </div>
  );
}

export default MarqueeDemo;