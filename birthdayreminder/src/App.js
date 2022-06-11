import { useState } from "react";
import Data from "./data" 
import List from "./List";
function App() {
  
  //States
  const [people,setPeople] = useState(Data)

  return (
    <main>
    <div className="container">
        <h3>{people.length} Birthdays Today</h3>
        <List people={people} />
       <button onClick={()=>setPeople([])}>Clear All</button>
    </div>
    </main>
  );
}

export default App;
