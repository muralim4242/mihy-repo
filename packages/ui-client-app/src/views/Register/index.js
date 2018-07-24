import React from "react";
import {
  Container,
  Item,
  Card,
  CardContent,
  Div,
  Phonenumber,
  Text,
  Typegraphy,
  Button,
  Break,
  Icon,
  InputAdornment
} from "ui-atoms";

class Register extends React.Component {
  render() {
    return (
      <Container>
        <Item sm={4} />
        <Item xs={12} sm={4}>
          <Card classes={{ root: "container-margin" }}>
            <CardContent>
              <Typegraphy align="center">Register</Typegraphy>
              <Break />
              <Div className="text-center">
                <Text
                  id="mihy-login-name"
                  label="Name"
                  fullWidth={true}
                  value=""
                  placeholder="Enter your name"
                  autoFocus={true}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Icon iconName="account_circle" />
                      </InputAdornment>
                    )
                  }}
                />
                <Break />
                <Break />
                <Phonenumber
                  id="mihy-login-phonenumber"
                  label="Phonenumber"
                  textmask="(   ) "
                  fullWidth={true}
                />
                <Break />
                <Break />
                <Button variant="contained" color="primary" fullWidth={true}>
                  Continue
                </Button>
              </Div>
            </CardContent>
          </Card>
        </Item>
      </Container>
    );
  }
}

export default Register;
