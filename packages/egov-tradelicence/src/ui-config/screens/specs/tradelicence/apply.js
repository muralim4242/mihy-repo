import {
  getStepperObject,
  getCommonHeader,
  getCommonCard,
  getCommonSubHeader,
  getCommonParagraph,
  getBreak,
  getTextField,
  getSelectTextField,
  getInnerCard,
  getCommonContainer
} from "../utils";

import { footer } from "./applyResource/footer";

const stepsData = ["Trade Details", "Owner Details", "Documents", "Summary"];
const header = getCommonHeader("Application for New Trade License (2018-2019)");
const stepper = getStepperObject({ props: { activeStep: 0 } }, stepsData);

const tradeUnitCard = getInnerCard({
  header: getCommonSubHeader("Trade Unit  "),
  break: getBreak(),
  tradeUnitCardContainer: getCommonContainer({
    tradeCategory: getSelectTextField(
      "Trade Category",
      "Select Trade Category",
      true,
      ""
    ),
    tradeType: getSelectTextField("Trade  Type", "Select Trade Type", true, ""),
    tradeSubType: getSelectTextField(
      "Trade Sub-Type",
      "Select Trade Sub-Type",
      true,
      ""
    ),
    tradeUOM: getTextField("UOM (Unit of Measurement)", "", true, ""),
    tradeUOMValue: getTextField("UOM Value", "Enter UOM Value", true, "")
  })
});

const accessoriesCard = getInnerCard({
  header: getCommonSubHeader("Accessories"),
  break: getBreak(),
  accessoriesCardContainer: getCommonContainer({
    accessoriesName: getSelectTextField(
      "Accessories",
      "Select Accessories",
      false,
      ""
    ),
    accessoriesUOM: getTextField("UOM (Unit of Measurement)", "UOM", false, ""),
    accessoriesUOMValue: getTextField("UOM Value", "Enter UOM Value", false, "")
  })
});

const tradeDetails = getCommonCard({
  header: getCommonSubHeader("Please Provide Trade Details"),
  break: getBreak(),
  paragraph: getCommonParagraph(
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Lorem Ipsum has been the industry's standard."
  ),
  tradeDetailsConatiner: getCommonContainer({
    tradeLicenseType: getSelectTextField(
      "License Type",
      "Select License Type",
      true,
      ""
    ),
    tradeTradeMobility: getSelectTextField(
      "Trade Mobility",
      "Select Trade Mobility",
      true,
      ""
    ),
    tradeName: getTextField(
      "Name of Trade",
      "Example Diljit Da Dhaba",
      true,
      ""
    ),
    tradeCommencementDate: getTextField(
      "Trade Commencement Date",
      "Enter Trade Commencement Date",
      true,
      ""
    ),
    tradeGSTNo: getTextField("Trade GST No.", "Enter Trade GST No.", false, ""),
    tradeOperationalArea: getTextField(
      "Operatonal Area (Sq Ft)",
      "Enter Operatonal Area in Sq Ft",
      false,
      ""
    ),
    tradeNoOfEmployee: getTextField(
      "No. Of Employee",
      "Enter No. Of Employee",
      false,
      ""
    )
  }),
  tradeUnitCard,
  accessoriesCard
});
const tradeLocationDetails = getCommonCard({
  header: getCommonSubHeader("Please Provide Trade Location Details"),
  break: getBreak(),
  paragraph: getCommonParagraph(
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Lorem Ipsum has been the industry's standard."
  ),
  tradeDetailsConatiner: getCommonContainer({
    tradeLocPropertyID: getTextField(
      "Property ID",
      "Enter Property ID",
      false,
      ""
    ),
    tradeLocCity: getSelectTextField("City", "Select City", false, ""),
    tradeLocDoorHouseNo: getTextField(
      "Door/House No.",
      "Enter Door/House No.",
      false,
      ""
    ),
    tradeLocBuilidingName: getTextField(
      "Building/Colony Name",
      "Enter Building/Colony Name",
      false,
      ""
    ),
    tradeLocStreetName: getTextField(
      "Street Name",
      "Enter Street Name",
      false,
      ""
    ),
    tradeLocMohalla: getTextField("Mohalla", "Enter Mohalla", true, ""),
    tradeLocPincode: getTextField("Pincode", "Enter Pincode", false, ""),
    tradeLocGISCoord: getTextField(
      "GIS Coordinates",
      "Select your trade location on map",
      false,
      ""
    ),
    tradeLocElectricity: getTextField(
      "Electricity Connection No.",
      "Enter Electricity Connection No. of Trade Loaction",
      false,
      ""
    )
  })
});

const tradeOwnerDetails = getCommonCard({
  header: getCommonSubHeader("Please Provide Trade Owner Details"),
  break: getBreak(),
  paragraph: getCommonParagraph(
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Lorem Ipsum has been the industry's standard."
  )
});
const tradeDocumentDetails = getCommonCard({
  header: getCommonSubHeader(
    "Please Upload the Required Documents for Verification"
  ),
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
        formwizardThreeStep: {
          uiFramework: "custom-atoms",
          componentPath: "Div",
          children: {
            tradeDocumentDetails
          },
          visible: false
        },
        formwizardFourStep: {
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
