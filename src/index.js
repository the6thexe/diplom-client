import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import StudentStore from './store/StudentStore';
import UserStore from './store/UserStore';

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{
    user: new UserStore(),
    student: new StudentStore(),
  }}>
    <App />
  </Context.Provider>,
  document.getElementById('root')
);