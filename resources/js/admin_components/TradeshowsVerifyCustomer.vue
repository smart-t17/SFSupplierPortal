<template>
    <div class="main-container">
        <!-- Header -->
        <adm-header></adm-header>
        <!-- Header End -->

        <!-- Main -->
        <div class="main-content">
            <div class="container-fluid p-0">
                <div class="adm-form-main-div">
                    <div class="page-title pink-title-bg">
                        <span> <a>Trade shows </a> / Verify Customer </span>
                    </div>

                    <div class="adm-form-main main-div adm-form-spacing">
                        <div class="row m-0">
                            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <input-text-block type="text" inputlabel="First Name" name="" id=""
                                                  inputClass="input-textbox"
                                                  placeholder=""></input-text-block>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <input-text-block type="text" inputlabel="Lats Name" name="" id=""
                                                  inputClass="input-textbox"
                                                  placeholder=""></input-text-block>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <input-text-block type="text" inputlabel="Company" name="" id=""
                                                  inputClass="input-textbox"
                                                  placeholder=""></input-text-block>
                            </div>
                        </div>

                        <div class="row m-0 mt30">
                            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <input-text-block type="text" inputlabel="Job Title" name="" id=""
                                                  inputClass="input-textbox"
                                                  placeholder=""></input-text-block>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <input-text-block type="text" inputlabel="Email" name="" id=""
                                                  inputClass="input-textbox"
                                                  placeholder=""></input-text-block>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <input-text-block type="text" inputlabel="Contact" name="" id=""
                                                  inputClass="input-textbox"
                                                  placeholder=""></input-text-block>
                            </div>
                        </div>

                        <div class="row m-0 mt30">
                            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <input-text-block type="text" inputlabel="Event" name="" id=""
                                                  inputClass="input-textbox"
                                                  placeholder=""></input-text-block>

                            </div>

                        </div>


                        <!-- Button code -->
                        <div class="row m-0 mt20">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 item-box xs-p-15 sm-p-15">

                                <button-block btnClass="mt30 green-bg mr10" btnLabel="Verify"></button-block>
                                <button-block btnClass="mt30 mr10" btnLabel="Discard"></button-block>
                                <button-block btnClass="mt30 orange-bg" btnLabel="Delete"></button-block>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <!-- Main End -->


    </div>
</template>
<script>
    import AdmHeader from '../admin_components/Header.vue'
    import InputTextBlock from '../partials/InputTextBlock.vue'
    import SelectBox from '../partials/SelectBox.vue'
    import ButtonBlock from '../partials/ButtonBlock.vue'

    export default {
        components: {
            AdmHeader, InputTextBlock, SelectBox, ButtonBlock
        }
    }
</script>
<style lang="scss">
</style>