import React from "react";
import { connect } from "react-redux";

const Total = props => {
  return (
    <div className="content">
      <h4>Total Amount: ${props.carPrice}</h4>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    carPrice: state.car.price,
    additionalPrice: state.additionalFeatures.price
  };
};

export default connect(mapStateToProps, {})(Total);
