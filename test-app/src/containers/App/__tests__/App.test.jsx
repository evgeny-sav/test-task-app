import React from 'react';
import { create } from 'react-test-renderer';
import Loading from '../../../components/Loading';
import App from '../App';

jest.mock('../../../components/Loading', () => 'Loading');
jest.mock('../../../components/Pagination', () => 'Pagination');
jest.mock('../../../components/PokemonCard', () => 'PokemonCard');

jest.mock('react-redux', () => ({
  useDispatch: () => jest.fn(),
  useSelector: jest
    .fn()
    .mockImplementationOnce(() => {
      return {
        isLoading: true,
        pokemons: {
          nextLink: '',
          previousLink: '',
          count: 0,
          data: [],
        },
      };
    })
    .mockImplementationOnce(() => {
      return {
        isLoading: false,
        pokemons: {
          nextLink: 'next',
          previousLink: 'prev',
          count: 100,
          data: [{ name: 'name' }],
        },
      };
    }),
}));

describe('App', () => {
  it('should render loading', () => {
    const component = create(<App />);
    expect(component.root.findByType(Loading).type).toBe('Loading');
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('should render with cards', () => {
    const component = create(<App />);
    expect(component.toJSON().children[0].props.className).toEqual('App');
    expect(component.toJSON()).toMatchSnapshot();
  });
});
