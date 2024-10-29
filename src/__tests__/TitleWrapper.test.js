import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import TitleWrapper from "../components/Title/TitleWrapper.styles";

describe('TitleWrapper Component', () => {

    test('Renders content correctly without crashing', () => { 
        render(<TitleWrapper>Title</TitleWrapper>);

        expect(screen.queryByText('Title')).toBeInTheDocument();
     })

})