<template>
    <div class="main-container">
        <!-- Header -->
        <app-header></app-header>
        <!-- Header End -->

        <!-- Main -->
        <div class="main-content">
            <div class="container-fluid p-0">
                <div class="landing-div">
                    <div class="home-box-row row m-0 mb50 xs-mb-0">
                        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                            <div class="box">
                                <a href="">
                                    <div class="home-box h-b-1">
                                        <div class="containbox">
                                            <img src="../../assets/images/monthlyspacial.png" class="img-responsive"/>
                                            <span>Monthly Specials</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 center">
                            <div class="box">
                                <a href="">
                                    <div class="home-box h-b-2">
                                        <div class="containbox">
                                            <img src="../../assets/images/tradshow.png" class="img-responsive"/>
                                            <span>Trade Shows</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                            <div class="box">
                                <a href="">
                                    <div class="home-box h-b-3">
                                        <div class="containbox">
                                            <img src="../../assets/images/annualcatalogues.png" class="img-responsive"/>
                                            <span>Annual Catalogues</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="home-box-row row m-0">
                        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                            <div class="box">
                                <a href="">
                                    <div class="home-box h-b-4">
                                        <div class="containbox">
                                            <img src="../../assets/images/scanback.png" class="img-responsive"/>
                                            <span>Scan Back/ Rebates</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12 center">
                            <div class="box">
                                <a href="">
                                    <div class="home-box h-b-5">
                                        <div class="containbox">
                                            <img src="../../assets/images/newproduct.png" class="img-responsive"/>
                                            <span>New Product Request Form</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                            <div class="box">
                                <a href="">
                                    <div class="home-box h-b-6">
                                        <div class="containbox">
                                            <img src="../../assets/images/myproducts.png" class="img-responsive"/>
                                            <span>My Products</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>

                        <!--<div class="row">
                            <v-select name="customer_type"
                                      :options="customerTypeOptions"></v-select>
                        </div>-->

                    </div>
                </div>
            </div>
        </div>
        <!-- Main End -->

        <!-- Footer -->
        <app-footer></app-footer>
        <!-- Footer End -->

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
    import AppHeader from '../components/Header.vue'
    import AppFooter from '../components/Footer.vue'
    import Vue from 'vue'
    import vSelect from 'vue-select'

    Vue.component('v-select', vSelect);

    export default {
        data() {
            return {
                customerTypeOptions: [
                    {label: 'User', value: '1'},
                    {label: 'Investor', value: '2'},
                    {label: 'Broker', value: '3'},
                    {label: 'Other', value: '0'}
                ]
            }
        },
        components: {
            AppHeader, AppFooter
        }
    }
</script>
<style lang="scss">


</style>