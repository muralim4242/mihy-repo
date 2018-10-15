import { bloodGrps } from "./search-donar-resources/utils";
import { getFormCommonCard } from "../utils";
import {
  getTextField,
  getSelectField,
  getLabel,
  getCommonContainer,
  getCommonTitle,
  getCommonSubHeader
} from "mihy-ui-framework/ui-config/screens/specs/utils";
import {
  prepareFinalObject as pFO,
  handleScreenConfigurationFieldChange as handleField
} from "mihy-ui-framework/ui-redux/screen-configuration/actions";
import get from "lodash/get";
import store from "../../../../ui-redux/store";
const dDispatch = store.dispatch;

const strinkFalse = {
  gridDefination: {
    xs: 12
  }
};

const screenConfig = {
  uiFramework: "material-ui",
  name: "register",
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
          data: bloodGrps,
          optionLabel: "label",
          optionValue: "label",
          jsonPath: "Register[0].bloodGrp",
          required: true,
          ...strinkFalse
        }),
        age: getTextField({
          label: { labelName: "Age" },
          placeholder: {
            labelName: "Enter age"
          },
          jsonPath: "Register[0].age",
          required: true,
          ...strinkFalse
        }),
        weight: getTextField({
          label: { labelName: "Weight" },
          placeholder: {
            labelName: "Enter Weight"
          },
          iconObj: {
            position: "end",
            label: "kg"
          },
          jsonPath: "Register[0].weight",
          required: true,
          ...strinkFalse
        }),
        register: {
          componentPath: "Button",
          props: {
            variant: "outlined",
            color: "primary",
            fullWidth: true
          },
          children: {
            registerLabel: getLabel({ labelName: "Check eligibility" })
          },
          onClickDefination: {
            action: "condition",
            callBack: (state, dispatch) => {
              // const age=get(state,)
              // console.log(store.getState());
              // call api to check the eligiblity
              if (
                get(
                  state.screenConfiguration.preparedFinalObject,
                  "Register[0].age"
                ) > 45 &&
                get(
                  state.screenConfiguration.preparedFinalObject,
                  "Register[0].weight"
                ) > 40
              ) {
                dispatch(
                  handleField(
                    "register",
                    "components.successCriteriaPopup",
                    "props.open",
                    true
                  )
                );
              } else {
                dispatch(
                  handleField(
                    "register",
                    "components.failureCriteriaPopup",
                    "props.open",
                    true
                  )
                );
              }
            }
          }
        }
      }
    }),
    successCriteriaPopup: {
      componentPath: "Dialog",
      props: {
        open: false,
        fullWidth: true
      },
      children: {
        popupContent: {
          componentPath: "DialogContent",
          children: {
            header: getCommonTitle({
              labelName: "Register criteria"
            }),
            success: getCommonSubHeader({
              labelName: "Great! your eligible for donating blood!"
            }),
            actionSection: getCommonContainer({
              closeButton: {
                componentPath: "Button",
                props: {
                  variant: "extendedFab",
                  fullWidth: true
                },
                children: {
                  closeButtonLabel: getLabel({ labelName: "Close" })
                },
                gridDefination: {
                  xs: 6
                },
                onClickDefination: {
                  action: "condition",
                  callBack: (state, dispatch) => {
                    //close popup
                    dispatch(
                      handleField(
                        "register",
                        "components.successCriteriaPopup",
                        "props.open",
                        false
                      )
                    );
                  }
                }
              },
              searchButton: {
                componentPath: "Button",
                props: {
                  variant: "extendedFab",
                  color: "primary",
                  fullWidth: true
                },
                children: {
                  searchButtonLabel: getLabel({ labelName: "Register" })
                },
                gridDefination: {
                  xs: 6
                },
                onClickDefination: {
                  action: "condition",
                  callBack: (state, dispatch) => {
                    //call api for register
                  }
                }
              }
            })
          }
        }
      }
    },
    failureCriteriaPopup: {
      componentPath: "Dialog",
      props: {
        open: false,
        fullWidth: true
      },
      children: {
        popupContent: {
          componentPath: "DialogContent",
          children: {
            header: getCommonTitle({
              labelName: "Failure criteria"
            }),
            success: getCommonSubHeader({
              labelName: "Sorry! your not eligible for donating blood!"
            }),

            closeButton: {
              componentPath: "Button",
              props: {
                variant: "extendedFab",
                fullWidth: true
              },
              children: {
                closeButtonLabel: getLabel({ labelName: "Close" })
              },
              onClickDefination: {
                action: "condition",
                callBack: (state, dispatch) => {
                  //close popup
                  dispatch(
                    handleField(
                      "register",
                      "components.failureCriteriaPopup",
                      "props.open",
                      false
                    )
                  );
                }
              }
            }
          }
        }
      }
    }
  }
};

export default screenConfig;

// actionSection: getCommonContainer({
//   closeButton: {
//     componentPath: "Button",
//     props: {
//       variant: "extendedFab",
//       fullWidth: true
//     },
//     children: {
//       closeButtonLabel: getLabel({ labelName: "Close" })
//     },
//     gridDefination: {
//       xs: 6
//     },
//     onClickDefination: {
//       action: "condition",
//       callBack: (state, dispatch) => {
//         toggleSearchCriteria({
//           state,
//           dispatch,
//           showSearchCreteria: false
//         });
//         toggleSendListButton({
//           state,
//           dispatch
//         });
//       }
//     }
//   },
//   searchButton: {
//     componentPath: "Button",
//     props: {
//       variant: "extendedFab",
//       color: "primary",
//       fullWidth: true
//     },
//     children: {
//       searchButtonLabel: getLabel({ labelName: "Register" })
//     },
//     gridDefination: {
//       xs: 6
//     },
//     onClickDefination: {
//       action: "condition",
//       callBack: (state, dispatch) => {
//         //call api for getting search result
//         toggleSearchCriteria({
//           state,
//           dispatch,
//           showSearchCreteria: false
//         });
//         toggleSearchList({
//           state,
//           dispatch
//         });
//         // api call for user and user location
//         // dispatch(
//           handleField(
//             "search-donar",
//             "components.mihySearchDonorSection.children.mapWapper.children.map",
//             "props.currLoc",
//             position
//           )
//         );
//       }
//     }
//   }
// })
