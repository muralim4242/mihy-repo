import {
  getStepperObject,
  getCommonHeader,
  getCommonCard,
  getCommonTitle,
  getCommonParagraph
} from "../utils";

import { footer } from "./applyResource/footer";
import { tradeReviewDetails } from "./applyResource/tradeReviewDetails";
import { tradeDetails } from "./applyResource/tradeDetails";
import { tradeLocationDetails } from "./applyResource/tradeLocationDetails";
import { tradeOwnerDetails } from "./applyResource/tradeOwnerDetails";

const stepsData = ["Trade Details", "Owner Details", "Documents", "Summary"];
const header = getCommonHeader("Application for New Trade License (2018-2019)");
const stepper = getStepperObject({ props: { activeStep: 0 } }, stepsData);

const tradeDocumentDetails = getCommonCard({
  header: getCommonTitle(
    "Please Upload the Required Documents for Verification"
  ),
  paragraph: getCommonParagraph(
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Lorem Ipsum has been the industry's standard."
  )
});

const screenConfig = {
  uiFramework: "material-ui",
  name: "mihytradeliceceapply",
  components: {
    div: {
      uiFramework: "custom-atoms",
      componentPath: "Div",
      props: {
        className: "common-div-css"
      },
      children: {
        header,
        stepper,
        formwizardFirstStep: {
          uiFramework: "custom-atoms",
          componentPath: "Div",
          children: {
            tradeDetails,
            tradeLocationDetails
          }
        },
        formwizardSecondStep: {
          uiFramework: "custom-atoms",
          componentPath: "Div",
          children: {
            tradeOwnerDetails
          },
          visible: false
        },
        formwizardThirdStep: {
          uiFramework: "custom-atoms",
          componentPath: "Div",
          children: {
            tradeDocumentDetails
          },
          visible: false
        },
        formwizardFourthStep: {
          uiFramework: "custom-atoms",
          componentPath: "Div",
          children: {
            tradeReviewDetails
          },
          visible: false
        },
        footer
      }
    }
  }
};

export default screenConfig;
