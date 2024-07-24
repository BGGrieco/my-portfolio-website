import "./default.scss";

export default function Button({ text, svg, href }) {
  return (
    <a href={href}>
      <div className="button">
        {svg}
        <p>{text}</p>
      </div>
    </a>
  );
}
