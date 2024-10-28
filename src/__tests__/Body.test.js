import { render } from "@testing-library/react";
import Body from "../components/Body/Body";
import '@testing-library/jest-dom';
import MoviesSection from "../components/MoviesSection/MoviesSection";
import SideBar from "../components/SideBar/SideBar";


jest.mock("../components/MoviesSection/MoviesSection", () => 
    jest.fn(() => <div>Movies Section</div>)
)

jest.mock("../components/SideBar/SideBar", () => 
    jest.fn(() => <div>SideBar</div>)
)

describe('Body Component', () => {

    test('initial state of sorting choice is set correctly', () => {
        render(<Body />);

        /* const toggleSortingDropDown = screen.getByTestId('sorting-dropdown-toggle');

        fireEvent.click(toggleSortingDropDown);

        expect(screen.queryByText(/Popularity Descending/i)).toBeInTheDocument(); 
        
        // This doesn't work with mocking the side bar component.. if you want to conduct this test using the commented code..
        // alternate between this commented code and the de-commented code below + comment the SideBar mocking code above..
        */

        expect(SideBar).toHaveBeenCalledWith(
            expect.objectContaining({
                sortingChoice: ['Popularity Descending', 'popularity.desc'],
            }),
            expect.anything()
        )
    })

    test('initial state of isSearchButtonClicked is set to true', () => {
        render(<Body />);

        expect(MoviesSection).toHaveBeenCalledWith(
            expect.objectContaining({
                searchButtonClicked: true,
            }),
            expect.anything()
        )
    })

    test('initial state of filterChoices is an empty array', () => {
        render(<Body />);

        expect(MoviesSection).toHaveBeenCalledWith(
            expect.objectContaining({
                filterChoices: [],
            }),
            expect.anything()
        )
    })

    test('initial state of isSearchButtonActive is false', () => {
        render(<Body />);

        expect(SideBar).toHaveBeenCalledWith(
            expect.objectContaining({
                isSearchButtonActive: false,
            }),
            expect.anything()
        )
    })

})

