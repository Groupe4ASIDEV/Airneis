import Koa from 'koa';
import Response from '../helpers/Response';
import { Address } from '../models/AddressModel';

export default {
    getAll: async (context: Koa.Context) => {
        const addresses = await Address.find();

        if (addresses.length == 0) {
            return Response.resourceNotFound(context, 'NO_ADDRESS_FOUND');
        }

        return Response.success(context, addresses);
    },
    getOneById: async (context: Koa.Context) => {
        const id = context.params.id;

        if (!id) {
            return Response.badRequest(context, 'INVALID_ID');
        }

        const address = await Address.findById(id);

        if (!address) {
            return Response.resourceNotFound(context, 'ADDRESS_NOT_FOUND');
        }

        return Response.success(context, address);
    },
    create: async (context: Koa.Context) => {
        const body = context.request.body;
        const {
            fullName,
            street,
            city,
            zipCode,
            state,
            country,
            furtherInformation,
        } = body;

        if (!fullName || !street || !city || !zipCode || !country) {
            return Response.badRequest(context, 'INVALID_DATA');
        }

        const address = new Address({
            fullName,
            street,
            city,
            zipCode,
            state,
            country,
            furtherInformation,
        });

        await address.save();

        return Response.success(context, address);
    },
    update: async (context: Koa.Context) => {
        const id = context.params.id;
        const body = context.request.body;
        const {
            fullName,
            street,
            city,
            zipCode,
            state,
            country,
            furtherInformation,
        } = body;
        const allowedUpdates = {
            fullName,
            street,
            city,
            zipCode,
            state,
            country,
            furtherInformation,
            updatedAt: Date.now(),
        };

        if (!id) {
            return Response.badRequest(context, 'INVALID_ID');
        }

        const address = await Address.findByIdAndUpdate(id, allowedUpdates, {
            new: true,
        });

        if (!address) {
            return Response.resourceNotFound(context, 'ADDRESS_NOT_FOUND');
        }

        return Response.success(context, address);
    },
    delete: async (context: Koa.Context) => {
        const id = context.params.id;

        if (!id) {
            return Response.badRequest(context, 'INVALID_ID');
        }

        const address = await Address.findById(id);

        if (!address) {
            return Response.resourceNotFound(context, 'ADDRESS_NOT_FOUND');
        }

        await address.deleteOne({ _id: id });

        return Response.success(context, 'ADDRESS_DELETED');
    },
    deleteMany: async (context: Koa.Context) => {
        const body = context.request.body;
        const { ids } = body;

        if (!ids || !Array.isArray(ids) || ids.length === 0) {
            return Response.badRequest(context, 'INVALID_ID');
        }

        const addresses = await Address.find({ _id: { $in: ids } });

        if (addresses.length !== ids.length) {
            return Response.resourceNotFound(
                context,
                'SOME_ADDRESSES_NOT_FOUND'
            );
        }

        await Address.deleteMany({ _id: { $in: ids } });

        return Response.success(context, `${ids.length}_ADDRESSES_DELETED`);
    },
};
