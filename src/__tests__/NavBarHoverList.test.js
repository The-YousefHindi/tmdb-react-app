import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import NavBarHoverList from "../components/NavBarHoverList/NavBarHoverList";

describe('NavBarHoverList Component', () => {

    test('The hover list renders children correctly', () => { 
        render(
        <NavBarHoverList>
            <li>first listing</li>
            <li>second listing</li>
        </NavBarHoverList>
         )

        expect(screen.getByText('first listing')).toBeInTheDocument();
        expect(screen.getByText('second listing')).toBeInTheDocument();

     })

})