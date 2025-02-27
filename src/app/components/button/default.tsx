import "./default.scss";

export default function Button({ text, svg, href, className }) {
  return (
    <a href={href} className={className}>
      <div className="button">
        {svg}
        {text}
      </div>
    </a>
  );
}
