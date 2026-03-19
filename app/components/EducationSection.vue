<template>
    <div>
        <p class="font-mono text-[10px] tracking-[0.25em] text-neutral-400 uppercase mb-6 flex items-center gap-3">
            Education
            <span class="flex-1 h-px bg-neutral-100 dark:bg-neutral-900" />
        </p>
        <p class="font-mono text-[10px] text-primary-500 uppercase tracking-wider mb-1.5">
            {{ props.education.period }}
        </p>
        <h3 class="font-serif text-lg text-neutral-900 dark:text-neutral-50 mb-1 leading-tight">
            {{ props.education.degree }}
        </h3>
        <p class="text-sm text-neutral-500">
            {{ props.education.school }},<br>{{ props.education.location }}
        </p>
    </div>
</template>
<script setup lang="ts">
const props = defineProps<{
    education: any
}>()
</script>