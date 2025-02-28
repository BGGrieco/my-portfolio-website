import "./default.scss";

export default function Button({ text, svg, href, className, onClick }) {
  return (
    <a href={href} className={className} onClick={onClick}>
      <div className="button">
        {svg}
        {text}
      </div>
    </a>
  );
}
