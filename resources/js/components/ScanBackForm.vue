<template>
    <div class="main-container">
        <!-- Header -->
        <app-header></app-header>
        <!-- Header End -->

        <!-- Main -->
        <div class="main-content">
            <div class="container-fluid p-0">
                <div class="scanbackform-div">
                    <div class="page-title orange-title-bg">
                        <span>Scan Back Form</span>
                    </div>

                    <div class="scanbackform-main main-div">
                        <div class="row m-0">
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 item-box">
                                <input-text-block type="text" inputlabel="Customer Name" name="" id="" required="true"
                                                  inputClass="input-textbox" placeholder=""></input-text-block>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 item-box">
                                <input-text-block type="text" inputlabel="Vendor Product Code" name="" id=""
                                                  required="true" inputClass="input-textbox"
                                                  placeholder=""></input-text-block>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 item-box">
                                <input-text-block type="text" inputlabel="SF Product Code" name="" id="" required=""
                                                  inputClass="input-textbox" placeholder=""></input-text-block>
                            </div>
                        </div>
                        <div class="row m-0 mt30">
                            <div class="col-lg-9 col-md-9 col-sm-9 col-xs-12 item-box">
                                <input-text-block type="text" inputlabel="Description" name="" id="" required="true"
                                                  inputClass="input-textbox" placeholder=""></input-text-block>
                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12 item-box">
                                <select-box drpdwnlabel="UOM" dropdownName="dropdownname" required="true"
                                            :dropdwnOptions="dropdwnOptions" selectPlaceholder=""></select-box>
                            </div>
                        </div>
                        <div class="row m-0 mt30">
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 item-box">
                                <input-text-block type="text" inputlabel="Claim Amount" name="" id="" required=""
                                                  inputClass="input-textbox" placeholder=""></input-text-block>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 item-box">
                                <input-text-block type="text" inputlabel="Free Stock [CTN]" name="" id=""
                                                  inputClass="input-textbox"
                                                  placeholder=""></input-text-block>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 item-box">
                                <select-box drpdwnlabel="SF Branch" dropdownName="dropdownname" required="true"
                                            :dropdwnOptions="dropdwnOptions" selectPlaceholder=""></select-box>
                            </div>
                        </div>
                        <div class="row m-0 mt30">
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 item-box">
                                <input-text-block type="text" inputlabel="SF Buyer" name="" id="" required=""
                                                  inputClass="input-textbox" placeholder=""></input-text-block>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 item-box">
                                <input-text-block type="text" inputlabel="SF Sales Representative" name="" id=""
                                                  inputClass="input-textbox"
                                                  placeholder=""></input-text-block>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 item-box">
                                <input-text-block type="text" inputlabel="Vendor Account Email" name="" id=""
                                                  required="" inputClass="input-textbox"
                                                  placeholder=""></input-text-block>
                            </div>
                        </div>
                        <div class="row m-0 mt30">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 item-box">
                                <a class="btn mt1 mb1 mr15">Save As Draft</a>
                                <a class="btn mt1 mb1 green-bg">Send Request</a>
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