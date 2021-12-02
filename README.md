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


