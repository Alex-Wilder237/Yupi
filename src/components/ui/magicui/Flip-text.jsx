import FlipText from "./ui-components/Flip-text";

const FlipTextDemoDemo = ({words, classStyle}) => {
  return (
    <FlipText
      className={classStyle}
      word={words}
    />
  );
}

export default FlipTextDemoDemo;