import React from "react";
import { connect } from "react-redux";
import { withTranslation } from "react-i18next";
import { mapDispatchToProps } from "../../../../../ui-utils/commons";
import FAQQuestions from "./questions";

class AboutUS extends React.Component {
  componentDidMount = async () => {};

  render() {
    const questionsList = [
      {
        question: "Are you official?",
        answer: "NO"
      },
      {
        question: "Who are you?",
        answer: `We are a group of dedicated volunteers who curate and verify the data coming from several sources. We extract the details, like a patient's relationship with other patients to identify local and community transmissions, travel history and status. We never collect or expose any personally identifiable data regarding the patients.`
      },
      {
        question:
          "What are your sources? How is the data gathered for this project?",
        answer:
          "We are using state bulletins and official handles to update our numbers. The data is validated by a group of volunteers and published into a Google sheet and an API. "
      },
      {
        question:
          "Why our app have more positive count than MoH?",
        answer:
          "MoHFW updates the data at a scheduled time. However, we update them based on state press bulletins, official (CM, Health M) handles, PBI, Press Trust of India, ANI reports. These are generally more recent. "
      }
    ];
    return <FAQQuestions questionsList={questionsList}></FAQQuestions>;
  }
}

export default connect(null, mapDispatchToProps)(AboutUS);
