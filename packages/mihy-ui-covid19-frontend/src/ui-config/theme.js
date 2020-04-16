export default {
  typography: {
    // In Japanese the characters are usually larger.
    fontSize: 12,
  },
  palette: {
    primary: {
      main: "#d81b60",
      contrastText: "#fff",
    }
  },
  overrides: {
    // Style sheet name ⚛️
    MuiCardContent: {
      // Name of the rule
      root: {
        // Some CSS
        padding: '8px 8px 8px 8px !important',
      },
    },
  },
}
