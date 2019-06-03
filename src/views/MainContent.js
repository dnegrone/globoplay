import React from 'react';
import './MainContent.css';
import { mostraDestaque } from '../lib/script';

class MainContent extends React.Component {
    
    render() {
        // let iTitulos = this.props.tituloInternoCategorias;
        
        return (
            <div>
                <Destaque titulo={this.props.titulo} />
                <ProximaProgramacao>
                    <ProximaAtracao tituloProximaAtracao={this.props.tituloProximaAtracao}  />
                </ProximaProgramacao>
            </div>
        )
    }
}

class Destaque extends React.Component{
    constructor() {
        super();
        this.state = {
            isClicked: false,           
        };
        this.update = this.update.bind(this);
    }
    update(){
        this.setState({
            isClicked: !this.state.isClicked
        });
        mostraDestaque()
    }
    render() {
        console.log(ProximaAtracao.defaultProps.tituloProximaAtracao);
        return (
            <section id="destaque">
                <div className="destaque">
                    <img src="/static/imgs/logo-bbb-branco.png" alt="Big Brother Brasil" />
                    <h2>{this.props.titulo}</h2>
                    <div id="action-buttons" className="action-buttons">
                        <a href='#' className="btn btn-primary"><i className="mdi mdi-play" style={{marginLeft: -10, marginRight: 5}}></i>Assista</a>
                        <a href='#' className="btn btn-default" onClick={this.update}>Veja mais</a>
                    </div>
                </div>
                <div className="gradiente-horizontal"></div>
            </section>
            
        )
    }

}
Destaque.defaultProps = {
    titulo: 'Acompanhe 24h ao vivo a casa mais vigiada do Brasil',
    primaryLink: '/1',
    secondaryLink: '/2'
}

const ProximaProgramacao = (props) => (<section id="proxima-programacao" className="proximaProgramacao">{props.children}</section>)

const ProximaAtracao = (props) => (
    <section id="proxima-programacao" className="proximaProgramacao">
        <div className="proxima-atracao">
            <h3>{props.tituloProximaAtracao}</h3>
            <div className="esteira">
                { props.tituloInternoCategorias.map((item, index) => 
                    <div className="thumb" key={index}>
                        <h4>{props.categoria} <small>{props.tituloInternoCategorias[index]}</small></h4>
                        <div className="gradiente">
                            <img src={props.defaultUrlImagens + props.defaultThumb} alt="" />
                        </div>
                    </div>
                    
                )}
            </div>
        </div>
        <div className="gradiente-vertical"></div>
    </section>
)

ProximaAtracao.defaultProps = {
    tituloProximaAtracao: 'Agora no BBB',
    categoria: 'Realities',
    tituloInternoCategorias: ['Sala de Estar','Varanda','Piscina','Academia','Chuveiro'],
    defaultUrlImagens: '/static/imgs/',
    defaultThumb: 'bbb_background_interno.jpg'
}

export const detalheProximaAtracao = ProximaAtracao.defaultProps;
    
export default MainContent;