import React from "react";
import LinearProgress from "ui-atoms/LinearSpinner";
import Loadable from "react-loadable";
import Item from "ui-atoms/Layout/Item";


class ComponentInterface extends React.Component {
  constructor(props) {
    super(props);
    this.state = { module: null };
  }
  componentDidMount() {
    const { componentPath, uiFramework } = this.props;
    let LoadableComponent;
    switch (uiFramework) {
      // case "carbon":
      //   LoadableComponent = Loadable({
      //     loader: () =>
      //       import("carbon-components-react").then(
      //         module => module[componentPath]
      //       ),
      //     loading: () => <LinearProgress/>
      //   });
      //   break;
      case "custom-atoms":
        LoadableComponent = Loadable({
          loader: () =>
            import("ui-atoms").then(module => module[componentPath]),
          loading: () => <LinearProgress/>
        });
        break;
      case "custom-molecules":
        LoadableComponent = Loadable({
          loader: () =>
            import("ui-atoms").then(module => module[componentPath]),
          loading: () => <LinearProgress/>
        });
        break;
      case "material-ui":
        LoadableComponent = Loadable({
          loader: () =>
            import("@material-ui/core").then(module => module[componentPath]),
          loading: () => <LinearProgress/>
        });
        break;
      default:
        LoadableComponent=null
    }

    this.setState({ module: LoadableComponent });
  }

  render() {
    const { module: Component } = this.state; // Assigning to new variable names @see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
    const { id, uiFramework, props, children,gridDefination } = this.props;
    if (gridDefination) {
      return (Component &&
        <Item {...gridDefination}>
            <Component id={`${uiFramework}-${id}`} {...props}>
              {children && children}
            </Component>
        </Item>
      );
    }
    else {
      return (
        Component && (
          <Component id={`${uiFramework}-${id}`} {...props}>
            {children && children}
          </Component>
        )
      );
    }
  }
}

export default ComponentInterface;
