import React from "react";
import Weather from "./components/Weather";
import Location from "./components/Location";

function App() {
  console.log('page loaded')
return(
  <>
    <Location />
    <Weather />
  </>
)
}
export default App;
