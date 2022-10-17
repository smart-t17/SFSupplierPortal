<template>
    <div class="main-container">
        <!-- Header -->
        <app-header></app-header>
        <!-- Header End -->

        <!-- Main -->
        <div class="main-content">
            <div class="container-fluid p-0">
                <div class="monthlyform-div">
                    <div class="page-title green-title-bg">
                        <span>Monthly Submission Form</span>
                    </div>

                    <div class="monthlyform-main1 main-div">
                        <div class="row m-0">
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 item-box">
                                <select-box drpdwnlabel="Promotion Month" dropdownName="dropdownname"
                                            :dropdwnOptions="dropdwnOptions" required="true"></select-box>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 item-box">
                                <select-box drpdwnlabel="Promotion Year" dropdownName="dropdownname"
                                            :dropdwnOptions="dropdwnOptions" required="true"></select-box>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 item-box">
                                <div>
                                    <input-text-block inputlabel="Accounts Email" type="text" name="" id=""
                                                      inputClass="input-textbox"></input-text-block>
                                </div>
                            </div>
                        </div>
                        <div class="row m-0 mt30">
                            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12 item-box">
                                <select-box drpdwnlabel="Front Page" dropdownName="dropdownname"
                                            :dropdwnOptions="dropdwnOptions"
                                            selectPlaceholder="1 Product Space - $395.00"></select-box>
                                <select-box dropdownName="dropdownname"
                                            :dropdwnOptions="dropdwnOptions"
                                            selectPlaceholder="2 Product Spaces - $700.00"
                                            selectExtraClass="mt20"></select-box>
                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12 item-box">
                                <select-box drpdwnlabel="Inside Page" dropdownName="dropdownname"
                                            :dropdwnOptions="dropdwnOptions"
                                            selectPlaceholder="1 Product Space - $240.00"></select-box>
                                <select-box dropdownName="dropdownname"
                                            :dropdwnOptions="dropdwnOptions"
                                            selectPlaceholder="2 Or More - $199.00/SPACE"
                                            selectExtraClass="mt20"></select-box>
                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12 item-box">
                                <select-box drpdwnlabel="Back Page" dropdownName="dropdownname"
                                            :dropdwnOptions="dropdwnOptions"
                                            selectPlaceholder="1 Product Space - $255.00"></select-box>
                                <select-box dropdownName="dropdownname"
                                            :dropdwnOptions="dropdwnOptions"
                                            selectPlaceholder="2 Or More - $255.00/SPACE"
                                            selectExtraClass="mt20"></select-box>
                            </div>
                            <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12 item-box">
                                <select-box drpdwnlabel="Back Page" dropdownName="dropdownname"
                                            :dropdwnOptions="dropdwnOptions"
                                            selectPlaceholder="1 Full Page - $625.00"></select-box>
                                <select-box dropdownName="dropdownname"
                                            :dropdwnOptions="dropdwnOptions" selectPlaceholder="Half Page - $350.00"
                                            selectExtraClass="mt20"></select-box>
                            </div>
                        </div>
                        <div class="row m-0 mt30">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 item-box">
                                <a class="btn mt1 mb1 mr15">Save Draft</a>
                                <a class="btn mt1 mb1 green-bg">Book Space</a>
                                <p class="mt10 button-error">NOTE: We will add a disclaimer here stating - we cannot
                                    hold space if you save draft.</p>
                            </div>
                        </div>
                    </div>
                    <div class="monthlyform-main2 main-div">
                        <div class="row m-0">
                            <div class="monthlyform-box box1">
                                <select-box drpdwnlabel="Product Space" dropdownName="dropdownname" required="true"
                                            :dropdwnOptions="dropdwnOptions"></select-box>
                            </div>
                            <div class="monthlyform-box box2">
                                <div>
                                    <input-text-block type="text" inputlabel="Vender Product Code" name="" id=""
                                                      required="true" inputClass="input-textbox"></input-text-block>
                                </div>
                            </div>
                            <div class="monthlyform-box box3">
                                <div>
                                    <input-text-block type="text" inputlabel="SF Product Code" name="" id=""
                                                      inputClass="input-textbox"></input-text-block>
                                </div>
                            </div>
                            <div class="monthlyform-box box4">
                                <div>
                                    <input-text-block type="text" inputlabel="Description" name="" id="" required="true"
                                                      inputClass="input-textbox"></input-text-block>
                                </div>
                            </div>
                            <div class="monthlyform-box box5">
                                <div>
                                    <input-text-block type="text" inputlabel="Brand" name="" id="" required="true"
                                                      inputClass="input-textbox"></input-text-block>
                                </div>
                            </div>
                            <div class="monthlyform-box box6">
                                <select-box drpdwnlabel="Category" dropdownName="dropdownname"
                                            :dropdwnOptions="dropdwnOptions" required="true"></select-box>
                            </div>
                            <div class="monthlyform-box box7">
                                <div>
                                    <input-text-block type="text" inputlabel="UOM" name="" id="" required="true"
                                                      inputClass="input-textbox"></input-text-block>
                                </div>
                            </div>
                            <div class="monthlyform-box box8">
                                <div>
                                    <input-text-block type="text" inputlabel="Everyday Cost" name="" id=""
                                                      required="true" inputClass="input-textbox"></input-text-block>
                                </div>
                            </div>
                            <div class="monthlyform-box box9">
                                <div>
                                    <input-text-block type="text" inputlabel="Promo Cost" name="" id="" required="true"
                                                      inputClass="input-textbox"></input-text-block>
                                </div>
                            </div>
                            <div class="monthlyform-box box10">
                                <div>
                                    <input-text-block type="text" inputlabel="Off Invoice" name="" id=""
                                                      inputClass="input-textbox"></input-text-block>
                                </div>
                            </div>
                            <div class="monthlyform-box box11">
                                <div>
                                    <input-text-block type="text" inputlabel="Scan/ Claim" name="" id=""
                                                      inputClass="input-textbox"></input-text-block>
                                </div>
                            </div>
                            <div class="monthlyform-box box12">
                                <!--<div class="input-label"><label></label></div>
                                <div class="file-attachement"><i class="fa fa-paperclip" aria-hidden="true"></i></div>-->

                                <small-icon-block fontAwesomeClass="fa fa-paperclip"
                                                  inputLabel="label"></small-icon-block>
                            </div>
                            <div class="monthlyform-box box13">
                                <!--<div class="input-label"><label></label></div>
                                <div class="file-attachement"><i class="fa fa-plus" aria-hidden="true"></i></div>-->

                                <small-icon-block fontAwesomeClass="fa fa-plus" inputLabel="label"></small-icon-block>

                            </div>
                        </div>
                        <div class="row m-0 mt30">
                            <div class="monthlyform-box box1">
                                <select-box drpdwnlabel="Product Space" dropdownName="dropdownname" required="true"
                                            :dropdwnOptions="dropdwnOptions"></select-box>
                            </div>
                            <div class="monthlyform-box box2">
                                <div>
                                    <input-text-block type="text" inputlabel="Vender Product Code" name="" id=""
                                                      required="true" inputClass="input-textbox"></input-text-block>
                                </div>
                            </div>
                            <div class="monthlyform-box box3">
                                <div>
                                    <input-text-block type="text" inputlabel="SF Product Code" name="" id=""
                                                      inputClass="input-textbox"></input-text-block>
                                </div>
                            </div>
                            <div class="monthlyform-box box4">
                                <div>
                                    <input-text-block type="text" inputlabel="Description" name="" id="" required="true"
                                                      inputClass="input-textbox"></input-text-block>
                                </div>
                            </div>
                            <div class="monthlyform-box box5">
                                <div>
                                    <input-text-block type="text" inputlabel="Brand" name="" id="" required="true"
                                                      inputClass="input-textbox"></input-text-block>
                                </div>
                            </div>
                            <div class="monthlyform-box box6">
                                <select-box drpdwnlabel="Category" dropdownName="dropdownname"
                                            :dropdwnOptions="dropdwnOptions" required="true"></select-box>
                            </div>
                            <div class="monthlyform-box box7">
                                <div>
                                    <input-text-block type="text" inputlabel="UOM" name="" id="" required="true"
                                                      inputClass="input-textbox"></input-text-block>
                                </div>
                            </div>
                            <div class="monthlyform-box box8">
                                <div>
                                    <input-text-block type="text" inputlabel="Everyday Cost" name="" id=""
                                                      required="true" inputClass="input-textbox"></input-text-block>
                                </div>
                            </div>
                            <div class="monthlyform-box box9">
                                <div>
                                    <input-text-block type="text" inputlabel="Promo Cost" name="" id="" required="true"
                                                      inputClass="input-textbox"></input-text-block>
                                </div>
                            </div>
                            <div class="monthlyform-box box10">
                                <div>
                                    <input-text-block type="text" inputlabel="Off Invoice" name="" id=""
                                                      inputClass="input-textbox"></input-text-block>
                                </div>
                            </div>
                            <div class="monthlyform-box box11">
                                <div>
                                    <input-text-block type="text" inputlabel="Scan/ Claim" name="" id=""
                                                      inputClass="input-textbox"></input-text-block>
                                </div>
                            </div>
                            <div class="monthlyform-box box12">
                                <small-icon-block fontAwesomeClass="fa fa-paperclip"
                                                  inputLabel="label"></small-icon-block>
                            </div>
                            <div class="monthlyform-box box13">
                                <small-icon-block fontAwesomeClass="fa fa-times" inputLabel="label"></small-icon-block>
                            </div>
                        </div>
                        <div class="row m-0 mt30">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 item-box p-0 xs-p-15 sm-p-15">
                                <!--<a class="btn mt1 mb1 mr15">Add a New Line</a>-->
                                <a class="btn mt1 mb1 mr15">Save Draft</a>
                                <a class="btn mt1 mb1 green-bg">Submit</a>
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
    import SelectBox from '../partials/SelectBox.vue'
    import InputTextBlock from '../partials/InputTextBlock.vue'
    import SmallIconBlock from '../partials/SmallIconBlock.vue'

    import Vue from 'vue'
    import vSelect from 'vue-select'
    Vue.component('v-select', vSelect);


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
            AppHeader, AppFooter, SelectBox, InputTextBlock, SmallIconBlock
        }
    }
</script>
<style lang="scss">


</style>