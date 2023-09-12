<script lang="ts">
	import type { FormPathLeaves, ZodValidation } from 'sveltekit-superforms';
	import { formFieldProxy, type SuperForm } from 'sveltekit-superforms/client';
	import type { AnyZodObject, z } from 'zod';

	type T = $$Generic<AnyZodObject>;

	export let form: SuperForm<ZodValidation<T>, unknown>;
	export let field: FormPathLeaves<z.infer<T>>;

	export let label: string;

	$: ({ value, constraints } = formFieldProxy(form, field));
</script>

<label>
	<div>{label}</div>
	<input type="text" bind:value={$value} {...$constraints} />
</label>
