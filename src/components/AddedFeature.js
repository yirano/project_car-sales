import React, { useCallback } from "react";
import * as actions from "../actions/actions";
import { useSelector, useDispatch } from 'react-redux'

const AddedFeature = props => {

  const features = useSelector(state => state.car.features)
  const dispatch = useDispatch()
  const handleFeatureRemove = useCallback(() => {
    dispatch(actions.deleteFeature)
  }, [dispatch])

  return (
    <>
      {features.map(item => {
        return (
          <li>
            <button
              className="button"
              id={item.id}
              onClick={(e) => (handleFeatureRemove(e))}
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
