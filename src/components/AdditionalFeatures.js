import React from 'react';
import { connect } from 'react-redux'
import AdditionalFeature from './AdditionalFeature';

const AdditionalFeatures = props => {
  return (
    <div className="content">
      <h4>Additional Features</h4>
      {props.additionalFeaturesLength ? (
        <ol type="1">
          {props.additionalFeatures.map(item => (
            <AdditionalFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
          <p>Nice looking car!</p>
        )}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    additionalFeaturesLength: state.additionalFeatures.length,
    additionalFeatures: state.additionalFeatures
  }
}

export default connect(mapStateToProps, {})(AdditionalFeatures);
