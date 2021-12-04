import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";


export default function MakeStyles() {

    const useStyles = makeStyles(theme => ({
        root: {
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            border: 0,
            borderRadius: '15px',
            color: 'white',
            padding: '10, 50px',
        
        }
    }));

    const useStyles2 = makeStyles(theme => ({
        root: {
            background: 'linear-gradient(45deg, #AE6B8B 30%, #AF8E53 90%)',            border: 0,
            borderRadius: '15px',
            color: 'white',
            padding: '10, 20px',
        
        }
    }));


    


    function ButtonStyled() {
        const classes = useStyles();

        return (
            <Button className={classes.root}> Test Styled Button </Button>
        );
    }

    function ButtonStyled2() {
        const classes = useStyles2();

        return (
            <Button className={classes.root}> Another Button </Button>
        );
    }

    return (
        <div>
            <ButtonStyled />
            <br />
            <br />
            <ButtonStyled2 />

        </div>
    )
}
