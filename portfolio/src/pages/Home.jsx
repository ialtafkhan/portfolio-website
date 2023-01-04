import React from 'react'
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";
const Home = () => {
    return (
        <>

            <div className="home">
                <div className="about">
                    <h2> Hi, My Name is Altaf Pathan</h2>
                    <div className="prompt">
                        <p>A enthusiastic Web developer with a passion for learning and creating.</p>
                        <a href="https://www.linkedin.com/in/altaf-khan-839a3819b/"><LinkedInIcon /></a>
                        <a href="mailto:altafpathan439@gmail.com"> <EmailIcon /></a>
                        <a href="https://github.com/ialtafkhan"><GithubIcon /> </a>
                    </div>
                </div>
                <div className="skills">
                    <h1> Skills</h1>
                    <ol className="list">
                        <li className="item">
                            <h2> Front-End</h2>
                            <span>
                                ReactJS, Redux, HTML, CSS, Saaa,Less,NPM,
                                Ionic, BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents
                            </span>
                        </li>
                        <li className="item">
                            <h2>Back-End</h2>
                            <span>
                                NodeJS,  ExpressJS, MongoDB,  MYSQL, firebase
                            </span>
                        </li>
                        <li className="item">
                            <h2>Languages</h2>
                            <span>JavaScript,  C, C++, TypeScript</span>
                        </li>
                    </ol>
                </div>
            </div>

        </>
    )
}

export default Home