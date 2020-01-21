import React, { Component } from 'react';

import '../scss/home.scss';

import Title from '../components/title';
import SimpleSlider from  '../components/Slider';
import List from '../components/list';

class Home extends Component {
  render(){
    return(
			<div>
				<Title  name="HOME" />
				<SimpleSlider />
				<List title={"カテゴリーで探す"}/>
			</div>
    )
  }
}

export default Home