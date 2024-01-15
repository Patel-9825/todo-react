import React, {useState} from "react";

const App = () => {

  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList]
    });
  };


  return (
    <>
    <div className="main-div">
      <div className="center-div">
        <br />
        <h1>ToDo List</h1>
        <br />
        <input type="text" placeholder="Add a Items" onChange={itemEvent} />
        <button onClick={listOfItems}> + </button>

        <ol>
            {/* <li>{inputList}</li> */}
            
            {items.map((itemval) => {
              return <li> {itemval} </li>;
            })}
        </ol>
      </div>
    </div>
    </>
  );
};

export default App;
