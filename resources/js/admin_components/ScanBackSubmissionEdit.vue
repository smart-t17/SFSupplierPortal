<template>
    <div class="main-container">
        <!-- Header -->
        <adm-header></adm-header>
        <!-- Header End -->

        <!-- Main -->
        <div class="main-content">
            <div class="container-fluid p-0">
                <div class="adm-form-main-div">
                    <div class="page-title orange-title-bg">
                        <span> TOBASCO CHIPOTLE 5L </span>
                    </div>

                    <div class="adm-form-main main-div adm-form-spacing">

                        <div class="row m-0">
                            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12"></div>
                            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                <datatable-buttons actionClass="datatable-filter ml5" fontAwesomeClass="fa-upload"
                                                   actionLabel="Export"></datatable-buttons>
                                <datatable-buttons actionClass="datatable-filter" fontAwesomeClass="fa-share"
                                                   actionLabel="Share"></datatable-buttons>
                            </div>
                        </div>

                        <div class="row m-0 mt30">
                            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <input-text-block type="text" inputlabel="Vendor Code" name="" id=""
                                                  inputClass="input-textbox"
                                                  placeholder=""></input-text-block>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <input-text-block type="text" inputlabel="Name" name="" id="" inputClass="input-textbox"
                                                  placeholder=""></input-text-block>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <input-text-block type="text" inputlabel="Email" name="" id=""
                                                  inputClass="input-textbox"
                                                  placeholder=""></input-text-block>
                            </div>
                        </div>
                        <div class="row m-0 mt30">
                            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <input-text-block type="text" inputlabel="Customer Name" name="" id=""
                                                  inputClass="input-textbox"
                                                  placeholder=""></input-text-block>
                            </div>

                            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <input-text-block type="text" inputlabel="Vendor Product Code" name="" id=""
                                                  inputClass="input-textbox"
                                                  placeholder=""></input-text-block>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <input-text-block type="text" inputlabel="SF Product Code" name="" id=""
                                                  inputClass="input-textbox"
                                                  placeholder=""></input-text-block>
                            </div>
                        </div>

                        <div class="row m-0 mt30">
                            <div class="col-lg-10 col-md-10 col-sm-12 col-xs-12">
                                <input-text-block type="text" inputlabel="Description" name="" id=""
                                                  inputClass="input-textbox"
                                                  placeholder=""></input-text-block>
                            </div>
                            <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                                <input-text-block type="text" inputlabel="UOM" name="" id="" inputClass="input-textbox"
                                                  placeholder=""></input-text-block>
                            </div>


                        </div>

                        <div class="row m-0 mt30">
                            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <input-text-block type="text" inputlabel="Claim Amount" name="" id=""
                                                  inputClass="input-textbox"
                                                  placeholder=""></input-text-block>
                            </div>

                            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <input-text-block type="text" inputlabel="Free Stock [CTN]" name="" id=""
                                                  inputClass="input-textbox"
                                                  placeholder=""></input-text-block>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <input-text-block type="text" inputlabel="SF Branch" name="" id=""
                                                  inputClass="input-textbox"
                                                  placeholder=""></input-text-block>
                            </div>
                        </div>
                        <div class="row m-0 mt30">
                            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <input-text-block type="text" inputlabel="SF Buyer" name="" id=""
                                                  inputClass="input-textbox"
                                                  placeholder=""></input-text-block>
                            </div>

                            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <input-text-block type="text" inputlabel="SF Sales Representative" name="" id=""
                                                  inputClass="input-textbox"
                                                  placeholder=""></input-text-block>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12">
                                <input-text-block type="text" inputlabel="Vendor Account Email" name="" id=""
                                                  inputClass="input-textbox"
                                                  placeholder=""></input-text-block>
                            </div>
                        </div>


                        <!-- Button code -->
                        <div class="row m-0 mt20">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 item-box xs-p-15 sm-p-15">

                                <button-block btnClass="mt30 mr10" btnLabel="Save Changes"></button-block>
                                <button-block btnClass="mt30 mr10 green-bg" btnLabel="Approve"></button-block>
                                <button-block btnClass="mt30 orange-bg" btnLabel="Decline"></button-block>

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
    import DatatableButtons from '../partials/DatatableButtons.vue'

    export default {
        components: {
            AdmHeader, InputTextBlock, SelectBox, ButtonBlock, DatatableButtons
        }
    }
</script>
<style lang="scss">
</style>