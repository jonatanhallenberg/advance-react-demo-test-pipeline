import { render, waitFor, screen } from '@testing-library/react';
import { UseEffectSorting } from './UseEffectSorting';
import { getProducts } from './api/getProducts';
import { Product } from './api/types';
import '@testing-library/jest-dom';

jest.mock('./api/getProducts'); // Mocka getProducts modulen

describe('UseEffectSorting', () => {
  it('should display products after fetching', async () => {
    // Skapa en mockad respons
    const mockProducts: Product[] = [
        {
            id: 1,
            title: "Product 1",
            price: 100,
            description: "Description 1",
            category: "Category 1",
            image: "Image 1",
            rating: {
                rate: 1,
                count: 1
            }
        },
        {
            id: 2,
            title: "Product 2",
            price: 200,
            description: "Description 2",
            category: "Category 2",
            image: "Image 2",
            rating: {
                rate: 2,
                count: 2
            }
        },
        {
            id: 3,
            title: "Product 3",
            price: 300,
            description: "Description 3",
            category: "Category 3",
            image: "Image 3",
            rating: {
                rate: 3,
                count: 3
            }
        }
    ];

    // Konfigurera mocken för getProducts
    (getProducts as jest.MockedFunction<typeof getProducts>).mockResolvedValue(mockProducts);

    // Rendera komponenten
    render(<UseEffectSorting />);

    // Vänta på att komponenten ska uppdatera baserat på API-svaret
    await waitFor(() => {
      mockProducts.forEach(product => {
        expect(screen.getByText(product.title)).toBeInTheDocument();
      });
    });
  });
});