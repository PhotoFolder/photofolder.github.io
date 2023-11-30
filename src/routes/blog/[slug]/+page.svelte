<script lang="ts">
  import type { PageData } from "./$types";
  import type { SvelteComponentTyped } from "svelte/internal";
  import { CTA_URL, YOUTUBE_URL } from "$lib/constants";

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

<br />
<br />
<div class="m-auto text-center">
  <a
    href={CTA_URL}
    target="_blank"
    rel="noopener noreferrer"
    class="inline-flex bg-[#313131] !text-[#f3f3ec] !no-underline p-2 px-3 hover:px-4 transition-all rounded-xl text-2xl items-center shadow-xl bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1489EC] to-[#0569d3]"
  >
    Join waitlist
    <img src="/arrow.svg" alt="PhotoFolder logo" class=" ml-2 rounded" />
  </a>
  <br />
  <br />
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
