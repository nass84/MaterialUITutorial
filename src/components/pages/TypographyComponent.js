// install font 
// npm add fontsource-roboto

import 'fontsource-roboto';
import Typography from '@material-ui/core/Typography';

export default function TypographyComponent() {
    return (
        <div>
            <Typography variant="h1" component="div">
                This is a h1
            </Typography>
            <Typography variant="h3">
                This is a h3
            </Typography>
            <Typography variant="subtitle1">
                subtitle1
            </Typography>
            <Typography variant="body1">
                body1
            </Typography>
        </div>
    )
}
