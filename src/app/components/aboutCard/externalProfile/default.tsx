"use client";
import React from "react";
import "./default.scss";

// export default function ExternalProfile({ title, imageUrl, altImageUrl, href }) {
//   return (
//     <a href={href} className="card externalCard">
//       <h3>{title}</h3>
//       <img
//         className="externalImage"
//         src={imageUrl}
//         onMouseOver={(e) => (e.currentTarget.src = `${altImageUrl}`)}
//         onMouseOut={(e) => (e.currentTarget.src = `${imageUrl}`)}
//         alt={title + " icon"}
//       />
//       <img className="arrow" src="/arrow.svg" alt="Arrow" />
//     </a>
//   );
// }

export default function ExternalProfile({
  title,
  imageUrl,
  altImageUrl,
  href,
}) {
  React.useEffect(() => {
    let imageVar = document.getElementById("id" + title) as HTMLImageElement;
    if (imageVar) {
      console.log(imageVar);
    }
  }, [imageVar]);
  // const imageVar = document.getElementById("idCodePen");
  // console.log(imageVar);

  return (
    <a
      href={href}
      className="card externalCard"
      onMouseOver={(imageVar.src=altImageUrl)}
      onMouseOut={(imageVar.src=imageUrl)}
    >
      <h3>{title}</h3>
      <img
        id={"id" + title}
        className="externalImage"
        src={imageUrl}
        alt={title + " icon"}
      />
      <img className="arrow" src="/arrow.svg" alt="Arrow" />
    </a>
  );
}
