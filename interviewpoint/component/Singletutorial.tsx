import singlePagestyle from "../AllCss/SingleTutorial.module.css";
import React, { useEffect } from "react";
import ReactPlayer from "react-player";

type info = {
  time: number;
  title: string;
};
type Obj = {
  info: info[];
  Url: string;
  tit: string;
};

const SingleTutorial = ({ info, Url, tit }: Obj) => {
  let [reactTime, setReactTime] = React.useState(0);
  const playerRef = React.useRef<any>();
  let [title, setTitle] = React.useState(tit);

  useEffect(() => {
    onReady();
  }, [reactTime]);

  const onReady = React.useCallback(() => {
    playerRef.current.seekTo(reactTime, "seconds");
  }, [playerRef.current, reactTime]);

  return (
    <div className={singlePagestyle.Main}>
      <div className={singlePagestyle.Vid}>
        <ReactPlayer
          ref={playerRef}
          url={Url}
          width="746px"
          height="438px"
          playing={true}
          controls={true}
          onReady={onReady}
          className={singlePagestyle.Video}
        />
        <h1>
          TITLE : <span style={{ color: "rgb(34, 99, 219)" }}>{title}</span>
        </h1>
      </div>
      <div className={singlePagestyle.Parts}>
        {info?.map((el: any, idx: number) => (
          <h1
            key={idx}
            onClick={() => {
              setReactTime(el.time);
              setTitle(el.title);
            }}
          >
            {el.title}
          </h1>
        ))}
      </div>
    </div>
  );
};

export default SingleTutorial;
