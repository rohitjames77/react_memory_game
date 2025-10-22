import { describe, it, expect } from 'vitest';
import {render ,screen} from '@testing-library/react'
import MainPage from './components/Mainpage.jsx'
describe('something to be truthy or falsy ',() =>{
it('true to be true ',()=>{
expect(true).toBe(true);
})

it('false to be false',()=>{
expect(false).toBe(false);
})

// it('Find if img element exist in child_card component',()=>{
// render(<Child_Cards/>)
// const imgElement = screen.getByRole({img :/"card-1-img"/i})
// expect(imgElement).toBeInTheDocument()
// })


})


test('Must contain heading with the desired text',()=>{
    render(<MainPage/>)
    const headingContent = screen.getByText(/ob/i);
   expect(headingContent).toBeInTheDocument()
}


)
