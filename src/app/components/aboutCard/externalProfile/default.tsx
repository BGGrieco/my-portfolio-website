import "./default.scss";

export default function ExternalProfile({title, imageUrl, href}) {
  return (
    <a href={href} className="card externalCard">
      <h3>{title}</h3>
      <img src={imageUrl} alt={title + " icon"} />
    </a>
  );
}
