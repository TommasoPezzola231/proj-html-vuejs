<script>
import img1 from '../assets/h3-img-04.png'
import img2 from '../assets/h3-img-07.png'
import img3 from '../assets/h3-img-08.png'
import imgVideo from '../assets/h1-img-04.jpg'

export default {
    name: "testimonials",
    data() {
        return {
            activeSlide: 0,
            testimonials: [
                {
                    img: img1,
                    name: "Cynthia Clark",
                    text: `"lorem ipsum dolor sit amet, consecteur adipiscing elit sed eiusmond tempor incididunt ut labore et dolore magna alique"`
                },
                {
                    img: img2,
                    name: "Cynthia Clark",
                    text: `"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero eligendi sint voluptatem molestias, atque suscipit recusandae obcaecati ipsam accusamus amet a officiis reprehenderit! Sunt qui sapiente asperiores autem dicta optio?"`
                },
                {
                    img: img3,
                    name: "Cynthia Clark",
                    text: `"Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quod sint dignissimos. Non omnis quisquam, itaque nam, nemo officia dolorum iusto delectus et soluta suscipit earum alias odit! Dolorem, ut."`
                }
            ],
            imgVideo
        }
    },
    methods: {
        back() {
            this.activeSlide--

            if (this.activeSlide < 0) {
                this.activeSlide = this.testimonials.length - 1
            }
        },
        next() {
            this.activeSlide++
            if (this.activeSlide >= this.testimonials.length) {
                this.activeSlide = 0
            }
        }
    }
}
</script>

<template>
    <section id="testimonials">
        <span class="position-absolute">Testimonials.</span>

        <div class="customContainer position-relative">

            <font-awesome-icon icon="fa-solid fa-arrow-right" class="z-3 me-5 position-absolute customPositionR"
                @click="next()" />
            <font-awesome-icon icon="fa-solid fa-arrow-left" class="z-3 ms-5 position-absolute customPositionL"
                @click="back()" />



            <div class="customContainerL">

                <div class="carousel d-flex justify-content-center align-items-center">
                    <span>
                        <img :src="testimonials[activeSlide].img">
                        <h5>{{ testimonials[activeSlide].name }}</h5>
                        <p>{{ testimonials[activeSlide].text }}</p>
                    </span>

                    <span class="position-absolute bottom-0 start-50 translate-middle-x">
                        <button @click="activeSlide = 0" :class="(activeSlide == 0) ? `selected` : ``"></button>
                        <button @click="activeSlide = 1" :class="(activeSlide == 1) ? `selected` : ``"></button>
                        <button @click="activeSlide = 2" :class="(activeSlide == 2) ? `selected` : ``"></button>
                    </span>

                </div>

            </div>
        </div>

    </section>

    <section id="video">
        <div class="position-relative video">
            <img class="" :src="imgVideo">
            <font-awesome-icon icon="fa-solid fa-play"
                class="playVideo position-absolute top-50 start-50 translate-middle" />
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

#testimonials {
    background-color: #1e1c1c;
    color: #181515;
    height: 600px;

    >span {
        font-size: 260px;
        text-align: center;
    }

    svg {
        color: white;
    }

    button {
        padding: 0.1rem 1rem;
        margin-bottom: 3rem;
        background-color: gray;
    }

    .selected {
        background-color: $lightGrayColor;
    }

    .carousel {
        color: $lightGrayColor;
        text-align: center;
        height: 600px;

        h5 {
            color: white;
            margin: 1rem 0;
        }

        p {
            max-width: 70%;
            margin: 0 auto;
        }

    }

}

#video {
    .video {
        height: 100vh;
        width: 100%;
        max-width: 100%;

        img {
            width: 100%;
            height: 100%;
        }
    }

    .playVideo {
        color: white;
        font-size: 50px;
        cursor: pointer;

        &:hover {
            color: $lightGrayColor;
        }
    }

}
</style>