import React from "react";
import { Card, CardContent, Container, Item ,Div} from "ui-atoms";
import "./index.css";

const AppCarosel = ({ item }) => {
  return (
    <Container>
      <Item xs={2} />
      <Item xs={8}>
        <Card
          style={{
            height: "190px"
          }}
        >

          <CardContent >
            <Div className="mihy-app-carosel">

            </Div>
          </CardContent>
        </Card>
      </Item>
      <Item xs={2} />
    </Container>
  );
};

export default AppCarosel;
