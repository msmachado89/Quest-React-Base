import "./button.css";


export const Button = ({ label }) => {
  const alertLabel = () => {
    alert(`A label desse botão é: ${label}`);
  };

  return (
    <button onClick={alertLabel} className="btn">
      {label}
    </button>
  );
};

export default Button;
