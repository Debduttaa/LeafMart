import React, { useRef, useState } from 'react'
import "./Gigs.scss"
import { gigs } from "../../data";
import GigCard from "../../components/gigCard/GigCard"


function Gigs() {
    const [sort, setSort] = useState("sales");
    const [open, setOpen] = useState(false);
    const minRef = useRef();
    const maxRef = useRef();


    const reSort = (type) => {
      setSort(type);
      setOpen(false);
    };

    const apply = ()=>{
      console.log(minRef.current.value)
      console.log(maxRef.current.value)
    }

  return (
    <div className='gigs'>
      <div className="container">
        <span className="breadcrumbs">PlantGPT</span>
        <h1>Herbal Plants</h1>
        <p>
        Indian herbs are renowned all over the world for their medicinal properties. India is the second highest producer of medicinal herbs in the world, after China. Himalayas, Aravalis, and Nilgiri mountains are the greatest reserves of medicinal herbs in India. Ayurveda, the traditional Indian form of medicine, has been using herbs for thousand of years.
        <br />
        <br />
        In India, medicinal plants are widely used by all sections of the population and it has been estimated that, in total over 7500 species of plants are used by several ethnic communities (AICEP 1994; Anthropological survey of India 1994).

Presently, medicinal plants play a very important role in the modern economy. NTFPs account for 70% of India's forest product exports and the demand for phytochemicals is expected to increase in future as a new frontier for trade. India has probably the oldest, richest and most diverse cultural traditions in the use of medicinal plants.
        <br />
        <br />
        The term “medicinal plant” includes various types of plants used in herbalism.
Nowadays, Herbal plants refer to any part of the plant like fruit,
seed, stem, bark, flower, leaf, stigma, or a root, as well as a non-woody plant.
Herbal plant remedies are in join us with nature, which is the biggest advantage.
There is no side Effect in this plant.
        </p>
        <div className="menu">
          <div className="left">
            <span>Budget</span>
            <input ref={minRef} type="number" placeholder="min" />
            <input ref={minRef} type="number" placeholder="max" />
            <button onClick={apply}>Apply</button>
          </div>
          <div className="right">
              <span className="SortBy">Sort By</span>
              <span className="SortType">
                {sort === "sales" ? "Best Selling" : "Newest"}
                </span>
              <img src="./img/down.png" alt="" onClick={() => setOpen(!open)} />
              {open && (
              <div className="rightMenu">
                {sort === "sales" ? (
                <span onClick={()=>reSort("createdAt")}>Newest</span>
                ) : (
                <span onClick={()=>reSort("sales")}>Best Selling</span>
                )}
                <span onClick={() => reSort("sales")}>Popular</span>
              </div>
              )}
          </div>
        </div>
        <div className="cards">
        {gigs.map((gig) => (
            <GigCard key={gig.id} item={gig} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gigs;
