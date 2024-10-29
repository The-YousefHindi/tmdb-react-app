import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import RatingCircle from "../components/RatingCircle/RatingCircle";

describe('RatingCircle Component', () => {

    test('Renders with correct percentage', () => { 
        render(<RatingCircle percentage={80}/>);

        expect(screen.getByText('80%')).toBeInTheDocument();
     })

})