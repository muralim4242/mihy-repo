import "./search-donor-resources/index.css";
import { bloodGrps } from "./search-donor-resources/utils";
const screenConfig = {
  uiFramework: "material-ui",
  name: "mihySearchDonor",
  components: {
    mihySearchDonorSection: {
      uiFramework: "custom-atoms",
      componentPath: "Div",
      props: {
        className: "flex-container"
      },
      children: {
        mapWapper: {
          uiFramework: "custom-atoms",
          componentPath: "Div",
          props: {
            className: "map-box"
          },
          children: {
            map: {
              uiFramework: "custom-molecules",
              componentPath: "Map",
              props: {
                zoomLevel: 5
              }
            },
            bloodList: {
              uiFramework: "custom-containers-local",
              componentPath: "BloodList",
              props: {
                bloodGrps
              }
            },
            actionButtons: {
              uiFramework: "custom-atoms",
              componentPath: "Div",
              props: {
                style: {
                  position: "absolute",
                  right: "8px",
                  bottom: "73px",
                  display: "flex",
                  flexDirection: "column"
                }
              },
              children: {
                position: {
                  componentPath: "Button",
                  props: {
                    variant: "fab",
                    style: {
                      background: "white"
                    }
                  },
                  children: {
                    positionIcon: {
                      uiFramework: "custom-atoms",
                      componentPath: "Icon",
                      props: {
                        iconName: "my_location"
                      }
                    }
                  }
                },
                send: {
                  componentPath: "Button",
                  props: {
                    variant: "fab",
                    disabled: true,
                    style: {
                      marginTop: "16px",
                      background: "white"
                    }
                  },
                  children: {
                    positionIcon: {
                      uiFramework: "custom-atoms",
                      componentPath: "Icon",
                      props: {
                        iconName: "send"
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    },
    // popup:{
    //   uiFramework:"custom-molecules-local",
    //   componentPath:"UrgencyDailog"
    // }
  }
};

export default screenConfig;
