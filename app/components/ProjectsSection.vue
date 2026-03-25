<template>
    <section class="py-14 border-b border-neutral-100 dark:border-neutral-900">
        <p class="font-mono text-[10px] tracking-[0.25em] text-neutral-400 uppercase mb-10 flex items-center gap-4">
            Selected Projects
            <span class="flex-1 h-px bg-neutral-100 dark:bg-neutral-900" />
        </p>
        <div class="grid sm:grid-cols-2 gap-px bg-neutral-100 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-900">
            <div
                v-for="(project, i) in projects"
                :key="i"
                class="bg-white dark:bg-neutral-950 p-5 group hover:bg-neutral-50 dark:hover:bg-neutral-900/60 transition-colors duration-200"
            >
                <UBadge
                    :label="project.status"
                    variant="soft"
                    color="neutral"
                    size="xs"
                    class="font-mono text-[10px] shrink-0 rounded-none mb-2"
                />
                <div class="flex items-start justify-between gap-3 mb-3">
                    <h3 class="font-serif text-lg text-neutral-900 dark:text-neutral-50 leading-tight group-hover:text-primary-500 transition-colors">
                        {{ project.name }}
                    </h3>
                    <UBadge
                        :label="project.role"
                        variant="soft"
                        color="neutral"
                        size="xs"
                        class="font-mono text-[10px] shrink-0 rounded-none"
                    />
                </div>
                <p class="text-[13px] text-neutral-500 dark:text-neutral-400 leading-relaxed mb-4">
                    {{ project.description }}
                </p>
                <div class="flex justify-between">
                    <div class="flex flex-wrap gap-1.5">
                        <UBadge
                            v-for="tech in project.stack"
                            :key="tech"
                            :label="tech"
                            variant="outline"
                            color="primary"
                            size="xs"
                            class="font-mono text-[10px] rounded-none"
                        />
                    </div>
                    <UDropdownMenu
                        :disabled="!project.project_available_for_public"
                        :items="project.project_info"
                        :ui="{
                            content: 'w-48'
                        }"
                    >
                        <UButton icon="i-lucide-menu" color="neutral" variant="outline" />
                    </UDropdownMenu>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const props = defineProps<{
    projects: any[]
}>()

</script>