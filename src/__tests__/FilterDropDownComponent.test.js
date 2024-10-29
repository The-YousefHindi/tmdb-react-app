import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import FilterDropDownComponent from "../components/FilterDropDownComponent/FilterDropDownComponent";


describe('Filter Drop Down Component', () => {

    test('Component renders correctly without crashing', () => { 
        render(<FilterDropDownComponent filteringHandler={() => {}} filterChoices={[]} />);

        expect(screen.queryByText('Filter')).toBeInTheDocument();
     })

    test('initial state of isDropDownOpen is false', () => {
        render(<FilterDropDownComponent filteringHandler={() => {}} filterChoices={[]} />);

        expect(screen.queryByText(/Genres/i)).not.toBeInTheDocument();
    })

    test('Clicking the filter drop down component toggles it open/closed', () => { 
        render(<FilterDropDownComponent filteringHandler={() => {}} filterChoices={[]}/>);

        const toggleFilterDropDown = screen.getByTestId('filter-dropdown-toggle');

        expect(screen.queryByText(/Genres/i)).not.toBeInTheDocument();

        fireEvent.click(toggleFilterDropDown);

        expect(screen.queryByText(/Genres/i)).toBeInTheDocument();

        fireEvent.click(toggleFilterDropDown);

        expect(screen.queryByText(/Genres/i)).not.toBeInTheDocument();
     })

})