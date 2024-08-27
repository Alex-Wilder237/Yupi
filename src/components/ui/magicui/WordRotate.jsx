import WordRotate from "./ui-components/Magicui-WordRotate";

const WordRotateDemo = ({words, classStyle}) => {
  return (
    <WordRotate
      className={classStyle}
      words={words}
    />
  );
}

export default WordRotateDemo;