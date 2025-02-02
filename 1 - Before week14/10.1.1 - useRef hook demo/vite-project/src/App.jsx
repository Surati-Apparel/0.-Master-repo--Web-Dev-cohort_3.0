import { useState, useRef } from 'react'
import React from 'react';
import ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";

import './App.css'

class Slider extends React.Component {
  
  componentDidMount() {    
    new Swiper(this.refs.slider,{
      slidesPerView : this.props.slidePerView,
      slidesPerGroup: this.props.slidesPerGroup,
      loop: this.props.loop,
      freeMode: true
   });
  }
  
  render() {
    return (
      <div className="containerSlider">
        <div className="swiper-container" ref="slider">
          <div className="swiper-wrapper">
            {this.props.children}
          </div> 
        </div>
      </div>
    )
  }
}

Slider.propTypes = {
  slidePerView: React.PropTypes.string,
  slidesPerGroup : React.PropTypes.string,
  loop : React.PropTypes.string
};

function Сountries(props) {
  return(
    <div className="swiper-slide">
      
      <div className="countryTitle">
        <h2 className="countryTitle__name">{props.countryTitle}</h2>
      </div>
      
      <div className="painter">
        <div className="painter__info">
          
          <div className="painter__textWrap">
            <div className="painter__text">
              <h1 className="painter__name">{props.name}</h1>
              <p className="painter__years">{props.born}</p>
            </div>
          </div>
          
          <div className="painter__imgWrap">
            <div className="painter__img">
              <div className={`painter__imgBg _bg_${props.class}`}></div>
            </div>
          </div>
          
        </div>
      </div>
      
      <div className="painter">
        <div className="painter__info">
          
          <div className="painter__textWrap">
            <div className="painter__text">
              <h1 className="painter__name">{props.name2}</h1>
              <p className="painter__years">{props.born2}</p>
            </div>
          </div>
          
          <div className="painter__imgWrap">
            <div className="painter__img">
              <div className={`painter__imgBg _bg_${props.class2}`}></div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

class App extends React.Component {
  render() {
    return (
      <Slider slidePerView="auto" slidesPerGroup="7">
        <Сountries countryTitle="Italy" 
          name="Titian Vecellio" born="1488 - 1576" class="titian"
          name2="Leonardo da Vinci" born2="1452 - 1519" class2="vinci" />
        <Сountries countryTitle="France" 
          name="Louis-Michel van Loo" born="1707 - 1771" class="vanLoo"
          name2="Eugene Delacroix" born2="1798 - 1863" class2="delacroix" />
        <Сountries countryTitle="Spain" 
          name="Bartholomew Murillo" born="1618 - 1682" class="murillo"
          name2="El Greco" born2="1541 - 1614" class2="greco" />
        <Сountries countryTitle="Belgium" 
          name="Jan van Eyck" born="1385 - 1441" class="eyck"
          name2="Anthony van Dyck" born2="1599 - 1641" class2="dyck" />
        <Сountries countryTitle="Germany" 
          name="Rafael Mengs" born="1728 - 1779" class="mengs"
          name2="Franz Xaver Winterhalter" born2="1818 - 1885" class2="winterhalter" />
        <Сountries countryTitle="Russia" 
          name="Karl Pavlovich Brullov" born="1799 - 1852" class="brullov"
          name2="Viktor Mikhailovich Vasnetsov" born2="1848 - 1926" class2="vasnetsov" />
        <Сountries countryTitle="Netherlands" 
          name="Pieter Bruegel The Elder" born="1525 - 1569" class="bruegel"
          name2="Peter Paul Rubens" born2="1577 - 1640" class2="rubens" />
      </Slider>
    )
  }
}

function Clock() {
  const [counter, setCounter] = useState(1);
  let clock = useRef(0);
  console.log("component rendered", {counter})

  function startClock() {
    clock.current = setInterval(()=>{
      setCounter(val=>val+1);
    }, 1000);
  }

  function stopClock() {
    clearInterval(clock.current);
  }

  return(<>
    <div>{counter}</div>
    <button onClick={startClock}> Start clock </button>
    <button onClick={stopClock}> Stop clock </button>
  </>)
}

function Input() {
  const refEmail = useRef();
  const refPassword = useRef();
  
  function focusOnInput() {
    refEmail.current.focus();
    refPassword.current.focus();
  }

  return(<>
    <input ref={refEmail} type="text" name="email" id="email" placeholder='email'/>
    <input ref={refPassword} type="text" name="password" id="password" placeholder='password'/>
    <button onClick={focusOnInput} type='submit'>Submit</button>
  </>)
}

export default App
