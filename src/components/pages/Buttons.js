// MUI
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import ButtonGroup from  "@material-ui/core/ButtonGroup";

export default function Buttons() {
  return (
    <div>

     <code className="code">
      {`import Button from '@material-ui/core/Button';`}<br/><br/>
    
          {`<Button variant="contained" color="secondary">
        Standard Button
      </Button>`}<br/><br/>
     <Button variant="contained" color="secondary">
        Standard Button
      </Button>

      <br/>
   <br/>
      {`<Button variant="contained" color="primary"
    style={{
      fontSize:"26px",
    }}>
    Inline Styling for smaller text
    </Button>`}<br/>
    <br/>

    <Button variant="contained" color="primary"
    style={{
      fontSize:"26px",
    }}>
    Inline Styling can over write standard Button
    </Button>
    </code>
 <h3> Variant </h3>
      <p>variant="contained"</p>
      <Button variant="contained">Filled in - no colour</Button>
      <h3> Colour</h3>

      <p> color="primary"</p>

      <Button variant="contained" color="primary">
        Filled in primary colour
      </Button>

      <p> color="secondary"</p>

      <Button variant="contained" color="secondary">
        Filled in secondary colour
      </Button>

      <p> variant="outlined </p>

      <Button variant="outlined">Clear</Button>

      <p> variant="text"</p>
      <Button variant="text">No outline just text</Button>

      <p>onClick Alert</p>

      <Button
        onClick={() => alert("hello")}
        variant="contained"
        color="primary"
      >
        This alerts you
      </Button>

      <h3> Size</h3>
      <p> size="small"</p>
      <Button variant="contained" size="small">
        small
      </Button>
      <p> size="medium"</p>
      <Button variant="contained" size="medium">
        medium
      </Button>
      <p> size="large"</p>
      <Button variant="contained" size="large">
        large
      </Button>

<h3> Disabled - no longer clickable </h3>
      <Button variant="contained" disabled>
        Disabled - no longer clickable
      </Button>

      <h2>Inline styling to over ride standard such as font size</h2>
      <Button variant="contained" color="primary"
    style={{
      fontSize:"6px",
    }}>
    Inline Styling for smaller text
    </Button>
    <h1> Button Group</h1>
      <h2>Without Button Group</h2>
      <Button
        startIcon={<SaveIcon />}
        size="large"
        variant="contained"
        color="primary"
      >
        Save Icon
      </Button>
      <Button
        endIcon={<DeleteIcon />}
        size="large"
        variant="contained"
        color="secondary"
      >
        End Icon Button
      </Button>
    
        <h2>With Button Group</h2>

        <ButtonGroup variant="contained" aria-label="contained primary button group">
        <Button
        startIcon={<SaveIcon />}
        size="large"
        variant="contained"
        color="primary"
      >
        Save Icon
      </Button>
      <Button
        endIcon={<DeleteIcon />}
        size="large"
        variant="contained"
        color="secondary"
      >
        End Icon Button
      </Button>
        </ButtonGroup>
      <h2> Button group and Icon Code</h2>
      
         <code className="code">
       
        
   
      {`import ButtonGroup from  "@material-ui/core/ButtonGroup";`}<br/>
         {`import DeleteIcon from "@material-ui/icons/Delete";`}<br/>
{`import SaveIcon from "@material-ui/icons/Save";`}<br/>

<br/>
<br/>
            </code>
<div className="code">
       <code className="code">
      {` <ButtonGroup variant="contained" aria-label="contained primary button group">
        <Button
        startIcon={<SaveIcon />}
        size="large"
        variant="contained"
        color="primary"
      >
        Save Icon
      </Button>
      <Button
        endIcon={<DeleteIcon />}
        size="large"
        variant="contained"
        color="secondary"
      >
        End Icon Button
      </Button>
        </ButtonGroup>`}<br/>
    </code>
    </div>
    </div>
  )
}
