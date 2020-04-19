import React from "react";
import { connect } from "react-redux";
import { withTranslation } from "react-i18next";
import { mapDispatchToProps } from "../../../../../ui-utils/commons";
import FAQQuestions from "./questions";

class AboutUS extends React.Component {
  componentDidMount = async () => {};

  render() {
    const { t } = this.props;
    const questionsList = [
      {
        question: t("FAQQuestion1"),
        answer: t("FAQAnswer1")
      },
      {
        question: t("FAQQuestion2"),
        answer: t("FAQAnswer2")
      },
      {
        question:
        t("FAQQuestion3"),
        answer:
        t("FAQAnswer3")
      },
      {
        question:
        t("FAQQuestion4"),
        answer:
        t("FAQAnswer4")
      }
    ];
    return <FAQQuestions questionsList={questionsList} t={t}></FAQQuestions>;
  }
}

export default connect(null, mapDispatchToProps)(withTranslation()(AboutUS));
