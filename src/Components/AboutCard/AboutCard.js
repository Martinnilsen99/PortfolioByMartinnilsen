import React, {Component} from "react";
import "../../CSS/AboutCard.css";
import portrait from '../../IMG/Portrett.JPG'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { Fab } from '@material-ui/core';
import { faAt } from '@fortawesome/free-solid-svg-icons'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'


class AboutCard extends Component{
    render(){
        return(
            <div id="AboutCardContainer">
                <div id="AboutCardInfoBox">
                    <h1>Martin Johannes Nilsen</h1>
                    <h3>{this.props.data.aboutText}</h3>
                    <div id="AboutCardContactInfo">

                        <a href="mailto:martinjnilsen@icloud.com" id="AboutCardContactInfoButtonLeft" tabindex="-1" aria-label="Send mail to Martin Johannes Nilsen">
                            <Fab aria-label="mail-button" variant="extended" alt="Send mail to martinjnilsen@icloud.com">
                                <FontAwesomeIcon id="FaButtonIcon" icon={faAt} alt="mail-icon"/>
                                <a id="AboutCardContactInfoTextLeft">{this.props.data.contactInfoText[0]}</a>
                            </Fab>
                        </a> 
                        
                        <a href="tel:004745005502" id="AboutCardContactInfoButtonRight" tabindex="-1" aria-label="Call Martin Johannes Nilsen">
                        <Fab aria-labelledby="call-button" variant="extended" alt="Call +47 45005502">
                                <FontAwesomeIcon id="FaButtonIcon" icon={faPhoneAlt} alt="call-icon"/>
                                <a id="AboutCardContactInfoTextRight">{this.props.data.contactInfoText[1]}</a>
                            </Fab>
                        </a>
                    
                    </div>
                </div>
                <div id="AboutCardImageDiv">
                    <img id="AboutCardImage" src={portrait} alt="Portrait of Martin Johannes Nilsen" />
                </div>
            </div>
        )
    }
    
}
export default AboutCard;