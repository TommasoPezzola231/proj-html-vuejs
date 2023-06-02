<script>
export default {
    name: "AppFooter"
}
</script>

<template>
    <footer id="footer">
        <div class="customContainerL py-5 d-flex">

            <div id="about" class="col-3 p-2">
                <h5>About</h5>
                <hr>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, optio maxime rerum quo dicta impedit. Odit
                    ipsam harum voluptatem iure iste, unde ut aperiam esse ipsa culpa qui labore numquam.</p>
                <font-awesome-icon class="me-2" icon="fa-brands fa-linkedin" />
                <font-awesome-icon class="me-2" icon="fa-brands fa-facebook" />
                <font-awesome-icon class="me-2" icon="fa-brands fa-square-twitter" />
            </div>

            <div id="twitter" class="col-3 p-2">
                <h5>Twitter</h5>
                <hr>
                <div class="d-flex">
                    <font-awesome-icon class="me-2" icon="fa-brands fa-twitter" />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente iure quae adipisci, consectetur
                        ducimus itaque deserunt?</p>
                </div>

                <div class="d-flex">
                    <font-awesome-icon class="me-2" icon="fa-brands fa-twitter" />
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente iure quae adipisci, consectetur
                        ducimus itaque deserunt?</p>
                </div>
            </div>

            <div id="links" class="col-3 p-2">
                <h5>Important Links</h5>
                <hr>
                <ul>
                    <li>
                        <a>About Me</a>
                    </li>
                    <li>
                        <a>About Us</a>
                    </li>
                    <li>
                        <a>Languages Packs</a>
                    </li>
                    <li>
                        <a>Become a Coach</a>
                    </li>
                    <li>
                        <a>Monthly Events</a>
                    </li>
                </ul>
            </div>

            <div id="contactMe" class="col-3 p-2">
                <h5>Contact Me</h5>
                <hr>

                <div class="d-flex">
                    <font-awesome-icon class="me-2" icon="fa-solid fa-location-dot" />
                    <p>457 BigBlue Street, NY 10013</p>
                </div>

                <div class="d-flex">
                    <font-awesome-icon class="me-2" icon="fa-solid fa-phone" />
                    <p>(315) 5512-2579</p>
                </div>

                <div class="d-flex">
                    <font-awesome-icon class="me-2" icon="fa-solid fa-envelope" />
                    <p>everald@mikado.com</p>
                </div>

                <div class="d-flex mt-5 border-bottom border-white">
                    <input type="text" class="border-0" placeholder="Your Name">
                    <button>SUBSCRIBE</button>

                </div>
            </div>
        </div>

        <div class="copyright py-3">
            <p class="text-center">
                Copyright Everlead@MikadoThemes
            </p>
        </div>
    </footer>
</template>

<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

#footer {
    background-color: black;
    color: gray;

    svg {
        color: $orangeColor;
    }

    h5 {
        color: white;
    }

    p {
        font-size: 13px;
    }

    hr {
        color: $orangeColor;
        width: 10%;
    }

    ul {
        list-style-type: none;
        padding: 0;
        margin: 0;

        a {
            font-size: 13px;

            &:hover {
                color: white;
                cursor: pointer;
                text-decoration: underline;
            }
        }
    }

    #about {
        svg {
            color: white;

            &:hover {
                color: $orangeColor;
                cursor: pointer;
            }
        }
    }

    #contactMe {

        input {
            background-color: transparent;
            width: 70%;
        }

        button {
            font-size: 13px;
            background-color: transparent;
            color: white;
            border: none;

            &:Hover {
                text-decoration: underline;
            }
        }
    }

    .copyright {
        background-color: $orangeColor;
        color: $lightGrayColor;
        font-size: 12px;

        p {
            margin: 0;
        }
    }

}
</style>