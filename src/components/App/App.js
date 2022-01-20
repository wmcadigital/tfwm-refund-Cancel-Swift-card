import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Contexts
import { FormProvider } from '../../globalState/RefundCancelContext';
import SelectCard from '../CancelRefundForm/components/SelectCard';

function App() {
  return (
    <FormProvider>
      <Router>
        <Switch>
          <Route path="/">
            <SelectCard />
          </Route>
        </Switch>
      </Router>
    </FormProvider>
  );
}

export default App;
