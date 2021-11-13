import React from "react";
import './WelcomeScreen.css';
import background from "./background.jpg";
import { Container } from "react-bootstrap";

function WelcomeScreen(props) {
return props.showWelcomeScreen ?
(
  <Container className="WelcomeScreen">
  <img alt="background" src={background} className="background" />
  <div className="WelcomeScreen">
    <h1>Welcome to the Meet app</h1>
    <h4>
    Log in to see upcoming events around the world for full-stack developers
    </h4>
    <div className="button_cont" align="center">
      <div class="google-btn">
        <div class="google-icon-wrapper">
          <img class="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google sign-in" />
        </div>
        <button onClick={() => { props.getAccessToken() }} rel="nofollow noopener" class="btn-text">
          <b>Sign in with google</b>
        </button>
        </div>
    </div>
    <a href="https://elenaharan.github.io/meet/privacyPolicy.html" rel="nofollow noopener">Privacy policy</a>
  </div>
  </Container>
)
: null
}
export default WelcomeScreen;