<template>
    <div class="login-main register-main">
        <a href=""><img class="servicefood-logo" src="../../assets/images/Sf-logo-stack.png" alt="Service Foods Logo"
                        title="Service Foods Logo"></a>

        <!--<div class="opening-media">
            <div class="video-wrapper">
                <div class="imageContainer">
                    <video id="homevideo" loop muted autoplay playsinline onloadeddata="this.play();">
                        <source src="https://player.vimeo.com/external/158148793.hd.mp4?s=8e8741dbee251d5c35a759718d4b0976fbf38b6f&profile_id=119&oauth2_token_id=57447761"
                                type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'>
                        <source src="https://player.vimeo.com/external/158148793.hd.mp4?s=8e8741dbee251d5c35a759718d4b0976fbf38b6f&profile_id=119&oauth2_token_id=57447761"
                                type='video/webm; codecs="vp8, vorbis"'/>
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

        <div class="center-block" id="register-block">
            <h1 class="login-title">Welcome to Service Foods Supplier Portal</h1>
            <h6 class="login-sub-title"> Already Registered? <a class="visbybold" href="/">SIGN IN </a></h6>
            <form>
                <div class="row">
                    <input-text name="firstname" id="firstname" size="6" label="First Name"
                                required="true"></input-text>
                    <input-text name="lastname" id="lastname" size="6" label="Last Name"
                                required="true"></input-text>
                    <input-text name="jobtitle" id="jobtitle" size="6" label="Job Title"
                                required="true"></input-text>
                    <input-text name="sfvendorcode" id="sfvendorcode" size="6" label="SF Vendor Code"
                    ></input-text>
                    <input-text name="contactno" id="contactno" size="6" label="Contact Number"
                                required="true"></input-text>
                    <input-text name="officeno" id="officeno" size="6" label="Office Number">
                        <template slot="extra">
                            <div class="ofcnumber-div"><p>Area code followed by number e.g 09 123 4567 </p></div>
                        </template>
                    </input-text>

                    <input-text name="email" id="email" size="12" label="Email"
                                required="true" type="email"></input-text>
                    <input-text name="companyname" id="companyname" size="6" label="Company Name"
                                required="true"></input-text>
                    <div class="col-sm-6">
                        <div class="styled-input">
                            <div class="upload-btn-wrapper">
                                <span class="comp-logo-cls">Company logo</span>
                                <input type="file" name="myfile"/>
                            </div>
                            <div class="file-attachement"><i class="fa fa-paperclip" aria-hidden="true"></i></div>
                        </div>
                    </div>
                    <input-text name="password" id="password" size="6" label="Password"
                                required="true" type="password"></input-text>
                    <input-text name="repassword" id="repassword" size="6" label="Re-Enter Password"
                                required="true" type="password"></input-text>

                    <div class="col-sm-12">
                        <button type="submit" class="btn btn-default login-submit submit-btn"> Send Request </button>
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