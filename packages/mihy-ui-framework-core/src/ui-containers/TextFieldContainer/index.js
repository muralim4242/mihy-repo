import React from "react";
import { connect } from "react-redux";
import { TextfieldWithIcon } from "../../ui-molecules";
import MenuItem from "@material-ui/core/MenuItem";
import get from "lodash/get";
import { getTranslatedLabel, transformById } from "../../ui-utils/commons";

const getLocaleLabelsforTL = (label, labelKey, localizationLabels) => {
  if (labelKey) {
    let translatedLabel = getTranslatedLabel(labelKey, localizationLabels);
    if (!translatedLabel || labelKey === translatedLabel) {
      return label;
    } else {
      return translatedLabel;
    }
  } else {
    return label;
  }
};

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
    const localizationLabels = JSON.parse(
      window.localStorage.getItem("localization_en_IN")
    );
    let transfomedKeys = transformById(localizationLabels, "code");
    let translatedLabel = getLocaleLabelsforTL(
      label.labelName,
      label.labelKey,
      transfomedKeys
    );
    let translatedPlaceholder = getLocaleLabelsforTL(
      placeholder.labelName,
      placeholder.labelKey,
      transfomedKeys
    );
    if (dropdownData.length > 0) {
      return (
        <TextfieldWithIcon
          label={translatedLabel}
          placeholder={translatedPlaceholder}
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
          label={translatedLabel}
          placeholder={translatedPlaceholder}
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
