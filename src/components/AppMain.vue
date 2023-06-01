<script>
import ourSpecialties from './ourSpecialties.vue'
import latestNews from './latestNews.vue'

export default {
    name: "AppMain",
    components: {
        ourSpecialties,
        latestNews
    },
    data() {
        return {
            events: [
                {
                    day: "07",
                    month: "Jan",
                    year: "2022",
                    title: "Melbourne Coaching",
                    time: "9:00 am - 5:00 pm",
                    where: "Cambridge, MA 02138, USA"
                },
                {
                    day: "11",
                    month: "Jan",
                    year: "2022",
                    title: "New York Coaching",
                    time: "9:00 am - 5:00 pm",
                    where: "Cambridge, MA 02138, USA"
                },
                {
                    day: "21",
                    month: "Jan",
                    year: "2022",
                    title: "London Coaching",
                    time: "9:00 am - 5:00 pm",
                    where: "Cambridge, MA 02138, USA"
                }
            ],
        }
    }
}
</script>

<template>
    <!------------Our Specialties Section------------------->
    <ourSpecialties />

    <section id="upcomingEvents" class="d-flex align-items-center p-5">
        <div class="customContainerL">

            <!-----------Sezione Upcoming Events--------------->
            <div class="col-4 p-3 bg-white text-dark">
                <h5>Upcoming Events</h5>

                <div v-for="event in events" class="scheduled d-flex pt-4">

                    <span class="col-3 text-center data">
                        <h6>{{ event.day }}</h6>
                        <div>{{ event.month }}{{ event.year }}</div>
                    </span>

                    <span class="col ms-3">
                        <h6>{{ event.title }}</h6>
                        <div>
                            <font-awesome-icon icon="fa-regular fa-clock" />
                            {{ event.time }} {{ event.month }} {{ event.day }}, {{ event.year }}
                        </div>
                        <div>
                            <font-awesome-icon icon="fa-solid fa-location-dot" />
                            {{ event.where }}
                        </div>
                        <p>READ MORE</p>
                    </span>
                </div>
            </div>

        </div>
    </section>

    <section id="creativeLeader">
        <div class="customContainerL">
            <div class="d-flex my-5">

                <div class="col-6">
                    <h3>Creative Leader<span>.</span></h3>
                    <hr>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam obcaecati laborum soluta molestias?
                        Deleniti, soluta minima nobis libero et accusamus, pariatur atque dolor cumque ipsam quaerat omnis
                        hic optio. Aliquid.</p>
                    <small>READ MORE</small>

                </div>

                <div class="col-6">

                    <div class="d-flex justify-content-between">
                        <h5>Mentorship</h5>
                        <h5>78%</h5>
                    </div>

                    <div class="progress">
                        <div class="progress-bar" style="width: 78%"></div>
                    </div>

                    <div class="d-flex justify-content-between">
                        <h5>Education</h5>
                        <h5>95%</h5>
                    </div>

                    <div class="progress">
                        <div class="progress-bar" style="width: 95%"></div>
                    </div>

                    <div class="d-flex justify-content-between">
                        <h5>Learning</h5>
                        <h5>65%</h5>
                    </div>

                    <div class="progress">
                        <div class="progress-bar" style="width: 65%"></div>
                    </div>

                    <div class="d-flex justify-content-between">
                        <h5>Motivation</h5>
                        <h5>83%</h5>
                    </div>

                    <div class="progress">
                        <div class="progress-bar" style="width: 83%"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <latestNews />
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

section#upcomingEvents {
    background-image: url(../assets/h1-img-09.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    height: 100vh;
}

.scheduled {
    border-top: 1px solid lightgray;

    h6 {
        font-weight: bold;
    }

    div {
        color: $lightGrayColor;
        font-size: 13px;

        svg {
            color: $orangeColor;
        }
    }

    p {
        font-size: 11px;
        font-weight: bold;
        margin-top: 1rem;
    }
}

.data {
    height: fit-content;
    background-color: $orangeColor;
    color: white;
}


#creativeLeader {
    background-color: white;

    h3 {
        >span {
            color: $orangeColor;
        }
    }

    p {
        color: $lightGrayColor;
    }

    hr {
        width: 10%;
        color: $orangeColor;
    }

    small {
        font-size: 11px;
        font-weight: bold;
        margin-top: 1rem;
    }

    .progress {
        height: 5px;
        margin-bottom: 2rem;

        .progress-bar {
            background-color: $orangeColor;
        }
    }
}
</style>