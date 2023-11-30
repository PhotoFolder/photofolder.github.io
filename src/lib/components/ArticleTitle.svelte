<script lang="ts">
  export let slug = "";
  export let title: string;

  const id = title
    .toLowerCase()
    .replace(/[^a-zA-Z ]/g, "")
    .replace(/\s/g, "-");

  const href = slug ? `/blog/${slug}` : "#" + id;
</script>

{#if slug}
  <h3
    class="heading text-xl md:text-2xl drop-shadow font-bold text-[#333]"
    class:large={!slug}
    {id}
  >
    <a {href}>
      {title}
    </a>
  </h3>
{:else}
  <h2
    class="heading heading text-2xl md:text-4xl drop-shadow font-bold text-[#333]"
    class:large={!slug}
    {id}
  >
    <a {href}>
      {title}
    </a>
  </h2>
{/if}

<style>
  h2 {
    margin: 0;
  }

  .heading {
    margin: 0;
    font-size: 1.8rem;
  }

  .large {
    margin-top: calc(var(--spacing-unit) * 12);
    font-size: 2.2rem;
  }
</style>
