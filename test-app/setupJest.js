jest.mock('react-router-dom', () => ({
  Redirect: 'Redirect',
  Route: 'Route',
  Switch: 'Switch',
  NavLink: 'NavLink',
  Link: 'Link',
  useHistory: () => ({
    goBack: jest.fn(),
  }),
}));

jest.mock('react-redux', () => ({
  Provider: 'Provider',
  useDispatch: jest.fn(),
  shallowEqual: jest.fn(),
  useSelector: jest.fn(),
}));
