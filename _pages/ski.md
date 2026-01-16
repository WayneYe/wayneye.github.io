---
title: "Ski Instructor"
permalink: /ski/
# type: "pages"
layout: single
classes: wide
# layout: raw-page
author_profile: false
---

<style>
body {
    margin: 0;
    background: lightgray;
    font-family: sans-serif;
    color: #fefefe;
}

.carousel-container {
    position: relative;
    width: 320px;
    margin: 60px auto 0 auto;
    perspective: 1000px;
    height: 360px;
    top: 2em;
}

/* Mobile/Tablets */
@media (max-width: 600px) {
    .carousel-container {
        position: relative;
        width: 320px;
        margin: 10px auto 0 auto;
        perspective: 2000px;
        height: 320px;
        top: 1em;
    }

}

.carousel {
    position: absolute;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d; 
    animation: rotate360 60s infinite forwards linear;
}
.carousel__face { 
    position: absolute;
    width: 300px;
    height: 260px;
    top: 20px;
    left: 10px;
    right: 10px;
    background-size: cover;
    box-shadow:inset 0 0 0 2000px rgba(0,0,0,0.5);
    display: flex;
}

span {
    margin: auto;
    font-size: 2rem;
}

.carousel__face:nth-child(1) {
    background-image: url("/assets/images/ski/Group-Lesson.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
    transform: rotateY(  0deg) translateZ(430px); 
}
.carousel__face:nth-child(2) { 
    background-image: url("/assets/images/ski/Heavenly_view_background.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
    transform: rotateY( 40deg) translateZ(430px); 
}
.carousel__face:nth-child(3) {
    background-image: url("/assets/images/ski/Me_wearing_uniform.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
    transform: rotateY( 80deg) translateZ(430px); 
}
.carousel__face:nth-child(4) {
    background-image: url("/assets/images/ski/me_zhidian.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
    transform: rotateY(120deg) translateZ(430px); 
}
.carousel__face:nth-child(5) { 
    background-image: url("/assets/images/ski/SD_Kids.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
    transform: rotateY(160deg) translateZ(430px); 
}
.carousel__face:nth-child(6) { 
    background-image: url("/assets/images/ski/uniform.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
    transform: rotateY(200deg) translateZ(430px); 
}
.carousel__face:nth-child(7) { 
    background-image: url("/assets/images/ski/With_Jinjin.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
    transform: rotateY(240deg) translateZ(430px); 
}
.carousel__face:nth-child(8) {
    background-image: url("/assets/images/ski/With_family.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
    transform: rotateY(280deg) translateZ(430px); 
}
.carousel__face:nth-child(9) {
    background-image: url("/assets/images/ski/Me-snowboarding.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260");
    transform: rotateY(320deg) translateZ(430px); 
}

@keyframes rotate360 {
  from {
    transform: rotateY(0deg);
      }
  to {
    transform: rotateY(-360deg);
      }

</style>

<div class="carousel-container">
    <div class="carousel">
        <div class="carousel__face"><span></span></div>
        <div class="carousel__face"><span></span></div>
        <div class="carousel__face"><span></span></div>
        <div class="carousel__face"><span></span></div>
        <div class="carousel__face"><span></span></div>
        <div class="carousel__face"><span></span></div>
        <div class="carousel__face"><span></span></div>
        <div class="carousel__face"><span></span></div>
        <div class="carousel__face"><span></span></div>
  </div>
</div>

<!-- <div style="display: flex; flex-wrap: wrap; gap: 16px;"> -->
<!--     <img src="/assets/images/ski/Group-Lesson.jpg" alt="Group Ski Lesson" style=""> -->
<!-- </div> -->

## Self-intro

As a PSIA-Certified Ski Instructor working at the beautiful Heavenly Mountain Resort in South Lake Tahoe since 2020, I have coached 500+ people to learn/improve Ski, I bring a wealth of experience and passion to teaching skiing at all levels. Specializing in personalized instruction for beginners through advanced skiers, I am dedicated to creating a safe, fun, and transformative learning experience.

My approach combines professional technical training with a commitment to helping each student build confidence and skill on the slopes. Whether you're a first-time skier looking to learn the basics or an experienced rider seeking to refine your technique on carving, free-stlye, mogul, I offer tailored private lessons at Heavenly that will elevate your skiing journey. 

I speak fluent English (working proffessional) and Chinese (native speaker).

## About Me
- **Certification**: PSIA Certified Ski Instructor (Alpine Level 1)
- **Experience**: 5 years working at Heavenly Mountain Resort, coached 400+ kids and 300+ adults to learn/improve their Ski
- **Favorite Ski Spot**: Stagecoach/Olympic @ Heavenly
- **Fun Fact**: What am I doing while not Skinng⛷️?  I am snowboarding🏂!

## Videos
<div class="grid__wrapper">
  <div class="grid__item half">
    {% include video id="jwbCHYmXixk" provider="youtube" %}
  </div>
  <div class="grid__item half">
    {% include video id="VEgXWNplLrs" provider="youtube" %}
  </div>
  <div class="grid__item half">
    {% include video id="g9UhgjeaZ20" provider="youtube" %}
  </div>
  <div class="grid__item half">
    {% include video id="434XiY2Bjmk" provider="youtube" %}
  </div>
</div>

## PSIA Certifications
<figure class="half">
	<a href="/assets/images/ski/Certificate_The_Alpine_Skiing_Fundamentals_Course.jpg"><img src="/assets/images/ski/Certificate_The_Alpine_Skiing_Fundamentals_Course.jpg"></a>
	<a href="/assets/images/ski/Alpine_Level_1_Digital_Certificate.jpg"><img src="/assets/images/ski/Alpine_Level_1_Digital_Certificate.jpg"></a>
</figure>


## Private Lesson
<a href="https://heavenlysrs.com/private-lesson-request-form/" target="_blank">⛷️Book a private lesson with me⛷️</a>
