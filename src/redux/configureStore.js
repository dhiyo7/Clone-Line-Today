import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import reducers from './reducers'



export default function configureStore(initialState = {}, history) {
    const middlewares = [thunk, routerMiddleware(history)];
    
    const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      }) : compose;

    const enhancer = composeEnhancers(
      applyMiddleware(...middlewares),
    );
    const store = createStore(
      reducers,
      initialState,
      enhancer,
    );
  
  
    return store;
  }