import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import { Grid, AppBar,Toolbar,StepConnector,Hidden} from "@material-ui/core";
import { connect } from "react-redux";
import { mapDispatchToProps } from "../../../../../../ui-utils/commons";
import Search from "../Search";
import Result from "../Result"

const design = theme => ({
  root: {
    width: "1100px"
  },
  button: {
    marginRight: theme.spacing.unit,
    width: "30%"
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit
  },
  connectorActive: {
    "& $connectorLine": {
      borderColor: theme.palette.secondary.main
    }
  },
  connectorCompleted: {
    "& $connectorLine": {
      borderColor: theme.palette.primary.main
    }
  },
  connectorDisabled: {
    "& $connectorLine": {
      borderColor: theme.palette.grey[100]
    }
  },
  connectorLine: {
    transition: theme.transitions.create("border-color")
  },
  appBar: {
    top: "auto",
    bottom: 0,
    background: "#eeeeee",
    boxShadow: "none"
  },
  toolbar: {
    alignItems: "center",
    justifyContent: "space-between"
  },
  container: {
    padding: "5px 5px 5px 5px"
  }
});

function getSteps() {
  return [
    "Search",
    "Result"
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Search />;
    case 1:
      return <Result />;
    default:
      return "Unknown step";
  }
}

class TakerStepper extends React.Component {
  isStepOptional = step => step === 1;
  componentDidMount() {
    const { setAppData } = this.props;
    setAppData("activeStep", 0);
  }
  handleNext = () => {
    const { activeStep, setAppData } = this.props;
    setAppData("activeStep", activeStep + 1);
  };

  handleBack = () => {
    const { setAppData, activeStep } = this.props;
    setAppData("activeStep", activeStep - 1);
  };
  handleChange(property, evt) {
    const { setAppData } = this.props;
    setAppData(property, evt);
  }
  handleFinal = () => {
    this.props.history.push("/user-home/create-service-acknowledgement");

  };
  render() {
    const {
      classes,
      activeStep,
    } = this.props;
    const steps = getSteps();
    const connector = (
      <StepConnector
        classes={{
          active: classes.connectorActive,
          completed: classes.connectorCompleted,
          disabled: classes.connectorDisabled,
          line: classes.connectorLine
        }}
      />
    );
    return (
        <div>
        <Hidden mdDown>
      <Grid style={{margin:"0px 0px 60px 82px"}}>
        <Grid md={12} xs={12} sm={12} className={classes.root}>
          <Stepper
            alternativeLabel
            activeStep={activeStep}
            connector={connector}
            style={{ background: "none", minWidth: "max-content" }}
          >
            {steps.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Grid>
        <Grid container className={classes.container}>
          <Grid item md={12} xs={12} sm={12}>
            {getStepContent(activeStep)}
            <AppBar position="fixed" className={classes.appBar}>
              <Toolbar className={classes.toolbar}>
                <Grid container style={{ textAlign: "right" }}>
                  <Grid item xs={12} md={12}>
                    <Button
                      color="primary"
                      variant="outlined"
                      disabled={activeStep === 0}
                      onClick={this.handleBack}
                      className={classes.button}
                    >
                      Back
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={
                        // activeStep === steps.length - 1
                          // ? this.handleFinal 
                          // : 
                          this.handleNext 
                      }
                      className={classes.button}
                    >
                      {
                      // activeStep === steps.length - 1
                        // ? "CREATE SERVICE" 
                        // :
                         "SEARCH RESULT"}
                    </Button>
                  </Grid>
                </Grid>
              </Toolbar>
            </AppBar>
          </Grid>
        </Grid>
      </Grid>
      </Hidden>
      <Hidden mdUp style={{margin:"0px 0px 60px 0px"}}>
           <Grid >
        <Grid md={12} xs={12} sm={12} className={classes.root}>
          <Stepper
            alternativeLabel
            activeStep={activeStep}
            connector={connector}
            style={{ background: "none", minWidth: "max-content" }}
          >
            {steps.map(label => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        </Grid>
        <Grid container className={classes.container}>
          <Grid item md={12} xs={12} sm={12}>
            {getStepContent(activeStep)}
            <AppBar position="fixed" className={classes.appBar}>
              <Toolbar className={classes.toolbar}>
                <Grid container style={{ textAlign: "right" }}>
                  <Grid item xs={12} md={12}>
                    <Button
                      color="primary"
                      variant="outlined"
                      disabled={activeStep === 0}
                      onClick={this.handleBack}
                      className={classes.button}
                    >
                      Back
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={
                        activeStep === steps.length - 1
                          ? this.handleFinal 
                          : this.handleNext 
                      }
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1
                        ? "CREATE SERVICE" 
                        : "Next"}
                    </Button>
                  </Grid>
                </Grid>
              </Toolbar>
            </AppBar>
          </Grid>
        </Grid>
      </Grid>
      </Hidden>
      
      </div>
    );
  }
}

TakerStepper.propTypes = {
  classes: PropTypes.object
};
const mapStateToProps = ({ screenConfiguration }) => {
  const { preparedFinalObject = {} } = screenConfiguration;
  const {  activeStep = 0,  errorMessages,} = preparedFinalObject;
  return { activeStep,  errorMessages };
};
export default connect( mapStateToProps,mapDispatchToProps)(withStyles(design)(TakerStepper));
