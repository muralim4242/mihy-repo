import {
  getStepperObject,
  getCommonHeader,
  getCommonCard,
  getCommonGrayCard,
  getCommonTitle,
  getCommonSubHeader,
  getCommonParagraph,
  getTextField,
  getSelectTextField,
  getCommonContainer,
  getLabelWithValue
} from "../utils";

import { footer } from "./applyResource/footer";

const stepsData = ["Trade Details", "Owner Details", "Documents", "Summary"];
const header = getCommonHeader("Application for New Trade License (2018-2019)");
const stepper = getStepperObject({ props: { activeStep: 0 } }, stepsData);

const multipleTradeUnitCard =
  // {
  //   uiFramework: "custom-molecules",
  //   componentPath: "MultiItem",
  //   props: {
  //     scheama:
  getCommonGrayCard({
    header: getCommonSubHeader("Trade Unit  "),
    tradeUnitCardContainer: getCommonContainer({
      tradeCategory: getSelectTextField(
        "Trade Category",
        "Select Trade Category",
        true,
        ""
      ),
      tradeType: getSelectTextField(
        "Trade  Type",
        "Select Trade Type",
        true,
        ""
      ),
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
//     ,
//     items: [],
//     addItemLabel: "ADD TRADE UNIT"
//   },
//   type:"array"
// };

const accessoriesCard = {
  uiFramework: "custom-molecules",
  componentPath: "MultiItem",
  props: {
    scheama: getCommonGrayCard({
      header: getCommonSubHeader("Accessories"),
      accessoriesCardContainer: getCommonContainer({
        accessoriesName: getSelectTextField(
          "Accessories",
          "Select Accessories",
          false,
          ""
        ),
        accessoriesUOM: getTextField(
          "UOM (Unit of Measurement)",
          "UOM",
          false,
          ""
        ),
        accessoriesUOMValue: getTextField(
          "UOM Value",
          "Enter UOM Value",
          false,
          ""
        )
      })
    }),

    items: [],
    addItemLabel: "ADD ACCESSORIES"
  },
  type: "array"
};

const tradeDetails = getCommonCard({
  header: getCommonTitle("Please Provide Trade Details"),
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
  multipleTradeUnitCard,
  accessoriesCard
});

const tradeLocationDetails = getCommonCard({
  header: getCommonTitle("Please Provide Trade Location Details"),
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

const OwnerInfoCard = getCommonGrayCard({
  header: getCommonSubHeader("Owner Information"),
  tradeUnitCardContainer: getCommonContainer({
    ownerMobileNo: getTextField("Mobile No.", "Enter Mobile No.", true, ""),
    ownerName: getTextField("Name", "Enter Name", true, ""),
    ownerFatherName: getTextField(
      "Father/Husband's Name",
      "Enter Father/Husband's Name",
      true,
      ""
    ),
    OwnerGender: getSelectTextField("Gender", "Select Gender", true, ""),
    ownerDOB: getTextField("Date of Birth", "Enter Date of Birth", true, ""),
    ownerEmail: getTextField("Email", "Enter Email", false, ""),
    ownerPAN: getTextField("PAN No.", "Enter Owner's PAN No.", false, ""),
    ownerAddress: getTextField(
      "Corrospondence Address",
      "Enter Corrospondence Address",
      true,
      ""
    ),
    OwnerSpecialCategory: getSelectTextField(
      "Special Owner Category",
      "Select Special Owner Category",
      true,
      ""
    )
  })
});

const tradeOwnerDetails = getCommonCard({
  header: getCommonTitle("Please Provide Trade Owner Details"),
  paragraph: getCommonParagraph(
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Lorem Ipsum has been the industry's standard."
  ),
  tradeLicenseType: getSelectTextField(
    "Type of ownership",
    "Select Type of Ownership",
    false,
    ""
  ),
  OwnerInfoCard
});
const tradeDocumentDetails = getCommonCard({
  header: getCommonTitle(
    "Please Upload the Required Documents for Verification"
  ),
  paragraph: getCommonParagraph(
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Lorem Ipsum has been the industry's standard."
  )
});
const tradeReviewDetails = getCommonCard({
  header: getCommonTitle("Please review your Application and Submit"),
  paragraph: getCommonParagraph(
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Lorem Ipsum has been the industry's standard."
  ),
  viewOne: getCommonContainer({
    revoiewLicenceType: getLabelWithValue("Licence Type", "Temporary"),
    reviewTradeName: getLabelWithValue("Trade Name", "Matchbox Packing Unit"),
    reviewTradeMobility: getLabelWithValue("Trade Mobility", "Immovable"),
    reviewCommencementDate: getLabelWithValue(
      "Commencement Date",
      "12/12/2018"
    ),
    reviewOperationalArea: getLabelWithValue("Operational Area", "2000 Sqft"),
    reviewNoOfEmployee: getLabelWithValue("No of Employees", "200"),
    reviewGSTNo: getLabelWithValue("GST No.", "364565")
  }),
  viewTwo: getCommonContainer({
    revoiewTradeCategory: getLabelWithValue("Trade Category", "Goods"),
    reviewTradeType: getLabelWithValue("Trade Type", "Value"),
    reviewTradeSubtype: getLabelWithValue(
      "Trade Sub-Type",
      "Manufacuring Plant"
    ),
    reviewTradeUOM: getLabelWithValue("UOM (Unit of Measurement)", "Sq Ft"),
    reviewTradeUOMValue: getLabelWithValue("UOM Value", "2000")
  })
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
