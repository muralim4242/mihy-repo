import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import LanguageSelection from "../components/LanguageSelection";
import { connect } from "react-redux";
import { mapDispatchToProps } from "../../../../../ui-utils/commons";
import { withTranslation } from "react-i18next";


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


const FirstTimeUser = ({
  activeStep,
  setAppData,
  countries,
  selectedOption,
  smokerProfile,
  brand,
  brands,
  history,
  t
}) => {
  const classes = useStyles();
  const handleNext = () => {
    history.push("/user-home")
  };


  return (
    <div>
      <Typography variant="h6" gutterBottom>
        {t("language.header")}
      </Typography>
      <div>
        <div>
          <div className={classes.instructions}>
            <Paper>
            <LanguageSelection
              countries={countries}
              smokerProfile={smokerProfile}
              selectedOption={selectedOption}
              handleChange={setAppData}
            /></Paper>
          </div>
          <div>
            <Button variant="contained" color="primary" onClick={handleNext}>
              {t("language.next")}
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
)(withTranslation()(FirstTimeUser));
