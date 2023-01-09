<template>
    <nav>
        <NuxtLink to="/">
            <img src="/favicon.png" alt="favicon" />
        </NuxtLink>

        <div>
            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink to="/about">About</NuxtLink>
            <NuxtLink to="/contact">Contact</NuxtLink>
        </div>
    </nav>
</template>

<style scoped lang="scss">
nav {
    display:  flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin: 2px auto;
    padding: 5px;

    div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 5px;
    }
}
</style>
