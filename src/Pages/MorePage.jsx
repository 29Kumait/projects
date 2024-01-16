
import Grid from '../Components/Grid.jsx'
import AnimatedContainer from '../Components/Box.jsx'
import JosephineImage from '/josephin.png';
import StasImage from '/stas.png';
import CindyImage from '/cindy.png';

function MorePage() {
    return (
        <>
            <h1>More</h1>
            <Grid items={[
                { label: <> <p>Community Manager</p> <Grid.Image src={JosephineImage} alt='Joséphine Dupuy' /> </> },
                { label: '' },
                { label: 'HYF' },
                { label: <Grid.Label>I am thrilled to be joining the HackYourFuture team as the Diversity and Inclusion Lead. In this role, I am eager to support and empower tech companies. Additionally, I am excited to stand by our graduates as they navigate their journey towards employment.<br />GIUSEPPINA TRICOLI D&I Lead at HackYourFuture</Grid.Label> },
                { label: '' },
            ]} />
            <Grid items={[

                { label: <Grid.Text>Joséphine Dupuy </Grid.Text> },
                { label: <Grid.Label>Hi @studentsofclass45, Hope you're well! Coming Sunday's session will take place offline. Please let me know if you need a train ticket to attend. Also let me know if you have an OV discount for future references. Good afternoon @studentsofclass45, I hope you're all well! We will have a class call this Wednesday at 13:30; I will message you tomorrow about further info on this Friday's MacKinsey's training, Have a good evening.</Grid.Label> },
                { label: '' },
                { label: <Grid.Text>Stas Seldin</Grid.Text> },

            ]} />
            <Grid items={[
                { label: '' },
                { label: '' },
                { label: <Grid.Label><h3>Stas Seldin</h3>Good morning everyone! Today Stas's tech hour is back! :party: :party: :party: I will be available from 10:00 to 11:00 to help you out with questions, bugs or other issues you have. Everyone is welcome to join!</Grid.Label> },
                { label: <Grid.Image src={StasImage} alt='Stas Seldin' /> },
            ]} />
            <
                Grid items={[
                    { label: 'HYF' },
                    { label: '' },
                    { label: '' },
                    { label: 'Education Director' },
                ]} />
            <Grid items={[
                { label: '' },
                { label: <Grid.Text>Cindy Kröse</Grid.Text> },
                { label: <Grid.Image src={CindyImage} alt='Cindy Kröse' /> },
                { label: '' },
                { label: '' },
            ]} />
            <Grid items={[
                { label: '' },
                { label: <Grid.Label><h2>Cindy Kröse</h2> <p>2 months ago</p> <h3>can you try again, we are all in<br />Hi, are you out again?</h3></Grid.Label> },

                { label: 'Managing Director' },

            ]} />
            <AnimatedContainer />
        </>
    );
}

export default MorePage;