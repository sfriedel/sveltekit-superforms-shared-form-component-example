import { z } from 'zod';

const schemaBase = z.object({
	field1: z.string()
});

export const schemaCreate = schemaBase.extend({
	field2: z.string().optional()
});

export const schemaEdit = schemaBase.extend({
	field2: z.string()
});
