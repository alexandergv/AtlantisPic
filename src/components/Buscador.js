import React, {Component} from 'react';


class Buscador extends Component {
    
    busquedaRef = React.createRef();
 
    handleData = (e) => {
       e.preventDefault();
       const term = this.busquedaRef.current.value;
       this.props.busquedaData(term);
    }

    


    render(){
        return(  
             <form onSubmit={this.handleData}>
                 <div className="row">
                        <div className="form-group col-md-8">
                            <input ref={this.busquedaRef} type="text" className="form-control form-control-" placeholder = "Busca tu Imagen. Ejemplo: Futbol"/>
                        </div>     
                          <div className="form-group col-md-3">
                            
                            <input type="submit" className="btn btn-outline-info btn-block " placeholder = "Busca tu Imagen. Ejemplo: Futbol" value="Buscar"/>
                        </div>
                 </div>
             </form>
        );
    }
}

export default Buscador;