<script setup lang="ts">
	definePageMeta({
		layout: 'landing'
	})

	const search = ref('')
</script>

<template>
	<section class="flex sm:py-24 py-14 sm:h-[calc(100vh-90px)] items-center hero relative">
		<div class="bg-primary-500/50 w-[100px] h-[100px] md:w-[400px] md:h-[400px] rounded-full blur-[50px] md:blur-[200px] absolute right-0 top-10" />
		<div class="bg-secondary-500/50 w-[100px] h-[100px] md:w-[400px] md:h-[400px] rounded-full blur-[50px] md:blur-[200px] absolute bottom-0 left-10" />

		<div class="container mx-auto text-center z-10">
			<h2 class="text-5xl font-bold mb-5">Blogs</h2>
			<div class="max-w-4xl mx-auto">
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In magni consequatur, ullam animi excepturi, alias veniam optio officiis fuga, exercitationem reprehenderit non repellendus cupiditate ab veritatis quia eum. Repellat, corporis.</p>
				<VInput 
					shadow 
					wrapper-class="my-5"
					class="border-0 !text-sm" 
					placeholder="Find your favorite to read"
					input-class="px-4"
					v-model="search" 
					prepend-icon="material-symbols:search-rounded"
				/>
				<p class="text-xs text-gray-400">Or click your favorite tag</p>
				<BlogCategories />
			</div>
		</div>
	</section>
</template>