import "./SocialBar.scss"
import cfg from "../../config"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram,
    faGithub,
    faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons"

function SocialBar({isMobile}) {

    return (
        <nav className={isMobile ? "socialBarMobile" : "socialBar"}>
            { cfg.socials.github === "" ? "" :
                <a
                    href={cfg.socials.github}
                    className="github social"
                >
                    <FontAwesomeIcon icon={faGithub} size={isMobile ? "2x" : "3x"}/>
                </a>
            }
            { cfg.socials.linkedin === "" ? "" :
                <a
                    href={cfg.socials.linkedin}
                    className="linkedin social"
                >
                    <FontAwesomeIcon icon={faLinkedinIn} size={isMobile ? "2x" : "3x"}/>
                </a>
            }
            { cfg.socials.email === "" ? "" :
                <a
                    href={"mailto:" + cfg.socials.email}
                    className="envelope social"
                >
                    <FontAwesomeIcon icon={faEnvelope} size={isMobile ? "2x" : "3x"}/>
                </a>
            }
            { cfg.socials.youtube === "" ? "" :
                <a
                    href={cfg.socials.youtube}
                    className="youtube social"
                >
                    <FontAwesomeIcon icon={faYoutube} size={isMobile ? "2x" : "3x"}/>
                </a>
            }
            {cfg.socials.facebook === "" ? "" :
                <a
                    href={cfg.socials.facebook}
                    className="facebook social"
                >
                    <FontAwesomeIcon icon={faFacebook} size={isMobile ? "2x" : "3x"}/>
                </a>
            }
            {cfg.socials.instagram === "" ? "" :
                <a
                    href={cfg.socials.instagram}
                    className="instagram social"
                >
                    <FontAwesomeIcon icon={faInstagram} size={isMobile ? "2x" : "3x"}/>
                </a>
            }
            {cfg.socials.twitter === "" ? "" :
                <a href={cfg.socials.twitter}
                   className="twitter social"
                >
                    <FontAwesomeIcon icon={faTwitter} size={isMobile ? "2x" : "3x"}/>
                </a>
            }
        </nav>
    )
}

export default SocialBar