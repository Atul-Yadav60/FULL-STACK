
import './App.css'
import ClockSlogan from './components/clockSllogan';

import ClockHeading from './components/clockHeading';
import CurrentTime from './components/Currenttime';

import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  

  return (
    <center>
      <ClockHeading></ClockHeading>
      <ClockSlogan></ClockSlogan>

      <CurrentTime></CurrentTime>
    </center>
  )
}

export default App
