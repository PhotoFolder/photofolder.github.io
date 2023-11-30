<script lang="ts">
  import type { LayoutData } from "./$types";

  export let data: LayoutData;
</script>

<div class=" min-h-[80vh]">
  <nav>
    <a
      href="/blog"
      class=" flex max-w-[75ch] m-auto items-center cursor-pointer"
    >
      <img src="/photofolder-logo.svg" alt="logo" class="w-20 md:w-24" />

      <p class="text-3xl md:text-4xl drop-shadow-lg pl-2 font-bold text-[#333]">
        PhotoFolder
      </p>
      <p class="text-3xl md:text-4xl drop-shadow-lg pl-2 text-[#555]">Blog</p>
    </a>
  </nav>

  <div class=" min-h-screen">
    <div class="max-w-[75ch] m-auto items-center p-3">
      <slot />
    </div>
  </div>
</div>

<img src="/bottom-images.webp" alt="images stack" class="w-full" />
