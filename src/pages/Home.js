import React, { Component } from 'react';

import Title from '../components/Title';
import SimpleSlider from  '../components/Slider';
import List from '../components/List';
import Menu from '../components/Menu'

class Home extends Component {
  render(){
    return(
			<div className="homeWrap">
				<Title  name="HOME" />
				<SimpleSlider />
				<List title={"カテゴリーで探す"}/>
				<List title={"価格で探す"}/>
				<Menu />
			</div>
    )
  }
}

export default Home