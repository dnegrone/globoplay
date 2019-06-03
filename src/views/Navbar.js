import React from 'react';
import './Navbar.css';
import { menuOn, menuOff, ocultaDestaque } from '../lib/script';
class Navbar extends React.Component {

    render() {
        // console.log('menuItems', this.props.menuItems);
        // let items = this.props.menuItems;
        return (
            <div>
                <nav className="menuMin" onMouseLeave={menuOff} onMouseEnter={menuOn}>
                    <ul>
                        {/* { items.map((item, index) => <li key={index}><i className="icon"></i> <span>{item}</span></li>) } */}
                        <li><i className="mdi mdi-magnify"></i> <span>Busca</span></li>
                        <li onClick={ocultaDestaque}><i className="mdi mdi-home"></i> <span>Início</span></li>
                        <li><i className="mdi mdi-access-point"></i> <span>Agora na Globo</span></li>
                        <li><i className="mdi mdi-animation-outline"></i> <span>Categorias</span></li>
                        <li><i className="mdi mdi-account-circle"></i> <span>Minha Conta</span></li>
                    </ul>
                </nav>
            </div>
        );
    }
    
}

Navbar.defaultProps = {
    menuItems: ['Busca','Início','Agora na Globo','Categorias','Minha Conta']
}

export default Navbar;