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

}))