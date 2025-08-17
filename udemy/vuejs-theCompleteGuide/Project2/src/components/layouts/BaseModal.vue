<template>
    <Teleport to="body">
        <div class="overlay"></div>
        <dialog open>
            <header>
                <slot name="header">
                    <h2>Invalid Data</h2>
                </slot>
                <BaseButton type="button" mode="flat" @click="$emit('closeDialog')">Close</BaseButton>
            </header>
            <p>
                <slot></slot>
            </p>
        </dialog>
    </Teleport>
</template>

<script>
export default {
    emits: ['closeDialog'],
    props: {
        title: {
            type: String,
            required: false
        }
    }
}
</script>

<style scoped>
div.overlay {
    position: absolute;
    background-color: black;
    opacity: 0.6;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
}
dialog {
    position: absolute;
    top: 200px;
    left: 30%;
    width: 40%;
    margin: 0;
}

header {
    display: flex;
    justify-content: space-between;
}
p {
    color: red;
}
</style>