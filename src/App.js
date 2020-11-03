
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import React from 'react'
import Store from './Store'
import {Provider} from 'react-redux'
import AdminSidebar from './sidebars/AdminSidebar';


function App() {
  return (
    <Provider  store={Store}>
        <div className="container">
            <div className="row justify-content-center">        
                <AdminSidebar />
            </div>
        </div>
    </Provider>
  );
}

export default App;
