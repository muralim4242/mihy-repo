export const addComponentJsonpath=(components,jsonPath="components")=>
{
  for (var componentKey in components) {
    if (components.hasOwnProperty(componentKey)) {
      if (components[componentKey].children) {
        components[componentKey].componentJsonpath=`${jsonPath}.${componentKey}`;
        const childJsonpath=`${components[componentKey].componentJsonpath}.children`;
        addComponentJsonpath(components[componentKey].children,childJsonpath);
      }
      else {
        components[componentKey].componentJsonpath=`${jsonPath}.${componentKey}`;
      }
    }
  }
  return components;
}
