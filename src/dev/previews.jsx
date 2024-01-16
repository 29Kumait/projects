import {ComponentPreview, Previews} from '@react-buddy/ide-toolbox'
import {PaletteTree} from './palette'
import Grid, {GridImage} from "../Components/Grid.jsx";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/GridImage">
                <GridImage/>
            </ComponentPreview>
            <ComponentPreview path="/Grid">
                <Grid/>
            </ComponentPreview>
        </Previews>
    )
}

export default ComponentPreviews