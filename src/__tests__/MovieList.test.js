import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import MovieList from "../components/MovieList/MovieList";

describe('MovieList Component', () => {

    test('Displays the loading message initially', () => { 
        render(<MovieList buttonClicked={false} setButtonClicked={() => {}} sortingChoice={["Popularity Descending", "popularity.desc"]} 
        searchButtonClicked={false} setSearchButtonClicked={() => {}} filterChoices={[]}/>);

        expect(screen.getByText('Loading....')).toBeInTheDocument();
     })

})