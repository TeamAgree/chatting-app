import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "@layouts/App/App";
import axios from "axios";
import { RecoilRoot } from "recoil";
import { CookiesProvider } from "react-cookie";

axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? '' : 'http://34.22.83.113:8088';
axios.defaults.headers['Access-Control-Allow-Origin'] = 'http://34.22.83.113:8082';
axios.defaults.withCredentials = true;

const root = ReactDOM.createRoot(
    document.querySelector('#app') as HTMLElement
);
root.render( 
    <CookiesProvider>
        <BrowserRouter>
                <RecoilRoot>
                    <App />
                </RecoilRoot>
        </BrowserRouter>
    </CookiesProvider>
);