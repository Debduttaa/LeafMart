import React from "react";
import "./ProjectCard.scss";
import { Link } from 'react-router-dom'

const ProjectCard = ({ item }) => {
  return (
    <Link to="/" className='link'>
    <div className="ProjectCard">
      <img src={item.img} alt="" />
      <div className="info">
        {/* <img src="" alt="" /> */}
        <div className="texts">
          <h2>{item.title}</h2>
          {/* <span>{item.Family}</span> */}
          <span>{item.pp}</span>
        </div>
      </div>
    </div>
    </Link>
  );
}

export default ProjectCard;