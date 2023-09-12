import { superValidate } from 'sveltekit-superforms/client';
import { schemaCreate, schemaEdit } from './schema';

export async function load() {
	const formCreate = await superValidate(schemaCreate, { id: 'create' });
	const formEdit = await superValidate(schemaEdit, { id: 'edit' });
	return { formCreate, formEdit };
}
