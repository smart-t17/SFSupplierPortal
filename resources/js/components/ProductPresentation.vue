<template>
    <div class="main-container">
        <!-- Header -->
        <app-header></app-header>
        <!-- Header End -->

        <!-- Main -->
        <div class="main-content">
            <div class="container-fluid p-0">
                <div class="product-presentation-div">
                    <div class="page-title presentation-title-bg">
                        <span>Product Presentation</span>
                    </div>

                    <div class="product-presentation-main1 main-div gray-bg">
                        <div class="row m-0">
                            <div class="col-lg-4 col-sm-4 col-md-12">
                                <input-text-block inputlabel="SF Branch" type="text" name="" id=""
                                                  inputClass="input-textbox" required="true"></input-text-block>
                            </div>
                            <div class="col-lg-4 col-sm-4 col-md-12">
                                <div class="file-input">
                                    <div class="upload-btn-wrapper ">
                                        <div class="input-label"><label>Date*</label></div>
                                        <div class="input-textbox-div">
                                            <input class="input-textbox" type="" name="" id="" placeholder=""
                                                   multiple>
                                            <div class="file-attachement">
                                                <i aria-hidden="true" class="fa fa-calendar"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-sm-4 col-md-12">
                                <select-box drpdwnlabel="Time" dropdownName="dropdownname"
                                            :dropdwnOptions="dropdwnOptions" required="true"></select-box>
                            </div>
                        </div>
                        <div class="row m-0 mt30">
                            <div class="col-lg-12 col-sm-12 col-md-12">
                                <input-text-block inputlabel="Comments" type="text" name="" id=""
                                                  inputClass="input-textbox"></input-text-block>
                            </div>
                        </div>
                    </div>

                    <div class="product-presentation-main2 main-div">
                        <div class="row m-0">
                            <div class="monthlyform-box box1">
                                <select-box drpdwnlabel="Is this a new Prouct?" dropdownName="dropdownname"
                                            :dropdwnOptions="dropdwnOptions"></select-box>
                            </div>
                            <div class="monthlyform-box box2">
                                <div>
                                    <input-text-block type="text" inputlabel="Vendor Product Code" name="" id=""
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
                                    <select-box drpdwnlabel="UOM" dropdownName="dropdownname"
                                                :dropdwnOptions="dropdwnOptions" required="true"></select-box>
                                </div>
                            </div>
                            <div class="monthlyform-box box8">
                                <div>
                                    <input-text-block type="text" inputlabel="MOQ" name="" id=""
                                                      required="true" inputClass="input-textbox"></input-text-block>
                                </div>
                            </div>
                            <div class="monthlyform-box box9">
                                <div>
                                    <input-text-block type="text" inputlabel="Unit Cost" name="" id="" required="true"
                                                      inputClass="input-textbox"></input-text-block>
                                </div>
                            </div>
                            <div class="monthlyform-box box10">
                                <div>
                                    <input-text-block type="text" inputlabel="CTN Cost" name="" id="" required="true"
                                                      inputClass="input-textbox"></input-text-block>
                                </div>
                            </div>
                            <div class="monthlyform-box box13">
                                <small-icon-block fontAwesomeClass="fa fa-plus" inputLabel="label"></small-icon-block>
                            </div>
                        </div>
                        <div class="row m-0 mt30">
                            <div class="monthlyform-box box1">
                                <select-box drpdwnlabel="Is this a new Prouct?" dropdownName="dropdownname"
                                            :dropdwnOptions="dropdwnOptions"></select-box>
                            </div>
                            <div class="monthlyform-box box2">
                                <div>
                                    <input-text-block type="text" inputlabel="Vendor Product Code" name="" id=""
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
                                    <select-box drpdwnlabel="UOM" dropdownName="dropdownname"
                                                :dropdwnOptions="dropdwnOptions" required="true"></select-box>
                                </div>
                            </div>
                            <div class="monthlyform-box box8">
                                <div>
                                    <input-text-block type="text" inputlabel="MOQ" name="" id=""
                                                      required="true" inputClass="input-textbox"></input-text-block>
                                </div>
                            </div>
                            <div class="monthlyform-box box9">
                                <div>
                                    <input-text-block type="text" inputlabel="Unit Cost" name="" id="" required="true"
                                                      inputClass="input-textbox"></input-text-block>
                                </div>
                            </div>
                            <div class="monthlyform-box box10">
                                <div>
                                    <input-text-block type="text" inputlabel="CTN Cost" name="" id="" required="true"
                                                      inputClass="input-textbox"></input-text-block>
                                </div>
                            </div>
                            <div class="monthlyform-box box13">
                                <small-icon-block fontAwesomeClass="fa fa-times" inputLabel="label"></small-icon-block>
                            </div>
                        </div>

                        <div class="row m-0 mt30">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 p-0">
                                <div class="terms gray-bg">
                                    <p><b>T&Cs</b></p>
                                    <p>(1) You will be given 20 minutes to showcase your products. (2) Please ensure you
                                        bring with you full product information and sampling for approx 13-15 reps to
                                        see/taste at the meeting. (3) Any cancellations must be done via phone call to
                                        sales manager if within 48 hours of presentation.</p>
                                    <div class="mt5">
                                        <checkbox label="I agree the terms and conditions." cbvalue="1"></checkbox>
                                    </div>
                                </div>
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
    import Checkbox from '../partials/Checkbox.vue'

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
            AppHeader, SelectBox, InputTextBlock, SmallIconBlock, Checkbox, AppFooter
        }
    }
</script>
<style lang="scss">
</style>