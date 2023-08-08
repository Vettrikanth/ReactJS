import * as React from 'react';
import tony from "./image/tony.jpeg";
import aidslogo from "./image/CYAN_PNG.png"
import bg from "./image/bg.jpg"
import './Profile.css'

const Profile = () => {
    return (
        <div>
        <img src={bg} class="bg"></img>
        <div class="all">
          <br></br>
          {/* <div class="flex_container">
            <div><button onClick={this}><a href="https://www.google.com/" target="_blank" class="underline">Home</a></button></div>
            <div><button onClick={this}>Contact</button></div>
            <div><button onClick={this}>About</button></div>
          </div> */}
          <h1 class="vettri">Vettrikanth S</h1>
          <h2 class="all">RNO:21BAD062</h2>
          <h3>Holaaaaaaaaaaaa</h3>
          <p class="vercel">Currently Hosting this on Vercel</p>
          <div class="college">
            <a href="https://www.kct.ac.in/programmes/artificial-intelligence-data-science/" target="_blank" class="college">
              B Tech AI&DS 3rd yr
            </a>
          </div>
          <h4>About:</h4>
          <p>Currently a student pursuing AI&DS and intrested in Data science field</p>
          <div class="all">
            <img src={tony} height="400" width="400" class="side"></img>
            <ol type="1">
              <p>Personality:</p>
              <li>Open minded</li>
              <li>Good team lead</li>
              <li>Extrovert</li>
            </ol>
            <p>Education :</p>
            <p>SSLC-Bala Matric Higher Secondary School</p>
            <p>HSC-Bala Matric Higher Secondary School</p>
            <ul>
              <li>Received MG for 2022</li>
            </ul>
          </div>
  
          <div class="all">
            <ul>
              <p>Hobbies</p>
              <li>Anime</li>
              <li>Drive</li>
              <li>Watch Movies/Series</li>
              <li>Cricket</li>
              <li>Travel</li>
            </ul>
              <ol>
              <p>Favourite Anime Characters:</p>
              <li>Naurto</li>
              <li>Asta</li>
              <li>Gojo</li>
            </ol> 
          </div>
  
  
          <div class="grid-container">
            <div class="grid-item">Vettrikanth</div>
            <div class="grid-item">21BAD062</div>
          </div>
        </div>
        <br></br><br></br>
        <div class="tony">
          <a href="https://variety.com/wp-content/uploads/2022/07/MCDAVEN_EC254.jpg" target="_blank" class="tony">
            Tony Starkkkk
          </a>
        </div>
        <img src={aidslogo} height="1141px" width="913px" class="center"></img>
      
       {/* { show && <div>
          <p>Hii there</p>
          </div>
           }
        <button type="button" onClick={myfunhome1}> Home</button> */}
        </div>



    );

  };
  
  export default Profile;