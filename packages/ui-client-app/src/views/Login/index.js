import React from "react";
import {
  Container,
  Item,
  Card,
  CardContent,
  Div,
  Phonenumber,
  Typegraphy,
  Button,
  Break
} from "ui-atoms";

class Login extends React.Component {
  render() {
    return (
      <Container>
        <Item sm={4} />
        <Item xs={12} sm={4}>
          <Card classes={{ root: "container-margin" }}>
            <CardContent>
              <Typegraphy align="center">Login</Typegraphy>
              <Break />
              <Div className="text-center">
                <Phonenumber
                  id="mihy-login-phonenumber"
                  label="Phonenumber"
                  textmask="(   ) "
                  fullWidth={true}
                  autoFocus={true}
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

export default Login;
