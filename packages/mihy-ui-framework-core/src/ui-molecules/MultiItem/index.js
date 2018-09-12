import React from "react";
import Div from "../../ui-atoms/HtmlElements/Div";
import RenderScreen from "../RenderScreen";
import Container from "../../ui-atoms/Layout/Container";
import Item from "../../ui-atoms/Layout/Item";
import Button from "../../ui-atoms/Button";
import { connect } from "react-redux";
import { handleScreenConfigurationFieldChange } from "../../ui-redux/screen-configuration/actions";

class MultiItem extends React.Component {
  componentDidMount = () => {
    const { onFieldChange: addItem, scheama, componentJsonpath } = this.props;
    addItem("", componentJsonpath, "props.items[0].item0", scheama);
  };

  addItem = () => {
    const { onFieldChange: addItem, scheama, componentJsonpath } = this.props;
    addItem("", componentJsonpath, "props.items[0].item1", scheama);
  };

  removeItem = () => {
    const { onFieldChange: addItem, scheama, componentJsonpath } = this.props;
    addItem("", componentJsonpath, "props.items[0].item1", scheama);
  };

  render() {
    console.log(this.props);
    const {
      items,
      scheama,
      addItemLabel,
      id,
      uiFramework,
      onFieldChange,
      onComponentClick
    } = this.props;
    const { addItem } = this;
    return (
      <Div>
        {items.length > 0 &&
          items.map((item, key) => {
            console.log(item);
            return (
              <RenderScreen
                key={key}
                components={item}
                uiFramework={uiFramework}
                onFieldChange={onFieldChange}
                onComponentClick={onComponentClick}
              />
            );
          })}
        <Container style={{marginTop:"8px"}}>
          <Item xs={12} align="right">
            <Button onClick={e => addItem()} color="primary">
              {addItemLabel}
            </Button>
          </Item>
        </Container>
      </Div>
    );
  }
}

export default MultiItem;
