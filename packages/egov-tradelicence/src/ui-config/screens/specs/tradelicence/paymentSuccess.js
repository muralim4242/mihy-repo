import {
  getCommonHeader,
  getCommonCard,
  getCommonParagraph,
  getBreak,
  getCommonContainer
} from "mihy-ui-framework/ui-config/screens/specs/utils";

import { footer } from "./paymentSuccessResource/footer";

const header = getCommonHeader("Payment for New Trade License (2018-2019)");

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
        header: getCommonHeader("Payment has been collected successfully!"),
        break: getBreak(),
        paragraph: getCommonParagraph(
          "A copy of receipt has been sent to trade owner at registered Mobile No."
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
        text: getCommonParagraph("Payment Receipt No."),
        paragraph: getCommonHeader("5343")
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
        paymentSuccess: {
          uiFramework: "custom-atoms",
          componentPath: "Div",
          children: {
            card
          },
          visible: true
        },
        footer
      }
    }
  }
};

export default screenConfig;
