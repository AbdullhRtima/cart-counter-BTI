import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import CartCounter from './CartCounter';

describe('Test Cart Counter', () => {
    test('basic test for render :', async () => {
        render(<CartCounter />)
        screen.debug()
        screen.getAllByText('+')
    })
})