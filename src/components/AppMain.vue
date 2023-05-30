<script>
import ourSpecialties from './ourSpecialties.vue'

export default {
    name: "AppMain",
    components: {
        ourSpecialties
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
            ]
        }
    }
}
</script>

<template>
    <ourSpecialties />

    <section id="upcomingEvents" class="d-flex align-items-center p-5">
        <div class="col-3 p-3 bg-white text-dark ms-5">
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
    </section>
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
</style>