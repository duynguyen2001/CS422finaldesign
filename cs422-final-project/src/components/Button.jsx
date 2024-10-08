import "./Button.css";

function Button({ label }) {
  return (
    <button className="button">
      <div className="area" />
        <div className="label">
          {label}
        </div>
      <div/>
    </button>
  );
}

export default Button;
