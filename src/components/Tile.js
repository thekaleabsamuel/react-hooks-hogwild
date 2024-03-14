import React, { useState } from "react";

const Tile = ({ hog }) => {
    const [showDetails, setShowDetails] = useState(false);

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    };

    return (
        <div className="hog-tile" onClick={toggleDetails}>
            <h3>{hog.name}</h3>
            <img src={hog.image} alt={hog.name} />
            {showDetails && (
                <div className="hog-details">
                    <p>Specialty: {hog.specialty}</p>
                    <p>Weight: {hog.weight} lbs</p>
                    <p>Greased: {hog.greased ? "Yes" : "No"}</p>
                    <p>Highest Medal Achieved: {hog["highest medal achieved"]}</p>
                </div>
            )}
        </div>
    );
};

export default Tile;

// import React from "react";

// const Tile = ({ hog }) => {
    
//     return (
//         <div className="hog-tile" onClick={() => handleClick(hog)}>
//             <h3>{hog.name}</h3>
//             <img src={hog.image} alt={hog.name} />
//         </div>
//     );
// };

// export default Tile;


// const Tile = ({ hog }) => {
//     const handleClick = () => {
//         console.log("Clicked on hog", hog);
//     }
// };

// return (
//     <div className="hog-tile" onClick={handleClick}>
//     <h3>{hog.name}</h3>
//     <img src={hog.image} alt={hog.name} />
//     </div>
// );

// export default Tile;

// Tile.js
// import React from "react";

// const Tile = ({ hog }) => {
//     // Define handleClick function or remove onClick event handler
//     const handleClick = () => {
//         // Handle click event
//         console.log("Clicked on hog:", hog);
//     };

//     return (
//         <div className="hog-tile" onClick={handleClick}>
//             <h3>{hog.name}</h3>
//             <img src={hog.image} alt={hog.name} />
//         </div>
//     );
// };

// export default Tile;


// Tile.js
// const Tile = ({ hog }) => {
//     // Define handleClick function or remove onClick event handler
//     const handleClick = () => {
//         // Handle click event
//         console.log("Clicked on hog:", hog);
//     };

//     return (
//         <div className="hog-tile" onClick={handleClick}>
//             <h3>{hog.name}</h3>
//             <img src={hog.image} alt={hog.name} />
//         </div>
//     );
// };

// export default Tile;


// Tile.js
// import React, { useState } from "react";

// const Tile = ({ hog }) => {
//     const [showDetails, setShowDetails] = useState(false);

//     const toggleDetails = () => {
//         setShowDetails(!showDetails);
//     };

//     return (
//         <div className="hog-tile" onClick={toggleDetails}>
//             <h3>{hog.name}</h3>
//             <img src={hog.image} alt={hog.name} />
//             {showDetails && (
//                 <div className="hog-details">
//                     <p>Specialty: {hog.specialty}</p>
//                     <p>Weight: {hog.weight} lbs</p>
//                     <p>Greased: {hog.greased ? "Yes" : "No"}</p>
//                     <p>Highest Medal Achieved: {hog["highest medal achieved"]}</p>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Tile;

// Tile.js