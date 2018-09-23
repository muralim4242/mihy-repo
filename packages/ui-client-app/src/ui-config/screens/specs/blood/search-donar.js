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
            }
          }
        }
      }
    }
  }
};

export default screenConfig;
