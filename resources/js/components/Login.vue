<template>
    <div class="login-main">
        <a href=""><img class="servicefood-logo" src="../../assets/images/Sf-logo-stack.png" alt="Service Foods Logo"
                        title="Service Foods Logo"></a>

        <!--<video poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/polina.jpg" id="bgvid" playsinline autoplay muted loop>
            <source src="http://thenewcode.com/assets/videos/polina.webm" type="video/webm">
            <source src="http://thenewcode.com/assets/videos/polina.mp4" type="video/mp4">
        </video>-->

        <!--<div class="opening-media">
            <div class="video-wrapper">
                <div class="imageContainer">
                    <video id="homevideo" loop muted autoplay playsinline onloadeddata="this.play();">
                        <source src="../../assets/video/home-video.mp4" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'>
                        <source src="../../assets/video/home-video.mp4" type='video/webm; codecs="vp8, vorbis"' />
                    </video>
                </div>
            </div>
        </div>-->

        <div class="opening-media">
            <div class="video-wrapper">
                <div class="imageContainer">
                    <video id="homevideo" loop muted autoplay playsinline onloadeddata="this.play();">
                        <source src="https://www.servicefoods.co.nz/upload/slider/home-video.mp4"
                                type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'>
                        <source src="https://www.servicefoods.co.nz/upload/slider/home-video.mp4"
                                type='video/webm; codecs="vp8, vorbis"'/>
                    </video>
                </div>
            </div>
        </div>


        <div class="center-block">
            <h1 class="login-title">Welcome to Service Foods <br> Supplier Portal</h1>
            <h6 class="login-sub-title"> Not Registered? <a class="visbybold" href="register">SIGN UP </a></h6>
            <form>
                <div class="row">
                    <div class="floating-form">
                        <input-text name="email" id="email" size="12" label="Email"
                                    required="true" type="email"></input-text>
                        <input-text name="password" id="password" size="12" label="Password"
                                    required="true" type="password"></input-text>
                    </div>

                    <div class="col-sm-12">
                        <button type="submit" class="btn btn-default login-submit submit-btn"> Sign In </button>
                    </div>
                    <div class="col-sm-5">
                        <div class="cntr">
                            <input class="hidden-xs-up" id="cbx" type="checkbox"/>
                            <label class="cbx" for="cbx"></label>
                            <label class="lbl remember-lbl" for="cbx">Remember Me</label>
                        </div>
                    </div>
                    <div class="col-sm-7">
                        <p class="fsize12"><a>Forgot your username or password?</a></p>
                    </div>

                </div>
            </form>

        </div>
    </div>
</template>
<script>
    import InputText from "../partials/MaterialTextComponent.vue"

    export default {
        components: {
            InputText
        }
    }
</script>
<style lang="scss">


</style>