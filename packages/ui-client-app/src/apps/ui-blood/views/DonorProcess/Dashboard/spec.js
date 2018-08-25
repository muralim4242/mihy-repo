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


export const donorProcessOption=[{
  displayLabel:"Process Overview",
  iconName:"search",
  navigationUrl:"/blood/donor-process/process-overview",
  itemProps:{
    xs:12,
    md:4
  },
  ...oddOptionStyle
},
{
  displayLabel:"What to do before, duing and After",
  iconName:"search",
  navigationUrl:"/blood/donor-process/what-to-do",
  itemProps:{
    xs:12,
    md:4
  },
  ...evenOptionStyle
},
{
  displayLabel:"What happens to donated blood",
  iconName:"search",
  navigationUrl:"/blood/donor-process/what-happens",
  itemProps:{
    xs:12,
    md:4
  },
  ...oddOptionStyle
},
// {
//   displayLabel:"First time donoe",
//   iconName:"search",
//   navigationUrl:"/blood/donor-process/first-time-donor",
//   itemProps:{
//     xs:12,
//     md:4
//   },
//   ...evenOptionStyle
// }
]
