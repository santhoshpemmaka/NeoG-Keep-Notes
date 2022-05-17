import React, {useState} from "react";
import "./ColorPicker.scss";

const colorsInArray = [
	"#FFFFFF",
	"#f28983",
	"#fbbc04",
	"#FFF475",
	"#CCFF90",
	"#A7FFEB",
	"#CBF0F8",
	"#AECBFA",
	"#D7AEFB",
	"#FDCFE8",
	"#E6C9A8",
	"#E8EAED",
];

const ColorPicker = ({noteColor, onChangeColorHandler}) => {
	const [showPalette, setshowPalette] = useState(true);
	return (
		<div
			className='palette'
			onMouseOver={() => setshowPalette(!showPalette)}
			onMouseOut={() => setshowPalette(!showPalette)}>
			<i className='fas fa-palette palette-icon'></i>
			<div
				style={{display: showPalette ? "none" : "grid"}}
				className='color-palette-container'>
				{colorsInArray.map((color) => (
					<div
						key={color}
						className='colorPalette'
						style={{
							background: color,
						}}
						onClick={() => onChangeColorHandler(color)}></div>
				))}
			</div>
		</div>
	);
};

export default ColorPicker;
