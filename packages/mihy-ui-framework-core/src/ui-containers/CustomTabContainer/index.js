import React from "react";
import Div from "../../ui-atoms/HtmlElements/Div";
import RenderScreen from "../../ui-molecules/RenderScreen";
import CustomTab from "../../ui-molecules/CustomTab";
import { connect } from "react-redux";
import get from "lodash/get";
import set from "lodash/set";
import { addComponentJsonpath } from "../../ui-utils";

class MultiItem extends React.Component {
  componentDidMount = () => {
    // const { items } = this.props;
    // if (!items.length) {
    //   this.addItem();
    // }
  };

  // addItem = () => {
  //   const {
  //     onFieldChange: addItem,
  //     screenKey,
  //     scheama,
  //     componentJsonpath,
  //     headerName,
  //     headerJsonPath,
  //     screenConfig
  //   } = this.props;
  //   const items = get(
  //     screenConfig,
  //     `${screenKey}.${componentJsonpath}.props.items`
  //   );
  //   const itemsLength = items.length;
  //   set(scheama, headerJsonPath, `${headerName} - ${itemsLength + 1}`);
  //   addItem(
  //     screenKey,
  //     componentJsonpath,
  //     `props.items[${itemsLength}]`,
  //     JSON.parse(
  //       JSON.stringify(
  //         addComponentJsonpath(
  //           { [`item${itemsLength}`]: scheama },
  //           `${componentJsonpath}.props.items[${itemsLength}]`
  //         )
  //       )
  //     )
  //   );
  // };

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

    const { addItem, removeItem } = this;
    console.log(this.props);
    const transFormedProps = {
      ...this.props,
      tabs: this.props.tabs.map((tab, key) => {
        return {
          ...tab,
          tabContent: (
            <RenderScreen
              key={key}
              screenKey={screenKey}
              components={tab.tabContent}
              uiFramework={uiFramework}
              onFieldChange={onFieldChange}
              onComponentClick={onComponentClick}
            />
          )
        };
      })
    };
    console.log(transFormedProps);
    return (
      <Div>
        <CustomTab {...transFormedProps} />
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
  return null;
};

export default connect(mapStateToProps, mapDispatchToProps)(MultiItem);
