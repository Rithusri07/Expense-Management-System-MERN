import React from "react";
import "./Home.css";
import logo from "./logo.jpg";
import homepic from "./homepic.jpg";
import ActionAreaCard from "./ActionAreaCard";

export default function Home({ page, isLoggedIn, setPage }) {
  return (
    <div className="cover">
      <nav className="page">
        <div className="logo">
          <img src={logo} height="150px" alt="Logo" />
        </div>
        <ul>
          <li>
            <p onClick={() => setPage("home")}>Home</p>
          </li>
          <li>
            <p onClick={() => setPage(isLoggedIn ? "expenses" : "login")}>
              New Expenses
            </p>
          </li>
          <li>
            <p onClick={()=>{}}>
              Saved Expenses
            </p>
          </li>
          <li>
            <p onClick={()=>{setPage("manageRecipt")}}>Receipt Management</p>
          </li>
         
        </ul>
      </nav>

      {page === "home" && (
        <>
          <h1>Welcome</h1>
          <h2 className="head">Maintain your expenses effectively</h2>
          <h2 className="image">
            <img src={homepic} height="350px" alt="Home" />
          </h2>
          <p className="letters">
          An Expense Management System simplifies financial tracking by automating expense reporting, approvals, and reimbursements, saving time and reducing manual errors. It provides real-time insights into spending, helping individuals and businesses maintain better financial control and adhere to company policies and tax regulations. With features like mobile receipt scanning, policy enforcement, and seamless integration with accounting software, it enhances convenience and accuracy.
          </p>
          <button onClick={() => setPage(isLoggedIn ? "expenses" : "login")} class="start">Get Started!</button> 
          <ActionAreaCard/>
          <br/>
          <div class="features">
        <div class="feature">
            <h2>Expense</h2>
            <p>Monitor and categorize expenses
              Upload receipts for verification
              Real-time spending insights</p>
            
        </div>
        <div class="feature">
            <h2>Budget</h2>
            <p>Set monthly/annual budgets
               Get alerts for overspending
               Compare actual vs. planned expenses</p>
        </div>
        <div class="feature">
            <h2>Category</h2>
            <p>Manage expenses for different categories</p>
            
        </div>
        
    </div>
    <br/><br/>
    <div class="footer">
        <div class="footer-column">
            <h3>Expense Manager</h3>
            <p>Track and manage your expenses efficiently.</p>
        </div>
        <div class="footer-column">
            <h3>Quick Links</h3>
            <ul>
            <li>Dashboard</li>
            <li>Reports</li>
            <li>Categories</li>
            <li>Settings</li>
            </ul>
        </div>
        <div class="footer-column">
            <h3>Support</h3>
            <ul>
            <li>Help Center</li>
            <li>Contact Us</li>
            <li>FAQs😊</li>
            </ul>
            
        </div>
        <div class="footer-column">
            <h3>Follow Us</h3>
            <div class="social-icons">
              <ul>
              <li><i>🚀</i></li>
              <li><i><img src="https://www.pikpng.com/pngl/m/89-892041_png-format-images-for-background.png" alt="insta" height="19px" width="19px"/></i></li>
              <li><i><img src="https://tse1.mm.bing.net/th?id=OIP.iHR4BtO1BjkrfWuLaJm9LAAAAA&pid=Api&P=0&h=180" alt="facebook" height="19px" width="20px"/></i></li>
              </ul>
            </div>
        </div>
    </div>
    <div class="footer-bottom">
        &copy; 2025 Expense Management System | All Rights Reserved
    </div>
        </>
      )}
    </div>
  );
}
