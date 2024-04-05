import "./default.scss";

export default function ExperienceCard({title, subtitle, period, imageURL, alignment}) {
    return (
      <div className={`experienceContainer marginBottom_med ${alignment}`}>
        <div className="card experienceCard">
          <h3>{title}</h3>
          <h4>
            <b>{subtitle}</b>
          </h4>
          <h4 className="marginTop_xsm">{period}</h4>
        </div>
        <div className="imgContainer"><img src={imageURL}></img></div>
      </div>
    );
  }

// interface Props {
//   propsArray: {
//     title: string;
//     subtitle: string;
//     period: string;
//     img: string;
//   };
// }

// export default function ExperienceCard({propsArray}: Props, alignment) {
//   return (
//     <div className={`experienceContainer ${alignment}`}>
//       <div className="imgContainer">{propsAPropsrray.img}</div>
//       <div className="card experienceCard">
//         <h3>{propsArray.title}</h3>
//         <h4>
//           <b>{propsArray.subtitle}</b>
//         </h4>
//         <h4 className="marginTop_xsm">{propsArray.period}</h4>
//       </div>
//     </div>
//   );
// }
