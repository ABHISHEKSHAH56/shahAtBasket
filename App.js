import React, { useEffect } from 'react';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import AppNavigation from './src/navigations/AppNavigation';

const App = () => {
 
  
  return (
    <Provider store={store}>
    
        {/* <DrawerNavigator /> */}
        <AppNavigation/>
    
    </Provider>
  );
};

export default App;
