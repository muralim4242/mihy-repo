import {
  getCommonHeader,
  getCommonCard,
  getCommonParagraph,
  getBreak,
  getCommonContainer
} from "mihy-ui-framework/ui-config/screens/specs/utils";

import { footer } from "./applicationSuccessResource/footer";

const header = getCommonHeader("Application for New Trade License (2018-2019)");

const card = getCommonCard({
  applicationSuccessContainer: getCommonContainer({
    avatar: {
      componentPath: "Avatar",
      props: {
        style: {
          width: "80px",
          height: "80px",
          margin: "10px",
          color: "#fff",
          backgroundColor: "#39CB74"
        }
      },
      children: {
        Icon: {
          uiFramework: "custom-atoms",
          componentPath: "Icon",
          props: {
            iconName: "done",
            style: {
              fontSize: "50px"
            }
          }
        }
      }
    },
    successText: {
      uiFramework: "custom-atoms",
      componentPath: "Div",
      children: {
        header: getCommonHeader("Application Submitted Successfully"),
        break: getBreak(),
        paragraph: getCommonParagraph(
          "A copy of application confirmation has been sent to trade owner at registered Mobile No."
        )
      },
      props: {
        style: {
          marginTop: "15px",
          marginLeft: "10px",
          flex: 1
        }
      }
    },
    applicationNumber: {
      uiFramework: "custom-atoms",
      componentPath: "Div",
      children: {
        text: getCommonParagraph("Application No."),
        paragraph: getCommonHeader("3456")
      },
      props: {
        style: {
          marginTop: "20px",
          "text-align": "right",
          flex: 1
        }
      }
    }
  })
});

const screenConfig = {
  uiFramework: "material-ui",
  name: "acknowledgement",
  components: {
    div: {
      uiFramework: "custom-atoms",
      componentPath: "Div",
      props: {
        className: "common-div-css"
      },
      children: {
        header,
        applicationSuccess: {
          uiFramework: "custom-atoms",
          componentPath: "Div",
          children: {
            card
          }
        },
        footer
      }
    }
  }
};

export default screenConfig;
