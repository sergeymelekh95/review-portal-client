import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './store';
import './index.css';
import { App } from './App';
import { BrowserRouter } from 'react-router-dom';

// import { ThemeProvider, createTheme } from '@mui/material/styles';

// const theme = createTheme({
//     palette: {
//         primary: {
//             main: '#b5b5b5',
//         },
//         secondary: {
//             main: '#F9F2E8',
//         },
//     },
// });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <Provider store={store}>
            {/* <ThemeProvider theme={theme}> */}
            <BrowserRouter>
                <PersistGate loading={null} persistor={persistor}>
                    <App />
                </PersistGate>
            </BrowserRouter>
            {/* </ThemeProvider> */}
        </Provider>
    </>
);
