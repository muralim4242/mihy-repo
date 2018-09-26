const navPillsStyle = theme => ({
  root: {
    paddingLeft: "0",
    marginBottom: "0",
    overflow: "scroll !important",
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  flexContainer: {
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      flexWrap: "wrap"
    }

  },
  displayNone: {
    display: "none !important"
  },
  fixed: {
    overflowX: "visible"
  },
  horizontalDisplay: {
    display: "inherit"
  },
  pills: {
    float: "left",
    position: "relative",
    display: "block",
    // borderRadius: "30px",
    minWidth: "100px",
    textAlign: "center",
    transition: "all .3s",
    // padding: "10px 15px",
    color: "#555555",
    height: "auto",
    opacity: "1",
    maxWidth: "100%",
    // margin: "0 5px",



    // border: "1px solid rgba(5, 5, 5, 0.11999999731779099)"
  },
  pillsWithIcons: {
    // borderRadius: "4px"
  },
  tabIcon: {
    // width: "30px",
    // height: "30px",
    display: "block",
    // margin: "15px 0"
  },
  horizontalPills: {
    width: "100%",
    float: "none !important",
    "& + button": {
      margin: "10px 0"
    }
  },
  labelContainer: {
    padding: "0!important",
    color: "inherit",

  },
  label: {
    textTransform: "uppercase",
    position: "relative",
    display: "block",
    // color:"#000",
    color: "rgba(0, 0, 0, 0.60)",
    fontFamily: "Roboto",
    fontSize: "14px",
    fontWeight: 400,
    letterSpacing: "- 0.04px",
    lineHeight: "17px",

  },
  primary: {
    "&,&:hover": {
      color: "#FE7A51",
      borderBottom: "2px solid #FE7A51",
      // backgroundColor: "#FE7A51",
      // boxShadow:
      //   "0 4px 20px 0px rgba(0, 0, 0, 0.14), 0 7px 10px -5px rgba(156, 39, 176, 0.4)"
    }
  },
  contentWrapper: {
    margin: "16px",
  },
  alignCenter: {
    // alignItems: "center",
    justifyContent: "center"
  }
});

export default navPillsStyle;
