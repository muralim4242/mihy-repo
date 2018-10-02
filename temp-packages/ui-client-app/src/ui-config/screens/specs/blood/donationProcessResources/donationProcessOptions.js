export const donationProcessOptions = [
  {
    displayLabel: "Blood dontaion process overview",
    displaySubLabel: "Only one file can be uploaded for one document.",
    iconName: "autorenew",
    onClickDefination:{
      action:"page_change",
      path:"/landing/mihy-ui-framework/blood/donation-process-overview"
    }
  },
  {
    displayLabel: "What to do before during, and after your donation?",
    displaySubLabel: "Only one file can be uploaded for one document.",
    iconName: "contact_support",
    iconColorOne:"#66bb6a",
    iconColorTwo:"#43a047",
    onClickDefination:{
      action:"page_change",
      path:"/landing/mihy-ui-framework/blood/before-during-after"
    }
  },
  {
    displayLabel: "What happened to donated blood?",
    displaySubLabel: "Only one file can be uploaded for one document.",
    iconName: "help_outline",
    iconColorOne:"#ef5350",
    iconColorTwo:"#e53935",
    onClickDefination:{
      action:"page_change",
      path:"/landing/mihy-ui-framework/blood/what-happened-to-donated-blood"
    }
  }
];
