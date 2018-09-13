import {
  getCommonCard,
  getCommonGrayCard,
  getCommonTitle,
  getCommonSubHeader,
  getCommonParagraph,
  getTextField,
  getSelectTextField,
  getCommonContainer
} from "../../utils";

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
    addItemLabel: "ADD ACCESSORIES",
    headerName: "Accessory",
    headerJsonPath:
      "children.cardContent.children.header.children.Accessories.props.label"
  },
  type: "array"
};

export const tradeDetails = getCommonCard({
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
