// useFetchData.js
import { useState, useEffect } from 'react';

const defaultData = { views: [], count: 0, uniques: 0 };
const githubPat = import.meta.env.VITE_GITHUB_PAT;

const useFetchData = (repos) => {
    const [trafficData, setTrafficData] = useState([]);
    useEffect(() => {
        const fetchData = async (repo) => {
            try {
                const response = await fetch(`https://api.github.com/repos/29Kumait/${repo}/traffic/views`, {
                    headers: {
                        'Authorization': `token  ${githubPat}`,
                    }
                });
                if (!response.ok) {
                    console.error('Error:', response.status, await response.text());
                    return { repo, data: defaultData };
                }
                const data = await response.json();
                return { repo, data: { views: data.views, count: data.count, uniques: data.uniques } };
            } catch (error) {
                console.error('Error:', error);
                return { repo, data: defaultData };
            }
        };
        Promise.all([
            fetchData('homework-ecommerce'),
            fetchData('stylex')
        ]).then(data => setTrafficData(data))
            .catch(error => console.error('Error:', error));
    }, []);
    return trafficData;
}
export default useFetchData;