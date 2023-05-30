<script>
import svg0 from "../assets/svg-0.svg"
import svg1 from "../assets/svg-1.svg"
import svg2 from "../assets/svg-2.svg"
import svg3 from "../assets/svg-3.svg"
export default {
    name: "ourSpecialties",
    data() {
        return {
            specialties: [{
                img: svg0,
                title: "knowing",
                text: "Lorem ipsum dolor sit amet, quis consect"
            },
            {
                img: svg1,
                title: "Selling",
                text: "Lorem ipsum dolor sit amet, quis consect"
            },
            {
                img: svg2,
                title: "Learning",
                text: "Lorem ipsum dolor sit amet, quis consect"
            },
            {
                img: svg3,
                title: "Contact",
                text: "Lorem ipsum dolor sit amet, quis consect"
            }]
        }
    }
}
</script>

<template>
    <section>
        <div class="customContainer bg-white px-5 py-5">
            <h3 class="text-center">Our specialties<span>.</span></h3>
            <h6 class="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h6>
            <hr class="mx-auto">
            <div class="col-10 mx-auto d-flex justify-content-around my-5">
                <template v-for="specialty in specialties">

                    <div class="col-2 text-center">
                        <img :src="specialty.img">
                        <h5 class="mt-2">{{ specialty.title }}</h5>
                        <small>{{ specialty.text }}</small>
                    </div>

                </template>
            </div>
        </div>
    </section>

    <section>
        <div class="customContainer d-flex align-items-center p-5">
            <div class="col-6 p-5">
                <img src="../assets/h1-img-01.jpg">
            </div>
            <div class="col-6 py-5 px-3 bg-white customCard">
                <h3>Jason Bickford</h3>
                <small>Founder and executive Director</small>
                <hr>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ad itaque, nesciunt, modi explicabo
                    impedit voluptatum exercitatione</p>
                <font-awesome-icon icon="fa-brands fa-linkedin" />
                <font-awesome-icon icon="fa-brands fa-facebook" />
                <font-awesome-icon icon="fa-brands fa-square-twitter" />

            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

h3 {
    >span {
        color: $orangeColor;
    }
}

small,
h6 {
    color: $lightGrayColor
}

img {
    width: 100%;
}

.customCard {
    margin-left: -9rem
}

hr {
    width: 10%;
    color: $orangeColor;
}

svg {
    color: $orangeColor;
    margin: 0.5rem;
    font-size: 20px;
    cursor: pointer;

    &:hover {
        color: black;
    }
}

section:last-child {
    background-image: url(../assets/svg-4.svg);
    background-repeat: no-repeat;
    background-position: right;
}
</style>