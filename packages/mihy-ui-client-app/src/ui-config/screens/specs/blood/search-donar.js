import "./search-donar-resources/index.css";
import { bloodGrps } from "./search-donar-resources/utils";
import {getSelectField,getDateTimeField,getTimeField,getLabel,getCommonContainer,getCommonTitle} from "mihy-ui-framework/ui-config/screens/specs/utils";
import {prepareFinalObject as pFO,handleScreenConfigurationFieldChange as handleField} from "mihy-ui-framework/ui-redux/screen-configuration/actions";

const gridDefination={
  xs:12
}
const screenConfig = {
  uiFramework: "material-ui",
  name: "search-donar",
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
                list: {
                  componentPath: "Button",
                  props: {
                    variant: "fab",
                    disabled: true,
                    style: {
                      marginTop: "8px",
                      background: "white"
                    }
                  },
                  children: {
                    positionIcon: {
                      uiFramework: "custom-atoms",
                      componentPath: "Icon",
                      props: {
                        iconName: "list_alt"
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
                      marginTop: "8px",
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
    criteriaPopup:{
      componentPath:"Dialog",
      props:{
        open:false,
        fullWidth:true
      },
      children:{
        popupContent:{
          componentPath:"DialogContent",
          children:{
            header:getCommonTitle({
              labelName:"Search criteria"
            }),
            urgencyDropdown:{...getSelectField({
              label:{
                labelName:"Urgency"
              },
              placeholder:{
                labelName:"Select urgency"
              },
              data:[{
                code:"Emergency",
              },
              {
                code:"Non-Emergency",
              }],
              jsonPath:"searchCriteria.urgency",
              required:true,
              gridDefination
            }),
            beforeFieldChange:(action,state,dispatch)=>{
              if (action.value==="Emergency") {
                dispatch(handleField("search-donar","components.criteriaPopup.children.popupContent.children","time.visible",true))
                dispatch(handleField("search-donar","components.criteriaPopup.children.popupContent.children","dateAndTime.visible",false))
              } else {
                dispatch(handleField("search-donar","components.criteriaPopup.children.popupContent.children","time.visible",false))
                dispatch(handleField("search-donar","components.criteriaPopup.children.popupContent.children","dateAndTime.visible",true))
              }
            }},
            time:getTimeField({
              label:{
                labelName:"How manu hours before?"
              },
              jsonPath:"searchCriteria.time",
              required:true,
              gridDefination
            }),
            dateAndTime:{...getDateTimeField({
              label:{
                labelName:"How many days before?"
              },
              jsonPath:"searchCriteria.dateTime",
              required:true,
              gridDefination
            }),
            visible:false},
            actionSection:getCommonContainer({
              closeButton:{
                componentPath:"Button",
                props:{
                  variant:"extendedFab",
                  fullWidth:true
                },
                children:{
                  closeButtonLabel:getLabel({labelName:"Close"})
                },
                gridDefination:{
                  xs:6
                },
                onClickDefination:{
                  action:"condition",
                  callBack:(state,dispatch)=>{
                      dispatch(handleField("search-donar","components.criteriaPopup","props.open",false));
                  }
                }
              },
              searchButton:{
                componentPath:"Button",
                props:{
                  variant:"extendedFab",
                  color:"primary",
                  fullWidth:true
                },
                children:{
                  searchButtonLabel:getLabel({labelName:"Search"})
                },
                gridDefination:{
                  xs:6
                },
                onClickDefination:{
                  action:"condition",
                  callBack:(state,dispatch)=>{
                      //call api for getting search result
                      dispatch(handleField("search-donar","components.criteriaPopup","props.open",false));
                      dispatch(handleField("search-donar","components.searchListPopup","props.open",true));
                  }
                }
              }
            })
          }
        },
      }
    },
    searchListPopup:{
      componentPath:"Dialog",
      props:{
        open:false,
        fullWidth:true
      },
      children:{
        searchListPopup:{
          componentPath:"DialogContent",
          children:{
            header:getCommonTitle({
              labelName:"Search result"
            }),
            result:{
              uiFramework:"custom-molecules-local",
              componentPath:"SearchResult",
              props:{
                searchResult:[
                              {
                                avatar: "M",
                                name: "Murali",
                                bloodGrp: "A+",
                                address: "#247,heritage county,thindlu,sarjapur,bangalore - 52125"
                              },
                              {
                                avatar: "T",
                                name: "Tharu",
                                bloodGrp: "O+",
                                address: "#247,heritage county,thindlu,sarjapur,bangalore - 52125"
                              }
                            ]
              }
            },
            actionSection:getCommonContainer({
              closeButton:{
                componentPath:"Button",
                props:{
                  variant:"extendedFab",
                  fullWidth:true
                },
                children:{
                  closeButtonLabel:getLabel({labelName:"Close"})
                },
                gridDefination:{
                  xs:6
                },
                onClickDefination:{
                  action:"condition",
                  callBack:(state,dispatch)=>{
                      dispatch(handleField("search-donar","components.searchListPopup","props.open",false));
                  }
                }
              },
              searchButton:{
                componentPath:"Button",
                props:{
                  variant:"extendedFab",
                  color:"primary",
                  fullWidth:true
                },
                children:{
                  searchButtonLabel:getLabel({labelName:"Search"})
                },
                gridDefination:{
                  xs:6
                },
                onClickDefination:{
                  action:"condition",
                  callBack:(state,dispatch)=>{
                      //call api for getting search result
                      dispatch(handleField("search-donar","components.searchListPopup","props.open",false));
                  }
                }
              }
            })
          }
        }
      }
    },

  },
  beforeInitScreen:(action,state,dispatch)=>{
    dispatch(pFO("searchCriteria.urgency","Emergency"));
    return action;
  }
};

export default screenConfig;
