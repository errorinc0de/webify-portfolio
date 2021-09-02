import './SocialLinks.css';
import SocialLinksJson from './allData.json';
import React from 'react';

const socialLinks = SocialLinksJson.links;
const socialLinksCount = socialLinks.length;

function SocialLinks() {
  const socialLinksRenderLeft = socialLinks.slice(0,socialLinksCount/2).map((each,index) => {
    return(
      <div key={index} className="icoSocial">
        <a href={each.profile} target="_blank" rel="external noreferrer">
          <img src={each.icon_default} alt="title"/>
        </a>
      </div>
    )
  })

  const socialLinksRenderRight = socialLinks.slice(socialLinksCount/2,socialLinksCount).map((each,index) => {
    return(
      <div key={index} className="icoSocial">
        <a href={each.profile} target="_blank" rel="external noreferrer">
          <img src={each.icon_default} alt={each.title} />
        </a>
      </div>
    )
  })

  return (
    <div className="socialLinksContainer">
      <div className="socialLinksLeft">
        {socialLinksRenderLeft}
      </div>
      <div className="socialLinksRight">
        {socialLinksRenderRight}
      </div>
    </div>
  )
}

export default SocialLinks;

