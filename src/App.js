
import './App.css';
// MUI

import Buttons from './components/pages/Buttons'
import CheckBoxPage from './components/pages/Checkbox'
import Textfield from './components/pages/Textfield';
import MakeStyles from './components/pages/MakeStyles';
import Themeprovider from './components/pages/Themeprovider';
import TypographyComponent from './components/pages/TypographyComponent';
import Grid from './components/pages/GridContainer';
import AppbarComponent from './components/pages/AppbarComponent';

function App() {
  return (
    <div className="App">
 
    <h1> Material UI </h1>

    <h2> Appbar </h2>
    <AppbarComponent />

    <h2> Container </h2>
    <Grid />

    <h2> Typography</h2>
    <TypographyComponent/>

    <h2> Theme Provider </h2>
    <Themeprovider />

    <h2> Make Styles </h2>

    <MakeStyles />
    <h2> Text Field </h2>
    <Textfield />
    <h2> Check Boxes </h2>
    <CheckBoxPage />
    <h2> Buttons </h2>
    <Buttons />
    </div>
    
  );
}

export default App;
