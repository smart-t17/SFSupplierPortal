<template>
    <div class="main-container">
        <!-- Header -->
        <app-header></app-header>
        <!-- Header End -->

        <!-- Main -->
        <div class="main-content">
            <div class="container-fluid p-0">
                <div class="ac-form-div">
                    <div class="page-title sky-title-bg">
                        <span>Annual Catalogue Form</span>
                    </div>

                    <div class="ac-form-main main-div">
                        <div class="row m-0">
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 item-box">
                                <select-box drpdwnlabel="Product Catalogue" dropdownName="dropdownname"
                                            :dropdwnOptions="dropdwnOptions"
                                            selectPlaceholder="Quarter Page - $480"></select-box>
                                <select-box dynamicClass="mt15" dropdownName="dropdownname"
                                            :dropdwnOptions="dropdwnOptions"
                                            selectPlaceholder="Half Page - $800"></select-box>
                                <select-box dynamicClass="mt15" dropdownName="dropdownname"
                                            :dropdwnOptions="dropdwnOptions"
                                            selectPlaceholder=" Full Page - $1495"></select-box>
                                <select-box dynamicClass="mt15" dropdownName="dropdownname"
                                            :dropdwnOptions="dropdwnOptions"
                                            selectPlaceholder="2 x Full Pages - $1995"></select-box>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 item-box xs-mt-25">
                                <select-box drpdwnlabel="Fresh Produce Catalogue" dropdownName="dropdownname"
                                            :dropdwnOptions="dropdwnOptions"
                                            selectPlaceholder="Full Page - $1495"></select-box>
                                <select-box dynamicClass="mt15" dropdownName="dropdownname"
                                            :dropdwnOptions="dropdwnOptions"
                                            selectPlaceholder="2 x Full Pages - $1995"></select-box>
                            </div>
                            <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 item-box xs-mt-25">
                                <select-box drpdwnlabel="Meat Catalogue" dropdownName="dropdownname"
                                            :dropdwnOptions="dropdwnOptions"
                                            selectPlaceholder="Full Page - $1495"></select-box>
                                <select-box dynamicClass="mt15" dropdownName="dropdownname"
                                            :dropdwnOptions="dropdwnOptions"
                                            selectPlaceholder=" 2 x Full Pages - $1995"></select-box>
                            </div>
                        </div>
                        <div class="row m-0 mt30">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <checkbox label="Create your Own Artwork" cbvalue="1"></checkbox>
                            </div>
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <checkbox label="Use Our Designers" cbvalue="2"
                                          smalltxt="[Only for the Main Product Catalogue]"></checkbox>
                            </div>
                        </div>
                        <div class="row m-0 mt30">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 item-box">
                                <a class="btn mt1 mb1 mr15">Save As Draft</a>
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
            AppHeader, AppFooter, SelectBox, Checkbox
        }
    }
</script>
<style lang="scss">


</style>