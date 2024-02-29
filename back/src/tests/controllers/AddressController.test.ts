import AddressController from '../../controllers/AddressController';
import { Address } from '../../models/AddressModel';
import Koa from 'koa';

const addresses: Address[] = [
    {
        fullName: 'John Doe',
        street: '123 Main St',
        city: 'Anytown',
        zipCode: '12345',
        state: 'State',
        country: 'Country',
        furtherInformation: 'Apt 456',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: new Date(),
    },
    {
        fullName: 'Jane Doe',
        street: '456 Main St',
        city: 'Anytown',
        zipCode: '12345',
        state: 'State',
        country: 'Country',
        furtherInformation: 'Apt 456',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: new Date(),
    },
    {
        fullName: 'John Doe',
        street: '456 Main St',
        city: 'Anytown',
        zipCode: '12345',
        state: 'State',
        country: 'Country',
        furtherInformation: 'Apt 456',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: new Date(),
    },
];
const wrongAddresses: Address[] = [
    {
        fullName: 'John Doe',
        street: '123 Main St',
        city: 'Anytown',
        zipCode: '12345',
        state: 'State',
        country: 'Country',
        furtherInformation: 'Apt 456',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: new Date(),
    },
    {
        fullName: 'Jane Doe',
        street: '456 Main St',
        city: 'Anytown',
        zipCode: '12345',
        state: 'State',
        country: 'Country',
        furtherInformation: 'Apt 456',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: new Date(),
    },
    {
        fullName: 'John Doe',
        street: '456 Main St',
        city: 'Anytown',
        zipCode: '12345',
        state: 'State',
        country: 'Country',
        furtherInformation: 'Apt 456',
        createdAt: new Date(),
        updatedAt: new Date(),
        deletedAt: new Date(),
    },
];

describe('AddressController', () => {
    afterEach(() => {
        jest.restoreAllMocks();
    });

    describe('getAll method', () => {
        it('should return a 404 error', async () => {
            const mockFind = jest.spyOn(Address, 'find');
            mockFind.mockResolvedValue([]);

            const ctx = {} as Koa.Context;

            await AddressController.getAll(ctx);

            const expectedResponse = {
                message: 'NO_ADDRESS_FOUND',
                success: false,
            };

            expect(ctx.body).toBeDefined();
            expect(ctx.body).toEqual(expectedResponse);
            expect(ctx.status).toBe(404);

            mockFind.mockRestore();
        });
        it('should return an array of addresses', async () => {
            const mockFind = jest.spyOn(Address, 'find');
            mockFind.mockResolvedValue(addresses);

            const ctx = {} as Koa.Context;

            await AddressController.getAll(ctx);

            const expectedResponse = {
                data: addresses,
                success: true,
            };

            expect(ctx.body).toBeDefined();
            expect(ctx.body).toEqual(expectedResponse);
            expect(ctx.status).toBe(200);

            mockFind.mockRestore();
        });
    });
    describe('getOneById method', () => {
        it('should return a 400 error', async () => {
            const mockFindById = jest.spyOn(Address, 'findById');
            mockFindById.mockResolvedValue(null);

            const ctx = {
                params: {
                    id: null,
                },
            } as unknown as Koa.Context;

            await AddressController.getOneById(ctx);

            const expectedResponse = {
                message: 'INVALID_ID',
                success: false,
            };

            expect(ctx.body).toBeDefined();
            expect(ctx.body).toEqual(expectedResponse);
            expect(ctx.status).toBe(400);

            mockFindById.mockRestore();
        });
        it('should return a 404 error', async () => {
            const mockFindById = jest.spyOn(Address, 'findById');
            mockFindById.mockResolvedValue(null);

            const ctx = {
                params: {
                    id: '123',
                },
            } as unknown as Koa.Context;

            await AddressController.getOneById(ctx);

            const expectedResponse = {
                message: 'ADDRESS_NOT_FOUND',
                success: false,
            };

            expect(ctx.body).toBeDefined();
            expect(ctx.body).toEqual(expectedResponse);
            expect(ctx.status).toBe(404);

            mockFindById.mockRestore();
        });
    });
});
