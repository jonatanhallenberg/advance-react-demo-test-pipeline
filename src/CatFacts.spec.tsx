import { render, screen, waitFor } from '@testing-library/react';
import { CatFacts } from './CatFacts';
import '@testing-library/jest-dom';

test('renders learn react link', async () => {
    render(<CatFacts />);

    await waitFor(() => {
        expect(screen.getByText('Unlike dogs')).toBeInTheDocument();
    });
});