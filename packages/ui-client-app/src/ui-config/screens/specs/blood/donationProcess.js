const screenConfig = {
  uiFramework: "material-ui",
  name: "mihyBloodDonationProcess",
  components: {
    mihyBloodDashboard: {
      uiFramework: "custom-atoms",
      componentPath: "Div",
      children: {
        mihyAppHeader:{
          componentPath:"Typography",
          props:{
            variant:"title"
          },
          children:{
            mihyAppHeaderText:{
              uiFramework:"custom-atoms",
              componentPath:"Label",
              props:{
                label:"Blood donation process"
              }
            }
          }
        },
        mihyBloodSubOptionOne: {
          uiFramework: "custom-molecules",
          componentPath: "AppSubOption",
          props: {
            item: {
              displayLabel: "Blood",
              displaySubLabel:
                "Only one file can be uploaded for one document.",
              itemImage: require("ui-assets/pp.jpeg")
            }
          }
        },
        mihyBloodSubOptionTwo: {
          uiFramework: "custom-molecules",
          componentPath: "AppSubOption",
          props: {
            item: {
              displayLabel: "Blood",
              displaySubLabel:
                "Only one file can be uploaded for one document.",
              itemImage: require("ui-assets/pp.jpeg")
            }
          }
        },
        mihyBloodSubOptionThree: {
          uiFramework: "custom-molecules",
          componentPath: "AppSubOption",
          props: {
            item: {
              displayLabel: "Blood",
              displaySubLabel:
                "Only one file can be uploaded for one document.",
              itemImage: require("ui-assets/pp.jpeg")
            }
          }
        }
      }
    }
  }
};

export default screenConfig;
