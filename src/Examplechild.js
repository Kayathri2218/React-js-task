import React from "react";

const Child = (props) => {
    let x = props.Books;

    return (
        <div>
            {x.map((value,index) => {
                return (
                <div key={index}>
                    <h1>
                        {value.name}
                        <span>{value.year}</span>
                    </h1>
                    <button onClick={() => props.fun(value.year)}>clickme</button>
                </div>
                );
            })}
        </div>
    )
}

export default Child;