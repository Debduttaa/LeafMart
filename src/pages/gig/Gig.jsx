import React from 'react'
import "./Gig.scss";
import { Slider } from "infinite-react-carousel/lib";

const Gig = () => {
  return (
    <div className="gig">
      <div className="container">
        <div className="left">
          <span className="breadCrumbs">PlantGPT</span>
          <h1> Our Suppliers</h1>

          <div className="user">
            <span> Apurba Das</span>
            <div className="stars">
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <span>4</span>
            </div>
          </div>
          <Slider slidesToShow={1} arrowsScroll={1} className="slider">
            <img
              src="https://i1.wp.com/pegplant.com/wp-content/uploads/2018/05/cinnamon-basil-3.jpg?ssl=1"
              alt=""
            />
            <img
              src="https://cdn11.bigcommerce.com/s-2drwt2az/images/stencil/original/products/48312/113467/apiyxt8rx__62745.1591012628.jpg"
              alt=""
            />
            <img
              src="https://i.etsystatic.com/18026585/r/il/7d6727/2067918269/il_1588xN.2067918269_7lma.jpg"
              alt=""
            />
          </Slider>
          <h2>About This Gig</h2>
          <p>
         I Placed the cutting in a jar filled with water and put it on a warm windowsill. Maintained a consistently warm environment. Changed the water every few days to prevent the growth of mould or stagnation. Once roots started to develop,I transfered the cutting into a pot filled with moist potting mix.
         <br />
         Direct sunlight is a must if you want to grow Tulsi plant faster and bushier as sunlight is one of the main ingredients in the process of photosynthesis which produces food for the plant to help it grow. You can grow it indoors as well.
          </p>
          <div className="seller">
            <h2>About The Seller</h2>
            <div className="user">
              <img
                src="https://thumbs.dreamstime.com/b/indian-villager-man-27099077.jpg"
                alt=""
              />
              <div className="info">
                <span>Apurba Das</span>
                <div className="stars">
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <img src="/img/star.png" alt="" />
                  <span>5</span>
                </div>
                <button>Contact Me</button>
              </div>
            </div>
            <div className="box">
              <div className="items">
                <div className="item">
                  <span className="title">From</span>
                  <span className="desc">India</span>
                </div>
                 {/* <div className="item">
                  <span className="title">Member since</span>
                  <span className="desc">Aug 2022</span>
                </div>  */}
                <div className="item">
                  <span className="title">Avg. response time</span>
                  <span className="desc">4 hours</span>
                </div> 
                { /* <div className="item">
                  <span className="title">Last delivery</span>
                  <span className="desc">1 day</span>
                </div> */ }
                <div className="item">
                  <span className="title">Languages</span>
                  <span className="desc">Hindi, Bengali</span>
                  
                </div>
              </div>
              <hr />
              <p>
              Myself Shri Apurba Das. I stay in a small village of India.
               I am 55 years old and completed my education till 5th class.
                Farming is our main occupation, on which our whole family depends on.
              <br />
              I visited many farms where improved technology of farming was being used
               and then I started collecting and reading the literature based on it.
               I am having 40 acres of land, in which on 25 acres of land cotton is grown, 
               on 5 acres soyabean, on 5 acres chilli and on remaining 5 acres of land other crops are were grown.
                When I started farming I used improved varieties of crops and more emphasis was
                 given on timely sowing, balance dose of fertilizer and control of pest.
              </p>
            </div>
          </div>
          <div className="reviews">
            <h2>Reviews</h2>
            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="https://as1.ftcdn.net/v2/jpg/01/87/83/28/1000_F_187832891_5QI3FYgASyTxuMbsgA3cVUkCFONyc6JX.jpg"
                  alt=""
                />
                <div className="info">
                  <span>Ayanika Sikdar</span>
                  <div className="country">
                    <img
                      src="https://png.pngtree.com/png-vector/20210129/ourlarge/pngtree-the-national-flag-of-india-png-image_2845292.jpg"
                      alt=""
                    />
                    <span>India</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
              Beautiful plant and excellent planter quality
                {/* I just want to say that art_with_ai was the first, and after
                this, the only artist Ill be using on Fiverr. Communication was
                amazing, each and every day he sent me images that I was free to
                request changes to. They listened, understood, and delivered
                above and beyond my expectations. I absolutely recommend this
                gig, and know already that Ill be using it again very very soon */}
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
              </div>
            <hr />
            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="https://media.istockphoto.com/id/613557584/photo/portrait-of-a-beautifull-smiling-man.jpg?s=612x612&w=0&k=20&c=hkCg5CrmTKOApePbPOyo1U9GexEfIJOJqoLXJIvcN8E="
                  alt=""
                />
                <div className="info">
                  <span>Aditya Bhadra</span>
                  <div className="country">
                    <img
                      src="https://png.pngtree.com/png-vector/20210129/ourlarge/pngtree-the-national-flag-of-india-png-image_2845292.jpg"
                      alt=""
                    />
                    <span>India</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
              I love my plants and the essential plant hydration & nutrients kit is going to help me care for them.
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
            <hr />
            <div className="item">
              <div className="user">
                <img
                  className="pp"
                  src="https://t3.ftcdn.net/jpg/03/96/78/06/360_F_396780640_mO95sH5ITG2sD3RdOd7fh3olapEkupXW.jpg"
                  alt=""
                />
                <div className="info">
                  <span>Arka Sarkar </span>
                  <div className="country">
                    <img
                      src="https://png.pngtree.com/png-vector/20210129/ourlarge/pngtree-the-national-flag-of-india-png-image_2845292.jpg"
                      alt=""
                    />
                    <span>India</span>
                  </div>
                </div>
              </div>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <p>
                
              As a person who suffers from. Lack of a green thumb, having access to Apurba through his virtual sessions is invaluable and as a result our plant continues to thrive! We set up a session at least once per year for a check up. Great add on to the great service Apurba and his team provide when purchasing plants!
              </p>
              <div className="helpful">
                <span>Helpful?</span>
                <img src="/img/like.png" alt="" />
                <span>Yes</span>
                <img src="/img/dislike.png" alt="" />
                <span>No</span>
              </div>
            </div>
          </div>

        </div>
        
        <div className="right">
        <div className="price">
            <h3>1 Holy Basil Plant</h3>
            <h2>₹ 120.00</h2>
          </div>
          <p>
            I will create a unique high quality AI generated image based on a
            description that you give me
          </p>
          <div className="details">
            <div className="item">
              <img src="/img/clock.png" alt="" />
              <span>2 Days Delivery</span>
            </div>
            <div className="item">
              <img src="/img/recycle.png" alt="" />
              <span>3 Revisions</span>
            </div>
          </div>
          <div className="features">
            <div className="item">
              {/* <img src="/img/greencheck.png" alt="" /> */}
              {/* <span>Prompt writing</span> */}
            </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Delivery</span>
              </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Image upscaling</span>
            </div>
            <div className="item">
              <img src="/img/greencheck.png" alt="" />
              <span>Additional Changes</span>
            </div>
          </div>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Gig
