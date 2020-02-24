import React from "react";
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import mvStb from '../img/mv_stb.png';
// import iconStb from '../img/mv_stb_icon.png';

class SimpleSlider extends React.Component {
  render() {
    const mvSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
			slidesToScroll: 1,
			className:"slideBg",
    };
    return (
      <Slider {...mvSettings}>
          <div>
            <div>
              <img className="slider_img" src={mvStb} alt="スターバックス"/>
            </div>
            <div className="slider_itemNameInner">
              <p className="slider_itemName">ドリンクチケット（500円）</p>
              <p className="slider_shopName">Starbucks Coffee Japan</p>
            </div>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
      </Slider>
    );
  }
}

export default SimpleSlider