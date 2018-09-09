import React from "react";
import {Card,CardContent,Div,Break,Item,Container,Text} from "mihy-ui-framework/ui-atoms";

class Registration extends React.Component {
  render()
  {
    return (
      <Div>
        <Card>
          <CardContent>
            Registration
            <Break/>
            <Card>
              <CardContent>
                <Container>
                  <Item md={6} xs={12}>
                    <Text id="blood-registration-name" label="Name"/>
                  </Item>
                  <Item md={6} xs={12}>
                    <Text id="blood-registration-gender" label="Gender"/>
                  </Item>
                  <Item md={6} xs={12}>
                    <Text id="blood-registration-email" label="Email"/>
                  </Item>
                  <Item md={6} xs={12}>
                    <Text id="blood-registration-location" label="Location"/>
                  </Item>
                </Container>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <Container>
                  <Item md={6} xs={12}>
                    <Text id="blood-registration-blood-group" label="Blood Group"/>
                  </Item>
                  <Item md={6} xs={12}>
                    <Text id="blood-registration-age" label="Age"/>
                  </Item>
                  <Item md={6} xs={12}>
                    <Text id="blood-registration-weight" label="Weight"/>
                  </Item>
                </Container>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </Div>
    )
  }
}

export default Registration;
