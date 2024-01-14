// MorePage.jsx
import Grid from '../Components/Grid.jsx'
import AnimatedContainer from '../Components/Box.jsx'

function MorePage() {
    return (
        <>
            <h1>More</h1>

            <Grid items={[
                { label: '1' },
                { label: '2' },
            ]} />
            <Grid items={[
                { label: '3' },
                { label: 'Item 4' },
                { label: 'Item 5' },

            ]} />


            <Grid items={[
                { label: 'Item 6' },
                { label: ' 7' },
                { label: ' 8' },
                { label: 'Last 9' },
            ]} />

            <Grid items={[
                { isLink: true, to: '/about', label: 'About' },
                { label: 'Item End' },

            ]} />
            <Grid items={[]} />

            <AnimatedContainer />
        </>
    )
}

export default MorePage;