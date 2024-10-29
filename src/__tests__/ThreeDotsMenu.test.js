import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import ThreeDotsMenu from "../components/ThreeDotsMenu/ThreeDotsMenu";

describe('ThreeDotsMenu Component', () => {

    test('The Menu is hidden when the isOpen state is false', () => { 
        render(<ThreeDotsMenu isOpen={false}/>);

        expect(screen.queryByText('Add to list')).not.toBeInTheDocument();
        expect(screen.queryByText('Favorite')).not.toBeInTheDocument();
        expect(screen.queryByText('Watchlist')).not.toBeInTheDocument();
        expect(screen.queryByText('Your Rating')).not.toBeInTheDocument();

     })

     test('The Menu is visible when the isOpen state is true', () => { 
        render(<ThreeDotsMenu isOpen={true}/>);

        expect(screen.queryByText('Add to list')).toBeInTheDocument();
        expect(screen.queryByText('Favorite')).toBeInTheDocument();
        expect(screen.queryByText('Watchlist')).toBeInTheDocument();
        expect(screen.queryByText('Your Rating')).toBeInTheDocument();
     })

})