import React from "react";
import ScreenHeading from "../../utilities/SectionHeading/SectionHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animation";
import {skills} from "../../data"
import "./Skills.css"

export default function Skills(props) {

    let fadeInScreenHandler = (screen) => {
        if (screen.fadeInScreen !== props.id) return;
        Animations.animations.fadeInScreen(props.id);
    };

    const fadeInSubscription =
        ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
    

    return (
            <div className="skills-container screen-container fade-in" id={props.id || ""}>
                <div className="skills-parent container-fluid">
                    <ScreenHeading title={"Skill"} subHeading={"MySkills"} />
                    <div className="row">
                        {skills.map((item) => {
                            return(
                            <div key={item.id} className="d-flex justify-content-center align-items-center m-2 img-wrapper">
                                <img src={item.img} className="img-fluid skillsImg"/>
                            </div>)
                        })}
                    </div>
                </div>
            </div>
    );

}