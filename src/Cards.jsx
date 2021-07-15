import React from "react";
import "./index.css"

class Card extends React.Component {
    render() {
        return (
            <div className="cardItem">
                <div className="imageContainer">
                    <img src={this.props.src}/>
                </div>
                <div className="body" >
                    <p className="productTitle"><strong>{this.props.produto}</strong></p>
                    <p>{this.props.descricao}</p>
                    <p className="discount">{this.props.desconto}</p>
                    <p>De R${this.props.precoAntigo}</p>
                    <h3>Por R${this.props.precoAtual}</h3>
                </div>
                
            </div>
        )
    }
}

export default Card;