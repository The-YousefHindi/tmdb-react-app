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

    
})