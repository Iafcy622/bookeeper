<script>
    export let title;
    export let subtitle;
</script>

<article>
    <h3>{ title }</h3>
    <h4>{ subtitle }</h4>
    <slot></slot>
</article>

<style>
    article {
        margin-top: 12px;
        margin-bottom: 12px;
        padding: 24px 32px;
        border-radius: 24px;
    }

    h3 {
        margin-bottom: 0.5rem;
    }

    h4 {
        margin-bottom: 0;
        font-weight: normal;
    }
</style>