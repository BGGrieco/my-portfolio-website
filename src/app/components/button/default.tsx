import "./default.scss";

export default function Button({ text, svg }) {
  return (
    <div className="button">
      {svg}
      {text}
    </div>
  );
}
