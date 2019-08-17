import React from "react";
import Typography from "@material-ui/core/Typography";
import Counter from "./components/Counter";
import BrandSelection from "./components/BrandSelection";
// import CountEditDialog from "./components/CountEditDialog";
import Statitics from "./components/Statitics";
import { connect } from "react-redux";
import { mapDispatchToProps } from "../../../../../ui-utils/commons";

class Dashboard extends React.Component {
  updateStatics = (mode = "increase") => {
    const { setAppData, statics,brands,selectedBrand } = this.props;
    const {
      todayCount = 0,
      amountSpentToday = 0,
      totalCount = 0,
      totalAmountSpent = 0
    } = statics;
    const amountForCigarate = parseInt(brands.filter((brand)=>brand.name===selectedBrand)[0].price);
    if (mode === "increase") {
      statics.todayCount = todayCount + 1;
      statics.amountSpentToday = amountSpentToday + amountForCigarate;
      statics.totalCount = totalCount + 1;
      statics.totalAmountSpent = totalAmountSpent + amountForCigarate;
      statics.lastSmoked = new Date();
      setAppData("userInfo.statics", statics);
    } else {
      statics.todayCount = todayCount - 1;
      statics.amountSpentToday = amountSpentToday - amountForCigarate;
      statics.totalCount = totalCount - 1;
      statics.totalAmountSpent = totalAmountSpent - amountForCigarate;
      // statics.lastSmoked = new Date().toTimeString().split(" ")[0];
      setAppData("userInfo.statics.todayCount", todayCount - 1);
    }
  };
  render() {
    const {
      // isEditDailogOpen,
      setAppData,
      brands,
      selectedBrand,
      statics
    } = this.props;
    const { todayCount = 0 } = statics;
    const { updateStatics } = this;
    return (
      <div>
        <Typography variant="h6" gutterBottom>
          Dashboard
        </Typography>
        <Counter
          todayCount={todayCount}
          // onEdit={() => setAppData("isEditDailogOpen", !isEditDailogOpen)}
          increase={() => updateStatics("increase")}
          decrease={() => updateStatics("decrease")}
        />
        <BrandSelection
          brands={brands}
          selectedBrand={selectedBrand}
          handleChange={selectedBrand =>
            setAppData("userInfo.selectedBrand", selectedBrand)
          }
        />
        <Statitics statics={statics} />
        {/*<CountEditDialog
          todayCount={todayCount}
          open={isEditDailogOpen}
          handleChange={todayCount =>
            setAppData("userInfo.statics.todayCount", todayCount)
          }
          onClose={() => setAppData("isEditDailogOpen", !isEditDailogOpen)}
          onUpdate={() => updateStatics("update")}
        />*/}
      </div>
    );
  }
}

const mapStateToProps = ({ screenConfiguration }) => {
  const { preparedFinalObject = {} } = screenConfiguration;
  const { userInfo = {}, isEditDailogOpen = false } = preparedFinalObject;

  const { brands = [], selectedBrand = 0, statics = {} } = userInfo;
  return {
    isEditDailogOpen,
    brands,
    selectedBrand,
    statics
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
