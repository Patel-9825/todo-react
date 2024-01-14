import React from "react";

const App = () => {
  return <>
    <div className="main-div">
      <div className="center-div">
        <br />
        <h1>ToDo List</h1>
        <br />
        <input type="text" placeholder="Add a Items" />
        <button> + </button>

        <ol>
          <li>buy apple</li>
        </ol>
      </div>
    </div>
  </>;
};

export default App;
