import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import App from "../App";

describe('App', () => {

    test('App starts on the home page', () => { 
        render(<App />);

        expect(screen.queryByText('Welcome To the Home Page')).toBeInTheDocument();
        expect(screen.queryByText('Choose "Popular" from "Movies" above')).toBeInTheDocument();
        expect(screen.queryByText('Home')).toBeInTheDocument();
        
        expect(screen.queryByText('Filter')).not.toBeInTheDocument();
        expect(screen.queryByText('Popular Movies')).not.toBeInTheDocument();
        expect(screen.queryByText('Sort')).not.toBeInTheDocument();
        expect(screen.queryByText('Load More')).not.toBeInTheDocument();
        expect(screen.queryByText('Search')).not.toBeInTheDocument();
        
     })
    
    /* test('Clicking on Popular Movies from the navbar hover lists reroutes to the Popular Movies page', () => { 
        
    
     }) */

})
