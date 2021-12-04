# Material UI React Tutorial

# Set Up

- Create React App

npx create-react-app material-ui-react-tutorial

- Install Material UI

npm install @material-ui/core

https://v4.mui.com/

## Creating Components

### Button

- import Button

```
import Button from '@material-ui/core/Button';
```

variant for style
color for color
size for size
buttonGroup to make them next to each other
 
## Icons 

Install icons

```
npm install @material-ui/icons
```

import 

```
import SaveIcon from "@material-ui/icons/Save";
```

Then use

```
  <Button
        startIcon={<SaveIcon />}
        size="large"
        variant="contained"
        color="secondary"
      >
        Start Icon Button
      </Button>
      <h2>Using endIcon</h2>
      <Button
        endIcon={<SaveIcon />}
        size="large"
        variant="contained"
        color="secondary"
      >
        End Icon Button
      </Button>
```

## Check Boxs

```
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
```

```
<FormControlLabel
        control={
          <Checkbox
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
            inputProps={{
              "aria-label": "primary checkbox",
            }}
          />
        }
        label="Primary"
      />
       <FormControlLabel
```
https://www.youtube.com/watch?v=vyJU9efvUtQ&t=435s 18:15


## Text Field 

```
import { TextField } from "@material-ui/core"

export default function Textfield() {
    return (
        <div>
        <p> Time </p>
            <TextField 
            variant="outlined"
            color="secondary"
            label="The Time"
            type="time"
            defaultValue="00:00"
            InputLabelProps={{
                shrink: true,
            }}
            inputProps={{
                step: 300, // 5 min
            }}
            />
<p> Date </p>
            <TextField
            variant="filled"
            color="secondary"
            type="date"
            defaultValue="2017-05-24"
/>
<p> Time and date </p>

            <TextField
            variant="filled"
            color="secondary"
            type="datetime-local"
            defaultValue="2017-05-24T10:30"
/>

<p> Text Box </p>
<TextField 
            variant="outlined"
            color="secondary"
            type="text"
            placeholder="Enter your name"
           label="Name"
           
            />


        </div>


    )
}
```
## Make Styles

```
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
```

## Theme Provider

```
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { orange, purple } from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";
export default function Themeprovider() {
  const theme = createMuiTheme({
    typography: {
      h2: {
        fontSize: 24,
        marginBottom: 20,
        color: "purple",
      },
    },
    palette: {
      primary: {
        main: orange[500],
      },
      secondary: {
        main: purple[700],
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div>
        <h1
          style={{
            fontSize: "16px",
            color: "green",
          }}
        >
          To set custom themes throughout whole component
        </h1>
        <Typography variant="h2">Im a h2 using typography</Typography>
        <h2> Without using typography</h2>
        <Button
          variant="contained"
          color="primary"
          style={{
            fontSize: "26px",
          }}
        >
          {" "}
          Using main theme Provider
        </Button>
        <br />
        <br />
        <Button variant="contained" color="secondary">
          Filled in secondary colour
        </Button>
      </div>
    </ThemeProvider>
  );
}

```

## Typography

```
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
```

## Grid 

```
import { Container } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

export default function GridContainer() {
  return (
    <div
      style={{
        background: "lightgray",
      }}
    >
      <Container maxWidth="sm">
        <h2>This is a small container</h2>
        <p> Container maxWidth="sm"</p>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
      </Container>
      <Container maxWidth="md">
        <h2>This is a medium container</h2>
        <p> Container maxWidth="md"</p>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
      </Container>
      <Container maxWidth="lg">
        <h2>This is a large container</h2>
        <p> Container maxWidth="lg"</p>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>


        <Grid container spacing={4} justify="center">
          <Grid item xs={3} sm={6} >
            <Paper style={{ height: 75, width: '100%' }} />
          </Grid>
          <Grid item xl={3}>
            <Paper style={{ height: 75, width: '100%' }} />
          </Grid>
          <Grid item xl={3}>
            <Paper style={{ height: 75, width: '100%' }} />
          </Grid>
        </Grid>

        <Grid container spacing={4} justify="center">
          <Grid item>
            <Paper style={{ height: 75, width: 50 }} />
          </Grid>
          <Grid item>
            <Paper style={{ height: 75, width: 50 }} />
          </Grid>
          <Grid item>
            <Paper style={{ height: 75, width: 50 }} />
          </Grid>
          <Grid item>
            <Paper style={{ height: 75, width: 50 }} />
          </Grid>
        </Grid>





      </Container>
    </div>
  );
}

```


## AppBar

```
import Appbar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

export default function AppbarComponent() {

  return (
    <div>
      <Appbar colour="secondary">
        <Toolbar>
          <IconButton>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">MUI Theming</Typography>
          <Button>Login</Button>
        </Toolbar>
      </Appbar>
    </div>
  );
}

```
