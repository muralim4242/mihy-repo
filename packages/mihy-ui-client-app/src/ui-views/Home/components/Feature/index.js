import React from "react";
import { withStyles, Button, Card, TextField, MuiThemeProvider, createMuiTheme } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withRouter } from "react-router-dom"
import { connect } from "react-redux";
import { setStatesFromResponse } from "../../../../ui-redux/app/actions"
import Divider from '@material-ui/core/Divider';

// const CssTextField = withStyles({
//   root: {
//     "& label.Mui-focused": {
//       color: "green"
//     },
//     "& .MuiInput-underline:after": {
//       borderBottomColor: "green"
//     },
//     "& .MuiOutlinedInput-root": {
//       "& fieldset": {
//         borderColor: "#00AAE4"
//       },
//       "&:hover fieldset": {
//         borderColor: "green"
//       },
//       "&.Mui-focused fieldset": {
//         borderColor: "green"
//       }
//     }
//   }
// })(TextField);

const theme = createMuiTheme({
  overrides: {
    MuiInput: {
      underline: {
        '&:after': {
          borderBottom: '2px solid #d81b60',
        },
        '&:before': {
          borderBottom: '2px solid #d81b60',
        },
        // '&:hover': {
        //   borderBottom: '1px solid red',
        // },
      },
    },
    MuiFormLabel: {
      root: {
        '&: MuiFormLabel-focused': {
          // color:"red"color="primary"
        }
      }
    }
  },
});

const styles = theme => ({
  root: {
    flexGrow: 1,
    // flexWrap: 'wrap',
  },
  margin: {
    width: "100%",
    color: "red",
    margin: "10px 10px 10px 10px"
    // margin: theme.spacing(1),
  },
});

class Feature extends React.Component {
  navigateToWebsite = (name) => {
    const { setStatesFromResponse, history } = this.props
    var url = ""
    setStatesFromResponse("appName", name);
    history.push(`/integration/${name}`)
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid item xs={12} sm={12} style={{ display: "flex", justifyContent: "center", textAlign: "center" }}>
            <Card style={{ width: "100vw" }}>
              <Divider display="none" style={{ background: "#ffdae9", boxShadow: "0px 0px 10px #d81b60", marginTop: "2%" }} />
              <Typography
                style={{ color: "#d81b60", marginTop: "2%" }}
              >
                Let Us Know How Can We Help You
              </Typography>
              <Typography
                style={{ color: "#00AAE4" }}
              >
                Feel free to email us at Admin@mihy.org or fill in the form below.
              </Typography>
              <Grid container spacing={2} style={{ padding: "20px 180px 20px 180px" }}>
                <Grid item md={5} xs={12}  >
                  <MuiThemeProvider theme={theme}>
                    <TextField color="primary"
                      className={classes.margin}
                      label={<span style={{ color: "#d81b60" }}>Name</span>}
                      variant="outlined"
                      id="custom-css-outlined-input"
                    />
                  </MuiThemeProvider>
                </Grid>
                <Grid item md={5} xs={12} style={{ marginLeft: "16%" }}>
                  <MuiThemeProvider theme={theme}>
                    <TextField
                      className={classes.margin}
                      label={<span style={{ color: "#d81b60" }}>Email</span>}
                      variant="outlined"
                      id="custom-css-outlined-input"
                    />
                  </MuiThemeProvider>
                </Grid>
                <Grid item md={12} xs={12}>
                  <MuiThemeProvider theme={theme}>
                    <TextField
                      className={classes.margin}
                      label={<span style={{ color: "#d81b60" }}>Subject</span>}
                      variant="outlined"
                      id="custom-css-outlined-input"
                    />
                  </MuiThemeProvider>
                </Grid>
                <Grid item md={12} xs={12}>
                  <MuiThemeProvider theme={theme}>
                    <TextField
                      className={classes.margin}
                      label={<span style={{ color: "#d81b60" }}>Type your text here</span>}
                      variant="outlined"
                      id="custom-css-outlined-input"
                    />
                  </MuiThemeProvider>
                </Grid>
              </Grid>
              <Button variant="outlined" color="primary" style={{ marginBottom: "2%" }}>
                Submit</Button>
              <Divider display="none" style={{ background: "#ffdae9", boxShadow: "0px 0px 10px #d81b60", marginBottom: "2%" }} />
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  }
}
const mapStateToProps = ({ app }) => {
  const { appName } = app
  return {
    appName
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setStatesFromResponse: (attribute, val) => dispatch(setStatesFromResponse(attribute, val))
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(withStyles(styles)(Feature)))