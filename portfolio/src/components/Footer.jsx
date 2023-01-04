import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Footer.css";

function Footer() {
    return (
        <div className="footer">
            <div className="socialMedia">
                <a href="https://www.instagram.com/ialtafpathan"> <InstagramIcon /></a>
                <a href="#"> <TwitterIcon /> </a>
                <a href="#"> <FacebookIcon /> </a>
                <a href="https://www.linkedin.com/in/altaf-khan-839a3819b/"><LinkedInIcon /></a>
                <a href="mailto:altafpathan439@gmail.com"> <EmailIcon /></a>
                <a href="https://github.com/ialtafkhan"><GithubIcon /> </a>
            </div>
            <p>  Handcrafted by me &copy; twentytwentythree</p>
        </div>
    );
}

export default Footer;