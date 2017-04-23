/* eslint-disable */
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Slider from 'react-rangeslider';
import 'react-rangeslider/lib/index.css';
import validate from './validate';

import renderField from './renderField';

const renderPriceSlider = field => (
  <Slider
    inputType="number"
    value={ isNaN(parseInt(field.input.value)) ? 0: parseInt(field.input.value)}
    min={300}
    max={3000}
    step={50}
    orientation="horizontal"
    onChange={field.input.onChange}
  />
);

const WizardFormFirstPage = (props) => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <div className="jumbotron">
      <h1> Select Price Range </h1>
      <Field name="price" component={renderPriceSlider} label="First Name"/>
      <div>
        <button type="submit" className="btn btn-lg btn-success next">Next</button>
      </div>
    </div>
    </form>
  );
};

export default reduxForm({
  form: 'wizard',                 // <------ same form name
  destroyOnUnmount: false,        // <------ preserve form data
  forceUnregisterOnUnmount: true,  // <------ unregister fields on unmount
  validate,
})(WizardFormFirstPage);
