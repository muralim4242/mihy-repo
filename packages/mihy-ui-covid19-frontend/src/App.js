import React from "react";
import { withRouter } from "react-router-dom";
// import { firebaseAuth } from "./ui-config/firebase";
import Snackbar from "./ui-containers/SnackBar";
import CircularProgress from "@material-ui/core/CircularProgress";
import {mapDispatchToProps} from "./ui-utils/commons";
import MainRoutes from "./ui-routes/MainRoutes";
import { connect } from "react-redux";
import { withTranslation } from "react-i18next";
import "./App.css";


class App extends React.Component {
  // // Listen to the Firebase Auth state and set the local state.
  // componentDidMount() {
  //   const { history} = this.props;
  //   this.unregisterAuthObserver = firebaseAuth().onAuthStateChanged(user => {
  //     if (user) {
  //       // history.push("/user-home/first-time");
  //       history.push("/user-home");
  //     } else {
  //       history.push("/");
  //     }
  //   });
  // }

  // Make sure we un-register Firebase observers when the component unmounts.
  // componentWillUnmount() {
  //   this.unregisterAuthObserver();
  // }
  componentDidMount= async()=>{
    const {i18n,selectedLanguage, setAppData}=this.props;
    i18n.changeLanguage(selectedLanguage);
    let appConfig = await fetch("https://raw.githubusercontent.com/muralim4242/mihy-repo/master/packages/mihy-config/covid19/app-configuration.json?timestamp="+new Date().getTime())
      .then(function(response) {
        return response.json();
      })
      .catch(error => console.error(error));
    setAppData("appConfig",appConfig)
  }

  render() {
    const { spinner } = this.props;
    return (
      <div>
        <MainRoutes/>
        <Snackbar />
        {spinner && (
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)"
            }}
          >
            <CircularProgress />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ screenConfiguration }) => {
  const { preparedFinalObject = {} } = screenConfiguration;
  const { spinner ,selectedLanguage="en"} = preparedFinalObject;
  return { spinner,selectedLanguage };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(withTranslation()(App)));
