import Koa from 'koa';
import Response from '../helpers/Response';
import { Picture } from '../models/PictureModel';
import fs from 'fs';
import path from 'path';

export default {
    getAll: async (context: Koa.Context) => {
        const pictures = await Picture.find();

        if (pictures.length == 0) {
            return Response.resourceNotFound(context, 'NO_PICTURE_FOUND');
        }

        return Response.success(context, pictures);
    },
    getOneById: async (context: Koa.Context) => {
        const id = context.params.id;

        if (!id) {
            return Response.badRequest(context, 'INVALID_ID');
        }

        const picture = await Picture.findById(id);

        if (!picture) {
            return Response.resourceNotFound(context, 'PICTURE_NOT_FOUND');
        }

        return Response.success(context, picture);
    },
    upload: async (context: Koa.Context) => {
        try {
            const file = context.request.files?.file;
            const body = context.request.body;

            const singleFile = Array.isArray(file) ? file[0] : file;

            if (!singleFile || !singleFile.filepath) {
                return Response.badRequest(context, 'NO_FILE');
            }

            const mimeTypes = [
                'image/jpeg',
                'image/png',
                'image/gif',
                'image/webp',
            ];

            if (
                singleFile.mimetype === null ||
                !mimeTypes.includes(singleFile.mimetype)
            ) {
                return Response.badRequest(context, 'INVALID_FILE_TYPE');
            }

            // redimensionnement ?

            const name = path.basename(singleFile.filepath);

            const picture = new Picture({
                url: name,
                alt: body.alt,
            });

            await picture.save();

            return Response.success(context, {
                message: 'FILE_UPLOADED',
                filePath: singleFile.filepath,
            });
        } catch (error) {
            console.error(error);
            return Response.error(context, 'SOMETHING_WENT_WRONG');
        }
    },
    delete: async (context: Koa.Context) => {
        const id = context.params.id;

        if (!id) {
            return Response.badRequest(context, 'INVALID_ID');
        }

        const picture = await Picture.findById(id);

        if (!picture) {
            return Response.resourceNotFound(context, 'PICTURE_NOT_FOUND');
        }

        await Picture.deleteOne({ _id: id });

        const filePath = path.join(__dirname, '..', 'uploads', picture.url);
        fs.unlink(filePath, (error) => {
            if (error) {
                console.error(error);
            }
        });

        return Response.success(context, 'PICTURE_DELETED');
    },
    deleteMany: async (context: Koa.Context) => {
        const body = context.request.body;
        const ids = body.ids;

        if (!ids || !Array.isArray(ids) || ids.length === 0) {
            return Response.badRequest(context, 'INVALID_IDS');
        }

        const pictures = await Picture.find({ _id: { $in: ids } });

        if (pictures.length !== ids.length) {
            return Response.resourceNotFound(
                context,
                'SOME_PICTURES_NOT_FOUND'
            );
        }

        await Picture.deleteMany({ _id: { $in: ids } });

        pictures.forEach((picture) => {
            const filePath = path.join(__dirname, '..', 'uploads', picture.url);
            fs.unlink(filePath, (error) => {
                if (error) {
                    console.error(error);
                }
            });
        });

        return Response.success(context, `${ids.length}_PICTURES_DELETED`);
    },
};
