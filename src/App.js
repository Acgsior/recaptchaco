import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.widgetId = '';
  }

  handleSubmit = (e) => {
    console.log('###', this.getValue());
    if (this.getValue() === "") {
      e.preventDefault();
    }
  }

  getValue = () => {
    return this.grecaptcha.getResponse(this.widgetId);
  }

  onRecaptchaApiLoaded = () => {
    console.log('=== load handler start');
    if (!this.grecaptcha) {
      this.grecaptcha = window.grecaptcha;
    }
    const element = document.querySelector('.grecaptcha-container');
    this.widgetId = this.grecaptcha.render(element, {
      'sitekey': '6LeqQb8UAAAAAE17lRUVfXNsYmjT6rDx22GqEwZ7'
    });
    console.log('===', this.grecaptcha, this.widgetId);
    console.log('=== load handler end');
  }

  createScriptLink = () => {
    const { useRecaptchaNet = true } = this.props;
    const hostname = useRecaptchaNet ? 'recaptcha.net' : 'www.google.com'
    return `https://${hostname}/recaptcha/api.js?onload=onRecaptchaApiLoaded&render=explicit`;
  }

  componentDidMount() {
    const scriptLink = this.createScriptLink();
    const scriptElement = document.createElement('script');
    scriptElement.src = scriptLink;
    scriptElement.type = 'text/javascript';
    scriptElement.defer = true;
    scriptElement.async = true;
    window.onRecaptchaApiLoaded = this.onRecaptchaApiLoaded;
    document.body.appendChild(scriptElement);
  }

  render() {
    return (
      <div className="App">
        <form id="recaptchaForm" action="?" method="POST" onSubmit={this.handleSubmit}>
          <div className="form-item">
            <div className="form-item__label">Account:</div>
            <input name="name" className="input__name" />
          </div>
          <div className="form-item">
            <div className="form-item__label">Password:</div>
            <input name="password" type="password" className="input__password" />
          </div>
          <div className="grecaptcha-container" />
          <div className="form-item">
            <input type="submit" value="Submit" className="input__submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default App;
