import {
  getStepperObject,
  getCommonHeader,
  getCommonCard,
  getCommonSubHeader,
  getCommonParagraph,
  getBreak,
} from "../utils";

import {footer} from "./applyResource/footer";

const stepsData = ["Trade Details", "Owner Details", "Documents", "Summary"];
const header=getCommonHeader(
  "Application for New Trade License (2018-2019)"
);
const stepper=getStepperObject({ props: { activeStep: 0 } }, stepsData)
const tradeDetails = getCommonCard({
  header: getCommonSubHeader("Please Provide Trade Details"),
  break: getBreak(),
  paragraph: getCommonParagraph(
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Lorem Ipsum has been the industry's standard."
  )
});
const tradeLocationDetails = getCommonCard({
  header: getCommonSubHeader("Please Provide Trade Location Details"),
  break: getBreak(),
  paragraph: getCommonParagraph(
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Lorem Ipsum has been the industry's standard."
  )
});
const tradeOwnerDetails = getCommonCard({
  header: getCommonSubHeader("Please Provide Trade Owner Details"),
  break: getBreak(),
  paragraph: getCommonParagraph(
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Lorem Ipsum has been the industry's standard."
  )
});
const tradeDocumentDetails = getCommonCard({
  header: getCommonSubHeader("Please Upload the Required Documents for Verification"),
  break: getBreak(),
  paragraph: getCommonParagraph(
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Lorem Ipsum has been the industry's standard."
  )
});
const tradeReviewDetails = getCommonCard({
  header: getCommonSubHeader("Please review your Application and Submit"),
  break: getBreak(),
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
          },
        },
        formwizardSecondStep: {
          uiFramework: "custom-atoms",
          componentPath: "Div",
          children: {
            tradeOwnerDetails
          },
          visible:false
        },
        formwizardThreeStep: {
          uiFramework: "custom-atoms",
          componentPath: "Div",
          children: {
            tradeDocumentDetails
          },
          visible:false
        },
        formwizardFourStep: {
          uiFramework: "custom-atoms",
          componentPath: "Div",
          children: {
            tradeReviewDetails
          },
          visible:false
        },
        footer
      }
    }
  }
};

export default screenConfig;
