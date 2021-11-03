import React from "react";

const WordComponent = (props) => {

    return(
        <div>
            {
                isNaN(props.word)?
                <p
                style={
                    props.color?
                    {color: props.color, backgroundColor: props.bgColor}
                    :null
                }
                >The word is: {props.word}</p>
                :<p>The number is: {props.word}</p>
            }
            
        </div>
    )
}

export default WordComponent;