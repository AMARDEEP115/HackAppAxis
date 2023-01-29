import Image from "next/image";
import footerStyle from "../AllCss/Footer.module.css";
import photo from "../logo.jpg";

const Footer=()=>{
    return <div className={footerStyle.fBody}>
        <div className={footerStyle.main}>
            <div>
                <h1 className={footerStyle.hH}>Data Structure & Algorithm</h1>
                <h2 className={footerStyle.hHH}>Leetcode</h2>
                <h2 className={footerStyle.hHH}>Array</h2>
                <h2 className={footerStyle.hHH}>String</h2>
                <h2 className={footerStyle.hHH}>Objects</h2>
                <h2 className={footerStyle.hHH}>Techniques</h2>
            </div>
            <div>
                <h1 className={footerStyle.hH}>Coding</h1>
                <h2 className={footerStyle.hHH}>YouTube</h2>
                <h2 className={footerStyle.hHH}>HTML</h2>
                <h2 className={footerStyle.hHH}>Java Script</h2>
                <h2 className={footerStyle.hHH}>React</h2>
                <h2 className={footerStyle.hHH}>Redux</h2>
                <h2 className={footerStyle.hHH}>Node JS</h2>
                <h2 className={footerStyle.hHH}>Typescript</h2>
            </div>
            <div>
                <h1 className={footerStyle.hH}>Styles</h1>
                <h2 className={footerStyle.hHH}>CSS</h2>
                <h2 className={footerStyle.hHH}>Chakra-UI</h2>
                <h2 className={footerStyle.hHH}>Material-UI</h2>
                <h2 className={footerStyle.hHH}>Styled</h2>
            </div>
            <div></div>
        </div>
        <h1 className={footerStyle.DwnApTxt}>Download lessons and learn anytime, anywhere with the <span style={{color:"red"}}>InterviewPoint</span> app</h1>
        <div className={footerStyle.DwnAp}>
            <img src="https://static.uacdn.net/production/_next/static/images/app_store.png?q=75&w=256" alt="apple"/>
            <img src="https://static.uacdn.net/production/_next/static/images/play_store.png?q=75&w=256" alt="google"/>
        </div>
        <div className={footerStyle.fLast}>
            <Image className={footerStyle.loGo} src={photo} alt="logo" />
            <h1 className={footerStyle.yEAR}>© 2023, INTERVIEW POINT'S. All rights reserved.</h1>
        </div>
    </div>
};

export default Footer;