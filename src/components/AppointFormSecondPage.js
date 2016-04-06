import React, {Component, PropTypes} from 'react';
import {reduxForm} from 'redux-form';
export const fields = ['arg', 'sex'];

const validate = values => {
  const errors = {};
  if (!values.arg) {
    errors.arg = 'Required';
  }
  if (!values.sex) {
    errors.sex = 'Required';
  }
  return errors;
};

class AppointFormSecondPage extends Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    previousPage: PropTypes.func.isRequired
  };

  render() {
    const {
      fields: {arg, sex},
      handleSubmit,
      previousPage
      } = this.props;
    return (<form onSubmit={handleSubmit}>
        <div>
          <label>Empty Label for testing</label>
          <div>
            <input type="text" placeholder="Empty space test" {...arg}/>
          </div>
          {arg.touched && arg.error && <div>{arg.error}</div>}
        </div>
        <div>
          <label>Gender</label>
          <div>
            <label>
              <input type="radio" {...sex} value="male" checked={sex.value === 'male'}/> Male
            </label>
            <label>
              <input type="radio" {...sex} value="female" checked={sex.value === 'female'}/> Female
            </label>
          </div>
          {sex.touched && sex.error && <div>{sex.error}</div>}
        </div>
        <div>
          <button type="button" onClick={previousPage}>
            <i/> Previous
          </button>
          <button type="submit">
            Next <i/>
          </button>
        </div>
      </form>
    );
  }
}

export default reduxForm({
  form: 'appointments',              // <------ same form name
  fields,                      // <------ only fields on this page
  destroyOnUnmount: false,     // <------ preserve form data
  validate                     // <------ only validates the fields on this page
})(AppointFormSecondPage);
