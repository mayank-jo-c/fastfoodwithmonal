import React from 'react'
import Navbar from '../component/Navbar'
import aloo_paratha from '../img/aloo paratha.webp';
import '../firebase';
import { getDatabase, ref, set } from "firebase/database";
import { useState } from 'react';
import { getAuth, signInWithPhoneNumber } from "firebase/auth";


const Main = () => {
    const [name,setName] = useState();
    const [email,setEmail] = useState();
    const [message,setMessage] = useState();
    const [userId,setUserId] = useState();
  
    function writeUserData() {
      generateUserId();
      const db = getDatabase();
    set(ref(db, "users/" + userId), {
      username: name,
      email: email,
      message: message
    }).then(() => {
      console.log("User data written successfully!");
    }).catch((error) => {
      console.error("Error writing user data:", error);
    });
  
    }
  
    const uploadFeedback = () =>{
      console.log("it's runned")
      writeUserData();
    }
    const generateUserId = () => {
      const min = 1;
      const max = 100;
      const newRandomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
      setUserId(newRandomNumber);
    };
  
  
  

  return (
    <>
        <Navbar/>
    <section class="showcase-area" id="showcase">
        <div class="showcase-container">
            <h1 class="main-title" id="home">Eat, Eat, Rep-Eat</h1>
            <p>Low cost. High quality.</p>
            <a href="#food-menu" class="btn btn-primary">Menu</a>
        </div>
    </section>

    <section id="about">
        <div class="about-wrapper container">
            <div class="about-text">
                <p class="small">About Us</p>
                <h2>Open : 5AM to 9PM , Hungry ? Eat anytime!</h2>
                <p>
                    <b>Address:</b>
                    Bhagirathipuram Tehri, Tehri Garhwal Pincode-249124 Uttarakhand India
                </p>
            </div>
            <div class="about-img">
                <img src="https://i.postimg.cc/mgpwzmx9/about-photo.jpg" alt="food" />
            </div>
        </div>
    </section>
    <section id="food">
        <h2>Beverages</h2>
        <div class="food-container container">
            <div class="food-type fruite">
                <div class="img-container">
                    <img src="Tea 3.jpg"  height="900" width="800" alt="error" />
                    <div class="img-content">
                        <h3>Tea</h3>
                        <a href="https://en.wikipedia.org/wiki/tea" class="btn btn-primary" target="blank">learn
                            more</a>
                    </div>
                </div>
            </div>
            <div class="food-type vegetable">
                <div class="img-container">
                    <img src="cold coffee.webp"  height="1000" width="1000" alt="error" />
                    <div class="img-content">
                        <h3>Cold Coffee</h3>
                        <a href="https://en.wikipedia.org/wiki/iced coffee" class="btn btn-primary" target="blank">learn
                            more</a>
                    </div>
                </div>
            </div>
            <div class="food-type grin">
                <div class="img-container">
                    <img src="banana shake.jpg" height="1000" width="1000" alt="error" />
                    <div class="img-content">
                        <h3>Banana Shake</h3>
                        <a href="https://www.indianhealthyrecipes.com/banana-milkshake-recipe/" class="btn btn-primary" target="blank">learn
                            more</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section id="food-menu">
        <h2 class="food-menu-heading">Aaj Kya Khana Bana Hai?</h2>
        <div class="food-menu-container container">
            <div class="food-menu-item">
                <div class="food-img">
                    <img src="bread-omelette.jpg" alt="" />
                    <div class="card">                
                 </div>
                </div>
                <div class="food-description">
                    <h2 class="food-titile">Bread Omlet</h2>
                    <p>
                     The recipe is made from fresh eggs and is well served with tomato ketchup. 
                    </p>
                    <p class="food-price">Price: &#8377; 35</p>
                    <div class="btn-container">
                        <button class="btn" id="addToCartBtn1" onclick="addToCart('Watermelon', 2.50)"><a href="Order/index.html"target="_main">Order Now</a></button>
                     </div>
                </div>
            </div>

                <div class="food-menu-item">
                    <div class="food-img">
                        <img src="rajma chawal.jpg" alt="" />
                    </div>
                    <div class="food-description">
                        <h2 class="food-titile">Rajma Chawal</h2>
                        <p>
                            Every indian's first choice for lunch , served hot !
                        </p>
                        <p class="food-price">Price: &#8377; 50</p>
                        <div class="btn-container">
                            <button class="btn" id="addToCartBtn1" onclick="addToCart('Watermelon', 2.50)"><a href="Order/index.html"target="_main">Order Now</a></button>
                        </div>
                    </div>
            </div>
            <div class="food-menu-item">
                <div class="food-img">
                    <img src={aloo_paratha} alt="" />
                </div>
                <div class="food-description">
                    <h2 class="food-titile">Aloo Paratha</h2>
                    <p>
                        Eat the best Aloo Paratha in the Campus , here at Monal Fast Food corner. 
                    </p>
                    <p class="food-price">Price: &#8377; 60</p>
                    <div class="btn-container">
                        <button class="btn" id="addToCartBtn1" onclick="addToCart   ('Watermelon', 2.50)"><a href="Order/index.html"target="_main">Order Now</a></button>
                     </div>
                </div>
            </div>
            <div class="food-menu-item">
                <div class="food-img">
                    <img src="paneer roll.jpg" alt="" />
                </div>
                <div class="food-description">
                    <h2 class="food-titile">Paneer Roll</h2>
                    <p>
                        Vegetarian heaven , Crispy Paneer rolls are now available.
                    </p>
                    <p class="food-price">Price: &#8377; 50</p>
                    <div class="btn-container">
                        <button class="btn" id="addToCartBtn1" onclick="addToCart('Watermelon', 2.50)"><a href="Order/index.html"target="_main">Order Now</a></button>
                     </div>
                </div>
            </div>
            <div class="food-menu-item">
                <div class="food-img">
                    <img src="chilli potato.jpg" alt="" />
                </div>
                <div class="food-description">
                    <h2 class="food-titile">Chilli Potato</h2>
                    <p>
                        Who can miss this chinese fast food recipe when hanging out with Family or Friends at our restraunt , try now.
                    </p>
                    <p class="food-price">Price: &#8377; 90</p>
                    <div class="btn-container">
                        <button class="btn" id="addToCartBtn1" onclick="addToCart('Watermelon', 2.50)"><a href="Order/index.html"target="_main">Order Now</a></button>
                     </div>
                </div>
            </div>
            <div class="food-menu-item">
                <div class="food-img">
                    <img src="chole bhature.jpg" alt="" />
                </div>
                <div class="food-description">
                    <h2 class="food-titile">Chole Bhature</h2>
                    <p>
                        One of the most liked north indian food that everyone has once tasted in their lifetime , go on and have a bite.
                    </p>
                    <p class="food-price">Price: &#8377; 60</p>
                    <div class="btn-container">
                        <button class="btn" id="addToCartBtn1" onclick="addToCart('Watermelon', 2.50)"><a href="Order/index.html"target="_main">Order Now</a></button>
                     </div>
                </div>
            </div>
        </div>
    </section>
    <section id="testimonials">
        <h2 class="testimonial-title">What Our Customers Say</h2>
        <div class="testimonial-container container">
            <div class="testimonial-box">
                
                <div class="customer-detail">
                    <div class="customer-photo">
                        <img src="https://i.postimg.cc/5Nrw360Y/male-photo1.jpg" alt="" />
                        <p class="customer-name">Mayank Joshi</p>
                    </div>
                </div>
                <div class="star-rating">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                </div>
                <p class="testimonial-text">
                    Food was very good but the green chilli was very spicy , although i'm satisfied and happy with the service and hospitality
                </p>

            </div>
            <div class="testimonial-box">
                <div class="customer-detail">
                    <div class="customer-photo">
                        <img src="https://i.postimg.cc/sxd2xCD2/female-photo1.jpg" alt="" />
                        <p class="customer-name">Naman Gusain</p>
                    </div>
                </div>
                <div class="star-rating">
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class="fa fa-star checked"></span>
                    <span class=""></span>
                    <span class=""></span>
                </div>
                <p class="testimonial-text">
                    The food was good and the quantity was well , but the area had animals around which made the customers uncomfortable.
                </p>

            </div>
            <div class="testimonial-box">
                <div class="customer-detail">
                    <div class="customer-photo">
                        <img src="ravi.jpg" alt="" />
                        <p class="customer-name">Ravi Choudhary</p>
                    </div>
                </div>
                <div class="star-rating">
                    <span class="fa fa-star checked"></span>
                    <span class=""></span>
                    <span class=""></span>
                    <span class=""></span>
                    <span class=""></span>
                </div>
                <p class="testimonial-text">
                    The food was presented to us late and cold , the taste was good but the warmth of the food was gone so i am unhappy.
                </p>

            </div>
        </div>
    </section>
    <section id="contact">
        <div class="contact-container container">
            <div class="contact-img">
            </div>

            <div class="form-container">
                <h2>Contact Us</h2>
                <input type="text" id="name" placeholder="Your Name" onChange={(e) => setName(e.target.value)}/>
                <input type="email" id="email"  placeholder="E-Mail" onChange={(e) => setEmail(e.target.value)} />
                <textarea cols="30" rows="6" id="message" placeholder="Type Your Message" onChange={(e) => setMessage(e.target.value)}></textarea>
                <button onClick={uploadFeedback} class="btn btn-primary">Submit</button>
            </div>
        </div>
    </section>
    <footer id="footer">
        <h2>Restraunt &copy; all rights reserved</h2>
    </footer> 
    </>

  )
}

export default Main