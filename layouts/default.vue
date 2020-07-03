<template>
  <div class="flex flex-col h-full">
    <div class="flex-auto flex-shrink-0 bg-gray-800">
      <GhAppBar test="APPBAR" />
      <main>
        <Nuxt />
      </main>
    </div>
    <footer class="flex-shrink-0">
      <GhAppFooter test="APPFOOTER" />
    </footer>
  </div>
</template>

<style lang="scss">
  html,
  body,
  #__nuxt,
  #__layout {
    @apply h-full;
  }

  body {
    @apply text-white;
    @apply antialiased;
  }

  *,
  *:before,
  *:after {
    @apply box-border;
    @apply m-0;
  }
</style>
