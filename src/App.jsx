import './App.css';
import './css/custom.css';
import './css/style.default.css';


import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Share/Header/Header';

function App(){
    return (
        <div className='App'>
            <BrowserRouter>
             <Header/>
            
            </BrowserRouter>
        </div>
    );
}
export default App;