import inject from '@stylexjs/dev-runtime';

inject({
    classNamePrefix: 'x',
    dev: true,
    test: false,
});

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev/index.js";

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <DevSupport ComponentPreviews={ComponentPreviews}
                    useInitialHook={useInitial}
        >
            <App/>
        </DevSupport>
    </React.StrictMode>,
)