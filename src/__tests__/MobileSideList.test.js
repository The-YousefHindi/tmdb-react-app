import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import MobileSideList from "../components/MobileSideList/MobileSideList";


beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
        writable: true,
        value: jest.fn().mockImplementation(query => ({
            matches: query === '(max-width: 320px)',
            media: query,
            onchange: null,
            addEventListener: jest.fn(),
            removeEventListener: jest.fn(),
            dispatchEvent: jest.fn(),
        })),
    })
})

describe('MobileSideList Component', () => {

    test('Renders in mobile view (max-width: 320px)', () => { 
        render(<MobileSideList />)

        expect(screen.getByText('Option 1')).toBeInTheDocument();
        expect(screen.getByText('Option 2')).toBeInTheDocument();
        expect(screen.getByText('Option 3')).toBeInTheDocument();
        expect(screen.getByText('Option 4')).toBeInTheDocument();
     })

})