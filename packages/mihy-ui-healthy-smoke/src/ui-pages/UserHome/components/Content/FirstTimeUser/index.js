import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import SmokerProfile from "../components/SmokerProfile";
import AddBrand from "../components/AddBrand";
import { connect } from "react-redux";
import { mapDispatchToProps } from "../../../../../ui-utils/commons";

const useStyles = makeStyles(theme => ({
  root: {
    width: "90%"
  },
  backButton: {
    marginRight: theme.spacing(1)
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  }
}));

function getSteps() {
  return ["Smoker Profile", "Brand Selection"];
}

const FirstTimeUser = ({
  activeStep,
  setAppData,
  countries,
  selectedOption,
  smokerProfile,
  brand,
  brands,
  history
}) => {
  const classes = useStyles();
  const steps = getSteps();
  const handleNext = () => {
    let hasError = false;
    if (activeStep === steps.length - 1) {
      if (brand.name && brand.price) {
        // persist data
        brands.push(brand)
        setAppData("userInfo.brands",brands)
        setAppData("userInfo.selectedBrand",brand.name)
        history.push("/user-home")
      } else {
        hasError = true;
      }
    } else {
      if (
        smokerProfile.name &&
        smokerProfile.mobileNumber &&
        smokerProfile.country
      ) {
        setAppData("activeStep", activeStep + 1);
      } else {
        hasError = true;
      }
    }
    if (hasError) {
      let snackbarObj = {};
      snackbarObj["open"] = true;
      snackbarObj["variant"] = "error";
      snackbarObj["message"] = "Please fill all field";
      setAppData("snackbar", snackbarObj);
    }
  };

  const handleBack = () => {
    setAppData("activeStep", activeStep - 1);
  };

  const getStepContent = stepIndex => {
    switch (stepIndex) {
      case 0:
        return (
          <SmokerProfile
            countries={countries}
            smokerProfile={smokerProfile}
            selectedOption={selectedOption}
            handleChange={setAppData}
          />
        );
      case 1:
        return <AddBrand brand={brand} handleChange={setAppData} />;
      default:
        return "Uknown stepIndex";
    }
  };

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Smoker Information
      </Typography>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        <div>
          <div className={classes.instructions}>
            <Paper>{getStepContent(activeStep)}</Paper>
          </div>
          <div>
            <Button
              disabled={activeStep === 0}
              onClick={handleBack}
              className={classes.backButton}
            >
              Back
            </Button>
            <Button variant="contained" color="primary" onClick={handleNext}>
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ screenConfiguration }) => {
  const { preparedFinalObject = {} } = screenConfiguration;
  const {
    userInfo = {},
    isEditDailogOpen = false,
    activeStep = 0,
    countries = [],
    selectedOption,
    brand={}
  } = preparedFinalObject;
  const { brands = [], selectedBrand = 0, smokerProfile = {} } = userInfo;
  return {
    isEditDailogOpen,
    brands,
    selectedBrand,
    activeStep,
    countries,
    smokerProfile,
    selectedOption,
    brand
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FirstTimeUser);
