import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import NavBar from "../components/NavBar/NavBar";
import { MemoryRouter } from "react-router-dom";

describe('NavBar Component', () => {

    test('The initial state of hoverListIndex is 0 and the NavBar hover lists are initially hidden', () => { 
        
        render(
            <MemoryRouter>
                 <NavBar searchIconClick={false} onSearchIconClick={() => {}} isMobileSideListOpen={false} handleMobileSideList={() => {}}/>
            </MemoryRouter>
       );

        expect(screen.queryByText('Upcoming')).not.toBeInTheDocument();
        expect(screen.queryByText('On TV')).not.toBeInTheDocument();
        expect(screen.queryByText('Popular People')).not.toBeInTheDocument();
        expect(screen.queryByText('Discussions')).not.toBeInTheDocument();
     })

})