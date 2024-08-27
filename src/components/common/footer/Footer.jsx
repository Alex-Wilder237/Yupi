// import ImageSkeleton from "../image/Image";
import ImageSkeleton from "../image/Image";
const Footer = () => {


  return (
    <div className='h-svh lg:h-[70vh] bottom-0 rounded-t-3xl bg-[#414b4b] py-[80px] md:pt-[100px] md:px-[100px] md:pb-[50px] px-8'>
<div className="flex flex-col justify-between h-full">
<div className="lg:grid grid-cols-4 justify-between gap-10">
<div className="col-span-2 flex flex-wrap max-sm:gap-10 max-sm:mb-10 justify-between">
  <div className="flex flex-col gap-4 max-sm:hidden">
  <a className="hover:text-white hover:pointer text-gray-300 " href="/">Accueil</a>
  <a className="hover:text-white hover:pointer text-gray-300 " href="/a-propos">Apropos de nous</a>
  <a className="hover:text-white hover:pointer text-gray-300 " href="/Abonnement">Nos abonnement</a>
  </div>
  <div className="flex flex-col gap-4">
  <a className="hover:text-white hover:pointer text-gray-300 " href="/#choisi">Comment ca marche</a>
  <a className="hover:text-white hover:pointer text-gray-300 " href="/Term-et-conditions">Terms et Condition</a>
  <a className="hover:text-white hover:pointer text-gray-300 " href="/politique-et-confidentialite">Politique de confidentielité</a>
  </div>
  <div className="flex flex-col gap-4">
  <a className="hover:text-white hover:pointer text-gray-300 " href="/#faq">FAQ</a>
  <a className="hover:text-white hover:pointer text-gray-300 " href="/">L'agriculture en Belgique</a>
  <a className="hover:text-white hover:pointer text-gray-300 " href="/">D'ou proviens nos fruits et legumes </a>
  </div>
</div>
<div className="col-span-2 flex w-full justify-end ">
  <div className="flex max-sm:flex-wrap gap-4">
<ImageSkeleton styleClass={"h-[100px] w-[100px] object-cover "} src={"./assets/img/sections/p1/IMG_0630.jpg"} alt={"Fait maison"}/>
<ImageSkeleton styleClass={"h-[100px] w-[100px] object-cover "} src={"./assets/img/sections/p1/fruit.jpg"} alt={"Fait maison"}/>
<ImageSkeleton styleClass={"h-[100px] w-[100px] object-cover "} src={"./assets/img/sections/p1/IMG_0631.jpg"} alt={"Fait maison"}/>
<ImageSkeleton styleClass={"h-[100px] w-[100px] object-cover "} src={"./assets/img/sections/p1/IMG_0633.jpg"} alt={"Fait maison"}/>
</div>
</div>
</div>

<div>
  <ImageSkeleton/>
</div>

<div>
  <p className="text-md text-center">Yupi @ Alright Reserved 2024</p>
</div>
</div>
    </div>
  );
}

export default Footer;
