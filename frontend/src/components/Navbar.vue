<script setup lang="ts">
import { nextTick, ref } from "vue";
import { navPills } from "../data/navPills";
import NavPill from "./NavPill.vue";

const selected = ref(0);
const isAnimating = ref(false);

function selectPill(index: number) {
	if (isAnimating.value == true) {
		return;
	}

	selected.value = index;

	isAnimating.value = false;

	nextTick(() => {
		isAnimating.value = true;
	});
}
</script>

<template>
	<div
		class="nav bg-slate-800 w-full rounded-t-4xl flex items-center justify-between p-5 before:bg-slate-700 before:absolute before:rounded-3xl before:transition-all"
		:class="{ animate: isAnimating }"
		@animationend="isAnimating = false"
	>
		<NavPill
			@select-pill="selectPill"
			v-for="navPill in navPills"
			:navPill="navPill"
			:selectedIndex="selected"
		></NavPill>
	</div>
</template>
