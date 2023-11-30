<script lang="ts">
  import type { PageData } from "../$types";

  import PageHead from "$lib/components/PageHead.svelte";
  import ArticleTitle from "$lib/components/ArticleTitle.svelte";
  import ArticleMeta from "$lib/components/ArticleMeta.svelte";
  import ArticleDescription from "$lib/components/ArticleDescription.svelte";

  export let data: PageData;
</script>

<PageHead
  title="Home"
  description="An awesome blog about development with Svelte"
/>

{#each data.posts as { slug, title, author, description, date }}
  <article class="py-3">
    <ArticleTitle {slug} {title} />
    <ArticleMeta {author} {date} />
    <ArticleDescription {description} {slug} />
  </article>
{/each}

<slot />
