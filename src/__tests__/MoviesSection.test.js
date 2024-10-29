import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import MoviesSection from "../components/MoviesSection/MoviesSection";
import Body from "../components/Body/Body";

describe('Movies Section', () => {

    test('The initial state of buttonClicked is false', () => { 
        render(<MoviesSection sortingChoice={[]} searchButtonClicked={false} setSearchButtonClicked={() => {}} filterChoices={[]}/>);

        expect(screen.getByText('Load More')).toBeInTheDocument();
     })

    test('Clicking the load more button makes it disappear', () => { 
        render(<Body />);

        const clickLoadMoreButton = screen.getByTestId("click-load-more-button");
        
        expect(screen.queryByText('Load More')).toBeInTheDocument();

        fireEvent.click(clickLoadMoreButton);

        expect(screen.queryByText('Load More')).not.toBeInTheDocument();

     })

})