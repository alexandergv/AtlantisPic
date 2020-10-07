import React, { Component } from 'react';
import Buscador from './components/Buscador';
import Resultado from './components/Resultado';

class App extends Component {

    busquedaData = (term) =>{
      this.setState({
        term: term,
        page: 1
      },() =>{
        this.apiQuery();
      })
    }

    state = {
      term: this.busquedaData,
      Images: [],
      page: ''
    }

    scroll = () => {
      const element = document.querySelector('.jumbotron')
      element.scrollIntoView('smooth', 'start');
    }

    prevPage = () => {  
      
      let page = this.state.page;
      
      if (page === 1) return null;
      page -= 1

      this.setState({
        page
      }, () => {
        this.apiQuery();
        this.scroll();
      });


    }

    nextPage = () => {
      let page = this.state.page;
      
      page += 1

      this.setState({
        page
      }, () => {
        this.apiQuery();
        this.scroll();
      });

    }


    apiQuery = () =>{
      const term = this.state.term; 
      const page = this.state.page;
      const url =`https://pixabay.com/api/?key=18536802-da08afe0234e8d99aa091c86a&q=${term}&per_page=30&page=${page}`;
      console.log(url);
      
      fetch(url)
      .then(res => res.json())
      .then(res => this.setState({Images: res.hits}));
    }

  render(){
  return (
    <div className="app container bg-primary">
       <div className="jumbotron card text-white bg-primary mb-3">
         <p className="lead text-center ">Buscador de Imagenes</p>
           <Buscador
           busquedaData = {this.busquedaData}/>
       </div>
       <div className="row justify-content-center">
       <Resultado 
       Images = {this.state.Images}
       prevPage = {this.prevPage}
       nextPage = {this.nextPage}
       />
       </div>
    </div>
  );
}
}

export default App;
