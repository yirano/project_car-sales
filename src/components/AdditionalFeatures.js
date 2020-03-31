import React from 'react';
import { connect } from 'react-redux'
import AdditionalFeature from './AdditionalFeature';

const AdditionalFeatures = props => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {!props.additionalFeatures.length ? (
        <p>Nice looking car!</p>
      ) : (
          <ol type="1">
            <AdditionalFeature />
          </ol>
        )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    additionalFeatures: state.additionalFeatures
  }
}

export default connect(mapStateToProps, {})(AdditionalFeatures);
