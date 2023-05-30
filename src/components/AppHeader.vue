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
            <nav class="d-flex justify-content-around col-4">
                <a v-for="element in navbar">{{ element }}</a>
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