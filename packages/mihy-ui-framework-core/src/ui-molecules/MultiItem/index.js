import React from "react";
import Div from "../../ui-atoms/HtmlElements/Div";
import RenderScreen from "../RenderScreen";
import Container from "../../ui-atoms/Layout/Container";
import Item from "../../ui-atoms/Layout/Item";
import Button from "../../ui-atoms/Button";
import IconButton from '@material-ui/core/IconButton';
import Icon from "../../ui-atoms/Icon";
import { connect } from "react-redux";
import get from "lodash/get";
import set from "lodash/set";
import {addComponentJsonpath} from "../../ui-utils";

class MultiItem extends React.Component {
  componentDidMount = () => {
    const { items } = this.props;
    if (!items.length) {
      this.addItem();
    }
  };

  addItem = () => {
    const { onFieldChange: addItem,screenKey, scheama, componentJsonpath,headerName, headerJsonPath,screenConfig} = this.props;
    const items=get(screenConfig,`${screenKey}.${componentJsonpath}.props.items`);
    const itemsLength=items.length;
    set(scheama,headerJsonPath,`${headerName} - ${itemsLength+1}`)
    addItem(screenKey, componentJsonpath, `props.items[${itemsLength}]`, JSON.parse(JSON.stringify(addComponentJsonpath({[`item${itemsLength}`]:scheama},`${componentJsonpath}.props.items[${itemsLength}]`))));
  };

  removeItem = (index) => {
    const { onFieldChange: removeItem,screenKey, componentJsonpath,screenConfig} = this.props;
    const items=get(screenConfig,`${screenKey}.${componentJsonpath}.props.items`);
    items.splice(index,1);
    removeItem(screenKey, componentJsonpath, `props.items`, items);
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
      onComponentClick,
      hasAddItem,
      screenKey
    } = this.props;
    const { addItem ,removeItem} = this;
    return (
      <Div>
        {items.length > 0 &&
          items.map((item, key) => {
            console.log(item);
            return (
              <Div>
                {items.length>1 && <Container>
                  <Item xs={12} align="right">
                    <IconButton style={{marginBottom:"-110px"}} onClick={e => removeItem(key)} aria-label="Remove">
                      <Icon iconName="clear"/>
                    </IconButton>
                  </Item>
                </Container>}
                <RenderScreen
                  key={key}
                  screenKey={screenKey}
                  components={item}
                  uiFramework={uiFramework}
                  onFieldChange={onFieldChange}
                  onComponentClick={onComponentClick}
                />
              </Div>
            );
          })}
        {hasAddItem!==false && <Container style={{marginTop:"8px"}}>
          <Item xs={12} align="right">
            <Button onClick={e => addItem()} color="primary">
              <Icon iconName="add"/>
              {addItemLabel}
            </Button>
          </Item>
        </Container>}
      </Div>
    );
  }
}

const mapStateToProps = state => {
  const { screenConfiguration } = state;
  const { screenConfig, preparedFinalObject } = screenConfiguration;
  return { screenConfig, preparedFinalObject, state };
};

const mapDispatchToProps = dispatch => {
  return null
};


export default connect(mapStateToProps,mapDispatchToProps)(MultiItem);
