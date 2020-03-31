export const ADD_FEATURE = 'ADD_FEATURE';

export function addFeature(foo) {
  console.log('addFeature function', foo);
  return {
    type: ADD_FEATURE,
    payload: foo
  }
}