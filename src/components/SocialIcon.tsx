// SocialIcons.tsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faFilePdf as solidFilePdf } from "@fortawesome/free-solid-svg-icons";

const SocialIcons: React.FC = () => {
  return (
    <div className="hover-text md:text-5xl text-xl lg:text-6xl ml-auto px-5 flex space-x-5 mt-5 md:text-lg md:text-right self-end justify-end">
      <a
        href="https://github.com/Chickenroast"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} className="hover:text-bold" />
      </a>
      <a
        href="https://linkedin.com/in/julia-michel-teixeira-067a64291"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a
        href="./JULIA-MICHEL-TEIXEIRA.pdf"
        download="Julia Michel Teixeira CV"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={solidFilePdf} />
      </a>
    </div>
  );
};

export default SocialIcons;
