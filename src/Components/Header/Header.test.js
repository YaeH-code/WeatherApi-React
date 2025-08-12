// import { render, screen, fireEvent, waitFor } from '@testing-library/react';
// import { Provider } from 'react-redux';
// import Header from './Header';
// import { setLang } from '../../redux/langSlice';
// import { store } from '../../redux/store'

// function Wrapper(){ 
//     return <Provider store={store}><Header/></Provider>
// }

// describe('Header component', () => {
 

//   test('renders the component with the correct title',async () => {
//     render(Wrapper())

//     expect(screen.getByText('Application météo')).toBeInTheDocument()

//     store.dispatch(setLang('en'))

//     waitFor(()=>{
//       expect(screen.getByText('Weather Application')).toBeInTheDocument()
//     })

//   });

//   test('changes the language when clicked on the Lang component', () => {
//     render(Wrapper())

//     const langFR = screen.getByText('FR')
//     const langEN = screen.getByText('EN')

//     expect(langFR).toHaveStyle({ opacity: '1' })
//     expect(langEN).toHaveStyle({ opacity: '0.4' })

//     fireEvent.click(langEN)

//     expect(langFR).toHaveStyle({ opacity: '0.4' })
//     expect(langEN).toHaveStyle({ opacity: '1' })
//   });
// });