import { beforeDuringAfterOption as steps } from "./before-during-after-resources/before-during-after-option";


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
