import { render, screen, fireEvent, waitFor } from "@testing-library/react";
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
    
    test('Changes page in response to user interaction with the NavBar elements', async () => { 
        render(<App />);

        let hoverOverMovies = screen.getByTestId('movies-navbar-hover');

        expect(screen.queryByText('Welcome To the Home Page')).toBeInTheDocument();
        expect(screen.queryByText('Filter')).not.toBeInTheDocument();
        

        fireEvent.mouseOver(hoverOverMovies);

        let clickPopularMovies = await waitFor(() => screen.getByTestId('click-popular-movies'));

        fireEvent.click(clickPopularMovies);

        expect(screen.queryByText('Welcome To the Home Page')).not.toBeInTheDocument();
        expect(screen.queryByText('Filter')).toBeInTheDocument();
        
        const clickHeaderLogo = screen.getByTestId('header-logo');
        fireEvent.click(clickHeaderLogo);

        expect(screen.queryByText('Welcome To the Home Page')).toBeInTheDocument();
        expect(screen.queryByText('Filter')).not.toBeInTheDocument();

        hoverOverMovies = screen.getByTestId('movies-navbar-hover');
        fireEvent.mouseOver(hoverOverMovies);
        clickPopularMovies = await waitFor(() => screen.getByTestId('click-popular-movies'));
        fireEvent.click(clickPopularMovies);

        await waitFor(() => {
            expect(screen.queryByText('Welcome To the Home Page')).not.toBeInTheDocument();
            expect(screen.queryByText('Filter')).toBeInTheDocument();    
        })

     })

})
