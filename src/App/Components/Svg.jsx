import React from 'react';

function Svg({ iconName }) {
    return (
      <img src={`../../resources/images/${iconName}.svg`} alt="" />
    )
}

export {Svg};