import React from "react";
import Rating from "@material-ui/lab/Rating";
import {
    Typography,
    Grid,
    Card,
    CardContent,
    TextField,
    Button
} from "@material-ui/core";
import { withStyles } from "@material-ui/styles";
import { connect } from "react-redux";
import { mapDispatchToProps } from "../../../../../../ui-utils/commons";
import { httpRequest } from "../../../../../../ui-utils/api";
import Snackbar from "../../../../../../ui-containers/SnackBar";
const labels = {
    0.5: "Bad",
    1: "Bad+",
    1.5: "Poor",
    2: "Poor+",
    2.5: "Ok",
    3: "Ok+",
    3.5: "Good",
    4: "Good+",
    4.5: "Excellent",
    5: "Excellent+"
};

const styles = theme => ({
    root: {
        flexGrow: 1,
        marginTop: theme.spacing(32)
    },
    ratingValue: {
        position: "relative",
        bottom: "10px"
    },
    space: {
        textAlign: "center"
    },
    buttonStyle: {
        width: "50%",
        height: "48px",
        background: "linear-gradient(#d81b60 30%, #d81b60)",
        color: "white"
    },
    errorMessage: {
        color: "red",
        textAlign: "start"
    }
});

class FeedBack extends React.Component {
    onChangeStar = (event, newValue) => {
        const { setAppData } = this.props;
        setAppData("feedback.value", newValue);
    };
    onChangeHover = (event, newHover) => {
        const { setAppData } = this.props;
        setAppData("feedback.hover", newHover);
    };
    onClickSubmit = async () => {
        const { value, name, hover, description, setAppData } = this.props;
        const { valiDateForm } = this;
        setAppData("spinner", true);
        if (valiDateForm()) {
            setAppData("user", {
                name: name,
                value: value,
                hover: hover,
                description: description
            });
            const feedbackSubmit = await httpRequest({
                endPoint: "createFeedback",
                instance: "instanceThree",
                method: "post",
                requestBody: {
                    name: name,
                    stars: value,
                    feedback: description
                }
            });
            if (feedbackSubmit) {
                setAppData("snackbar", {
                    open: true,
                    variant: "success",
                    message: feedbackSubmit
                });
                setAppData("feedback", {
                    name: '', value: 0, hover: 0, description: ''
                });
            }
        }
        setAppData("spinner", false);

    };
    valiDateForm = () => {
        const { feedback, setAppData, t } = this.props;
        const { value, name } = feedback;
        let isFormValid = true;
        let tempErrors = {};
        if (name === "" && !name) {
            isFormValid = false;
            tempErrors["name"] = t("Please Enter Your Name");
        }
        if (value === 0) {
            isFormValid = false;
            tempErrors["value"] = t("Please Select a Rating");
        }
        setAppData("errors", tempErrors);
        return isFormValid;
    };
    render() {
        const {
            classes,
            value,
            hover,
            setAppData,
            name,
            description,
            errors, t
        } = this.props;
        const { onChangeStar, onChangeHover, onClickSubmit } = this;
        return (
            <div className={classes.root}>
                <Typography variant="h6" color="primary" align="center">
                    {t("FeedBack")}
                </Typography>
                <Grid item md={12} xs={12} sm={12} align="center" justify="center">
                    <Grid item md={8} xs={10} sm={8}>
                        <Card style={{ boxShadow: "5px 5px 4px -1px rgba(0,0,0,0.2)" }}>
                            <CardContent>
                                <Grid justify="center" align="center" item md={12} xs={12} sm={12}>
                                    <Grid
                                        container
                                        item
                                        md={12}
                                        xs={12}
                                        sm={6}
                                        style={{ display: "inline-flex" }}
                                    >
                                        <Grid item md={8} xs={6} sm={8} align="center">
                                            <Rating
                                                name="customized-icons"
                                                size="large"
                                                value={value}
                                                style={{
                                                    paddingRight: "10px",
                                                    width: "31%",
                                                    justifyContent: "space-evenly"
                                                }}
                                                precision={0.5}
                                                onChange={(event, newValue) => {
                                                    onChangeStar(event, newValue);
                                                }}
                                                onChangeActive={(event, newHover) => {
                                                    onChangeHover(event, newHover);
                                                }}
                                            />
                                            {value === 0 || value === undefined ? (
                                                <div style={{ color: "red" }}>
                                                    {" "}
                                                    {errors && errors.value}
                                                </div>
                                            ) : (
                                                    <div></div>
                                                )}
                                        </Grid>
                                        <Grid item md={1} xs={6} sm={1} align="end">
                                            {value !== null && (
                                                <p className={classes.ratingValue}>
                                                    {labels[hover !== -1 ? hover : t[value]]}
                                                </p>
                                            )}
                                        </Grid>
                                    </Grid>
                                    <br />
                                    <Grid item md={12} xs={12} sm={6}>
                                        <Grid item md={6} xs={12} sm={12}>
                                            <Typography
                                                variant="subtitle2"
                                                style={{ textAlign: "start" }}
                                            >
                                                {t("UserName")}:
                      </Typography>
                                            <TextField
                                                style={{ width: "100%" }}
                                                value={name}
                                                onChange={e => {
                                                    setAppData("feedback.name", e.target.value);
                                                }}
                                            />
                                            {name === "" || name === undefined ? (
                                                <div className={classes.errorMessage}>
                                                    {" "}
                                                    {errors && errors.name}
                                                </div>
                                            ) : (
                                                    <div></div>
                                                )}
                                        </Grid>
                                    </Grid>
                                    <br />
                                    <Grid item md={6} xs={12} sm={12}>
                                        <Typography
                                            variant="subtitle2"
                                            style={{ textAlign: "start" }}
                                        >
                                            {t("User Description")}:
                    </Typography>
                                        <TextField
                                            multiline
                                            rows="4"
                                            required={true}
                                            style={{ width: "100%" }}
                                            value={description}
                                            onChange={e => {
                                                setAppData("feedback.description", e.target.value);
                                            }}
                                            margin="normal"
                                        />
                                    </Grid>
                                    <br />
                                    <Grid item md={6} xs={12} sm={12}>
                                        <Button
                                            className={classes.buttonStyle}
                                            onClick={() => onClickSubmit()}
                                        >
                                            {t("Submit")}
                                        </Button>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                        <br />
                    </Grid>
                </Grid>
                <Snackbar />
            </div>
        );
    }
}
const mapStateToProps = ({ screenConfiguration }) => {
    const { preparedFinalObject = {} } = screenConfiguration;
    const { feedback = {}, errors } = preparedFinalObject;
    const { value, hover, name, description } = feedback;
    return {
        value,
        hover,
        name,
        description,
        feedback,
        errors
    };
};
export default withStyles(styles)(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(FeedBack)
);
