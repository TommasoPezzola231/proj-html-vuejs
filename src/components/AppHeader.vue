<script>
export default {
    name: "AppHeader",
    props: [
        "navbar"
    ]
}
</script>

<template>
    <header>

        <div class="customContainer d-flex justify-content-between align-items-center">
            <div class="logo d-flex align-items-center">
                <img src="../assets/logo-img-01.png">
            </div>
            <nav class="d-flex justify-content-around col-5">
                <a v-for="element in navbar">{{ element }}</a>
                <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                <font-awesome-icon icon="fa-solid fa-bars" />
            </nav>
        </div>

        <!---------------                                                --------------->
    </header>
</template>

<style lang="scss" scoped>
header {
    div {
        height: 100px;
        background-color: #fdfdfd;
    }

}

.logo {
    img {
        width: 160px;
    }
}
</style>