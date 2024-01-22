import { fireEvent, screen } from "@testing-library/react";
import { renderWithTranslations } 
    from "shared/lib/tests/renderWithTranslation/renderWithTranslations";
import { Sidebar } from "widgets/Sidebar/ui/Sidebar/Sidebar";



Sidebar
describe('Sidebar', () => {
    test('with only first param', () => {
        renderWithTranslations(<Sidebar/>)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('test toggle', () => {
        renderWithTranslations(<Sidebar/>)
        const toggleButton = screen.getByTestId('sidebar-toggle')
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleButton);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
    });
});