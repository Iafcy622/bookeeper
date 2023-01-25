<script>
    export let activated = false;

    const close = () => {
        activated = false;
    }

    const open = () => {
        activated = true;
    }
</script>

<button 
    class="fixed top-0 right-0 w-screen h-screen z-10 bg-stone-500 opacity-40 blur-sm transition-all
    {activated ? 'block' : 'hidden'}"
    on:click={close}
></button>
<section
	class="w-full fixed bottom-0 right-0 rounded-t-2xl border-x-2 border-t-2 py-4 px-6 z-20 h-2/3
    dark:bg-stone-900 border-stone-500
    transition-all {activated ? '' : 'translate-y-full'}"
>
	<slot></slot>
</section>
