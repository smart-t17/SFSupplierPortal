<template>
    <div class="main-container">
        <!-- Header -->
        <adm-header></adm-header>
        <!-- Header End -->

        <!-- Main -->
        <div class="main-content">
            <div class="container-fluid p-0">
                <div class="landing-div">
                    <div class="home-box-row row m-0 mb20 xs-mb-0">
                        <dashboard-block label="Monthly Specials" imgsrc="/images/monthlyspacial.png"
                                         dynamicClass="h-b-1"></dashboard-block>
                        <dashboard-block label="Trade Shows" imgsrc="/images/tradshow.png"
                                         dynamicClass="h-b-2"></dashboard-block>
                        <dashboard-block label="Annual Catalogues" imgsrc="/images/annualcatalogues.png"
                                         dynamicClass="h-b-3"></dashboard-block>
                    </div>
                    <div class="home-box-row row m-0 mb20 xs-mb-0">
                        <dashboard-block label="Scan Back" imgsrc="/images/scanback.png"
                                         dynamicClass="h-b-4"></dashboard-block>
                        <dashboard-block label="New Product Request" imgsrc="/images/newproduct.png"
                                         dynamicClass="h-b-5"></dashboard-block>
                        <dashboard-block label="Product Edit Request" imgsrc="/images/myproducts.png"
                                         dynamicClass="h-b-6"></dashboard-block>
                    </div>
                    <div class="home-box-row row m-0">
                        <dashboard-block label="Vendors" imgsrc="/images/vendors.png"
                                         dynamicClass="h-b-7"></dashboard-block>
                        <dashboard-block label="Notification" imgsrc="/images/notifications.png"
                                         dynamicClass="h-b-8 notfcation">
                            <template slot="extra">
                                <span id="notifications-count" class="count">5</span>
                            </template>
                        </dashboard-block>

                        <!--<div class="home-box h-b-8">
                            <div class="containbox">
                                <img src="/images/notifications.png" class="img-responsive">
                                <span id="notifications-count" class="count">5</span>
                                <span>Notification</span>
                            </div>
                        </div>-->

                        <dashboard-block label="Pricing Guide" imgsrc="/images/pricingguide.png"
                                         dynamicClass="h-b-9"></dashboard-block>
                    </div>
                </div>
            </div>
        </div>
        <!-- Main End -->


        <!-- The Reset Password Modal -->
        <div class="modal fade" id="resetPasswordModal">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">

                    <!-- Modal Header -->
                    <div class="modal-header">
                        <h4 class="modal-title">RESET YOUR PASSWORD</h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>

                    <!-- Modal body -->
                    <div class="modal-body">
                        <form>
                            <div class="row">
                                <div class="col-sm-12">
                                    <p class="reset-para">Once you change your password you will need to log in again
                                        <br> on all your devices.</p>
                                </div>
                                <div class="col-sm-12">
                                    <div class="styled-input">
                                        <input type="password" name="newpassword" id="newpassword" required/>
                                        <label class="input-label">New Password<span>*</span></label>
                                        <span></span>
                                    </div>
                                </div>
                                <div class="col-sm-12">
                                    <div class="styled-input">
                                        <input type="password" name="confirmpassword" id="confirmpassword" required/>
                                        <label class="input-label">Confirm New Password<span>*</span></label>
                                        <span></span>
                                    </div>
                                </div>
                                <div class="col-sm-12">
                                    <button type="submit" class="btn btn-default login-submit submit-btn"> Reset
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
    import AdmHeader from '../admin_components/Header.vue'
    import DashboardBlock from '../partials/DashboardBlock.vue'
    import Vue from 'vue'
    import vSelect from 'vue-select'
    import VueFlashMessage from 'vue-flash-message';
    import {ServerTable, ClientTable, Event} from 'vue-tables-2'


    Vue.component('v-select', vSelect);
    Vue.use(VueFlashMessage);
    Vue.use(ClientTable, {}, false, 'bootstrap4', 'default');


    export default {
        data() {
            return {
                customerTypeOptions: [
                    {label: 'User', value: '1'},
                    {label: 'Investor', value: '2'},
                    {label: 'Broker', value: '3'},
                    {label: 'Other', value: '0'}
                ],
                columns: ['id', 'name', 'age'],
                tableData: [
                    {id: 1, name: "John", age: "20"},
                    {id: 2, name: "Jane", age: "24"},
                    {id: 3, name: "Susan", age: "16"},
                    {id: 4, name: "Chris", age: "55"},
                    {id: 5, name: "Dan", age: "40"},
                    {id: 1, name: "John", age: "20"},
                    {id: 2, name: "Jane", age: "24"},
                    {id: 3, name: "Susan", age: "16"},
                    {id: 4, name: "Chris", age: "55"},
                    {id: 5, name: "Dan", age: "40"},
                    {id: 1, name: "John", age: "20"},
                    {id: 2, name: "Jane", age: "24"},
                    {id: 3, name: "Susan", age: "16"},
                    {id: 4, name: "Chris", age: "55"},
                    {id: 5, name: "Dan", age: "40"}
                ],
                options: {
                    // see the options API
                }
            }
        },
        components: {
            AdmHeader, DashboardBlock
        },
        methods: {
            handleClick: function (event) {
                this.flashSuccess('<b>Monthly Specials!</b><br>\n' +
                    '                            Submission is due in next two days');
            }
        }
    }
</script>
<style lang="scss">


</style>
