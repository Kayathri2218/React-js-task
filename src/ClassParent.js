import { Component } from "react";

export class ParentClass extends Component {
    constructor() {
        super();
        this.state = {
            Mobile:[
            {
                id: "001",
                name: "oneplus11",
                price: 56999,
                isPurchased: true
            },
            {
                id: "002",
                name: "Vivi Y100",
                price: 24999,
                isPurchased: false
            },
            {
                id: "003",
                name: "Redmi 10",
                price: 56999,
                isPurchased: true
            },
            {
                id: "004",
                name: "iphone 13",
                price: 62990,
                isPurchased: false
            },
            {
                id: "005",
                name: "Nokia",
                price: 12000,
                isPurchased: true
            },
            {
                id: "006",
                name: "Poco M4",
                price: 13999,
                isPurchased: true
            }
        ]
    }
}
        X = () => {
            this.setState(
                this.state.Mobile.sort((a,b) => {
                let i = a.name.toUpperCase();
                let j = b.name.toUpperCase();
                if (i < j) {
                    return -1;
                } else if (i > j) {
                    return 1;
                } else {
                    return 0;
                }
            })
            )
        }
        Y = () => {
            this.setState(
                this.state.Mobile.sort((a,b) => {
                let i = a.name.toUpperCase();
                let j = b.name.toUpperCase();
                if (i > j) {
                    return -1;
                } else if (i < j) {
                    return 1;
                } else {
                    return 0;
                }
            })
            )
        }
        K = () => {
            this.setState(
                this.state.Mobile.sort((a,b) => {
                let i = a.price;
                let j = b.price;
                if (i < j) {
                    return -1;
                } else if (i > j) {
                    return 1;
                } else {
                    return 0;
                }
            })
            )
        }
        S = () => {
            this.setState(
                this.state.Mobile.sort((a,b) => {
                let i = a.price;
                let j = b.price;
                if (i > j) {
                    return -1;
                } else if (i < j) {
                    return 1;
                } else {
                    return 0;
                }
            })
            )
        }
        I = () =>{
            this.setState(
                { Mobile: this.state.Mobile.filter((a) => a.isPurchased)}
            )
        }
    render() {
        return (
            <div>
                <button onClick={() => this.X()}>Ascending Class</button>
                <button onClick={() => this.Y()}>Descending Class</button>
                <button onClick={() => this.K()}>Low to High Class</button>
                <button onClick={() => this.S()}>High to Low Class</button>
                <button onClick={() => this.I()}>Filter Class</button>

                {this.state.Mobile.map((value, index) => {
                    return <div key={index}>
                        <h2>Name : {value.name}</h2>
                        <h3>Price : {value.price}</h3>
                    </div>
                })}</div>
        )
    }
}