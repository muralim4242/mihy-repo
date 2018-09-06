export const tradeDetails = {
  componentPath: "Card",
  children: {
    tradeDetailsLable: {
      uiFramework: "custom-atoms",
      componentPath: "Label",
      props: {
        label: "Please Provide Trade Details"
      }
    },
    BreakSeven: {
      uiFramework: "custom-atoms",
      componentPath: "Break"
    },
    BreakEight: {
      uiFramework: "custom-atoms",
      componentPath: "Break"
    },

    licenseType: {
      componentPath: "TextField",
      props: {
        select: true,
        required: true,
        label: "License Type",
        InputLabelProps: {
          shrink: true
        },
        helperText: "Please Select License Type",
        placeholder: "Select License Type",
        fullWidth:true
      },
      required: true,
      jsonPath: "body.tradeDetails.LicenseType",
      pattern: "^([a-zA-Z0-9@.])+$",
      gridDefination:{
        xs:6
      },
      children: {
        menuItem: {
          componentPath: "MenuItem",
          props: {
            value: "Abc"
          },
          children: {
            mihyLoginButtonText: {
              uiFramework: "custom-atoms",
              componentPath: "Label",
              props: {
                label: "Select License Type"
              }
            }
          }
        }
      }
    },
    tradeMobility: {
      componentPath: "TextField",
      props: {
        select: true,
        required: true,
        label: "Trade Mobility",
        InputLabelProps: {
          shrink: true
        },

        helperText: "Please select your currency",
        value: "Abc",
        placeholder: "Select Trade Mobility",
        fullWidth:true
      },
      required: true,
      jsonPath: "body.tradeDetails.LicenseType",
      pattern: "^([a-zA-Z0-9@.])+$",
      gridDefination:{
        xs:6
      },
      children: {
        menuItem: {
          componentPath: "MenuItem",
          props: {
            value: "Abc"
          },
          children: {
            mihyLoginButtonText: {
              uiFramework: "custom-atoms",
              componentPath: "Label",
              props: {
                label: "Select Trade Mobility"
              }
            }
          }
        }
      }
    },
    BreakOne: {
      uiFramework: "custom-atoms",
      componentPath: "Break"
    },
    BreakTwo: {
      uiFramework: "custom-atoms",
      componentPath: "Break"
    },
    tradeName: {
      componentPath: "TextField",
      props:{
        required: true,
        label: "Name of Trade",
        InputLabelProps: {
          shrink: true
        },
        placeholder: "Example Diljit Da Dhaba"
      },
      required: true,
      jsonPath: "body.tradeDetails.LicenseType",
      pattern: "^([a-zA-Z0-9@.])+$"
    },
    tradeCommencementDate: {
      componentPath: "TextField",
      props: {
        required: true,
        label: "Trade Commencement Date",
        InputLabelProps: {
          shrink: true
        },
        placeholder: "Enter Trade Commencement Date"
      },
      required: true,
      jsonPath: "body.tradeDetails.LicenseType",
      pattern: "^([a-zA-Z0-9@.])+$"
    },
    BreakThree: {
      uiFramework: "custom-atoms",
      componentPath: "Break"
    },
    BreakFour: {
      uiFramework: "custom-atoms",
      componentPath: "Break"
    },
    tradeGSTNO: {
      componentPath: "TextField",
      props: {
        label: "Trade GST No.",
        InputLabelProps: {
          shrink: true
        },

        placeholder: "Enter Trade GST No."
      },
      required: true,
      jsonPath: "body.tradeDetails.LicenseType",
      pattern: "^([a-zA-Z0-9@.])+$"
    },
    tradeOperationalArea: {
      componentPath: "TextField",
      props: {
        label: "Operational Area (Sq Ft)",
        InputLabelProps: {
          shrink: true
        },
        placeholder: "Enter Operational Area in Sq Ft"
      },
      required: true,
      jsonPath: "body.tradeDetails.LicenseType",
      pattern: "^([a-zA-Z0-9@.])+$"
    },
    BreakFve: {
      uiFramework: "custom-atoms",
      componentPath: "Break"
    },
    BreakSix: {
      uiFramework: "custom-atoms",
      componentPath: "Break"
    },
    tradeNoOfEmployee: {
      componentPath: "TextField",
      props: {
        label: "No Of Employees",
        InputLabelProps: {
          shrink: true
        },
        placeholder: "Enter No Of Employees"
      },
      required: true,
      jsonPath: "body.tradeDetails.LicenseType",
      pattern: "^([a-zA-Z0-9@.])+$"
    },
    BreakNine: {
      uiFramework: "custom-atoms",
      componentPath: "Break"
    },
    BreakTen: {
      uiFramework: "custom-atoms",
      componentPath: "Break"
    },
    tradeUnitCard: {
      componentPath: "Card",
      children: {
        tradeUnitLable: {
          uiFramework: "custom-atoms",
          componentPath: "Label",
          props: {
            label: "Trade Unit"
          }
        },
        BreakEleven: {
          uiFramework: "custom-atoms",
          componentPath: "Break"
        },
        BreakTwelve: {
          uiFramework: "custom-atoms",
          componentPath: "Break"
        },
        tradeCategory: {
          componentPath: "TextField",
          props: {
            select: true,
            required: true,
            label: "Trade Category",
            InputLabelProps: {
              shrink: true
            },
            helperText: "Please Select Trade Category",
            placeholder: "Select Trade Category"
          },
          required: true,
          jsonPath: "body.tradeDetails.LicenseType",
          pattern: "^([a-zA-Z0-9@.])+$",

          children: {
            menuItem: {
              componentPath: "MenuItem",
              props: {
                value: "Abc"
              },
              children: {
                mihyLoginButtonText: {
                  uiFramework: "custom-atoms",
                  componentPath: "Label",
                  props: {
                    label: "Select Trade Category"
                  }
                }
              }
            }
          }
        },
        tradeType: {
          componentPath: "TextField",
          props: {
            select: true,
            required: true,
            label: "Trade Type",
            InputLabelProps: {
              shrink: true
            },
            helperText: "Please Select Trade Type",
            placeholder: "Select Trade Type"
          },
          required: true,
          jsonPath: "body.tradeDetails.LicenseType",
          pattern: "^([a-zA-Z0-9@.])+$",

          children: {
            menuItem: {
              componentPath: "MenuItem",
              props: {
                value: "Abc"
              },
              children: {
                mihyLoginButtonText: {
                  uiFramework: "custom-atoms",
                  componentPath: "Label",
                  props: {
                    label: "Select Trade Type"
                  }
                }
              }
            }
          }
        },
        tradeSubType: {
          componentPath: "TextField",
          props: {
            select: true,
            required: true,
            label: "Trade Sub Type",
            InputLabelProps: {
              shrink: true
            },
            helperText: "Please Select Trade Sub Type",
            placeholder: "Select Trade Sub Type"
          },
          required: true,
          jsonPath: "body.tradeDetails.LicenseType",
          pattern: "^([a-zA-Z0-9@.])+$",

          children: {
            menuItem: {
              componentPath: "MenuItem",
              props: {
                value: "Abc"
              },
              children: {
                mihyLoginButtonText: {
                  uiFramework: "custom-atoms",
                  componentPath: "Label",
                  props: {
                    label: "Select Trade Sub Type"
                  }
                }
              }
            }
          }
        },
        Break13: {
          uiFramework: "custom-atoms",
          componentPath: "Break"
        },
        Break14: {
          uiFramework: "custom-atoms",
          componentPath: "Break"
        },
        uomfield: {
          componentPath: "TextField",
          props: {
            required: true,
            label: "UOM (Unit Of Measurement)",
            InputLabelProps: {
              shrink: true
            },
            placeholder: "UOM (Unit Of Measurement)"
          },
          required: true,
          jsonPath: "body.tradeDetails.LicenseType",
          pattern: "^([a-zA-Z0-9@.])+$"
        },
        uOMValueField: {
          componentPath: "TextField",
          props: {
            required: true,
            label: "UOM Value",
            InputLabelProps: {
              shrink: true
            },
            placeholder: "Enter UOM Value"
          },
          required: true,
          jsonPath: "body.tradeDetails.LicenseType",
          pattern: "^([a-zA-Z0-9@.])+$"
        }
      }
    },
    Break15: {
      uiFramework: "custom-atoms",
      componentPath: "Break"
    },
    Break16: {
      uiFramework: "custom-atoms",
      componentPath: "Break"
    },

    accessoriesCard: {
      componentPath: "Card",
      children: {
        accessoriesLable: {
          uiFramework: "custom-atoms",
          componentPath: "Label",
          props: {
            label: "Accessories"
          }
        },
        BreakEleven: {
          uiFramework: "custom-atoms",
          componentPath: "Break"
        },
        BreakTwelve: {
          uiFramework: "custom-atoms",
          componentPath: "Break"
        },
        tradeCategory: {
          componentPath: "TextField",
          props: {
            select: true,
            required: true,
            label: "Trade Category",
            InputLabelProps: {
              shrink: true
            },
            helperText: "Please Select Trade Category",
            placeholder: "Select Trade Category"
          },
          required: true,
          jsonPath: "body.tradeDetails.LicenseType",
          pattern: "^([a-zA-Z0-9@.])+$",

          children: {
            menuItem: {
              componentPath: "MenuItem",
              props: {
                value: "Abc"
              },
              children: {
                mihyLoginButtonText: {
                  uiFramework: "custom-atoms",
                  componentPath: "Label",
                  props: {
                    label: "Select Trade Category"
                  }
                }
              }
            }
          }
        },
        tradeType: {
          componentPath: "TextField",
          props: {
            select: true,
            required: true,
            label: "Trade Type",
            InputLabelProps: {
              shrink: true
            },
            helperText: "Please Select Trade Type",
            placeholder: "Select Trade Type"
          },
          required: true,
          jsonPath: "body.tradeDetails.LicenseType",
          pattern: "^([a-zA-Z0-9@.])+$",

          children: {
            menuItem: {
              componentPath: "MenuItem",
              props: {
                value: "Abc"
              },
              children: {
                mihyLoginButtonText: {
                  uiFramework: "custom-atoms",
                  componentPath: "Label",
                  props: {
                    label: "Select Trade Type"
                  }
                }
              }
            }
          }
        },
        tradeSubType: {
          componentPath: "TextField",
          props: {
            select: true,
            required: true,
            label: "Trade Sub Type",
            InputLabelProps: {
              shrink: true
            },
            helperText: "Please Select Trade Sub Type",
            placeholder: "Select Trade Sub Type"
          },
          required: true,
          jsonPath: "body.tradeDetails.LicenseType",
          pattern: "^([a-zA-Z0-9@.])+$",

          children: {
            menuItem: {
              componentPath: "MenuItem",
              props: {
                value: "Abc"
              },
              children: {
                mihyLoginButtonText: {
                  uiFramework: "custom-atoms",
                  componentPath: "Label",
                  props: {
                    label: "Select Trade Sub Type"
                  }
                }
              }
            }
          }
        },
        Break13: {
          uiFramework: "custom-atoms",
          componentPath: "Break"
        },
        Break14: {
          uiFramework: "custom-atoms",
          componentPath: "Break"
        },
        uomfield: {
          componentPath: "TextField",
          props: {
            required: true,
            label: "UOM (Unit Of Measurement)",
            InputLabelProps: {
              shrink: true
            },
            placeholder: "UOM (Unit Of Measurement)"
          },
          required: true,
          jsonPath: "body.tradeDetails.LicenseType",
          pattern: "^([a-zA-Z0-9@.])+$"
        },
        uOMValueField: {
          componentPath: "TextField",
          props: {
            required: true,
            label: "UOM Value",
            InputLabelProps: {
              shrink: true
            },
            placeholder: "Enter UOM Value"
          },
          required: true,
          jsonPath: "body.tradeDetails.LicenseType",
          pattern: "^([a-zA-Z0-9@.])+$"
        }
      }
    }
  }
};
