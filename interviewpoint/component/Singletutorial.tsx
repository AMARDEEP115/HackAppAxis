import singlePagestyle from "../AllCss/SingleTutorial.module.css";
import React from "react";

const SingleTutorial=({info=[]})=>{
    let [reactTime, setReactTime] = React.useState(0);
    return <div className={singlePagestyle.Main}>
        <div className={singlePagestyle.Vid}>
            <iframe className={singlePagestyle.Video} width="746" height="438" src="https://www.youtube.com/embed/tt9hws5JGRc" title="Build an app with NextJS and MongoDB - Part 1" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            <h1>TITLE : <span style={{color:"rgb(34, 99, 219)"}}>"Build an app with NextJS and MongoDB - Part 1"</span></h1>
        </div>
        <div className={singlePagestyle.Parts}>
            {info?.map((el,idx:number)=><h1 key={idx} onClick={()=>setReactTime(el.time)}>{el.title}</h1>)}
        </div>
    </div>
}

export default SingleTutorial;