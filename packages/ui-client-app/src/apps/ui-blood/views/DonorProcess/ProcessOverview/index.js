import React from "react";
import PropTypes from "prop-types";
import { StepperNonLinearWithoutAction, CardWithMedia } from "mihy-ui-framework/ui-molecules";
import { Div } from "mihy-ui-framework/ui-atoms";

function getSteps() {
  return [
    "Registration",
    "Health Checkup",
    "Donation",
    "Refreshment and Checkup"
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return (
        <CardWithMedia
          heading="Registraion"
          cardContent={[
            "We’ll sign you in and go over basic eligibility.",
            "You’ll be asked to show ID, such as your driver’s license.",
            "You’ll read some information about donating blood."
          ]}
          cardMedia={{
            src:
              "https://www.redcrossblood.org/content/dam/redcrossblood/rcb/donate-blood/components/856x423-process-reg.jpg.img.jpeg",
            title: "Registration"
          }}
        />
      );
    case 1:
      return (
        <CardWithMedia
          heading="Health Checkup"
          cardContent={[
            "We’ll sign you in and go over basic eligibility.",
            "You’ll be asked to show ID, such as your driver’s license.",
            "You’ll read some information about donating blood."
          ]}
          cardMedia={{
            src:
              "https://www.redcrossblood.org/content/dam/redcrossblood/rcb/donate-blood/components/520x295-health-history.jpg.img.jpeg",
            title: "Health History"
          }}
        />
      );
    case 2:
      return (
        <CardWithMedia
          heading="Donation"
          cardContent={[
            "We’ll sign you in and go over basic eligibility.",
            "You’ll be asked to show ID, such as your driver’s license.",
            "You’ll read some information about donating blood."
          ]}
          cardMedia={{
            src:
              "https://www.redcrossblood.org/content/dam/redcrossblood/rcb/donate-blood/components/your-donation.jpg.img.jpeg",
            title: "Health History"
          }}
        />
      );
    default:
      return (
        <CardWithMedia
          heading="Refreshment and Recovery"
          cardContent={[
            "We’ll sign you in and go over basic eligibility.",
            "You’ll be asked to show ID, such as your driver’s license.",
            "You’ll read some information about donating blood."
          ]}
          cardMedia={{
            src:
              "https://www.redcrossblood.org/content/dam/redcrossblood/rcb/donate-blood/components/856x423-process-your-donation.jpg/donation-process-refreshments.jpg.img.jpeg",
            title: "Health History"
          }}
        />
      );
  }
}

class ProcessOverview extends React.Component {
  render() {
    const steps = getSteps();

    return (
      <Div>
        <StepperNonLinearWithoutAction
          steps={steps}
          getStepContent={getStepContent}
        />
      </Div>
    );
  }
}

ProcessOverview.propTypes = {};

export default ProcessOverview;
