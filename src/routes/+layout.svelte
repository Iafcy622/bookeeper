<script>
    import "@picocss/pico/css/pico.css";
</script>

<svelte:head>
    <title>Bookeeper</title>
</svelte:head>
<main class="container">
    <slot></slot>
</main>

<style>
    .text-green {
        color: #43a047;
    }

    .text-red {
        color: #e53935;
    }
</style>