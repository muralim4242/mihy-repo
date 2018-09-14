import {
  getTextField,
  getSelectTextField,
  getCommonContainer
} from "../../utils";

export const payeeDetails = getCommonContainer({
  paidBy: getSelectTextField("Paid By", "Paid By", false, ""),
  payerName: getTextField("Payer Name", "Enter Payer Name", false, ""),
  payerMobileNo: getTextField(
    "Payer Mobile No.",
    "Enter Payer Mobile No.",
    false,
    ""
  )
});
