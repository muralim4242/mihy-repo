import {
  handleScreenConfigurationFieldChange as handleField
} from "mihy-ui-framework/ui-redux/screen-configuration/actions";

export const bloodGrps=[
  {
    label: "A+",
  },
  {
    label: "B+"
  },
  {
    label: "AB+"
  },
  {
    label: "O+"
  },
  {
    label: "A-"
  },
  {
    label: "B-"
  },
  {
    label: "AB-"
  },
  {
    label: "O-"
  }
];


export const toggleSendListButton = ({
  state = {},
  dispatch = () => {},
  disabledSend = true,
  disabledList = true
}) => {
  dispatch(
    handleField(
      "search-donar",
      "components.mihySearchDonorSection.children.mapWapper.children.actionButtons.children.list",
      "props.disabled",
      disabledSend
    )
  );
  dispatch(
    handleField(
      "search-donar",
      "components.mihySearchDonorSection.children.mapWapper.children.actionButtons.children.send",
      "props.disabled",
      disabledList
    )
  );
};

export const toggleSearchList = ({
  state = {},
  dispatch = () => {},
  showSearchList = true
}) => {
  dispatch(
    handleField(
      "search-donar",
      "components.searchListPopup",
      "props.open",
      showSearchList
    )
  );
};

export const toggleSearchCriteria = ({
  state = {},
  dispatch = () => {},
  showSearchCreteria = true
}) => {
  dispatch(
    handleField(
      "search-donar",
      "components.criteriaPopup",
      "props.open",
      showSearchCreteria
    )
  );
};
