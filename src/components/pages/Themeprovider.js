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
