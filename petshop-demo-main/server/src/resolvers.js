import { Band } from "./model.js";

export const resolvers = {
    Query: {
        band: async (_, { id }) => Band.findByPk(id),
        bands: async () => await Band.findAll(),
    },
    Mutation: {
        addBand: async (_, { input }) => {
            await Band.create({
                ...input,
                complete: false,
            });
            return {
                success: true,
                Errors:null
            };
        }
    }
};