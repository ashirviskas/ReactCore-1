import { SUBMIT_FORM } from './constants';

const submitForm = data => ({
  type: SUBMIT_FORM,
  data,
});

export { submitForm as default };
