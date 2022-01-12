import Button from 'components/shared/Button/Button';
import React from 'react';
import { useForm } from 'react-hook-form';
import SectionStepInfo from 'components/shared/SectionStepInfo/SectionStepInfo';
// Components
// import Icon from 'components/shared/Icon/Icon';
// Styles
// import s from './App.module.scss';
import Data from '../data.json';

// const optionsDropdown = [
//   '16-18 photocard',
//   'Child photocard',
//   'Multi-day card',
//   'Swift Go',
//   'Swift pay as you go',
//   'Swift photocard',
// ];
function App() {
  // const [setFormError] = useState(false);

  const { handleSubmit } = useForm();

  // const continueHandler = (event) => {
  //   console.log(event);
  //   // const values = getValues();
  //   // const hasValues = !!Object.values(values).filter((val) => val).length;

  //   // setFormError(!hasValues);
  //   // if (hasValues) {
  //   //   formDispatch({
  //   //     type: 'CONTINUE',
  //   //     payload: { currentStep, selectedVal },
  //   //   });
  //   //   window.scrollTo(0, 0);
  //   // }
  // };
  return (
    <div className="wmnds-container wmnds-container--main">
      <div className="wmnds-col-1 wmnds-m-b-md">
        <button
          type="button"
          className="wmnds-btn wmnds-btn--link"
          onClick={() => console.log('back clicked')}
        >
          &lt; Back
        </button>
      </div>
      <form
        className="wmnds-bg-white wmnds-p-lg wmnds-col-1 wmnds-col-md-3-4"
        onSubmit={handleSubmit()}
      >
        <SectionStepInfo section="Section 1 of 2" description="About your Swift card" />
        <h2 className="wmnds-m-t-lg wmnds-m-b-lg">{Data.refundForm[0].heading}</h2>
        {/* <div className="wmnds-fe-group   wmnds-fe-group--error"> */}
        <div className="wmnds-fe-dropdown wmnds-col-1 wmnds-col-md-2-3">
          {/* <span className="wmnds-fe-error-message">Please select an option</span> */}
          <label className="wmnds-fe-label" htmlFor="dropdown-error">
            Select a Swift card or photocard
          </label>
          <select
            className="wmnds-fe-dropdown__select "
            id="dropdown-error"
            name="dropdown-example"
          >
            <option value="" selected="true">
              Choose from list
            </option>
            {Data.refundForm[0].options.map((item, idx) => (
              <option value={idx}>{item}</option>
            ))}
          </select>
        </div>
        {/* </div> */}
        <br />
        <Button
          text="Continue"
          type="submit"
          btnClass="wmnds-btn wmnds-col-1 wmnds-col-sm-auto wmnds-m-t-lg"
        >
          Continue
        </Button>
      </form>
    </div>
  );
}

export default App;
