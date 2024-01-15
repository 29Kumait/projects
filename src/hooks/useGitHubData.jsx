// useGitHubData

import { useState, useEffect } from 'react';

const useGitHubData = (classmates) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    async function fetchUserData(username) {
        try {
            const url = `https://api.github.com/users/${username}`;
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Error fetching user data:", error);
            throw error;
        }
    }

    async function fetchRepoData(username, repo) {
        try {
            const url = `https://api.github.com/repos/${username}/${repo}`;
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Error fetching repo data:", error);
            throw error;
        }
    }
    async function fetchGitHubData(classmates) {
        const userDataPromises = classmates.map(classmate =>
            fetchUserData(classmate.username).catch(error => error)
        );
        const repoDataPromises = classmates.map(classmate =>
            fetchRepoData(classmate.username, classmate.repo).catch(error => error)
        );

        const usersData = await Promise.allSettled(userDataPromises);
        const reposData = await Promise.allSettled(repoDataPromises);

        return classmates.map((classmate, index) => {
            const userData = usersData[index];
            const repoData = reposData[index];
            return {
                username: classmate.username,
                repoData: repoData.status === 'fulfilled' ? repoData.value : null,
                userData: userData.status === 'fulfilled' ? userData.value : null,
                error: repoData.status === 'rejected' ? repoData.reason : userData.status === 'rejected' ? userData.reason : null
            };
        });
    }



    useEffect(() => {
        fetchGitHubData(classmates).then(setData).catch(setError).finally(() => setLoading(false));
    }, [classmates]);

    return { data, loading, error };
};

export default useGitHubData;
