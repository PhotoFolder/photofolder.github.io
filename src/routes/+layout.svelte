<script lang="ts">
  import { page } from "$app/stores";
  import "../app.css";
</script>

<main>
  <slot />
</main>

<!-- <footer>
	<img src="/bottom-images.webp" alt="images stack" class="w-full -mt-24" />
</footer> -->

<style>
  :global(:root) {
    --spacing-unit: 4px;
    --color-background: #e5e5e5;
    --color-text-primary: #212121;
    --color-text-secondary: #5a5a5a;
  }

  :global(a, a:visited, a:active) {
    text-decoration: none;
    color: var(--color-text-primary);
  }

  :global(a:hover) {
    text-decoration: underline;
  }
</style>
