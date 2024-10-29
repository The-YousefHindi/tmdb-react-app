import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import SortDropDownComponent from "../components/SortDropDownComponent/SortDropDownComponent";

describe('SortDropDown Component', ( () => {

    test('Renders correctly without crashing', () => { 
        render(<SortDropDownComponent/>);

        expect(screen.getByText('Sort')).toBeInTheDocument();
     })

     test('The drop down component is initially closed', () => { 
        render(<SortDropDownComponent sortingChoice={['Popularity Descending', 'popularity.desc']}/>);

        expect(screen.queryByText('Popularity Descending')).not.toBeInTheDocument();
      })

      test('The drop down component toggle function opens/closes the drop down component with each click', () => { 
        render(<SortDropDownComponent sortingChoice={['Popularity Descending', 'popularity.desc']}/>);

        const toggleSortingDropDown = screen.getByTestId('sorting-dropdown-toggle');

        expect(screen.queryByText('Popularity Descending')).not.toBeInTheDocument();

        fireEvent.click(toggleSortingDropDown);

        expect(screen.queryByText('Popularity Descending')).toBeInTheDocument();

        fireEvent.click(toggleSortingDropDown);

        expect(screen.queryByText('Popularity Descending')).not.toBeInTheDocument();

       })

      test('Inner drop down list toggles open/close on click', () => { 
        render(<SortDropDownComponent sortingChoice={['Popularity Descending', 'popularity.desc']}/>);

        const toggleSortingDropDown = screen.getByTestId('sorting-dropdown-toggle');
        fireEvent.click(toggleSortingDropDown);

        const toggleInnerDropDownSorting = screen.getByTestId('toggle-inner-dropdown-sorting');

        expect(screen.queryByText('Popularity Ascending')).not.toBeInTheDocument();
        expect(screen.queryByText('Rating Descending')).not.toBeInTheDocument();
        expect(screen.queryByText('Rating Ascending')).not.toBeInTheDocument();
        expect(screen.queryByText('Release Date Descending')).not.toBeInTheDocument();
        expect(screen.queryByText('Release Date Ascending')).not.toBeInTheDocument();
        expect(screen.queryByText('Title (A-Z)')).not.toBeInTheDocument();
        expect(screen.queryByText('Title (Z-A)')).not.toBeInTheDocument();

        fireEvent.click(toggleInnerDropDownSorting);

        expect(screen.queryByText('Popularity Ascending')).toBeInTheDocument();
        expect(screen.queryByText('Rating Descending')).toBeInTheDocument();
        expect(screen.queryByText('Rating Ascending')).toBeInTheDocument();
        expect(screen.queryByText('Release Date Descending')).toBeInTheDocument();
        expect(screen.queryByText('Release Date Ascending')).toBeInTheDocument();
        expect(screen.queryByText('Title (A-Z)')).toBeInTheDocument();
        expect(screen.queryByText('Title (Z-A)')).toBeInTheDocument();

        fireEvent.click(toggleInnerDropDownSorting);

        expect(screen.queryByText('Popularity Ascending')).not.toBeInTheDocument();
        expect(screen.queryByText('Rating Descending')).not.toBeInTheDocument();
        expect(screen.queryByText('Rating Ascending')).not.toBeInTheDocument();
        expect(screen.queryByText('Release Date Descending')).not.toBeInTheDocument();
        expect(screen.queryByText('Release Date Ascending')).not.toBeInTheDocument();
        expect(screen.queryByText('Title (A-Z)')).not.toBeInTheDocument();
        expect(screen.queryByText('Title (Z-A)')).not.toBeInTheDocument();

       })
      

}))