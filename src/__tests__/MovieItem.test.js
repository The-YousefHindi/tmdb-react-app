import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import MovieItem from "../components/MovieItem/MovieItem";
import MovieList from "../components/MovieList/MovieList";
import Body from "../components/Body/Body";



describe('Movie Item Component', () => {

    test('Renders MovieItem component correctly without crashing', () => { 
        render(<MovieItem 
        title={'Venom'}
        releaseDate={'2011-08-26'}
        />);

        expect(screen.getByText("Venom")).toBeInTheDocument();
        expect(screen.getByText("2011-08-26")).toBeInTheDocument();        
     })
    
})