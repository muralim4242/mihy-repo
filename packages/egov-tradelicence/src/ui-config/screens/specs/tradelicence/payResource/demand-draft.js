import {
  getTextField,
  getSelectTextField,
  getCommonContainer,
  getCommonSubHeader
} from "mihy-ui-framework/ui-config/screens/specs/utils";
import { payeeDetails } from "./payeeDetails";

export const demandDraftDetails = getCommonContainer({
  ddNo: getTextField("DD No", "Enter DD  no.", true, ""),
  ddDate: getTextField("DD Date", "dd/mm/yy", true, "", "", {
    position: "end",
    iconName: "date_range"
  }),
  ddIFSC: getTextField("IFSC", "Enter bank IFSC", true, "")
});

export const demandDraft = getCommonContainer({
  payeeDetails,
  demandDraftDetails
});
