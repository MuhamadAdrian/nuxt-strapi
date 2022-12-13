<script setup lang="ts">
import { Strapi4ResponseMany, Strapi4RequestParams } from '@nuxtjs/strapi/dist/runtime/types'
import { Category } from '~/types'

const { find } = useStrapi4()

const params = reactive<Strapi4RequestParams>({
	pagination: {
		start: 0,
		limit: 3
	}
})

const { data: categories, pending, error } = await useLazyAsyncData(
	'categories',
	() => find<Strapi4ResponseMany<Category>>('categories', {
		...params
	})
)
</script>

<template>
	<div>
		<div v-if="pending" class="flex items-center justify-center gap-2 mt-5">
			<VShimmer :lines="5" :height="25" />
		</div>
		<div v-else-if="error">
			<VAlert color="warning">
				{{ error.message }}
			</VAlert>
		</div>
		<div v-else class="flex items-center justify-center gap-2 mt-5">
			<VBadge v-for="category in categories?.data">
				#{{ category.attributes.name.toLowerCase() }}
			</VBadge>
		</div>
	</div>
</template>

<style>
:root{
	--shimmer-border-radius: 5px;
}
</style>