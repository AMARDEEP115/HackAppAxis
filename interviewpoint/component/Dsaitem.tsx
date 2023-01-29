import DItem from "../AllCss/DsaItem.module.css";

type Item={
    Topic:string;
    Name:string;
    difficuly:string;
    Link:string;
}

const DsaItem=(item:Item)=>{
    return <div className={DItem.main}>
        <div className={DItem.HeadingDiv}>
            <div style={{width:"50%"}}>
                <h1 className={DItem.HeadingsTopic}>Topic : <span style={{color:"teal"}}>{item.Topic}</span></h1>
                <h1 className={DItem.HeadingsName}>Question : <span style={{color:"rgb(29, 78, 168)"}}>{item.Name}</span></h1>
            </div>
            <div style={{display:"flex",flexDirection:"column",alignItems:"center",gap:"15px"}}>
                {item.difficuly==="Easy" && <h1 className={DItem.HeadingsDiff}>Difficulty : <span style={{color:'green'}}>Easy</span></h1>}
                {item.difficuly==="Medium" && <h1 className={DItem.HeadingsDiff}>Difficulty : <span style={{color:'orange'}}>Medium</span></h1>}
                {item.difficuly==="Hard" && <h1 className={DItem.HeadingsDiff}>Difficulty : <span style={{color:'red'}}>Hard</span></h1>}
                <a href={item.Link}><button className={DItem.HeadingsPrac}>Practice</button></a>
            </div>
        </div>
    </div>
};

export default DsaItem;