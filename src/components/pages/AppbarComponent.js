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
