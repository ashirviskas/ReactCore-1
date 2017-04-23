/* eslint-disable */
import React from 'react';
import { Field, reduxForm } from 'redux-form';
import validate from './validate';
import renderField from './renderField';

const renderError = ({ meta: { touched, error } }) => touched && error ?
  <span>{error}</span> : false

const WizardFormSecondPage = (props) => {
    const { handleSubmit, pristine, previousPage, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <div className="jumbotron">
          <h1> Purpose </h1>
          <label><Field name="purpose" component="input" type="radio" value="Gaming"/> Gaming</label>
          <label><Field name="purpose" component="input" type="radio" value="Office"/> Office</label>
          <Field name="purpose" component={renderError}/>
        </div>
      <div>
        <button type="button" className="previous" onClick={previousPage}>Previous</button>
        <button type="submit" disabled={submitting}>Submit</button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: 'wizard',  //Form name is same
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,  // <------ unregister fields on unmount
  validate,
})(WizardFormSecondPage);
