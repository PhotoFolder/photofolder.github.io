<script lang="ts">
	// import { base } from '$app/paths';

	const CTA_URL = 'https://forms.gle/UPmNKp9FncKYnvcW7';
</script>

<!-- HERO DESKTOP -->
<!-- HERO DESKTOP -->
<!-- HERO DESKTOP -->
<div class="flex max-w-6xl mt-5 m-auto justify-center">
	<div class="mt-10 max-w-xl">
		<h1 class="text-5xl drop-shadow-lg mt-16 px-4 font-bold text-[#333]">
			Prevent lock-in by simply using files
		</h1>
		<p class="text-2xl text-[#444] mt-4 px-4">
			PhotoFolder takes advantage of open formats to give the features of Google/Apple Photos
			without the lock-in
		</p>

		<div class="pl-4 mt-5">
			<a
				href={CTA_URL}
				target="_blank"
				rel="noopener noreferrer"
				class="bg-[#313131] fill-[#f3f3ec] text-[#f3f3ec] inline-flex p-2 px-3 rounded-xl text-2xl items-center shadow-xl bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1489EC] to-[#0569d3]"
			>
				Get Started
			</a>
		</div>
	</div>

	<div class="px-4 max-w-2xl -ml-14">
		<!-- <img src="/landing/hero-image.webp" class=" mt-10 m-auto" alt="example of a plate" /> -->
		<img src="/hero-image.webp" alt="PhotoFolder logo" class=" -mt-20 m-auto h-[700px]" />
	</div>
</div>

<div class=" max-w-2xl mt-5 m-auto text-center">
	<p class="text-3xl drop-shadow-lg text-[#333] mt-4 px-4 font-bold">
		PhotoFolder stores all the information in a regular folder.
	</p>
	<p class="text-3xl drop-shadow-lg text-[#333] mt-4 px-4 font-bold">
		Metadata like location, faces and objects are stored in the file itself, not in a separate
		database.
	</p>
	<p class="text-3xl drop-shadow-lg text-[#333] mt-4 px-4 font-bold">
		You can sync this data with any cloud provider. Or just put it in a USB drive, they are just
		files!
	</p>
	<p class="text-3xl drop-shadow-lg text-[#333] mt-4 px-4 font-bold">
		Ofcourse we are open source, give us a star on Github ⭐️
	</p>
</div>
