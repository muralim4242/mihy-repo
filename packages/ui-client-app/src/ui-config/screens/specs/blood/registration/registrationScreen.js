const screenConfig = {
  name: "registrationScreen",
  components: {
    'mihy-blood-registrationCard':{
      uiFramework:"material-ui",
      componentPath:'Card',
      children:{
        'mihy-blood-name': {
          uiFramework:"material-ui",
          componentPath:'TextField',
          props:{}
        },
        'mihy-blood-gender': {
          uiFramework:"material-ui",
          componentPath:"TextInput",
          props:{
            id:"12312",
            labelText:"Mural"
          }
        },
        'mihy-blood-email': {
          uiFramework:"material-ui",
          componentPath:'TextField',
          props:{}
        }
      },
      visible:true
    }
  },
  redirectionRoute: ""
};

export default screenConfig;
