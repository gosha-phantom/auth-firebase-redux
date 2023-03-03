import React from 'react';
import { render } from 'react-dom';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { StoreProvider } from 'app/providers/StoreProvider';
import App from 'app/App';
import 'shared/config/firebase';
import 'app/styles/index.css';

const container = document.getElementById('root')
const root = createRoot(container as HTMLElement);
root.render(
    <React.StrictMode>
        <StoreProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </StoreProvider>
    </React.StrictMode>,
);

// render(
//     <React.StrictMode>
//         <StoreProvider>
//             <BrowserRouter>
//                 <App />
//             </BrowserRouter>
//         </StoreProvider>
//     </React.StrictMode>,
//     container
// );

