import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import MoviesSection from "../components/MoviesSection/MoviesSection";

describe('Movies Section', () => {

    test('The initial state of buttonClicked is false', () => { 
        render(<MoviesSection sortingChoice={[]} searchButtonClicked={false} setSearchButtonClicked={() => {}} filterChoices={[]}/>);

        expect(screen.getByText('Load More')).toBeInTheDocument();
     })

})