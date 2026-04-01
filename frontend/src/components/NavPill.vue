<script setup lang="ts">
import type { NavPill } from "../types";

const { navPill, selectedIndex } = defineProps<{
	navPill: NavPill;
	selectedIndex: number;
}>();

const emit = defineEmits(["selectPill"]);
</script>
<template>
	<i
		@click="emit('selectPill', navPill.index)"
		:class="[{ active: selectedIndex === navPill.index }, navPill.class]"
		class="nav-pill pi relative text-slate-400 text-2xl p-5"
	></i>
</template>
