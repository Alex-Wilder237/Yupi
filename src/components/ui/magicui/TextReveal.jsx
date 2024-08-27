import TextRevealByWord from "./ui-components/TextFade";

export function TextRevealDemo({ textContent }) {
  return (
    <div className="text-[1.7rem] lg:text-4xl font-extrabold lg:leading-[2.8rem]">
      <TextRevealByWord text={textContent} />
    </div>
  );
}
