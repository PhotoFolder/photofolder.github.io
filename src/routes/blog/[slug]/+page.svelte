<script lang="ts">
  import type { PageData } from "./$types";
  import type { SvelteComponentTyped } from "svelte/internal";

  import PageHead from "$lib/components/PageHead.svelte";
  import ArticleTitle from "$lib/components/ArticleTitle.svelte";
  import ArticleMeta from "$lib/components/ArticleMeta.svelte";

  export let data: PageData;

  type C = $$Generic<typeof SvelteComponentTyped<any, any, any>>;
  $: component = data.component as unknown as C;
</script>

<PageHead
  title={data.frontmatter.title}
  description={data.frontmatter.description}
/>
<ArticleTitle title={data.frontmatter.title} />
<ArticleMeta author={data.frontmatter.author} date={data.frontmatter.date} />

<div class="article-body">
  <svelte:component this={component} />
</div>

<style>
  .article-body {
    color: var(--color-text-primary);
    line-height: 1.51;
    font-size: 20px;
  }

  :global(.article-body h3) {
    font-size: 1.5rem;
    font-weight: 700 !important;
    margin-top: calc(var(--spacing-unit) * 8);
    margin-bottom: calc(var(--spacing-unit) * 4);
  }

  footer {
    margin-top: calc(var(--spacing-unit) * 8);
  }
</style>
