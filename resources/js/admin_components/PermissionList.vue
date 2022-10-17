<template>
    <div class="main-container">
        <!-- Header -->
        <adm-header></adm-header>
        <!-- Header End -->

        <!-- Main -->
        <div class="main-content">
            <div class="container-fluid p-0">
                <div class=" permission-div">
                    <div class="page-title submission-title-bg">
                        <span>Permission</span>
                    </div>


                    <div class="permission-main ">
                        <div class="permission-item">
                            <div class="permission-header">
                                <div class="row m-0">
                                    <div class="col-lg-10 col-md-10 col-sm-12 col-xs-12">
                                        Monthly Specials
                                    </div>
                                    <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                                        <checkbox label="" cbvalue="1"></checkbox>
                                    </div>
                                </div>
                            </div>
                            <div class="permission-body">
                                <v-collapse-group :onlyOneActive="false">
                                    <div class="accordian-div">
                                        <v-collapse-wrapper @afterToggle="changeStatus5"
                                                            :class="{active: status5}">
                                            <div class="header" v-collapse-toggle>
                                                <label class="accordion-title" style="width: 100%;">
                                                    <div class="row m-0">
                                                        <div class="col-lg-10 col-md-10 col-sm-12 col-xs-12">
                                                            Space Submission List
                                                        </div>
                                                        <!--<div class="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                                                            <checkbox label="" cbvalue="1"></checkbox>
                                                        </div>-->
                                                    </div>
                                                </label>
                                            </div>
                                            <div class="my-content" v-collapse-content>
                                                <div class="collapse-data">
                                                    <div class="row m-0">
                                                        <div class="col-lg-10 col-md-10 col-sm-12 col-xs-12">
                                                           Submission Month
                                                        </div>
                                                        <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                                                            <checkbox label="" cbvalue="1"></checkbox>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </v-collapse-wrapper>
                                    </div>
                                    <hr>
                                    <div class="accordian-div">
                                        <v-collapse-wrapper @afterToggle="changeStatus5"
                                                            :class="{active: status5}">
                                            <div class="header" v-collapse-toggle>
                                                <label class="accordion-title">
                                                    <div class="row m-0">
                                                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                            Product Submission List
                                                        </div>
                                                    </div>
                                                </label>
                                            </div>
                                            <div class="my-content" v-collapse-content>
                                                <div class="collapse-data">
                                                    <div class="row m-0">
                                                        <div class="col-lg-10 col-md-10 col-sm-12 col-xs-12">
                                                            Submission Month
                                                        </div>
                                                        <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                                                            <checkbox label="" cbvalue="1"></checkbox>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </v-collapse-wrapper>
                                    </div>
                                    <hr>
                                    <div class="accordian-div">
                                        <v-collapse-wrapper @afterToggle="changeStatus5"
                                                            :class="{active: status5}">
                                            <div class="header" v-collapse-toggle>
                                                <label class="accordion-title">
                                                    <div class="row m-0">
                                                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                            Monthly Specials E-copy
                                                        </div>
                                                    </div>
                                                </label>
                                            </div>
                                            <div class="my-content" v-collapse-content>
                                                <div class="collapse-data">
                                                    <div class="row m-0">
                                                        <div class="col-lg-10 col-md-10 col-sm-12 col-xs-12">
                                                            Monthly Specials E-copy
                                                        </div>
                                                        <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                                                            <checkbox label="" cbvalue="1"></checkbox>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </v-collapse-wrapper>
                                    </div>
                                </v-collapse-group>
                            </div>
                        </div>
                        <div class="permission-item">
                            <div class="permission-header">
                                <div class="row m-0">
                                    <div class="col-lg-10 col-md-10 col-sm-12 col-xs-12">
                                        Tradeshows
                                    </div>
                                    <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                                        <checkbox label="" cbvalue="1"></checkbox>
                                    </div>
                                </div>
                            </div>
                            <div class="permission-body">
                                <v-collapse-group :onlyOneActive="false">
                                    <div class="accordian-div">
                                        <v-collapse-wrapper @afterToggle="changeStatus5"
                                                            :class="{active: status5}">
                                            <div class="header" v-collapse-toggle>
                                                <label class="accordion-title" style="width: 100%;">
                                                    <div class="row m-0">
                                                        <div class="col-lg-10 col-md-10 col-sm-12 col-xs-12">
                                                            Events
                                                        </div>
                                                        <!--<div class="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                                                            <checkbox label="" cbvalue="1"></checkbox>
                                                        </div>-->
                                                    </div>
                                                </label>
                                            </div>
                                            <div class="my-content" v-collapse-content>
                                                <div class="collapse-data">
                                                    <div class="row m-0">
                                                        <div class="col-lg-10 col-md-10 col-sm-12 col-xs-12">
                                                            Name
                                                        </div>
                                                        <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                                                            <checkbox label="" cbvalue="1"></checkbox>
                                                        </div>
                                                    </div>
                                                    <div class="row m-0">
                                                        <div class="col-lg-10 col-md-10 col-sm-12 col-xs-12">
                                                            City
                                                        </div>
                                                        <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                                                            <checkbox label="" cbvalue="1"></checkbox>
                                                        </div>
                                                    </div>
                                                    <div class="row m-0">
                                                        <div class="col-lg-10 col-md-10 col-sm-12 col-xs-12">
                                                            Venue
                                                        </div>
                                                        <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                                                            <checkbox label="" cbvalue="1"></checkbox>
                                                        </div>
                                                    </div>
                                                    <div class="row m-0">
                                                        <div class="col-lg-10 col-md-10 col-sm-12 col-xs-12">
                                                            Venue
                                                        </div>
                                                        <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                                                            <checkbox label="" cbvalue="1"></checkbox>
                                                        </div>
                                                    </div>
                                                    <div class="row m-0">
                                                        <div class="col-lg-10 col-md-10 col-sm-12 col-xs-12">
                                                            Venue
                                                        </div>
                                                        <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                                                            <checkbox label="" cbvalue="1"></checkbox>
                                                        </div>
                                                    </div>
                                                    <div class="row m-0">
                                                        <div class="col-lg-10 col-md-10 col-sm-12 col-xs-12">
                                                           Show Date
                                                        </div>
                                                        <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                                                            <checkbox label="" cbvalue="1"></checkbox>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </v-collapse-wrapper>
                                    </div>
                                    <hr>
                                    <div class="accordian-div">
                                        <v-collapse-wrapper @afterToggle="changeStatus5"
                                                            :class="{active: status5}">
                                            <div class="header" v-collapse-toggle>
                                                <label class="accordion-title">
                                                    <div class="row m-0">
                                                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                            Vendors
                                                        </div>
                                                    </div>
                                                </label>
                                            </div>
                                            <div class="my-content" v-collapse-content>
                                                <div class="collapse-data">
                                                    <div class="row m-0">
                                                        <div class="col-lg-10 col-md-10 col-sm-12 col-xs-12">
                                                            Location
                                                        </div>
                                                        <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                                                            <checkbox label="" cbvalue="1"></checkbox>
                                                        </div>
                                                    </div>
                                                    <div class="row m-0">
                                                        <div class="col-lg-10 col-md-10 col-sm-12 col-xs-12">
                                                            Name
                                                        </div>
                                                        <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                                                            <checkbox label="" cbvalue="1"></checkbox>
                                                        </div>
                                                    </div>
                                                    <div class="row m-0">
                                                        <div class="col-lg-10 col-md-10 col-sm-12 col-xs-12">
                                                            Company
                                                        </div>
                                                        <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                                                            <checkbox label="" cbvalue="1"></checkbox>
                                                        </div>
                                                    </div>
                                                    <div class="row m-0">
                                                        <div class="col-lg-10 col-md-10 col-sm-12 col-xs-12">
                                                            Email
                                                        </div>
                                                        <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                                                            <checkbox label="" cbvalue="1"></checkbox>
                                                        </div>
                                                    </div>
                                                    <div class="row m-0">
                                                        <div class="col-lg-10 col-md-10 col-sm-12 col-xs-12">
                                                            Comments
                                                        </div>
                                                        <div class="col-lg-2 col-md-2 col-sm-12 col-xs-12">
                                                            <checkbox label="" cbvalue="1"></checkbox>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </v-collapse-wrapper>
                                    </div>
                                </v-collapse-group>
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
    import Checkbox from '../partials/Checkbox.vue'


    import Vue from 'vue'
    import VueCollapse from 'vue2-collapse'

    Vue.use(VueCollapse)

    export default {
        data() {
            return {
                status: false,
                status1: false,
                status2: false,
                status3: false,
                status4: false,
                status5: false,
                status6: false,
            }
        },
        components: {
            AdmHeader, Checkbox
        },
        methods: {
            changeStatus(value) {
                this.status = value.status;
            }, changeStatus1(value1) {
                this.status1 = value1.status;
            }, changeStatus2(value2) {
                this.status2 = value2.status;
            }, changeStatus3(value3) {
                this.status3 = value3.status;
            }, changeStatus4(value4) {
                this.status4 = value4.status;
            }, changeStatus5(value5) {
                this.status5 = value5.status;
            }, changeStatus6(value6) {
                this.status6 = value6.status;
            }

        }
    }
</script>
<style lang="scss">
</style>
