import React from 'react';
import { connect } from 'react-redux'
import { deleteFeature } from '../actions/actions'

const AddedFeature = props => {
  function handleFeatureRemove(e) {
    console.log(e.target.id);
    props.deleteFeature(e.target.id)
  }
  return (
    <>
      {console.log(props.features)}
      {props.features.map(item => {
        return (
          <li>
            {/* Add an onClick to run a function to remove a feature */}
            <button className="button" id={item.id} onClick={e => handleFeatureRemove(e)}>X</button>
            {item.feature}
          </li>
        )
      })}
    </>
  );
};

const mapStateToProps = state => {
  return {
    features: state.car.features
  }
}

export default connect(mapStateToProps, { deleteFeature })(AddedFeature);
