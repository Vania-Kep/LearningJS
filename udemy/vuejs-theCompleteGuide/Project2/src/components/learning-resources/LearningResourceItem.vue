<script>

export default {
    props: ['title', 'id', 'description', 'link'],
    inject: ['deleteResource']
}
</script>

<template>
    <li>
        <BaseCard>
            <header>
                <h3>{{ title }}</h3>{{ id }}
                <BaseButton type="button" mode="flat" @click="deleteResource(id)">Delete</BaseButton>
            </header>
            <p>{{ description }}</p>
            <nav>
                <a :href="link">Go To {{ title }}</a>
            </nav>
        </BaseCard>
    </li>
</template>

<style scoped>
li {
  margin: auto;
  max-width: 40rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: #ce5c00;
}

a:hover,
a:active {
  color: #c89300;
}
</style>