import React from 'react';
import Typical from 'react-typical';
import "./Profile.css";
import Banner from "../../../images/banner.gif";

export default function Profile(){
    return(
        <div className="profile-container container-fluid">
          <div className="row profile-wrapper">
            <div className="profile-details col-md-6">
              <div className="colm">
                <div className="colm-icon">
                  <a href="https://github.com/Moni05" target="_blank">
                    <i className="fa fa-github-square"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/moni-shankar-r-s/" target="_blank">
                    <i className="fa fa-linkedin-square"></i>
                  </a>
                  <a href="mailto:rs.monishankar@gmail.com" target="_blank">
                    <i className="fa fa-envelope"></i>
                  </a>
                </div>
              </div>

              <div className="profile-details-name">
                <span className="primary-text">
                  {" "}
                  Hello, I'M <span className="highlighted-text">Moni Shankar</span>
                  </span>
              </div>

              <div className="profile-details-role">
                <span className="primary-text">
                  {" "}
                  <h1><Typical loop={Infinity} steps={[ "Full Stack Developer", 1000, "JavaScript Enthusiast", 1000, "Experience in Drupal & SDL Tridion CMS", 1000, "Mern stack Dev", 1000,
                                    "React JS", 1000,]}/>
                  </h1>
                </span>
                <span className="profile-role-tagline">Knack of building applications with front and back end operations.</span>
              </div>

              <div className="profile-options">
                <button className="btn primary-btn"> Hire Me </button>
                <a href="https://drive.google.com/file/d/1clMFa_Mkom_6JWL2helKC5GdGXAkpX_P/view" target="_blank">
                  <button className="btn highlighted-btn">Get Resume</button></a>
              </div>
            </div>
            <div className="profile-picture col-md-6">
                <div className="profile-picture-background">
                  <img src={Banner} className="img-banner"/>
                </div>
            </div>
          </div>
        </div>
    )
}