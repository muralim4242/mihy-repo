import './search-donor-resources/index.css';
const bloodGrp=[
  {
    name: "A+"
  },
  {
    name: "B+"
  },
  {
    name: "AB+"
  },
  {
    name: "O+"
  },
  {
    name: "A-"
  },
  {
    name: "B-"
  },
  {
    name: "AB-"
  },
  {
    name: "O-"
  }
];
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
            className:"map-box"
          },
          children: {
            map: {
              uiFramework: "custom-molecules",
              componentPath: "Map",
              props:{
                zoomLevel:5
              }
            },
            bloodList:{
              uiFramework: "custom-molecules-local",
              componentPath: "BloodList",
              props:{
                bloodGrp
              }
            },
            actionButtons:{
              uiFramework:"custom-atoms",
              componentPath:"Div",
              props:{
                style:{
                  position:"absolute",
                  right:"8px",
                  bottom:"73px",
                  display: "flex",
                  flexDirection: "column"
                }
              },
              children:{
                position:{
                  componentPath:"Button",
                  props:{
                    variant:"fab",
                    style:{
                      background:"white"
                    }
                  },
                  children:{
                    positionIcon:{
                      uiFramework:"custom-atoms",
                      componentPath:"Icon",
                      props:{
                        iconName:"my_location"
                      }
                    }
                  }
                },
                search:{
                  componentPath:"Button",
                  props:{
                    variant:"fab",
                    style:{
                      marginTop:"16px",
                      background:"white"
                    }
                  },
                  children:{
                    positionIcon:{
                      uiFramework:"custom-atoms",
                      componentPath:"Icon",
                      props:{
                        iconName:"search"
                      }
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
  beforeInitScreen:(action,state,dispatch)=>{
    return action;
  }
};

export default screenConfig;
