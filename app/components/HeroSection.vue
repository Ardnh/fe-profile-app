<template>
    <!-- ── HERO ── -->
    <section class="pt-20 pb-16 border-b border-neutral-100 dark:border-neutral-900">
        <p class="font-mono text-[11px] tracking-[0.2em] text-primary-500 uppercase mb-5">
            Available for opportunities
        </p>
        <h1 class="font-serif text-5xl md:text-[68px] leading-[1.02] tracking-tight mb-3 text-neutral-900 dark:text-neutral-50">
            {{ props.name.split(' ').slice(0, 2).join(' ') }}<br>
            <em class="italic text-primary-500">{{ props.name.split(' ').slice(2).join(' ') }}</em>
        </h1>
        <p class="font-mono text-[11px] tracking-[0.15em] text-neutral-400 uppercase mb-7">
            {{ props.role }} · {{ props.location }}
        </p>
        <p class="text-neutral-500 dark:text-neutral-400 text-[15px] leading-[1.8] max-w-lg mb-8">
            {{ props.summary }}
        </p>
        <div class="flex flex-wrap gap-2">
        <UButton
            :to="`mailto:${props.email}`"
            icon="i-heroicons-envelope"
            variant="ghost"
            color="neutral"
            size="sm"
            class="font-mono text-xs text-neutral-400 hover:text-primary-500 rounded-none"
        >
            {{ props.email }}
        </UButton>
        <UButton
            :to="props.github"
            target="_blank"
            icon="i-heroicons-code-bracket"
            variant="ghost"
            color="neutral"
            size="sm"
            class="font-mono text-xs text-neutral-400 hover:text-primary-500 rounded-none"
        >
            github.com/Ardnh
        </UButton>
        <UButton
            :to="props.linkedin"
            target="_blank"
            icon="i-heroicons-link"
            variant="ghost"
            color="neutral"
            size="sm"
            class="font-mono text-xs text-neutral-400 hover:text-primary-500 rounded-none"
        >
            linkedin.com/in/ardnh
        </UButton>
        </div>
    </section>
</template>

<script setup lang="ts">
const props = defineProps<{
    name: string
    role: string
    location: string
    summary: string
    email: string
    github: string
    linkedin: string
}>()
</script>