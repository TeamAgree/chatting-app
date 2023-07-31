import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "@layouts/App/App";
import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? '' : 'http://34.64.251.46:8088';


const root = ReactDOM.createRoot(
    document.querySelector('#app') as HTMLElement
);
root.render( 
    <BrowserRouter>
        <App />
    </BrowserRouter>
);