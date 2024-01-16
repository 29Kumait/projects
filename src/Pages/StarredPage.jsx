// StarredPage.jsx
import { useContext } from 'react';
import { TheContext } from '../Components/Context.jsx'
import AnimatedContainer from '../Components/Box'
const StarredPage = () => {
    const { Contexts } = useContext(TheContext);

    return (
        <div>
            <AnimatedContainer />
            <h1>StarredPage</h1>
            <AnimatedContainer />
            <ul>
                {Contexts.map((label, index) => (
                    <li key={index}>{label}</li>
                ))}
            </ul>
        </div>
    );
}

export default StarredPage;