<template>
    <section class="py-14 border-b border-neutral-100 dark:border-neutral-900">
        <p class="font-mono text-[10px] tracking-[0.25em] text-neutral-400 uppercase mb-10 flex items-center gap-4">
            Work Experience
            <span class="flex-1 h-px bg-neutral-100 dark:bg-neutral-900" />
        </p>
        <div class="space-y-10">
            <div
                v-for="(job, i) in experience"
                :key="i"
                class="grid md:grid-cols-[1fr_120px] gap-x-6 pb-10 border-b border-dashed border-neutral-100 dark:border-neutral-900 last:border-0 last:pb-0"
            >
                <div>
                    <p class="font-mono text-[10px] tracking-[0.15em] text-primary-500 uppercase mb-1">
                        {{ job.company }}
                    </p>
                    <h3 class="font-serif text-[22px] text-neutral-900 dark:text-neutral-50 mb-4">
                        {{ job.title }}
                    </h3>
                    <ul class="space-y-2">
                        <li
                            v-for="(h, j) in job.highlights"
                            :key="j"
                            class="text-sm text-neutral-500 dark:text-neutral-400 pl-5 relative leading-relaxed"
                        >
                            <span class="absolute left-0 text-neutral-300 dark:text-neutral-700 text-xs">—</span>
                            {{ h }}
                        </li>
                    </ul>
                </div>
                <p class="font-mono text-[11px] text-neutral-400 md:text-right order-first md:order-last mb-2 md:mb-0 pt-0.5">
                {{ job.period }}
                </p>
            </div>
        </div>
    </section>      
</template>
<script setup lang="ts">
const props = defineProps<{
    experience: any[]
}>()
</script>