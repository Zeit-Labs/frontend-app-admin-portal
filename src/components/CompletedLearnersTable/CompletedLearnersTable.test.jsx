import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import CompletedLearnersTable from '.';

const mockStore = configureMockStore([thunk]);
const enterpriseId = 'test-enterprise';
const store = mockStore({
  portalConfiguration: {
    enterpriseId,
  },
  table: {
    'completed-learners': {
      data: {
        results: [],
        current_page: 1,
        num_pages: 1,
      },
      ordering: null,
      loading: false,
      error: null,
    },
  },
});

function CompletedLearnersWrapper(props) {
  return (
    <MemoryRouter>
      <Provider store={store}>
        <CompletedLearnersTable
          {...props}
        />
      </Provider>
    </MemoryRouter>
  );
}

describe('CompletedLearnersTable', () => {
  it('renders empty state correctly', () => {
    const tree = renderer
      .create((
        <CompletedLearnersWrapper />
      ))
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
