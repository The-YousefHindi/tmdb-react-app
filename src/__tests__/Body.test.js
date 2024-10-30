import { render, screen, fireEvent } from "@testing-library/react";
import Body from "../components/Body/Body";
import '@testing-library/jest-dom';


describe('Body Component', () => {

    test('initial state of sorting choice is set correctly', () => {
        render(<Body />);

        const toggleSortingDropDown = screen.getByTestId('sorting-dropdown-toggle');

        fireEvent.click(toggleSortingDropDown);

        expect(screen.queryByText(/Popularity Descending/i)).toBeInTheDocument(); 
    })

    test('Component renders correctly without crashing', () => {
            render(<Body />);

            expect(screen.queryByText('Sort')).toBeInTheDocument();
            expect(screen.queryByText('Filter')).toBeInTheDocument();
            expect(screen.queryByText('Search')).toBeInTheDocument();
            expect(screen.queryByText('Load More')).toBeInTheDocument();      
    })

})

