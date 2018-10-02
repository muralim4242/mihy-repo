import { getFormCommonCard } from "../utils";
import {
  getTextField,
  getSelectField,
  getLabel
} from "mihy-ui-framework/ui-config/screens/specs/utils";

const strinkFalse = {
  gridDefination: {
    xs: 12
  }
};

const screenConfig = {
  uiFramework: "material-ui",
  name: "mihyBloodRegister",
  components: {
    cardSection: getFormCommonCard({
      iconName: "lock",
      iconColorOne: "rgb(233, 30, 99)",
      iconColorTwo: "rgb(233, 30, 99)",
      children: {
        bloodGrp: getSelectField({
          label: { labelName: "Blood group" },
          placeholder: {
            labelName: "Select blood group"
          },
          data: [{ code: "A+" }],
          jsonPath: "Register[0].bloodGrp",
          ...strinkFalse
        }),
        age: getTextField({
          label: { labelName: "Age" },
          placeholder: {
            labelName: "Enter age"
          },
          jsonPath: "Register[0].age",
          ...strinkFalse
        }),
        weight: getTextField({
          label: { labelName: "Weight" },
          placeholder: {
            labelName: "Enter Weight"
          },
          jsonPath: "Register[0].weight",
          ...strinkFalse
        }),
        registor: {
          componentPath: "Button",
          props: {
            variant: "outlined",
            color: "primary",
            fullWidth: true
          },
          children: {
            registorLabel: getLabel("Register")
          }
        },
        // confirmationPopup: {
        //   componentPath: "Dialog",
        //   props: {
        //     open: true
        //   },
        //   children: {
        //     dialogContent: {
        //       componentPath: "DialogContent",
        //       children: {
        //         popup: getLabel("test")
        //       }
        //     }
        //   }
        // }
      }
    })
  }
};

export default screenConfig;
