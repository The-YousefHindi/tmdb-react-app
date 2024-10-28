import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import Footer from "../components/Footer/Footer";


describe('Footer Component', () => {

    test('Footer component renders correctly', () => { 
        render(<Footer />);

        expect(screen.getByTestId('footer-content')).toBeInTheDocument();
     })

})