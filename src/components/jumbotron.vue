<script>
import urlImg1 from '../assets/jumbo-1.jpg'
import urlImg2 from '../assets/jumbo-2.png'

export default {
    name: "jumbotron",
    data() {
        return {
            bgImg: [
                { img: urlImg1 },
                { img: urlImg2 }
            ],
            activeBackground: 0,
        }
    },
    methods: {
        back() {
            this.activeBackground--

            if (this.activeBackground < 0) {
                this.activeBackground = this.bgImg.length - 1
            }
        },
        next() {
            this.activeBackground++
            if (this.activeBackground >= this.bgImg.length) {
                this.activeBackground = 0
            }
        }
    }
}
</script>

<template>
    <section id="jumbotron" class=" position-relative">
        <img :src="bgImg[activeBackground].img">
        <font-awesome-icon icon="fa-solid fa-arrow-right" class="z-3 me-5 position-absolute customPositionR"
            @click="next()" />
        <font-awesome-icon icon="fa-solid fa-arrow-left" class="z-3 ms-5 position-absolute customPositionL"
            @click="back()" />

        <div class="customContainer position-absolute top-50 start-0 translate-middle-y ms-3  z-3">
            <div class="customContainerL d-flex align-items-center">
                <span>
                    <h1>Our Team<span>.</span></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis sint tenetur eum obcaecati
                        asperiores odit in atque</p>
                    <button class="btnCustom readMore">
                        <span>Read More</span>
                        <div></div>
                        <font-awesome-icon icon="fa-solid fa-arrow-right" />
                    </button>
                    <button class="ms-3 btnCustom purchase">
                        <span>Purchase</span>
                        <div></div>
                        <font-awesome-icon icon="fa-solid fa-arrow-right" />
                    </button>
                </span>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;


img {
    width: 100%;
    height: calc(100vh - 100px);
}

h1 {
    font-size: 60px;

    span {
        color: $orangeColor;
    }
}

p {
    width: 60%;
    color: $lightGrayColor;
}

.btnCustom {
    border: none;
    padding: 1rem;
    width: 170px;

    span {
        padding: 0.5rem 0;
        margin-right: 0.5rem;
    }

    div {
        transform: rotate(90deg);
        display: inline-block;
        height: 2px;
        width: 30px;
    }

    &:hover div {
        display: none;
    }

}

.readMore {
    background-color: white;
    color: black;

    div {
        background-color: black;
    }
}

.purchase {
    background-color: $orangeColor;
    color: $lightGrayColor;

    div {
        background-color: $lightGrayColor;
    }
}
</style>