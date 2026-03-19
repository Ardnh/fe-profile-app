<template>
    <footer class="py-10">
        <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p class="font-mono text-xs text-neutral-400">
                © {{ new Date().getFullYear() }} Muhammad Ardan Hilal
            </p>
            <div class="flex gap-1">
                <UButton
                    :to="props.github"
                    target="_blank"
                    icon="i-heroicons-code-bracket"
                    variant="ghost"
                    color="neutral"
                    size="xs"
                    class="font-mono text-xs text-neutral-400 hover:text-primary-500"
                >
                GitHub
                </UButton>
                <UButton
                    :to="props.linkedin"
                    target="_blank"
                    icon="i-heroicons-link"
                    variant="ghost"
                    color="neutral"
                    size="xs"
                    class="font-mono text-xs text-neutral-400 hover:text-primary-500"
                >
                LinkedIn
                </UButton>
                <UButton
                    :to="`mailto:${props.email}`"
                    icon="i-heroicons-envelope"
                    variant="ghost"
                    color="neutral"
                    size="xs"
                    class="font-mono text-xs text-neutral-400 hover:text-primary-500"
                >
                Email
                </UButton>
            </div>
        </div>
    </footer>
</template>
<script setup lang="ts">
const props = defineProps<{
    github: string,
    linkedin: string,
    email: string
}>()
</script>