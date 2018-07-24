import React from "react";
import {
  Container,
  Item,
  Card,
  CardContent,
  Div,
  Text,
  Typegraphy,
  Button,
  Break,
  Icon,
  InputAdornment
} from "ui-atoms";

class OTP extends React.Component {

  render() {
    return (
      <Container>
        <Item sm={4} />
        <Item xs={12} sm={4}>
          <Card classes={{ root: "container-margin" }}>
            <CardContent>
              <Typegraphy align="center">Enter OTP</Typegraphy>
              <Break />
              <Typegraphy variant="subheading" align="left">
                An OTP has been sent to :6360807028
              </Typegraphy>
              <Typegraphy variant="caption" align="left">
                Please check your messages
              </Typegraphy>
              <Break />
              <Div className="text-center">
                <Text
                  id="mihy-login-name"
                  label="OTP"
                  fullWidth={true}
                  value=""
                  placeholder="Enter OTP"
                  autoFocus={true}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Icon iconName="vpn_key" />
                      </InputAdornment>
                    )
                  }}
                />
                <Break />
                <Break />
                <Button variant="contained" color="primary" fullWidth={true}>
                  Get Start
                </Button>
              </Div>
            </CardContent>
          </Card>
        </Item>
      </Container>
    );
  }
}

export default OTP;
