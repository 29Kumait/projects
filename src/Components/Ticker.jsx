//Ticker.jsx
import { useState, useEffect } from 'react';
import * as stylex from "@stylexjs/stylex";
import { additionalStyles } from '../stylex';

const apiKey = "eXVjKRhm";

const fetchUserSets = async (page = 1) => {
    try {
        const url = `https://www.rijksmuseum.nl/api/en/usersets?key=${apiKey}&format=json&page=${page}`;
        const response = await fetch(url);
        if (!response.ok) {
            const errorData = await response.json();
            console.error("Fetch Error:", errorData);
            return [];
        }
        const data = await response.json();
        return data.userSets.map((userSet) => userSet.name && userSet.user && userSet.user.name ? `• ${userSet.name} by ${userSet.user.name} | ` : "").filter(Boolean);
    } catch (error) {
        console.error("Error:", error);
        return [];
    }
};

export default function Ticker() {
    const [userSets, setUserSets] = useState([]);

    useEffect(() => {
        fetchUserSets().then(sets => setUserSets(sets));
    }, []);

    return (
        <div {...stylex.props(additionalStyles.tickerContainer)}>
            {userSets.map((set, index) => (
                <span key={index} style={{ margin: '20px' }}>{set}</span>
            ))}
        </div>
    );
}
