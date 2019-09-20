import React, { useState, useEffect } from "react";
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import { connect } from 'react-redux';
import { getColors } from '../actions';

const BubblePage = props => {
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  useEffect(() => {
    props.getColors()
  },[])

  return (
    <>
    Hello
      <ColorList />
      <Bubbles />
    </>
  );
};

const mapStateToProps = state => {
  return state
}
export default connect(mapStateToProps, {getColors})(BubblePage);
