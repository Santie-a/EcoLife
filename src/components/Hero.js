import React, { useEffect, useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";

export default function Hero(props) {
    const Content = `../images/${props.content}`

    const [windowWidth, setWindowWidth] = useState(window.innerWidth > 999 ? 1000 : window.innerWidth)
    
    useEffect(() => {
        window.addEventListener("resize", function() {
            const width = window.innerWidth > 999 ? 1000 : window.innerWidth
            setWindowWidth(width - 20)
        })
    }, [])

	return (
        <div className="hero">
            { props.content &&
                <img className="hero--image" src={Content} alt=""/>
            }
            { props.images &&
                <SimpleImageSlider 
                    images={props.images}
                    width={windowWidth}
                    height={windowWidth / 2}
                    showBullets={true}
                    showNavs={true}
                    autoPlay={true}
                    autoPlayDelay={4.0}
                    navStyle={1}
                    navSize={40}
                />
            }
        </div>
    )
}