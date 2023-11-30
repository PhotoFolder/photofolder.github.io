<script lang="ts">
  export let author: string;
  export let date: string;

  const formattedDate = new Date(date).toDateString();
</script>

<p>
  <span class=" text-[#666] font-mono pl-1">{formattedDate}</span>
</p>
