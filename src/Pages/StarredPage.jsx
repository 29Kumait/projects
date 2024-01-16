// StarredPage.jsx
import { useContext } from 'react';
import { TheContext } from '../Components/Context.jsx'
import AnimatedContainer from '../Components/Box'
import img from "../assets/Quasimodo.png";
const StarredPage = () => {
    const { Contexts } = useContext(TheContext);

    return (
        <div>
            <AnimatedContainer/>
            <h1>StarredPage</h1>
            <AnimatedContainer/>
            <ul>
                {Contexts.map((label, index) => (
                    <li key={index}>{label}</li>
                ))}
            </ul>
            <img src={img} alt="Quasimodo"/>
            <p>©️Disney</p>
        </div>
    );
}

export default StarredPage;