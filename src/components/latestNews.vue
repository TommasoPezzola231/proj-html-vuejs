<script>
import cardImg1 from '../assets/h1-blog-img-03.jpg'
import cardImg2 from '../assets/h1-blog-img-04.jpg'
import cardImg3 from '../assets/h1-blog-img-01.jpg'
import cardImg4 from '../assets/h1-blog-img-02.jpg'
import cardImg5 from '../assets/h1-img-02.jpg'
import cardImg6 from '../assets/h1-img-03.jpg'
import cardImg7 from '../assets/h1-img-07.jpg'
import cardImg8 from '../assets/h1-img-08.jpg'
import cardImg9 from '../assets/h1-rev-img-01.jpg'

export default {
    name: "latestNews",
    data() {
        return {
            cardActive: 0,
            cards: [
                {
                    img: cardImg1,
                    title: "Next Investment",
                    text: "lorem ipsum dolor sit amet, consecteur adipiscing elit, sed eius mas tellus dolor",
                    when: "May 5, 2019",
                    who: "Amanda Doe"
                },
                {
                    img: cardImg2,
                    title: "Team Building",
                    text: "lorem ipsum dolor sit amet, consecteur adipiscing elit, sed eius mas tellus dolor",
                    when: "May 5, 2019",
                    who: "Amanda Doe"
                },
                {
                    img: cardImg3,
                    title: "NeW Business Day",
                    text: "lorem ipsum dolor sit amet, consecteur adipiscing elit, sed eius mas tellus dolor",
                    when: "May 5, 2019",
                    who: "Amanda Doe"
                },
                {
                    img: cardImg4,
                    title: "Next Investment",
                    text: "lorem ipsum dolor sit amet, consecteur adipiscing elit, sed eius mas tellus dolor",
                    when: "May 5, 2019",
                    who: "Amanda Doe"
                },
                {
                    img: cardImg5,
                    title: "Next Investment",
                    text: "lorem ipsum dolor sit amet, consecteur adipiscing elit, sed eius mas tellus dolor",
                    when: "May 5, 2019",
                    who: "Amanda Doe"
                },
                {
                    img: cardImg6,
                    title: "Next Investment",
                    text: "lorem ipsum dolor sit amet, consecteur adipiscing elit, sed eius mas tellus dolor",
                    when: "May 5, 2019",
                    who: "Amanda Doe"
                },
                {
                    img: cardImg7,
                    title: "Next Investment",
                    text: "lorem ipsum dolor sit amet, consecteur adipiscing elit, sed eius mas tellus dolor",
                    when: "May 5, 2019",
                    who: "Amanda Doe"
                },
                {
                    img: cardImg8,
                    title: "Next Investment",
                    text: "lorem ipsum dolor sit amet, consecteur adipiscing elit, sed eius mas tellus dolor",
                    when: "May 5, 2019",
                    who: "Amanda Doe"
                },
                {
                    img: cardImg9,
                    title: "Next Investment",
                    text: "lorem ipsum dolor sit amet, consecteur adipiscing elit, sed eius mas tellus dolor",
                    when: "May 5, 2019",
                    who: "Amanda Doe"
                },
            ]
        }
    },
    methods: {
        back() {
            this.cardActive--

            if (this.cardActive < 0) {
                this.cardActive = this.cards.length - 3
            }
        },
        next() {
            this.cardActive++
            if (this.cardActive >= this.cards.length - 2) {
                this.cardActive = 0
            }
        }
    }
}
</script>

<template>
    <section id="latestNews" class="customContainer position-relative">

        <font-awesome-icon icon="fa-solid fa-arrow-right" class="z-3 me-5 position-absolute customPositionR"
            @click="next()" />
        <font-awesome-icon icon="fa-solid fa-arrow-left" class="z-3 ms-5 position-absolute customPositionL"
            @click="back()" />

        <div class="customContainerL">
            <h3>Latest news<span>.</span></h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <hr>


            <div class="carousel d-flex justify-content-between">

                <div class="card">
                    <img :src="cards[cardActive].img">
                    <div class="card-body">
                        <small>
                            <font-awesome-icon icon="fa-regular fa-clock" />
                            <span>{{ cards[cardActive].when }}</span>
                            <font-awesome-icon icon="fa-solid fa-user" />
                            <span>{{ cards[cardActive].who }}</span>
                        </small>
                        <h5>{{ cards[cardActive].title }}</h5>
                        <p>{{ cards[cardActive].text }}</p>
                        <a>READ MORE</a>
                    </div>
                </div>

                <div class="card">
                    <img :src="cards[cardActive + 1].img">
                    <div class="card-body">
                        <small>
                            <font-awesome-icon icon="fa-regular fa-clock" />
                            <span>{{ cards[cardActive + 1].when }}</span>
                            <font-awesome-icon icon="fa-solid fa-user" />
                            <span>{{ cards[cardActive + 1].who }}</span>
                        </small>
                        <h5>{{ cards[cardActive + 1].title }}</h5>
                        <p>{{ cards[cardActive + 1].text }}</p>
                        <a>READ MORE</a>
                    </div>

                </div>

                <div class="card">
                    <img :src="cards[cardActive + 2].img">
                    <div class="card-body">
                        <small>
                            <font-awesome-icon icon="fa-regular fa-clock" />
                            <span>{{ cards[cardActive + 2].when }}</span>
                            <font-awesome-icon icon="fa-solid fa-user" />
                            <span>{{ cards[cardActive + 2].who }}</span>
                        </small>
                        <h5>{{ cards[cardActive + 2].title }}</h5>
                        <p>{{ cards[cardActive + 2].text }}</p>
                        <a>READ MORE</a>
                    </div>

                </div>

            </div>


        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;


#latestNews {

    h3 {
        text-align: center;
        margin-top: 6rem;

        span {
            color: $orangeColor;
        }
    }

    p {
        color: $lightGrayColor;
        text-align: center;
    }

    hr {
        width: 10%;
        margin: 0 auto;
        background-color: $orangeColor;
    }

    .card {
        width: 32%;
        margin-top: 2rem;
        margin-bottom: 5rem;

        svg {
            color: $orangeColor;
        }

        span {
            margin: 0 0.4rem;
            color: $lightGrayColor;
        }

        h5 {
            margin: 1rem 0;
            font-size: 25px;
        }

        p {
            text-align: start;
        }

        a {
            font-weight: bold;
            font-size: 12px;
        }
    }
}
</style>