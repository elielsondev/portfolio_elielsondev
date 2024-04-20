import React from "react";
import whatsapp from "../utils/whatsapp.png";
import email from "../utils/email.png";

function SocialMedia() {
  return (
    <aside id="aside">
      <a href="https://www.linkedin.com/in/elielsondev/" target="_blank" rel="noopener noreferrer">
      <img
        className="socialMediaIcon"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg"
        alt="LinkedIn"
        title="LinkedIn"
      />
      </a>
      
      <a href="https://github.com/elielsondev" target="_blank" rel="noopener noreferrer">
      <img
        className="socialMediaIcon"
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg"
        alt="GitHub"
        title="GitHub"
      />
      </a>
      
      <a href="https://api.whatsapp.com/send?phone=5581994153137" target="_blank" rel="noopener noreferrer">
      <img
        className="socialMediaIcon"
        src={whatsapp}
        alt="WhatsApp"
        title="WhatsApp"
      />
      </a>
      
      <a href="https://form.jotform.com/222927711736056" target="_blank" rel="noopener noreferrer">
      <img
        className="socialMediaIcon"
        src={email}
        alt="E-mail"
        title="E-mail"
      />
      </a>
    </aside>
  );
}

export default SocialMedia;
