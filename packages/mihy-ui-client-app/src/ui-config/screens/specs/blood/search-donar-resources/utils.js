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

const CURRENT_LOCATION_MAP_PIN="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 2c1.1 0 2 .9 2 2 0 1.11-.9 2-2 2s-2-.89-2-2c0-1.1.9-2 2-2zm0 10c-1.67 0-3.14-.85-4-2.15.02-1.32 2.67-2.05 4-2.05s3.98.73 4 2.05c-.86 1.3-2.33 2.15-4 2.15z";
const DONORS_LOCATION_ICON="M19 2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h4l3 3 3-3h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 3.3c1.49 0 2.7 1.21 2.7 2.7 0 1.49-1.21 2.7-2.7 2.7-1.49 0-2.7-1.21-2.7-2.7 0-1.49 1.21-2.7 2.7-2.7zM18 16H6v-.9c0-2 4-3.1 6-3.1s6 1.1 6 3.1v.9z";

export const currLoc={ lat: 21.7679, lng: 78.8718 };

export const getMyLocation = ({callBack}) => {
    if (navigator.geolocation) {
      // can be resused
      navigator.geolocation.getCurrentPosition(
        (position) => {
          callBack({ lat: position.coords.latitude, lng: position.coords.longitude });
        },
        (error)=> {
          console.log(error.code);
        }
      );
    }
  };

export const currentLocationIcon={
     path: CURRENT_LOCATION_MAP_PIN,
     fillColor: '#b71c1c',
     fillOpacity: 1,
     strokeColor: '',
     strokeWeight: 0
 }

export const donorsLocationIcon={
   path: DONORS_LOCATION_ICON,
   fillColor: '#d81b60',
   fillOpacity: 1,
   strokeColor: '',
   strokeWeight: 0
 }

 const isMarkerShown = true;
 export const isEntityTypeShown = true;
 export const donorLocations = [
   {
     userId: "1",
     bloodGrpCode: "aPositive",
     position: {
       lat: 12.854922,
       lng: 77.788118
     }
   },
   {
     userId: "2",
     bloodGrpCode: "aPositive",
     position: {
       lat: 12.938879,
       lng: 77.741205
     }
   },
   {
     userId: "3",
     bloodGrpCode: "aPositive",
     position: {
       lat: 12.959172,
       lng: 77.697419
     }
   },
   {
     userId: "4",
     bloodGrpCode: "bPositive",
     position: {
       lat: 38.96502,
       lng: -94.580961
     }
   },
   {
     userId: "5",
     bloodGrpCode: "bPositive",
     position: {
       lat: 12.925007,
       lng: 77.593803
     }
   },
   {
     userId: "6",
     bloodGrpCode: "abPositive",
     position: {
       lat: 13.03577,
       lng: 77.597022
     }
   },
   {
     userId: "7",
     bloodGrpCode: "abPositive",
     position: {
       lat: 13.027966,
       lng: 77.540961
     }
   },
   {
     userId: "8",
     bloodGrpCode: "abPositive",
     position: {
       lat: 13.004017,
       lng: 77.687776
     }
   },
   {
     userId: "9",
     bloodGrpCode: "abPositive",
     position: {
       lat: 13.06952,
       lng: 77.582284
     }
   },
   {
     userId: "10",
     bloodGrpCode: "oPositive",
     position: {
       lat: 32.181969,
       lng: -95.859698
     }
   },
   {
     userId: "11",
     bloodGrpCode: "oPositive",
     position: {
       lat: 36.158494,
       lng: -95.992495
     }
   },
   {
     userId: "12",
     bloodGrpCode: "aNegative",
     position: {
       lat: 13.017587,
       lng: 77.619659
     }
   },
   {
     userId: "13",
     bloodGrpCode: "bNegative",
     position: {
       lat: 12.992208,
       lng: 77.717215
     }
   },
   {
     userId: "14",
     bloodGrpCode: "bNegative",
     position: {
       lat: 12.839938,
       lng: 77.677003
     }
   },
   {
     userId: "15",
     bloodGrpCode: "abNegative",
     position: {
       lat: 54.60838,
       lng: 18.8008
     }
   },
   {
     userId: "16",
     bloodGrpCode: "oNegative",
     position: {
       lat: 13.003062,
       lng: 77.564293
     }
   },
   {
     userId: "17",
     bloodGrpCode: "oNegative",
     position: {
       lat: 12.98565,
       lng: 77.605693
     }
   }
 ];
