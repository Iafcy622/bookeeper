<script>
	import PopupInput from "$lib/components/input/PopupInput.svelte";

    export let activated = false;
</script>

<PopupInput activated={activated}>
    <h2>Amount</h2>
    <h3>$ 0.00</h3>
</PopupInput>