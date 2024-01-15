// ClassmateDataProject
import * as stylex from "@stylexjs/stylex";

import useGitHubData from '../hooks/useGitHubData';
import Grid from './Grid';


const styles = stylex.create({
    imageStyle: {
        width: 100,
        height: 100,
        borderRadius: '50%',
        border: '2px solid #000',
    },
});

const ClassmateDataProject = () => {
    const classmates = [
        { username: 'aniktoris', repo: 'artlife-react-app' },
        { username: 'zehrakocairi', repo: 'submerge-react' },
        { username: 'sanazzarei', repo: 'code-sharing' },
        { username: 'mo92othman', repo: 'devide-time' },
    ];

    const { data, loading, error } = useGitHubData(classmates);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    const gridItems = data.map(classmate => ({
        isLink: true,
        to: classmate.repoData?.html_url,
        label: (
            <>

            </>
        ),
        children: (
            <>
                <img
                    src={classmate.userData?.avatar_url}
                    alt={classmate.username}
                    {...stylex.props(styles.imageStyle)}
                />
                <h3>{classmate.username}</h3>
                <p>Project: {classmate.repoData?.name}</p>
            </>
        ),
    }));

    return <Grid items={gridItems} />;
};

export default ClassmateDataProject;