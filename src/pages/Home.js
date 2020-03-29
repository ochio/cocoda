import React, { Component } from 'react';

import Title from '../components/Title';
import SimpleSlider from  '../components/Slider';
// import List from '../components/List';
import List from '../containers/List';
import Menu from '../components/Menu';
import History from '../components/History'

class Home extends Component {
  render(){
    return(
			<div className="homeWrap">
				<Title  name="HOME" />
				<SimpleSlider />
				{sessionStorage.length ? <History /> : ""}
				<List title={"カテゴリーで探す"}/>
				<List title={"価格で探す"}/>
				<Menu />
			</div>
    )
  }
}

export default Home