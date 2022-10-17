<template>
    <div class="main-container">
        <!-- Header -->
        <adm-header></adm-header>
        <!-- Header End -->

        <!-- Main -->
        <div class="main-content">
            <div class="container-fluid p-0">
                <div class="product-presentation-div product-presentation-edit-div">
                    <div class="page-title presentation-title-bg">
                        <span>Product Presentation Request</span>
                    </div>

                    <div class="product-presentation-main1 product-presentation-edit-main1 main-div gray-bg">
                        <div class="row m-0">
                            <div class="col-lg-4 col-sm-4 col-md-12">
                                <input-text-block inputlabel="SF Branch" type="text" name="" id=""
                                                  inputClass="input-textbox" required="true"></input-text-block>
                            </div>
                            <div class="col-lg-4 col-sm-4 col-md-12">
                                <input-text-block inputlabel="Date" type="text" name="" id=""
                                                  inputClass="input-textbox" required="true"></input-text-block>
                            </div>
                            <div class="col-lg-4 col-sm-4 col-md-12">
                                <input-text-block inputlabel="Time" type="text" name="" id=""
                                                  inputClass="input-textbox" required="true"></input-text-block>
                            </div>
                        </div>
                        <div class="row m-0 mt30">
                            <div class="col-lg-12 col-sm-12 col-md-12">
                                <input-text-block inputlabel="Comment" type="text" name="" id=""
                                                  inputClass="input-textbox"></input-text-block>
                            </div>
                        </div>
                    </div>

                    <div class="product-presentation-main2 product-presentation-edit-main2 main-div">
                        <div class="row m-0">
                            <div class="monthlyform-box box1">
                                <select-box drpdwnlabel="Is this a new Product?" dropdownName="dropdownname"
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
                        </div>
                        <div class="row m-0 mt30">
                            <div class="monthlyform-box box1">
                                <select-box drpdwnlabel="Is this a new Product?" dropdownName="dropdownname"
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
                        </div>

                        <div class="row m-0 mt30">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 item-box p-0 xs-p-15 sm-p-15">
                                <a class="btn mt1 mb1 mr15">Save Changes</a>
                                <a class="btn mt1 mb1 green-bg mr15">Approve</a>
                                <a class="btn mt1 mb1 orange-bg">Decline</a>
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
            AdmHeader, SelectBox, InputTextBlock, SmallIconBlock, Checkbox
        }
    }
</script>
<style lang="scss">
</style>