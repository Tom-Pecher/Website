
<template>
  <div>
    <NuxtLayout>
      <Header />
        <ul>
          <li>
            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink to="/projects">Projects</NuxtLink>
            <NuxtLink to="/contacts">Contacts</NuxtLink>
          </li>
        </ul>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
