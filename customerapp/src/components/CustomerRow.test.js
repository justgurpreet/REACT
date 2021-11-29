import { render, screen, fireEvent } from '@testing-library/react';
import CustomerRow from './CustomerRow';

// test suite

describe("testing CustomerRow Compoenent", () => {
    let callback = jest.fn(); // mock function
    let c  =  {
        "id": 4,
        "firstName": "Monica",
        "lastName": "Geller"
    };
    
    it("test render customer row", () => {
        render(<CustomerRow customer={c} delEvent={(id) => callback(id)} />);
        let elem = screen.getByText(/Monica/i);
        expect(elem).toBeInTheDocument();
    });

      
    it("test delete in customer row", () => {
        render(<CustomerRow customer={c} delEvent={(id) => callback(id)} />);
        let btn = screen.getByRole("button");
        fireEvent.click(btn);
        expect(callback).toBeCalledTimes(1);
        expect(callback).toBeCalledWith(4);
    });
    
});
