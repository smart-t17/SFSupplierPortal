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
                        <span> <a>Trade shows </a> / Edit Vendor </span>
                    </div>

                    <div class="adm-ts-edit-vendor adm-form-main main-div adm-form-spacing">


                        <div class="row m-0">
                            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <input-text-block type="text" inputlabel="Name" name="" id="" inputClass="input-textbox"
                                                  placeholder=""></input-text-block>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <input-text-block type="text" inputlabel="Company" name="" id=""
                                                  inputClass="input-textbox"
                                                  placeholder=""></input-text-block>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <input-text-block type="text" inputlabel="Job Title" name="" id=""
                                                  inputClass="input-textbox"
                                                  placeholder=""></input-text-block>
                            </div>
                        </div>
                        <div class="row m-0 mt30">
                            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <input-text-block type="text" inputlabel="SF Vendor Code" name="" id=""
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

                                <select-box drpdwnlabel="Event" dropdownName="dropdownname"
                                            :dropdwnOptions="dropdwnOptions"
                                            selectPlaceholder=""></select-box>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <input-text-block type="text" inputlabel="Attendees" name="" id=""
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
                            <div class="col-lg-7 col-md-12 col-sm-12 col-xs-12">
                                <input-text-block type="text" inputlabel="Electric Appliances You May Be Using" name=""
                                                  id="" inputClass="input-textbox"
                                                  placeholder=""></input-text-block>
                            </div>
                            <div class="col-lg-2 col-md-6 col-sm-12 col-xs-12 xs-mt-25 sm-mt-25">
                                <input-text-block type="text" inputlabel="Voltage Required" name="" id=""
                                                  inputClass="input-textbox"
                                                  placeholder=""></input-text-block>
                            </div>
                            <!--<div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <input-text-block type="text" inputlabel="HOW MANY" name="" id=""
                                                  inputClass="input-textbox"
                                                  placeholder=""></input-text-block>
                            </div>-->

                            <div class="col-lg-3 col-md-6 col-sm-12 col-xs-12 xs-mt-25 sm-mt-25">
                                <div class="w80 float-left">
                                    <select-box drpdwnlabel="How Many" dropdownName="dropdownname"
                                                :dropdwnOptions="dropdwnOptions" selectPlaceholder=""></select-box>
                                </div>
                                <div class="w20 float-right">
                                    <small-icon-block fontAwesomeClass="fa fa-plus" inputLabel="label"></small-icon-block>
                                </div>
                            </div>

                        </div>

                        <div class="row m-0 mt30">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <input-text-block type="text" inputlabel="Comments" name="" id=""
                                                  inputClass="input-textbox"
                                                  placeholder=""></input-text-block>
                            </div>
                        </div>


                        <!-- Button code -->
                        <div class="row m-0 mt20">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 item-box xs-p-15 sm-p-15">

                                <button-block btnClass="mt30 green-bg mr10" btnLabel="Save Changes"></button-block>
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
    import SmallIconBlock from '../partials/SmallIconBlock.vue'

    export default {
        components: {
            AdmHeader, InputTextBlock, SelectBox, ButtonBlock, SmallIconBlock
        }
    }
</script>
<style lang="scss">
</style>