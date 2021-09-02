import React from 'react';
import './animIntro.css';
import { Code,School } from '@material-ui/icons';
import Switch from 'react-switch';
import SocialLinks from './SocialLinks';


function AnimIntro() {

    const [checked, setChecked] = React.useState(false);

    const toggleChecked = () => {
        setChecked((prev) => !prev);
    };

    return (
        <>
            {checked && <SocialLinks />}
            <div className="wrapper">
                <Switch onChange={toggleChecked} value={checked} checked={checked} className="react-switch" uncheckedIcon={false} checkedIcon={false} handleDiameter={28} boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)" activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)" height={20} width={48} onColor="#c59fe9" onHandleColor="#7922d7"/>
                <div className="anim">
                    <div className="animDetails">
                        <div id="picture"><img className="pictureP" src="https://raw.githubusercontent.com/errorinc0de/errorinc0de/main/12.jpeg" alt="Soham Sarkar"/></div>
                        <div id="name">Soham Sarkar</div>
                        <div id="education"><School fontSize="small"/> RCC Institute of Information Technology, Calcutta</div>
                        <div id="occupation"><Code fontSize="small"/> Full Stack Developer</div>
                    </div>
                </div>
            </div>
        </>
    )
};

export default AnimIntro;
