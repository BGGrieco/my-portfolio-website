import "./default.scss";

export default function Button({text, imageUrl}) {
  return (
    <div className="button">
      <img height="48px" width="48px" src={imageUrl} />
      {text}
    </div>
  );
}
