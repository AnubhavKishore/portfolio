import React from "react";
import "./eachrepo.scss";
import CountUp from "react-countup";
function EachReport({ content }) {
  const style = {
    width: `${content.progress}`,
  };
  const styleNext = {
  
    width: 25,
  
    backgroundColor:(`${content.title}`==("Next Js"||"aws"))?"white":null,
    borderRadius:(`${content.title}`==("Next Js"))?20:0,
    objectFit:'cover',

  };
  return (
    <div className="each-report ">
      <div className="top">
        <div className="center" style={{ gap: 10 }}>
          <img style={styleNext} className="icons " src={content.icon} />
          <h6 className="html-skill">{content.title}</h6>
        </div>
        <div className="flex">
          <CountUp
            redraw={true}
            start={0}
            end={content.progress.split("%")[0]}
            delay={0}
          >
            {({ countUpRef }) => <p className="percent" ref={countUpRef} />}
          </CountUp>
          <p className="percent">{"%"}</p>
        </div>
      </div>
      <div className="bottom">
        <span style={style} className="progress-line for-html " />
      </div>
    </div>
  );
}

export default EachReport;
