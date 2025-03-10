import React, { useState } from "react";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import ExpenseForm from "./Components/ExpenseForm";
import ExpenseList from "./Components/ExpenseList";
import ExpenseSummary from "./Components/ExpenseSummary";
import "./App.css";
function App() {
  const [expenses,setExpenses] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [page, setPage] = useState("home");
  const [registeredUsers, setRegisteredUsers] = useState({});
  const [images, setImages] = useState([]);

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map((file) => {
      return {
        id: URL.createObjectURL(file),
        file: file,
      };
    });
    setImages((prevImages) => [...prevImages, ...newImages]); 
  };

  const removeImage = (id) => {
    setImages(images.filter((image) => image.id !== id));
  };

  const handleSignUp = (email, password) => {
    setRegisteredUsers((prevUsers) => ({
      ...prevUsers,
      [email]: password, 
    }));
    setPage("login"); 
  };

  const handleLogin = (email, password) => {
    if (registeredUsers[email] && registeredUsers[email] === password) {
      setIsLoggedIn(true);
      setPage("expenses"); // Redirect to expense page
    } else {
      document.querySelector(".error").innerHTML = "Invalid credentials";
    }
  };

  const addExpense = (expense) => {
    setExpenses((prevExpenses) => [...prevExpenses, expense]);
  };

  return (
    <div>
      <Home page={page} isLoggedIn={isLoggedIn} setPage={setPage} />
      {page === "login" && !isLoggedIn && (
        <Login onLogin={handleLogin} onSwitchToSignUp={() => setPage("signup")} />
      )}
      {page === "signup" && (
        <SignUp onSignUp={handleSignUp} onSwitchToLogin={() => setPage("login")} />
      )}
      {page === "expenses" && isLoggedIn && (
        <div className="app-container">
          <h1>Expense Management System</h1>
          <ExpenseForm onAddExpense={addExpense} />
          <ExpenseSummary expenses={expenses} />
          <ExpenseList expenses={expenses} />
        </div>
      )}
      {page ==="manageRecipt" && (
        <div className="multi-upload" style={{marginLeft:"340px"}}>
        <h1>Multi File Upload</h1>
        <button className="save"
        >Save</button>
        <input style={{marginLeft:"300px", width: "300px", height: "50px", fontSize: "18px", padding: "1px"}}
          type="file"
          accept="image/*"
          multiple
          onChange={handleImageUpload}
        />
        <div style={{ display: "flex", flexWrap: "wrap", marginTop: "20px" }}>
          {images.map((image) => (
            <div key={image.id} style={{ margin: "10px", textAlign: "center" }}>
              <img
                src={image.id}
                alt="Uploaded"
                style={{
                  width: "150px",
                  height: "150px",
                  borderRadius: "10px",
                  objectFit: "cover",
                  border: "2px solid #ddd",
                }}
              />
              <br />
              <button
                onClick={() => removeImage(image.id)}
                style={{
                  marginTop: "5px",
                  background: "red",
                  color: "white",
                  border: "none",
                  padding: "5px",
                  cursor: "pointer",
                  borderRadius: "5px",
                }}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
       
      </div>
      )}
        
    </div>
  );
}

export default App;
