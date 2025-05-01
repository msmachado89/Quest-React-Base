import './paragraph.css';

export const Paragraph = ({ text }) => {
  
    const transformParagraph = (event) => {
    const paragraphElement = event.currentTarget;
    const currentText = paragraphElement.textContent;

    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    paragraphElement.style.color = randomColor;

    paragraphElement.textContent = 
      currentText === currentText.toUpperCase() 
        ? text.toLowerCase()
        : currentText.toUpperCase();
  };

  return (
    <p
      onClick={transformParagraph}
      className="paragraph"
    >
      {text}
    </p>
  );
};

export default Paragraph;
