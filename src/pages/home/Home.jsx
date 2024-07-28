import React from 'react'
import "./Home.scss"
import Featured from '../../components/featured/Featured'
import Slide from '../../components/Slide/Slide'
import CatCard from "../../components/catCard/CatCard"
import {cards, projects } from "../../data"
import ProjectCard from "../../components/projectCard/ProjectCard"

const Home = () => {
  return (
    <div className='home'>
     <Featured/>
     <Slide slidesToShow={4} arrowsScroll={4}>
      {cards.map(card=>(
        <CatCard key={card.id} item={card}/>
      ))}
     </Slide>
     <div className="features">
      <div className="container">
        <div className="item">
          <h1>A whole world of herbal plants at your fingertips</h1>
          <div className="title">
            <img src="./img/check.png" alt="" />
            The best for every budget
          </div>
          <p>
            Find high-quality services at every price point.
            Just plant-based pricing.
          </p>

          <div className="title">
            <img src="./img/check.png" alt="" />
            Protected payments, every time
          </div>
          <p>
          Always know what you'll pay upfront. Your payment isn't released
              until you approve the work.
          </p>

          <div className="title">
            <img src="./img/check.png" alt="" />
            Vision
          </div>
          <p>
          PlantGPT envisions a healthy India in the 
          future which can avoid fighting climate change
          by creating a greener Bharath now.
          </p>

          <div className="title">
            <img src="./img/check.png" alt="" />
            Mission
          </div>
          <p>
          To work toward an equitable health system by
          ensuring access to garden space and healthy
          plants, and by educating beginning farmers and
          gardeners of all ages.
          </p>
        </div>
      </div>
     </div>
      <div className="features dark">
        <div className="container">
          <div className="item">
          <h1>PlantGPT Business</h1>
          <h1>A business solution designed for teams</h1>
          <p>Upgrade to a curated experience packed with tools andd benefits,
            dedicated to businesses
          </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Connect to farmers with proven business experience
            </div>

            <div className="title">
              <img src="./img/check.png" alt="" />
              Get matched to a perfect medicinal plant by a customer success manager
            </div>

            <div className="title">
              <img src="./img/check.png" alt="" />
              Manage teamwork and boost productivity with one powerful workspace.
            </div>
            <button>Explore PlantGPT Business</button>
            <div className="item">
              <img src="" alt="" />
            </div>
            
          </div>
        </div>
      </div>
      <Slide slidesToShow={4} arrowsScroll={4}>
      {projects.map((card)=>(
        <ProjectCard key={card.id} item={card}/>
      ))}
     </Slide>
    </div>
  );
};

export default Home
