import React, { useEffect, useState } from "react";
import "./style.css";
import InputName from "../../components/Inputs/InputName";
import InputAge from "../../components/Inputs/InputAge";

const NameAgeCounter: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [history, setHistory] = useState<
    { name: string; age: string; dateTime: string }[]
  >([]);
  const [currentDateTime, setCurrentDateTime] = useState<string>("");
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editName, setEditName] = useState<string>("");
  const [editAge, setEditAge] = useState<string>("");

  useEffect(() => {
    const updateDateTime = () => {
      setCurrentDateTime(
        new Date().toLocaleTimeString() + " " + new Date().toDateString()
      );
    };

    updateDateTime();
    const intervalId = setInterval(updateDateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleChangeAge = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAge(event.target.value);
  };

  const submitForm = () => {
    setHistory([...history, { name, age, dateTime: currentDateTime }]);
    resetInputs();
  };

  const resetInputs = () => {
    setName("");
    setAge("");
  };

  const resetHistory = () => {
    setHistory([]);
  };

  const startEditing = (index: number) => {
    setEditIndex(index);
    setEditName(history[index].name);
    setEditAge(history[index].age);
  };

  const handleEditNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditName(event.target.value);
  };

  const handleEditAgeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditAge(event.target.value);
  };

  const saveEdit = () => {
    if (editIndex !== null) {
      const updatedHistory = [...history];
      updatedHistory[editIndex] = {
        ...updatedHistory[editIndex],
        name: editName,
        age: editAge,
      };
      setHistory(updatedHistory);
      cancelEdit();
    }
  };

  const cancelEdit = () => {
    setEditIndex(null);
    setEditName("");
    setEditAge("");
  };

  return (
    <div className="App-header">
      <h1 className="current-time">
        The current time is:
        <br />
        {currentDateTime}
      </h1>
      <div className="input-container">
        <InputName name={name} handleChange={handleChangeName} />
        <InputAge age={age} handleChange={handleChangeAge} />
      </div>
      <h2>
        My name is "{name}" and I am "{age}" years old.
      </h2>
      <button className="input" onClick={submitForm}>
        Submit
      </button>
      <button className="input reset-button" onClick={resetInputs}>
        Reset Inputs
      </button>
      {history.length > 0 && (
        <button className="input" onClick={resetHistory}>
          Clear History of Submissions
        </button>
      )}
      <h3>History of form submissions:</h3>
      <ul>
        {history.map((entry, index) => (
          <li key={index} style={{ display: "flex", alignItems: "center" }}>
            {editIndex === index ? (
              <div>
                <input
                  className="input"
                  type="text"
                  value={editName}
                  onChange={handleEditNameChange}
                />
                <input
                  className="input"
                  type="number"
                  value={editAge}
                  onChange={handleEditAgeChange}
                />
                <button className="input" onClick={saveEdit}>
                  Save
                </button>
                <button className="input" onClick={cancelEdit}>
                  Cancel
                </button>
              </div>
            ) : (
              <div style={{ flex: 1 }}>
                <strong>Name:</strong> {entry.name}, <strong>Age:</strong>{" "}
                {entry.age}, <strong>Submitted at:</strong> {entry.dateTime}
                <button
                  className="input"
                  style={{
                    marginLeft: "10px",
                    padding: "5px 10px",
                    borderRadius: "4px",
                  }}
                  onClick={() => startEditing(index)}
                >
                  Edit
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NameAgeCounter;
