import { createStore,applyMiddleware } from "redux";
import {composeWithDevTools} from 'redux-devtools-extensions';
import thunk from 'redux-thunk';
import rootReducer from '../reducer';

export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));



//carpeta creada 