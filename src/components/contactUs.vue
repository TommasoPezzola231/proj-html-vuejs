<script>
import mapImg from '../assets/h1-contact-rev-01.png'
import point from '../assets/h1-contact-rev-02.png'
import logo1 from '../assets/h4-clients-img-03.png'
import logo1Hover from '../assets/h4-clients-img-04-1.png'
import logo2 from '../assets/h4-clients-img-05.png'
import logo2Hover from '../assets/h4-clients-img-06-1.png'
import logo3 from '../assets/h4-clients-img-07.png'
import logo3Hover from '../assets/h4-clients-img-08-1.png'
import logo4 from '../assets/h4-clients-img-09.png'
import logo4Hover from '../assets/h4-clients-img-10-1.png'
import logo5 from '../assets/h4-clients-img-01.png'
import logo5Hover from '../assets/h4-clients-img-02.png'
export default {
    name: "contactUs",
    data() {
        return {
            mapImg,
            point,
            logos: [
                {
                    img: logo1,
                    imgHover: logo1Hover,
                    hover: false,
                },
                {
                    img: logo2,
                    imgHover: logo2Hover,
                    hover: false,
                },
                {
                    img: logo3,
                    imgHover: logo3Hover,
                    hover: false,
                },
                {
                    img: logo4,
                    imgHover: logo4Hover,
                    hover: false,
                },
                {
                    img: logo5,
                    imgHover: logo5Hover,
                    hover: false,
                },
            ]
        }
    }
}
</script>

<template>
    <section id="contacts">
        <div class="customContainerL d-flex">
            <div class="col-6 position-relative pe-3">
                <img class="map" :src="mapImg">

                <img id="point1" :src="point" class="position-absolute">
                <img id="point2" :src="point" class="position-absolute">
                <img id="point3" :src="point" class="position-absolute">

                <div class="position-absolute p-3 post">
                    <h5>New York Coaching</h5>
                    <small>READ MORE</small>
                </div>
            </div>
            <div class="col-6 ps-3">
                <h3>Contact Us<span>.</span></h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                <hr>

                <form>
                    <div class="d-flex">
                        <div class="col-6 p-1">
                            <input class="border-0 border-bottom border-secondary" type="text" placeholder="Your Name">
                        </div>

                        <div class="col-6 p-1">
                            <input class="border-0 border-bottom border-secondary" type="email" placeholder="Your Email">
                        </div>
                    </div>

                    <div class="col-12 p-1 mt-3">
                        <textarea class="border-0 border-bottom border-secondary"
                            placeholder="Write a Message.."></textarea>
                    </div>

                    <div>
                        <button class="ms-3 btnCustom send">
                            <span>Send</span>
                            <div></div>
                            <font-awesome-icon icon="fa-solid fa-arrow-right" />
                        </button>
                    </div>
                </form>

            </div>
        </div>

        <div class="logos d-flex justify-content-between align-items-center my-5 customContainerL">
            <template v-for="logo in logos">
                <div class="p-3">
                    <img @mouseover="logo.hover = true" @mouseleave="logo.hover = false"
                        :src="(logo.hover) ? logo.imgHover : logo.img">
                </div>
            </template>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

#contacts {
    background-color: #FAFAFA;
    padding: 4rem 0;

    .map {
        width: 100%;
    }

    h3 {
        font-size: 40px;

        span {
            color: $orangeColor;
        }
    }

    p {
        color: $lightGrayColor;
    }

    hr {
        color: $orangeColor;
        width: 10%;
    }

    input {
        background-color: #FAFAFA;
        width: 100%;
    }

    textarea {
        background-color: #FAFAFA;
        width: 100%;
        height: 100px;
    }

    .send {
        background-color: $orangeColor;
        color: $lightGrayColor;

        div {
            background-color: $lightGrayColor;
        }
    }

    #point1 {
        left: 25%;
        top: 25%;
    }

    #point2 {
        left: 50%;
        top: 15%;
    }

    #point3 {
        right: 15%;
        bottom: 35%;
    }

    .post {
        background-color: white;
        top: 35%;
        left: 25%;
        -webkit-box-shadow: 0px 6px 20px 1px rgba(0, 0, 0, 0.33);
        box-shadow: 0px 6px 20px 1px rgba(0, 0, 0, 0.33);

        h5 {
            margin-bottom: 0;
        }

        small {
            font-size: 13px;
            font-weight: bold;
        }
    }

}
</style>