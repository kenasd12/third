import { useState } from "react";

import HelpArea from "./HelpArea";

function MainContent() {
 const [helpVisible, setHelpVisible] = useState(false);

 function toggleHelp() {
  setHelpVisible((isVisible) => !isVisible);
 }

 return (
  <main>
   <h3>Hello World</h3>
   <button onClick={toggleHelp}>{helpVisible ? "Hide" : "Show"} Help</button>
   {helpVisible && <HelpArea />}
  </main>
 );
}

export default MainContent;
