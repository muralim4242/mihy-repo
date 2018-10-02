import { whatHappenedToDonatedBlood as steps } from "./what-happened-to-donated-blood-resources/what-happened-to-donated-blood";


const screenConfig = {
  uiFramework: "material-ui",
  name: "mihyBloodWhatHappenedToDonatedBlood",
  components: {
    mihyBloodWhatHappenedToDonatedBlood: {
      uiFramework:"custom-molecules",
      componentPath:"StepperStaticVertical",
      props:{
        steps
      }
    }
  }
};

export default screenConfig;
