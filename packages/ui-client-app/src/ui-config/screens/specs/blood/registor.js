import { getFormCommonCard } from "../utils";
import { getTextField ,getSelectField} from "mihy-ui-framework/ui-config/screens/specs/utils";

const screenConfig = {
  uiFramework: "material-ui",
  name: "mihyBloodRegistor",
  components: {
    cardSection: getFormCommonCard({
      iconName: "lock",
      iconColorOne: "rgb(233, 30, 99)",
      iconColorTwo: "rgb(233, 30, 99)",
      children: {
        bloodGrp: getSelectField({
          label: { label: "Blood group" },
          placeholder: {
            label: "Select blood group"
          },
          data: [{ code: "A+" }]
        }),
        age: getTextField({
          label: { label: "Blood group" },
          placeholder: {
            label: "Select blood group"
          }
        }),
        weight: getTextField({
          label: { label: "Blood group" },
          placeholder: {
            label: "Select blood group"
          }
        })
      }
    })
  }
};

export default screenConfig;
