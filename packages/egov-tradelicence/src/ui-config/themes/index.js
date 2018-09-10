const themeObject = {
  palette: {
    primary: {
      main: "#FE7A51",
      // light: '#757ce8',
      // dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      main: "#fff",
      // light: '#757ce8',
      // dark: '#002884',
      contrastText: '#000',
    },
    background:{
      default: "#F4F7FB"
    }
  },
  overrides:{
    MuiGrid:
    {
      item: { // Name of the rule
        padding: '12px 24px 12px 0', // Some CSS
      }
    },
    MuiCard:
    {
      root:{
        marginTop:"24px"
      }
    }
  }
};

export default themeObject;
