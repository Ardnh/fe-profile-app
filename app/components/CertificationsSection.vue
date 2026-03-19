<template>
    <div>
        <p class="font-mono text-[10px] tracking-[0.25em] text-neutral-400 uppercase mb-6 flex items-center gap-3">
            Certs
            <span class="flex-1 h-px bg-neutral-100 dark:bg-neutral-900" />
        </p>
        <ul class="space-y-2.5">
            <li
                v-for="cert in props.certifications"
                :key="cert"
                class="text-[13px] text-neutral-500 dark:text-neutral-400 pl-4 relative leading-snug"
            >
                <span class="absolute left-0 text-neutral-300 dark:text-neutral-700 text-xs">—</span>
                {{ cert }}
            </li>
        </ul>
    </div>
</template>
<script setup lang="ts">
const props = defineProps<{
    certifications: any[]
}>()
</script>