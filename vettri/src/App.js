import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import tony from "./tony.jpeg";
import aidslogo from "./CYAN_PNG.png"
import bg from "./bg.jpg"
import { render } from '@testing-library/react';


function App() {
  return (
    <div>
      <img src={bg} class="bg"></img>
      <div class="all">
        <div class="flex_container">
          <div><button onClick={this}><a href="https://www.google.com/" target="_blank" class="underline">Home</a></button></div>
          <div><button onClick={this}>Contact</button></div>
          <div><button onClick={this}>About</button></div>
        </div>
        <h1 class="vettri">Vettrikanth S</h1>
        <h2 class="all">RNO:21BAD062</h2>
        <h3>Holaaaaaaaaaaaa</h3>
        <p class="vercel">Hosting on Vercel</p>
        <div class="college">
          <a href="https://www.kct.ac.in/programmes/artificial-intelligence-data-science/" target="_blank" class="college">
            B Tech AI&DS 3rd yr
          </a>
        </div>
        <div class="all">
          <ol type="1">
            <li>Satoru Gojo</li>
            <li>Toji Fushiguro</li>
            <li>Sukuna</li>
          </ol>
          <img src={tony} height="400" width="400" class="side"></img>
          <ol type="a" start="10">
            <li>line 1</li>
            <li>line 2</li>
            <li>line 3</li>
          </ol>

          <ol type="I">
            <li>aaaa</li>
            <li>bbbb</li>
            <li>cccc</li>
          </ol>

          <ol>
            <li>Ash</li>
            <li>Pikachu</li>
          </ol>
        </div>

        <div class="all">
          <ul>
            <li>name 1</li>
            <li>name 2</li>
          </ul>

          <ul>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, laudantium!</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, laudantium!</li>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, laudantium!</li>
          </ul>
        </div>


        <div class="grid-container">
          <div class="grid-item">hii</div>
          <div class="grid-item">heyyy </div>
        </div>
      </div>

      <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus doloremque officia itaque illo ab
          sapiente.</p>
        <p>hey there how are you....</p>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>

      <div class="tony">
        <a href="https://variety.com/wp-content/uploads/2022/07/MCDAVEN_EC254.jpg" target="_blank" class="tony">
          Tony Starkkkk
        </a>
      </div>
      <img src={aidslogo} height="1141px" width="913px" class="center"></img>

      <button type="button" onclick="myfunhome()"> Home</button>
      <button type="button" onclick="myfunhome2()"> Conatct</button>
      <button type="button" onclick="myfunhome3()"> Address</button>


    </div>
  );
};


export default App;