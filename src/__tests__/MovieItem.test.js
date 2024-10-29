import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import MovieItem from "../components/MovieItem/MovieItem";


jest.mock("../components/ThreeDotsMenu/ThreeDotsMenu", () => 
    jest.fn(() => <div>Three Dots Menu</div>)
)

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