import React from 'react';
import { withStyles } from "@material-ui/core/styles";

import { Typography,Card,Dialog,Grid,Button } from '@material-ui/core';
const styles = theme => ({
        rootCard:{
            padding: "20px 0px 20px 20px"
        },
        gridDisplay:{
            display: "flex" 
        },
        topHeading:{
            fontSize: "20px", marginBottom: "6%"
        },
        crossButton:{
            alignItems: "right", marginBottom: "6%" 
        },
        buttons:{
            marginBottom: "3%"
        }

});
class LanguageSelect extends React.Component {
   
    render() {
        const { classes } = this.props;

        return (
            <div>
                <Dialog
                    // fullScreen
                    open={this.props.openLanguageOptions}
                    onClose={this.props.openLanguageOptions}
                >
                    <Card className={classes.rootCard}>
                        <Grid className={classes.gridDisplay}>
                            <Typography className={classes.topHeading} >
                                Select your language
           </Typography>
                            <Button onClick={e => {
                                debugger
                                this.props.closelanguageDialogue()
                            }} className={classes.crossButton}><span class="material-icons">
                                    close
</span></Button>

                        </Grid>
                        <Typography className={classes.buttons} >
                            <Button variant="outlined" color="secondary" >
                                ENGLISH
      </Button>
                        </Typography>
                        <Typography className={classes.buttons}>
                            <Button variant="outlined" color="secondary" >
                                HINDI
      </Button>
                        </Typography>
                        <Typography className={classes.buttons}>
                            <Button variant="outlined" color="secondary" >
                                KANNADA
      </Button>
                        </Typography>
                    </Card>
                </Dialog>
            </div>
        );
    }
}


export default (withStyles(styles)(LanguageSelect))