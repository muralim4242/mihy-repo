import React from "react";
import { connect } from "react-redux";
import { TextfieldWithIcon } from "mihy-ui-framework/ui-molecules";
import MenuItem from "@material-ui/core/MenuItem";
import get from "lodash/get";

class TextFieldContainer extends React.Component {
  render() {
    let {
      label,
      placeholder,
      jsonPath,
      iconObj,
      value,
      dropdownData,
      data,
      optionValue,
      optionLabel,
      sourceJsonPath,
      ...rest
    } = this.props;
    if (dropdownData.length > 0) {
      return (
        <TextfieldWithIcon
          label={label.label}
          placeholder={placeholder.label}
          iconObj={iconObj}
          value={value ? value : placeholder}
          {...rest}
        >
          <MenuItem value={placeholder} disabled>
            {placeholder}
          </MenuItem>
          {dropdownData.map((option, key) => (
            <MenuItem key={key} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextfieldWithIcon>
      );
    } else {
      return (
        <TextfieldWithIcon
        label={label.label}
        placeholder={placeholder.label}
          iconObj={iconObj}
          value={value}
          {...rest}
        />
      );
    }
  }
}

const mapStateToProps = (state, ownprops) => {
  const {
    jsonPath,
    value,
    select,
    data,
    optionValue,
    optionLabel,
    sourceJsonPath
  } = ownprops;
  const { screenConfiguration } = state;
  const { preparedFinalObject } = screenConfiguration;
  console.log("first,,,", ownprops);
  const fieldValue = value ? value : get(preparedFinalObject, jsonPath);
  let dropdownData = [];
  if (select) {
    const constructDropdown = dt => {
      return dt.map(d => {
        return {
          value: d[optionValue],
          label: d[optionLabel]
        };
      });
    };
    if (data && data.length > 0) {
      dropdownData = constructDropdown(data || []);
    } else if (sourceJsonPath) {
      dropdownData = constructDropdown(
        get(preparedFinalObject, sourceJsonPath, [])
      );
    }
  }
  return { value: fieldValue, dropdownData };
};

export default connect(
  mapStateToProps,
  {}
)(TextFieldContainer);
