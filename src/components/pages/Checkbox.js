// MUI

import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import SaveIcon from "@material-ui/icons/Save";


//React 
import { useState } from "react";
import React from "react";

export default function CheckBoxPage() {
  const [checked, setChecked] = React.useState(false);
  return (
    <div>
    
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
<br/>
<div className="code">
      <code >{`  <FormControlLabel
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
      />`}
      </code>
      </div>
      
       <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            icon={<SaveIcon />}
            onChange={(e) => setChecked(e.target.checked)}
            inputProps={{
              "aria-label": "secondary checkbox",
            }}
          />
        }
        label="with icon"
      />
      <div className="code">
      <code >{`   <FormControlLabel
        control={
          <Checkbox
            checked={checked}
            icon={<SaveIcon />}
            onChange={(e) => setChecked(e.target.checked)}
            inputProps={{
              "aria-label": "secondary checkbox",
            }}
          />
        }
        label="with icon"
      />`}
      </code>
      </div>
    </div>
  );
}