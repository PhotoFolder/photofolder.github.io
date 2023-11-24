<script lang="ts">
	const RELEASE_VERSION = '1.0.0-rc.3';
	const RELEASE_LINK_MAC = `releases/PhotoFolder-${RELEASE_VERSION}.dmg`;
	const RELEASE_LINK_WINDOWS = `#`;
	const RELEASE_LINK_LINUX = `#`;
</script>

<div class="  flex flex-col justify-between">
	<div class="px-4">
		<!-- <img src="/landing/hero-image.webp" class=" mt-10 m-auto" alt="example of a plate" /> -->
		<img
			src="/hero-image-5.webp"
			alt="PhotoFolder logo"
			class="-mt-[6rem] md:-mt-32 m-auto w-[600px]"
		/>
	</div>
	<h1 class="font-bold text-[#444] text-4xl text-center my-8">
		PhotoFolder <span
			class="font-bold text-[#e89b03] fill-[#fcb322] border-[#fcb322ca] px-3 pb-1 rounded-full inline-flex items-center border-2"
		>
			Beta

			<svg
				class="inline ml-2 h-8"
				xmlns="http://www.w3.org/2000/svg"
				height="1em"
				viewBox="0 0 448 512"
				><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path
					d="M288 0H160 128C110.3 0 96 14.3 96 32s14.3 32 32 32V196.8c0 11.8-3.3 23.5-9.5 33.5L10.3 406.2C3.6 417.2 0 429.7 0 442.6C0 480.9 31.1 512 69.4 512H378.6c38.3 0 69.4-31.1 69.4-69.4c0-12.8-3.6-25.4-10.3-36.4L329.5 230.4c-6.2-10.1-9.5-21.7-9.5-33.5V64c17.7 0 32-14.3 32-32s-14.3-32-32-32H288zM192 196.8V64h64V196.8c0 23.7 6.6 46.9 19 67.1L309.5 320h-171L173 263.9c12.4-20.2 19-43.4 19-67.1z"
				/></svg
			>
		</span>
	</h1>
	<p class="max-w-sm text-center m-auto text-[#444] text-lg">
		Thanks for giving PhotoFolder a try! <br /> If you have anything to say you can gives us
		feedback

		<a class="underline text-[#0766E0]" href="https://forms.gle/UjkHgSa8a7335icQ7">here</a>.
	</p>
	<br />
	<div class="text-[#444] max-w-sm m-auto text-lg">
		<h2>Instructions on how to install:</h2>
		<p class="ml-4">1. Open the dmg file</p>
		<p class="ml-4">2. Drag PhotoFolder in Applications</p>
		<p class="ml-4">
			3. <span class="font-bold">Rigth click</span> on the PhotoFolder icon in the applications folder
		</p>
		<p class="ml-4">4. Click in "open"</p>
		<p class="ml-4">5. And "Open" again</p>
	</div>
	<div class="flex flex-col items-center mt-12 gap-3">
		<a
			class="inline-flex bg-[#313131] text-[#f3f3ec] p-2 px-3 hover:px-4 transition-all rounded-xl text-2xl items-center shadow-xl bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1489EC] to-[#0569d3]"
			href={RELEASE_LINK_MAC}>Download for Mac </a
		>
		<p class="text-[#777] -mt-2 italic">intel/silicon</p>
		<p class="text-[#555555] mt-7 italic">comming very very soon:</p>
		<div
			class="inline-flex bg-[#fff] text-[#646464] border-2 border-[#7f7f7f] border-dashed p-2 px-3 rounded-xl text-2xl items-center cursor-progress"
		>
			Download for Windows
		</div>
		<div
			class="inline-flex bg-[#fff] text-[#646464] border-2 border-[#7f7f7f] border-dashed p-2 px-3 rounded-xl text-2xl items-center cursor-progress"
		>
			Download for Linux
		</div>
		<p class="text-[#555555] mt-8 italic">comming not so soon:</p>
		<div
			class="inline-flex bg-[#fff] text-[#646464] border-2 border-[#7f7f7f] border-dashed p-2 px-3 rounded-xl text-2xl items-center cursor-progress"
		>
			iOS App
		</div>
		<div
			class="inline-flex bg-[#fff] text-[#646464] border-2 border-[#7f7f7f] border-dashed p-2 px-3 rounded-xl text-2xl items-center cursor-progress"
		>
			Android App
		</div>
	</div>

	<img src="/bottom-images.webp" alt="images stack" class="w-full" />
</div>
