import React, {useState} from "react";

function colorpicker()
{
    const [color,setColor]=useState("#ffffff");

    function handleColorChange(event){
         const newColor = event.target.value;
         setColor(newColor);
         document.body.style.backgroundColor = newColor;
    }
    return (
      <div className="color-picker-cointainer">
        <h2>Color Picker</h2>
        <p>Selected color: {color}</p>
        <label htmlFor="">Select background color:</label>
        <input type="color" value={color} onChange={handleColorChange} />
      </div>
    );
}

export default colorpicker;
