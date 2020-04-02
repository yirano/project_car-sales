import React, { useCallback } from "react";
import { deleteFeature } from "../actions/actions";
import { useSelector, useDispatch } from 'react-redux'

const AddedFeature = props => {

  const features = useSelector(state => state.car.features)
  const dispatch = useDispatch()
  // const handleFeatureRemove = (e) => {
  //   dispatch(deleteFeature(e))
  // }

  return (
    <>
      {features.map(item => {
        return (
          <li>
            <button
              className="button"
              id={item.id}
              onClick={(e) => dispatch(deleteFeature(e.target.id))}
            >
              X
            </button>
            {item.feature}
          </li>
        );
      })}
    </>
  );
};

// const mapStateToProps = state => {
//   return {
//     features: state.car.features
//   };
// };

// export default connect(mapStateToProps, { deleteFeature })(AddedFeature);
export default AddedFeature;
