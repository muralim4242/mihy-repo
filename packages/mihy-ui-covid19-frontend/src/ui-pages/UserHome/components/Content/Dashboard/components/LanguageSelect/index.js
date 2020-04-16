import React from "react";
import { withStyles } from "@material-ui/core/styles";
import CloseIcon from "@material-ui/icons/Close";
import {
  Typography,
  Dialog,
  Button,
  DialogTitle,
  IconButton,
  DialogContent
} from "@material-ui/core";

const styles = theme => ({
  contentRoot: {
    padding: theme.spacing(4)
  },
  rootTitle: {
    margin: 0,
    padding: theme.spacing(2)
  },
  gridDisplay: {
    display: "flex"
  },
  topHeading: {
    fontSize: "20px"
    // marginBottom: "6%"
  },
  buttons: {
    marginBottom: "3%"
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500]
  }
});
class LanguageSelect extends React.Component {
  render() {
    const {
      classes,
      t,
      openLanguageOptions,
      closelanguageDialogue,
      onLanguageSelect,
      languages = [],
      selectedLanguage
    } = this.props;

    return (
      <div>
        <Dialog
          fullWidth
          open={openLanguageOptions}
          onClose={closelanguageDialogue}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle
            disableTypography
            className={classes.rootTitle}
            id="responsive-dialog-title"
          >
            <Typography variant="h6">{t("Langauge")}</Typography>
            <IconButton
              aria-label="close"
              className={classes.closeButton}
              onClick={e => {
                closelanguageDialogue();
              }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>
          <DialogContent dividers classes={{ root: classes.contentRoot }}>
            {languages.map((language, key) => (
              <Typography key={key} className={classes.buttons} align="center">
                <Button
                  variant={
                    selectedLanguage === language.code
                      ? "contained"
                      : "outlined"
                  }
                  color="secondary"
                  fullWidth={true}
                  onClick={e => {
                    onLanguageSelect(language.code);
                  }}
                >
                  {language.name}
                </Button>
              </Typography>
            ))}
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(LanguageSelect);