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
