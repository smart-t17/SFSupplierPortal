<template>
    <div class="main-container">
        <!-- Header -->
        <app-header></app-header>
        <!-- Header End -->

        <!-- Main -->
        <div class="main-content">
            <div class="container-fluid p-0">
                <div class="myprofile-div">

                    <div class="myprofile-main main-div gray-bg">
                        <div class="row m-0">
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 item-box">
                                <input-text-block type="text" inputlabel="First Name" name="" id=""
                                                  inputClass="input-textbox" placeholder=""></input-text-block>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 item-box">
                                <input-text-block type="text" inputlabel="Last Name" name="" id=""
                                                  inputClass="input-textbox"
                                                  placeholder=""></input-text-block>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 item-box">
                                <input-text-block type="text" inputlabel="Job Title" name="" id=""
                                                  inputClass="input-textbox" placeholder=""></input-text-block>
                            </div>
                        </div>
                        <div class="row m-0 mt30">
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 item-box">
                                <input-text-block type="text" inputlabel="Company Name" name="" id=""
                                                  inputClass="input-textbox" placeholder=""></input-text-block>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 item-box">
                                <input-text-block type="text" inputlabel="SF Vendor Code" name="" id=""
                                                  inputClass="input-textbox"
                                                  placeholder=""></input-text-block>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 item-box">
                                <!--<input-text-block type="text" inputlabel="Company Logo" name="" id=""
                                                  inputClass="input-textbox" placeholder=""></input-text-block>-->

                                <div class="file-input">
                                    <div class="upload-btn-wrapper ">
                                        <div class="input-label"><label>Company Logo</label></div>
                                        <div class="input-textbox-div">
                                            <input class="input-textbox" type="file" name="" id="" placeholder=""
                                                   multiple>
                                            <div class="file-attachement">
                                                <i aria-hidden="true" class="fa fa-edit"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="row m-0 mt30">
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 item-box">
                                <input-text-block type="email" inputlabel="Email" name="" id=""
                                                  inputClass="input-textbox" placeholder=""></input-text-block>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 item-box">
                                <input-text-block type="text" inputlabel="Contact Number" name="" id=""
                                                  inputClass="input-textbox"
                                                  placeholder=""></input-text-block>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 item-box">
                                <input-text-block type="text" inputlabel="Office Number" name="" id=""
                                                  inputClass="input-textbox" placeholder=""></input-text-block>
                            </div>
                        </div>

                        <div class="row m-0 mt30">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 item-box">
                                <a class="btn mt1 mb1 green-bg mr15">Save</a>
                                <a class="btn mt1 mb1">Discard</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <!-- Main End -->

        <!-- Footer -->
        <app-footer></app-footer>
        <!-- Footer End -->


    </div>
</template>
<script>
    import AppHeader from '../components/Header.vue'
    import AppFooter from '../components/Footer.vue'
    import InputTextBlock from '../partials/InputTextBlock.vue'
    import SelectBox from '../partials/SelectBox.vue'

    export default {
        data() {
            return {
                dropdwnOptions: [
                    {label: 'Option1', value: '1'},
                    {label: 'Option2', value: '2'},
                    {label: 'Option3', value: '3'},
                ]
            }
        },
        components: {
            AppHeader, AppFooter, InputTextBlock, SelectBox
        }
    }
</script>
<style lang="scss">
</style>