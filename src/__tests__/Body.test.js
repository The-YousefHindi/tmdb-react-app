import { render, screen, fireEvent } from "@testing-library/react";
import Body from "../components/Body/Body";
import '@testing-library/jest-dom';
import SortDropDownComponent from "../components/SortDropDownComponent/SortDropDownComponent";

describe('Body Component', () => {

    test('initial state of sorting choice is set correctly', () => {
        render(<Body />);

        const toggleSortingDropDown = screen.getByTestId('sorting-dropdown-toggle');

        fireEvent.click(toggleSortingDropDown);

        expect(screen.queryByText(/Popularity Descending/i)).toBeInTheDocument();
    })

})

