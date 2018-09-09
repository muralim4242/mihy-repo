const oddOptionStyle = {
  buttonProps: {
    color: "primary",
    style: {
      height: "80px",
      borderRadius: "5px",
      background: "white"
    }
  },
  IconProps: {
    color: "secondary"
  }
};

const evenOptionStyle = {
  buttonProps: {
    color: "secondary",
    style: {
      height: "80px",
      borderRadius: "5px",
      background: "white"
    }
  },
  IconProps: {
    color: "primary"
  }
};

export const dashBoardOption = [
  {
    displayLabel: "Search donor",
    displaySubLabel: "Only one file can be uploaded for one document.",
    iconName: "search",
    navigationUrl: "/blood/search-donor",
    iconImgae: require("ui-assets/pp.jpeg"),
    itemProps: {
      xs: 12,
      sm: 6
    },
    ...oddOptionStyle
  },
  {
    displayLabel: "Registration",
    displaySubLabel: "Only one file can be uploaded for one document.",
    iconName: "search",
    navigationUrl: "/blood/registration",
    iconImgae: require("ui-assets/pp.jpeg"),

    itemProps: {
      xs: 12,
      sm: 6
    },
    ...evenOptionStyle
  },
  {
    displayLabel: "Blood donation process",
    displaySubLabel: "Only one file can be uploaded for one document.",
    iconName: "search",
    navigationUrl: "/blood/donation-process",
    iconImgae: require("ui-assets/pp.jpeg"),

    itemProps: {
      xs: 12,
      sm: 6
    },
    ...evenOptionStyle
  },
  {
    displayLabel: "Things need to know",
    displaySubLabel: "Only one file can be uploaded for one document.",
    iconName: "search",
    navigationUrl: "/blood/how-to-donate",
    iconImgae: require("ui-assets/pp.jpeg"),
    itemProps: {
      xs: 12,
      sm: 6
    },
    ...oddOptionStyle
  },
  {
    displayLabel: "Calculator",
    displaySubLabel: "Only one file can be uploaded for one document.",
    iconName: "search",
    iconImgae: require("ui-assets/pp.jpeg"),
    navigationUrl: "/blood/near-by-donation",
    itemProps: {
      xs: 12,
      sm: 6
    },
    ...evenOptionStyle
  },
  {
    displayLabel: "Disease update",
    displaySubLabel: "Only one file can be uploaded for one document.",
    iconName: "search",
    iconImgae: require("ui-assets/pp.jpeg"),
    navigationUrl: "/blood/notification",
    itemProps: {
      xs: 12,
      sm: 6
    },
    ...oddOptionStyle
  },
  {
    displayLabel: "App history",
    displaySubLabel: "Only one file can be uploaded for one document.",
    iconName: "search",
    iconImgae: require("ui-assets/pp.jpeg"),
    navigationUrl: "/blood/app-history",
    itemProps: {
      xs: 12,
      sm: 6
    },
    ...oddOptionStyle
  },
  {
    displayLabel: "About application",
    displaySubLabel: "Only one file can be uploaded for one document.",
    iconName: "search",
    iconImgae: require("ui-assets/pp.jpeg"),
    navigationUrl: "/blood/app-history",
    itemProps: {
      xs: 12,
      sm: 6
    },
    ...oddOptionStyle
  }
];
