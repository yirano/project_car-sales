export const ADD_FEATURE = 'ADD_FEATURE'
export const REMOVE_FEATURE = 'REMOVE_FEATURE'

export const addFeature = (features) => {
  console.log("addFeature -> features", features)
  return {
    type: ADD_FEATURE,
    payload: features
  }
}

export const removeFeature = (features) => {
  console.log("removeFeature -> features", features)
  return {
    type: REMOVE_FEATURE,
    payload: features
  }
}