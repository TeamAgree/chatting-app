import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "@layouts/App/App";
import axios from "axios";
import { RecoilRoot } from "recoil";

axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? '' : 'http://34.64.251.46:8088';
axios.defaults.headers['Access-Control-Allow-Origin'] = 'http://34.64.251.46:8082';
axios.defaults.withCredentials = true;

const root = ReactDOM.createRoot(
    document.querySelector('#app') as HTMLElement
);
root.render( 
    <BrowserRouter>
        <RecoilRoot>
            <App />
        </RecoilRoot>
    </BrowserRouter>
);