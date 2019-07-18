import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import {
  googleAuthProviderId,
  facebookAuthProviderId,
  firebaseAuth
} from "../../../../ui-config/firebase";
import isEmpty from "lodash/isEmpty";
import "./index.css";
import {withRouter} from "react-router-dom";

class Auth extends React.Component {
  // The component's Local state.
  state = {
    isSignedIn: false, // Local signed-in state.
    uiConfig: {}
  };

  // Configure FirebaseUI.
  componentDidMount=()=>
  {
      this.setState({
        uiConfig:{
          // Popup signin flow rather than redirect flow.
          signInFlow: "popup",
          // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccessWithAuthResult function.
          signInSuccessUrl: `/user-home`,
          callbacks:{
            signInSuccessWithAuthResult: (authResult, redirectUrl)=>
            {
              localStorage.setItem("authResult",JSON.stringify(authResult));
              return true;
            }
          },
          // We will display Google and Facebook as firebaseAuth providers.
          signInOptions: [ facebookAuthProviderId,googleAuthProviderId]
        }
      })
  }


  render() {
    const {rootClass}=this.props;
    const {uiConfig}=this.state;
    return !isEmpty(uiConfig) && (
      <div className={rootClass}>
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebaseAuth()}
        />
      </div>
    );
  }
}

export default withRouter(Auth);
