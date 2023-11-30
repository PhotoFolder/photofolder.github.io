<script lang="ts">
  import type { PageData } from "../$types";

  import PageHead from "$lib/components/PageHead.svelte";
  import Article from "$lib/components/Article.svelte";
  import ArticleTitle from "$lib/components/ArticleTitle.svelte";
  import ArticleMeta from "$lib/components/ArticleMeta.svelte";
  import ArticleDescription from "$lib/components/ArticleDescription.svelte";

  export let data: PageData;
</script>

<PageHead
  title="Home"
  description="An awesome blog about development with Svelte"
/>

<nav>
  <div class=" flex max-w-4xl m-auto items-center">
    <img src="/photofolder-logo.svg" alt="logo" class="w-20 md:w-24" />

    <p class="text-3xl md:text-5xl drop-shadow-lg px-4 font-bold text-[#333]">
      PhotoFolder Blog
    </p>
  </div>
</nav>

{#each data.posts as { slug, title, author, description, date }}
  <Article>
    <ArticleTitle {slug} {title} />
    <ArticleMeta {author} {date} />
    <ArticleDescription {description} {slug} />
  </Article>
{/each}

<slot />
