import * as stylex from "@stylexjs/stylex";
import { additionalStyles } from '../stylex.jsx';
import ArtworkDisplay from '../Components/ArtworkDisplay.jsx';
import ArtSearch from '../Components/ArtSearch.jsx';
import Ticker from '../Components/Ticker.jsx';


export default function MuseumPage() {
    return (
        <div {...stylex.props(additionalStyles.museumContainer)}>
          <h1>Museum</h1>
                <ArtSearch />
                <ArtworkDisplay />
                <Ticker/>
            </div>
              
    );
};






// import { useReducer } from 'react';

// import ArtworkDisplay from './ArtworkDisplay';
// import ArtSearch from './ArtSearch';
// import Ticker from './Ticker';

// const initialState = { objectNumber: "RP-T-1969-898" };

// function reducer(state, action) {
//     switch (action.type) {
//         case 'SET_OBJECT_NUMBER':
//             return { ...state, objectNumber: action.payload };
//         default:
//             throw new Error();
//     }
// }

// export default function MuseumPage() {
//     const [state, dispatch] = useReducer(reducer, initialState);

//     const handleSearchResult = (artObjects) => {
//         if (artObjects.length > 0) {
//             dispatch({ type: 'SET_OBJECT_NUMBER', payload: artObjects[0].objectNumber });
//         }
//     };

//     return (
//         <>
//             <h1>Museum</h1>
          
//             <div>
//                 <ArtSearch onSearchResult={handleSearchResult} />
//                 <ArtworkDisplay objectNumber={state.objectNumber} />
//             </div>
//               <Ticker />
//         </>
//     );
// }
