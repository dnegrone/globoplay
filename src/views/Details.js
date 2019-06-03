import React from 'react';
import { detalheProximaAtracao } from './MainContent';
import { toggleThumb } from '../lib/script';
import './MainContent.css';
import './Details.css';

class Details extends React.Component {
    constructor(){
        super();
        this.state = {
            count: '',
            tituloPadrao: detalheProximaAtracao.tituloInternoCategorias[0],
            isThumbActive: false
        }
        this.update = this.update.bind(this);
    }
    update(index){
        this.setState({
            count: index,
            tituloPadrao: detalheProximaAtracao.tituloInternoCategorias[index]
        });
        toggleThumb(index);
    }
    render() {
        return (
            <div>
            <section id="detalhes" style={{ display: 'none' }}>
                <div className="container">
                    <h2>{detalheProximaAtracao.tituloProximaAtracao} <small>{this.state.tituloPadrao}</small></h2>
                </div>
                <div className="fundo-destaque"></div>
                <div className="gradiente-fundo-destaque"></div>
            </section>

            <section id="detalhes-programacao" className="proximaProgramacao" style={{ display: 'none', top: '350px', position: 'absolute' }}>
            <div className="proxima-atracao">
                <h3>{detalheProximaAtracao.tituloProximaAtracao}</h3>
                <div className="esteira">
                    { detalheProximaAtracao.tituloInternoCategorias.map((item, index) =>                         
                        <div className="thumb" key={index} onClick={this.update.bind(this, this.state.count=index)}> 
                            <h4>{detalheProximaAtracao.categoria} <small>{item}</small></h4>
                            <div className="gradiente">
                                <img src={detalheProximaAtracao.defaultUrlImagens + detalheProximaAtracao.defaultThumb} alt="" />
                            </div>
                        </div>
                        
                    )}
                </div>
            </div>
            <div className="gradiente-vertical"></div>
            </section>
            </div>
        )
    }
}

export default Details;