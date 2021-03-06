import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import rootReducer, { rootSaga } from './store/index';
import createSagaMiddleware from 'redux-saga';

const sagaMiddleware = createSagaMiddleware();
// const store = createStore(rootReducer,applyMiddleware(sagaMiddleware));

const devMode = process.env.NODE_ENV === 'development';

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware],
  devTools: devMode,
});
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
serviceWorker.register();
