const oddOptionStyle={
  buttonProps:{
    color:"primary"
  },
  IconProps:{
    color:"secondary"
  }
}

const evenOptionStyle={
  buttonProps:{
    color:"secondary"
  },
  IconProps:{
    color:"primary"
  }
}


export const dashBoardOption=[{
  displayLabel:"Search donor",
  iconName:"search",
  navigationUrl:"/blood/search-donor",
  itemProps:{
    xs:12,
    md:4
  },
  ...oddOptionStyle
},
{
  displayLabel:"Registration",
  iconName:"search",
  navigationUrl:"/blood/registration",
  itemProps:{
    xs:12,
    md:4
  },
  ...evenOptionStyle
},
{
  displayLabel:"App history",
  iconName:"search",
  navigationUrl:"/blood/app-history",
  itemProps:{
    xs:12,
    md:4
  },
  ...oddOptionStyle
},
{
  displayLabel:"Donation process",
  iconName:"search",
  navigationUrl:"/blood/donation-process",
  itemProps:{
    xs:12,
    md:4
  },
  ...evenOptionStyle
},
{
  displayLabel:"How to donate",
  iconName:"search",
  navigationUrl:"/blood/how-to-donate",
  itemProps:{
    xs:12,
    md:4
  },
  ...oddOptionStyle
},
{
  displayLabel:"Near by donation",
  iconName:"search",
  navigationUrl:"/blood/near-by-donation",
  itemProps:{
    xs:12,
    md:4
  },
  ...evenOptionStyle
},
{
  displayLabel:"Notification",
  iconName:"search",
  navigationUrl:"/blood/notification",
  itemProps:{
    xs:12,
    md:4
  },
  ...oddOptionStyle
}]
