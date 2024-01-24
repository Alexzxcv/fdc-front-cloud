import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import UsersStore from "./store/UsersStore";
import ThingsStore from "./store/ThingsStore";

export const Context = createContext(null)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Context.Provider value={{
            user: new UsersStore(),
            things: new ThingsStore(),
        }}>
            <App/>
        </Context.Provider>
    </React.StrictMode>
);

