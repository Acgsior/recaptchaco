import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <form action="?" method="POST">
          <div className="g-recaptcha" data-sitekey="6LeqQb8UAAAAAE17lRUVfXNsYmjT6rDx22GqEwZ7"></div>
          <br/>
          <input type="submit" value="Submit" />
        </form>
      </header>
    </div>
  );
}

export default App;
