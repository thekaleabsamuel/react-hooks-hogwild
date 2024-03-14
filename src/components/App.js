
import React, { useState } from "react";
import Nav from "./Nav";
import Tile from "./Tile";
import hogs from "../porkers_data";

function App() {
    const [showGreased, setShowGreased] = useState(false);
    const [sortBy, setSortBy] = useState("");

    const toggleGreased = () => {
        setShowGreased(!showGreased);
    };

    const handleSortChange = (e) => {
        setSortBy(e.target.value);
    };

    const filteredHogs = showGreased ? hogs.filter(hog => hog.greased) : hogs;

    const sortedHogs = [...filteredHogs].sort((a, b) => {
        if (sortBy === "name") {
            return a.name.localeCompare(b.name);
        } else if (sortBy === "weight") {
            return a.weight - b.weight;
        }
        return 0;
    });

    return (
        <div className="App">
            <Nav />
            <div>
                <button onClick={toggleGreased}>
                    {showGreased ? "Hide Greased Hogs" : "Show Greased Hogs"}
                </button>
                <label htmlFor="sort">Sort by: </label>
                <select id="sort" value={sortBy} onChange={handleSortChange}>
                    <option value="">None</option>
                    <option value="name">Name</option>
                    <option value="weight">Weight</option>
                </select>
            </div>
            <div className="hog-container">
                {sortedHogs.map((hog, index) => (
                    <Tile key={index} hog={hog} />
                ))}
            </div>
        </div>
    );
}

export default App;


// import React from "react";
// import Nav from "./Nav";
// import Title from "./Tile"
// import hhogs from "../porkers_data"

// import hogs from "../porkers_data";

// function App() {
// 	return (
// 		<div className="App">
// 			<Nav />
// 			<div className="hog-container">
// 				{hogs.map((hog, index)} => (
// 					<Tile key={index} hog={hog} />
// 				)
// 			</div>
// 		</div>
// 	);
// }

// export default App;

// function App() {
// 	return (
// 	  <div className="App">
// 		<Nav />
// 		<div className="hog-container">
// 		  {hogs.map((hog, index) => (
// 			<Tile key={index} hog={hog} />
// 		  ))}
// 		</div>
// 	  </div>
// 	);
//   }
  
//   export default App;

// App.js
// import React from "react";
// import Nav from "./Nav";
// import Tile from "./Tile"; // Import Tile component
// import hogs from "../porkers_data";

// function App() {
//   return (
//     <div className="App">
//       <Nav />
//       <div className="hog-container">
//         {hogs.map((hog, index) => (
//           <Tile key={index} hog={hog} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;


// import React, { useState } from "react";
// import Nav from "./Nav";
// import Tile from "./Tile";
// import hogs from "../porkers_data";

// function App() {
//     const [showGreased, setShowGreased] = useState(false);

//     const toggleGreased = () => {
//         setShowGreased(!showGreased);
//     };

//     const filteredHogs = showGreased ? hogs.filter(hog => hog.greased) : hogs;

//     return (
//         <div className="App">
//             <Nav />
//             <div>
//                 <button onClick={toggleGreased}>
//                     {showGreased ? "Hide Greased Hogs" : "Show Greased Hogs"}
//                 </button>
//             </div>
//             <div className="hog-container">
//                 {filteredHogs.map((hog, index) => (
//                     <Tile key={index} hog={hog} />
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default App;


// App.js