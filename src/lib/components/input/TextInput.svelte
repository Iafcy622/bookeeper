<script>
	import PopupInput from "$lib/components/input/PopupInput.svelte";

    export let activated = false;
    export let description;
</script>

<PopupInput activated={activated} on:closePopup on:done>
    <h2 class="text-xl mb-3">Description</h2>
    <!-- <input 
        type="text" bind:value={description} placeholder="Enter some details here."
        class="dark:bg-stone-900 border-b w-full"
    > -->
    <textarea 
        name="description" id="description_input"
        class="dark:bg-stone-900 border-b w-full overflow-auto"
        rows="10"
        bind:value={description}
    ></textarea>
    <!-- https://stackoverflow.com/questions/17772260/textarea-auto-height -->
</PopupInput>