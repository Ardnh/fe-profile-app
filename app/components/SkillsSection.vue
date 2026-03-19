<template>
    <section class="py-14 border-b border-neutral-100 dark:border-neutral-900">
        <p class="font-mono text-[10px] tracking-[0.25em] text-neutral-400 uppercase mb-10 flex items-center gap-4">
            Skills & Tools
            <span class="flex-1 h-px bg-neutral-100 dark:bg-neutral-900" />
        </p>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-100 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-900">
            <div
                v-for="group in skills"
                :key="group.category"
                class="bg-white dark:bg-neutral-950 p-5"
            >
                <p class="font-mono text-[10px] tracking-[0.18em] text-neutral-400 uppercase mb-3">
                    {{ group.category }}
                </p>
                <div class="flex flex-wrap gap-1.5">
                    <UBadge
                        v-for="item in group.items"
                        :key="item"
                        :label="item"
                        variant="soft"
                        color="neutral"
                        size="sm"
                        class="font-mono text-[11px] rounded-none"
                    />
                </div>
            </div>
        </div>
    </section>
</template>
<script setup lang="ts">
const props = defineProps<{
    skills: any[]
}>()
</script>