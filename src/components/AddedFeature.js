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
      {props.feature.map(item => {
        return (
          <li>
            {/* Add an onClick to run a function to remove a feature */}
            <button className="button" onClick={e => handleFeatureRemove(e)}>X</button>
            {item}
          </li>
        )
      })}
    </>
  );
};

const mapStateToProps = state => {
  return {
    feature: state.car.features
  }
}

export default connect(mapStateToProps, { deleteFeature })(AddedFeature);
