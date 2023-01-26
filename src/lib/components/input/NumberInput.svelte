<script>
	import PopupInput from "$lib/components/input/PopupInput.svelte";

    export let activated = false;
</script>

<PopupInput activated={activated} on:closePopup on:done>
    
</PopupInput>