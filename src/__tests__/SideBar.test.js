import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import SideBar from "../components/SideBar/SideBar";

describe('SideBar Component', () => {

    test('Renders Correctly Without Crashing', () => { 
        render(<SideBar />);

        expect(screen.getByText('Sort')).toBeInTheDocument();
        expect(screen.getByText('Filter')).toBeInTheDocument();
        expect(screen.getByText('Search')).toBeInTheDocument();
     })

})