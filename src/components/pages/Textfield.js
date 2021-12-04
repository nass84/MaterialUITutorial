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
