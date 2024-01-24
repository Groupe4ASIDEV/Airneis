import Koa from 'koa';
import Response from '../helpers/Response';
import { Material } from '../models/MaterialModel';

export default {
    getAll: async (context: Koa.Context) => {
        const materials = await Material.find();

        if (materials.length === 0) {
            return Response.resourceNotFound(context, 'NO_MATERIAL_FOUND');
        }

        return Response.success(context, materials);
    },

    getOneById: async (context: Koa.Context) => {
        const id = context.params.id;

        if (!id) {
            return Response.badRequest(context, 'INVALID_ID');
        }

        const material = await Material.findById(id);

        if (!material) {
            return Response.resourceNotFound(context, 'MATERIAL_NOT_FOUND');
        }

        return Response.success(context, material);
    },

    create: async (context: Koa.Context) => {
        const body = context.request.body;
        const { name, description } = body;

        if (!name || !description) {
            return Response.badRequest(context);
        }

        const material = new Material({
            name,
            description,
        });

        await material.save();

        return Response.success(context, material);
    },

    update: async (context: Koa.Context) => {
        const id = context.params.id;
        const body = context.request.body;
        const allowedUpdates = {
            name: body.name,
            description: body.description,
        };

        if (!id) {
            return Response.badRequest(context, 'INVALID_ID');
        }

        const material = await Material.findByIdAndUpdate(id, allowedUpdates, {
            new: true,
        });

        if (!material) {
            return Response.resourceNotFound(context, 'MATERIAL_NOT_FOUND');
        }

        return Response.success(context, material);
    },

    delete: async (context: Koa.Context) => {
        const id = context.params.id;

        if (!id) {
            return Response.badRequest(context, 'INVALID_ID');
        }

        const material = await Material.findById(id);

        if (!material) {
            return Response.resourceNotFound(context, 'MATERIAL_NOT_FOUND');
        }

        await Material.deleteOne({ _id: id });

        return Response.success(context, 'MATERIAL_DELETED');
    },


    deleteMany: async (context: Koa.Context) => {
        const body = context.request.body;
        const ids = body.ids;

        if (!ids || !Array.isArray(ids) || ids.length === 0) {
            return Response.badRequest(context, 'INVALID_IDS');
        }

        const materials = await Material.find({ _id: { $in: ids } });

        if (materials.length !== ids.length) {
            return Response.resourceNotFound(context, 'SOME_MATERIALS_NOT_FOUND');
        }

        await Material.deleteMany({ _id: { $in: ids } });

        return Response.success(context, `${ids.length}_MATERIAL_DELETED`);
    },
};