// ClassmateDataProject
import * as stylex from "@stylexjs/stylex";
import useGitHubData from '../hooks/useGitHubData';
import Grid from './Grid';
import AnimatedContainer from './Box';

const classmates = [
    { username: 'aniktoris', repo: 'artlife-react-app' },
    { username: 'sanazzarei', repo: 'code-sharing' },
    { username: 'zehrakocairi', repo: 'submerge-react' },
    { username: 'liz-garcia', repo: 'easy-chef-ai' },
    { username: 'Lenindelrionicaragua', repo: 'Hooked-Tetris' },
    { username: 'mo92othman', repo: 'devide-time' },
];

const ClassmateDataProject = () => {



    const { data, loading, error } = useGitHubData(classmates);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    const gridItems = data.map((classmate, index) => ({
        isLink: true,
        to: classmate.repoData?.html_url,
        label: (
            <>
                <AnimatedContainer>
                    <img
                        src={classmate.userData?.avatar_url}
                        alt={classmate.username}
                        {...stylex.props(styles.imageStyle)}
                    />
                    <h3>{classmate.username}</h3>
                    <p>Project: {classmate.repoData?.name}</p>
                </AnimatedContainer>

            </>
        ),
    }));

    return <Grid items={gridItems} />;
};




const styles = stylex.create({
    imageStyle: {
        width: 100,
        height: 100,
        borderRadius: '50%',
        border: '2px solid #000',
    },
});

export default ClassmateDataProject;