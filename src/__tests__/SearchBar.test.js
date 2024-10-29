import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import SearchBar from "../components/SearchBar/SearchBar";

describe('SearchBar Component', () => {

    test('Renders correctly without crashing', () => { 
        render(<SearchBar />);

        expect(screen.getByPlaceholderText('Search for a movie, tv show, person...')).toBeInTheDocument();
     })

})