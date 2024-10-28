import { render } from "@testing-library/react";
import '@testing-library/jest-dom';
import Header from "../components/Header/Header";
import NavBar from "../components/NavBar/NavBar";

jest.mock("../components/NavBar/NavBar", () =>
    jest.fn(() => <div>NavBar</div>)
)

describe('Header Component', () => {

    test('initial state of isMobileSideListOpen is false', () => { 
        render(<Header />);
    
        expect(NavBar).toHaveBeenCalledWith(
            expect.objectContaining({
                isMobileSideListOpen: false,
            }),
            expect.anything()
        )
     })

})