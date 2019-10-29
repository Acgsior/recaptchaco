import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <form action="?" method="POST">
        <div className="form-item">
          <div className="form-item__label">Account:</div>
          <input name="name" className="input__name" />
        </div>
        <div className="form-item">
          <div className="form-item__label">Password:</div>
          <input name="password" type="password" className="input__password" />
        </div>
        <div className="g-recaptcha" data-sitekey="6LeqQb8UAAAAAE17lRUVfXNsYmjT6rDx22GqEwZ7" />
        <div className="form-item">
          <input type="submit" value="Submit" className="input__submit" />
        </div>
      </form>
    </div>
  );
}

export default App;
