import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import FilterDropDownComponent from "../components/FilterDropDownComponent/FilterDropDownComponent";


describe('Filter Drop Down Component', () => {

    test('initial state of isDropDownOpen is false', () => {
        render(<FilterDropDownComponent filteringHandler={() => {}} filterChoices={[]} />);

        expect(screen.queryByText(/Genres/i)).not.toBeInTheDocument();
    })

})