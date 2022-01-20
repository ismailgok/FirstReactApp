import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {lat: null};

        window.navigator.geolocation.getCurrentPosition(
            (position) =>{
                this.setState({ lat: position.coords.latitude});

                // we did not!!
                this.state.lat = position.coords.latitude
            },
            (err) => console.log(err)
        );
    }
    render() {
       

        return <div>Latitude: {this.state.lat}</div>
    }

}

ReactDOM.render(

    <App />,
    document.querySelector('#root')

);

