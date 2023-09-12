<script lang="ts">
	import type { ZodValidation } from 'sveltekit-superforms';
	import type { SuperForm } from 'sveltekit-superforms/client';
	import type { schemaCreate, schemaEdit } from './schema';
	import Input from './Input.svelte';
	export let form: SuperForm<ZodValidation<typeof schemaCreate | typeof schemaEdit>>;

	const { enhance } = form;
</script>

<form use:enhance>
	<Input {form} field="field1" label="Field1" />
	<Input {form} field="field2" label="Field2" />
</form>
