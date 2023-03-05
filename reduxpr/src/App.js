import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import IncDecOpertor from './components/IncDecOpertor';
function App() {
  return (
    <Provider store={store}>
    <div className="App">
       <IncDecOpertor/>
    </div>
    </Provider>
  );
}

export default App;
