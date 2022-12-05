import React from 'react';
import ReactDOM from 'react-dom/client';
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
    <React.StrictMode>
        {/* <ThemeProvider theme={theme}> */}
            <BrowserRouter>
                <App />
            </BrowserRouter>
        {/* </ThemeProvider> */}
    </React.StrictMode>
);
