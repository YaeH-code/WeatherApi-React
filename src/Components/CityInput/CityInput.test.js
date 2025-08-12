// import { render, screen, fireEvent } from '@testing-library/react';
// import { Provider } from 'react-redux';
// import { store } from '../../redux/store';
// import CityInput from './CityInput';

// function Wrapper(){
//     return <Provider store={store}><CityInput/></Provider>
// }

// test('updates the city when the button is clicked', () => {


//   render(Wrapper())

//   const input = screen.getByPlaceholderText(/Nom de la ville|City Name/);
//   const button = screen.getByRole('button')

//   fireEvent.change(input, { target: { value: 'Paris' } })

//   expect(input.value).toBe('Paris')

//   fireEvent.click(button)

 
//   expect(store.getState().city.value).toBe('Paris')
// });