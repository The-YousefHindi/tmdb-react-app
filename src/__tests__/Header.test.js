import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import '@testing-library/jest-dom';
import Header from "../components/Header/Header";
import { MemoryRouter } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";



describe('Header Component', () => {

    test('The Mobile SideList is initially hidden', () => { 
        render(
        <MemoryRouter>
            <Header />
        </MemoryRouter>
        );

        expect(screen.queryByText('Option 1')).not.toBeInTheDocument();
     })

    test('Search Bar visibility toggles on when the user clicks on the search icon', () => { 
        render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        );

        const clickSearchIcon = screen.getByTestId('click-search-icon');

        expect(screen.queryByPlaceholderText('Search for a movie, tv show, person...')).not.toBeInTheDocument();

        fireEvent.click(clickSearchIcon);

        expect(screen.queryByPlaceholderText('Search for a movie, tv show, person...')).toBeInTheDocument();

     })

    test('Search Bar visibility toggles off when the user clicks on the clear icon', async () => { 
        render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        );

        const clickSearchIcon = screen.getByTestId('click-search-icon');

        expect(screen.queryByPlaceholderText('Search for a movie, tv show, person...')).not.toBeInTheDocument();

        fireEvent.click(clickSearchIcon);

        expect(screen.queryByPlaceholderText('Search for a movie, tv show, person...')).toBeInTheDocument();

        const clickClearIcon = await waitFor(() => screen.getByTestId('click-clear-icon'));

        fireEvent.click(clickClearIcon);

        expect(screen.queryByPlaceholderText('Search for a movie, tv show, person...')).not.toBeInTheDocument();

     })

    test('Search Bar visibility toggles on/off when the user clicks on the responsible icons', async () => { 
        render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        );

        let clickSearchIcon = screen.getByTestId('click-search-icon');

        expect(screen.queryByPlaceholderText('Search for a movie, tv show, person...')).not.toBeInTheDocument();

        fireEvent.click(clickSearchIcon);

        expect(screen.queryByPlaceholderText('Search for a movie, tv show, person...')).toBeInTheDocument();

        let clickClearIcon = await waitFor(() => screen.getByTestId('click-clear-icon'));

        fireEvent.click(clickClearIcon);

        expect(screen.queryByPlaceholderText('Search for a movie, tv show, person...')).not.toBeInTheDocument();

        clickSearchIcon = await waitFor(() => screen.getByTestId('click-search-icon'));

        fireEvent.click(clickSearchIcon);

        expect(screen.queryByPlaceholderText('Search for a movie, tv show, person...')).toBeInTheDocument();

        clickClearIcon = await waitFor(() => screen.getByTestId('click-clear-icon'));

        fireEvent.click(clickClearIcon);

        expect(screen.queryByPlaceholderText('Search for a movie, tv show, person...')).not.toBeInTheDocument();

     })

    test('Hovering over the Movies navbar element toggles on the visibility of its corresponding hover list', () => { 
        render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        );

        const hoverOverMovies = screen.getByTestId('movies-navbar-hover');

        expect(screen.queryByText('Popular')).not.toBeInTheDocument();
        expect(screen.queryByText('Now Playing')).not.toBeInTheDocument();
        expect(screen.queryByText('Upcoming')).not.toBeInTheDocument();
        expect(screen.queryByText('Top Rated')).not.toBeInTheDocument();

        fireEvent.mouseOver(hoverOverMovies);

        expect(screen.queryByText('Popular')).toBeInTheDocument();
        expect(screen.queryByText('Now Playing')).toBeInTheDocument();
        expect(screen.queryByText('Upcoming')).toBeInTheDocument();
        expect(screen.queryByText('Top Rated')).toBeInTheDocument();
     })

    test('Hovering over the TV Shows navbar element toggles on the visibility of its corresponding hover list', () => { 
        render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        );

        const hoverOverTVShows = screen.getByTestId('tvshows-navbar-hover');

        expect(screen.queryByText('Popular')).not.toBeInTheDocument();
        expect(screen.queryByText('Airing Today')).not.toBeInTheDocument();
        expect(screen.queryByText('On TV')).not.toBeInTheDocument();
        expect(screen.queryByText('Top Rated')).not.toBeInTheDocument();

        fireEvent.mouseOver(hoverOverTVShows);

        expect(screen.queryByText('Popular')).toBeInTheDocument();
        expect(screen.queryByText('Airing Today')).toBeInTheDocument();
        expect(screen.queryByText('On TV')).toBeInTheDocument();
        expect(screen.queryByText('Top Rated')).toBeInTheDocument();
    })

    test('Hovering over the People navbar element toggles on the visibility of its corresponding hover list', () => { 
        render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        );

        const hoverOverPeople = screen.getByTestId('people-navbar-hover');

        expect(screen.queryByText('Popular People')).not.toBeInTheDocument();

        fireEvent.mouseOver(hoverOverPeople);

        expect(screen.queryByText('Popular People')).toBeInTheDocument();
    })

    test('Hovering over the More navbar element toggles on the visibility of its corresponding hover list', () => { 
        render(
            <MemoryRouter>
                <Header />
            </MemoryRouter>
        );

        const hoverOverMore = screen.getByTestId('more-navbar-hover');

        expect(screen.queryByText('Discussions')).not.toBeInTheDocument();
        expect(screen.queryByText('Leaderboard')).not.toBeInTheDocument();
        expect(screen.queryByText('Support')).not.toBeInTheDocument();
        expect(screen.queryByText('API')).not.toBeInTheDocument();

        fireEvent.mouseOver(hoverOverMore);

        expect(screen.queryByText('Discussions')).toBeInTheDocument();
        expect(screen.queryByText('Leaderboard')).toBeInTheDocument();
        expect(screen.queryByText('Support')).toBeInTheDocument();
        expect(screen.queryByText('API')).toBeInTheDocument();
    })
    
})