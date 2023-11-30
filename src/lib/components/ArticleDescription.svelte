<script lang="ts">
  export let description: string;
  export let slug = "";

  const href = slug && `/blog/${slug}`;
</script>

<p class="max-w-xl text-lg text-[#333]">
  {description}

  {#if slug}
    <br />
    <a class="font-mono text-[#666]" {href}>Read More &rarr;</a>
  {/if}
</p>
