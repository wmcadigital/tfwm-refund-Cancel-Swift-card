/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import React, { createContext, useReducer } from 'react';
import Data from '../../components/CancelRefundForm/components/data.json';
// create context
export const FormDataContext = createContext();

export const FormProvider = (props) => {
  const { children } = props || {};
  // initial state
  const initialState = {
    currentStep: {
      id: '',
      currentStepId: 'step-swiftcard',
      prevStepId: 'step-0',
      heading: Data.refundForm[0].heading,
      fields: Data.refundForm[0].options,
      hasReachedConfirmation: false,
    },
    steps: Data,
  };
  const RefundCancelReducer = (state, action) => {
    switch (action.type) {
      case 'CONTINUE': {
        const selectedStep = state.steps.refundForm.find(
          (item) => item.parentId === action.payload.selectedVal
        );
        const selectedStepFields = selectedStep?.fields?.map((field) => ({
          ...field,
          selected: field.id === action.payload,
        }));
        return {
          ...state,
          currentStep: { ...selectedStep, fields: selectedStepFields },
        };
      }

      // case 'BACK': {
      //   const prevSelectedStep = state.steps.pages.find(
      //     (item) => item.currentStepId === action.payload.prevStepId
      //   );
      //   const updatedFields = prevSelectedStep?.fields?.map((field) => ({
      //     ...field,
      //     selected: field.id === action.payload.parentId,
      //   }));

      //   return {
      //     ...state,
      //     currentStep: { ...prevSelectedStep, fields: updatedFields },
      //   };
      // }
      default:
        return state;
    }
  };

  const [formState, formDispatch] = useReducer(RefundCancelReducer, initialState);

  return (
    <FormDataContext.Provider value={[formState, formDispatch]}>
      {children}
    </FormDataContext.Provider>
  );
  // };
};
