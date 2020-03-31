import React from 'react';
import { connect } from 'react-redux'

const AddedFeature = props => {
  function handleFeatureRemove(e) {
    console.log(e.target.id);
  }
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" id={props.feature.id} onClick={e => handleFeatureRemove(e)}>X</button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = state => {
  return {
    feature: state.additionalFeatures
  }
}

export default connect(mapStateToProps, {})(AddedFeature);
