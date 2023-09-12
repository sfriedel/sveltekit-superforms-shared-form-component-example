<script lang="ts">
	import { superForm } from 'sveltekit-superforms/client';
	import Form from './Form.svelte';

	export let data;

	const formCreate = superForm(data.formCreate);
	const formEdit = superForm(data.formEdit);
</script>

<h1>Create</h1>
<Form form={formCreate} />

<h1>Edit</h1>
<Form form={formEdit} />
