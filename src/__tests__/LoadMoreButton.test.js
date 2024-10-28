import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import LoadMoreButton from "../components/LoadMoreButton/LoadMoreButton";


describe('Load More Button Component', () => {

    test('Load More Button Component Renders Correctly Without Crashing', () => { 
        render(<LoadMoreButton />);

        expect(screen.queryByText(/Load More/i)).toBeInTheDocument();
     })

})