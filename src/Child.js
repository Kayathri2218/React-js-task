import React, { useState } from "react";

export let Second = (props) => {
    let exampleMobile = props.Mobiles;
    const [state, changeState] = useState(props.Mobiles);

    let s = (l) => {
        let u = [...props.Mobiles].sort((a, b) => {
            let uc = a.name.toUpperCase();
            let UC = b.name.toUpperCase();

            if (uc < UC) {
                return -1;
            } else if (uc > UC) {
                return 1;
            } else {
                return 0;
            }
        });
        {
            if (l === "pass") {
                changeState(u);
            } else {
                changeState(u.reverse());
            }
        }
    }

    let k = (w) => {
        let J = [...props.Mobiles].sort((a, b) => {
            let asen = a.price;
            let decen = b.price;
            if (asen < decen) {
                return -1;
            } else if (asen > decen) {
                return 1;
            } else {
                return 0;
            }
        });
        {
            if (w === "SH") {
                changeState(J);
            } else {
                changeState(J.reverse());
            }
        }
    }

    let Raj = (N) => {
        let D = [...props.Mobiles].filter(a => a.isPurchased);
        if (N === "pass") {
            changeState(D);
        } else {
            changeState(exampleMobile);
        }
    }

    return (
        <div>
            <button onClick={() => s("pass")}>Ascending Order</button>
            <button onClick={() => s()}>Descending Ordder</button>
            <button onClick={() => k("SH")}>Low to High</button>
            <button onClick={() => k()}>High to Low</button>
            <button onClick={() => Raj("pass")}>Filter order</button>
            <button onClick={() => Raj()}>Filter None</button>

            {state.map((index, vlue) => {
                return <div key={vlue}>
                    <h1>{index.name} : {index.price}</h1>
                </div>
            })}
        </div>
    )
}
