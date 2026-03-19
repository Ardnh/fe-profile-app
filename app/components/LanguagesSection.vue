<template>
    <div>
        <p class="font-mono text-[10px] tracking-[0.25em] text-neutral-400 uppercase mb-6 flex items-center gap-3">
            Languages
            <span class="flex-1 h-px bg-neutral-100 dark:bg-neutral-900" />
        </p>
        <div class="space-y-4">
            <div v-for="lang in props.languages" :key="lang.lang">
                <p class="font-serif text-base text-neutral-900 dark:text-neutral-50">{{ lang.lang }}</p>
                <p class="font-mono text-[11px] text-neutral-400">{{ lang.level }}</p>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
const props = defineProps<{
    languages: any[]
}>()
</script>