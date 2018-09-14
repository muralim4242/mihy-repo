import { getTextField, getSelectTextField } from "../../utils";

export const payeeDetails = {
  uiFramework: "custom-atoms",
  componentPath: "Div",
  gridDefination: {
    sm: 12
  },
  children: {
    paidBy: getSelectTextField("Paid By", "Paid By", false, ""),
    payerName: getTextField("Payer Name", "Enter Payer Name", false, ""),
    payerMobileNo: getTextField(
      "Payer Mobile No.",
      "Enter Payer Mobile No.",
      false,
      ""
    )
  }
};
