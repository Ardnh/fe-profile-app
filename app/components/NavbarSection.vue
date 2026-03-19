<template>
    <!-- ── NAVBAR ── -->
    <header class="sticky top-0 z-50 bg-white/80 dark:bg-neutral-950/80 backdrop-blur border-b border-neutral-100 dark:border-neutral-900">
        <div class="max-w-3xl mx-auto px-6 h-12 flex items-center justify-between">
            <span class="font-mono text-xs tracking-[0.2em] text-neutral-400 uppercase">
                ardan<span class="text-primary-500">.</span>dev
            </span>
            <div class="flex items-center gap-2">
                <UButton
                    :to="`mailto:${props.email}`"
                    size="xs"
                    color="primary"
                    variant="solid"
                    class="font-mono text-xs rounded-none"
                >
                    Get in touch
                </UButton>
                <UColorModeButton size="xs" variant="ghost" color="neutral" />
            </div>
        </div>
    </header>
</template>
<script setup lang="ts">
const props = defineProps(['email'])
</script>