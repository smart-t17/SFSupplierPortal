<template>
    <div class="main-container">
        <!-- Header -->
        <adm-header></adm-header>
        <!-- Header End -->

        <!-- Main -->
        <div class="main-content">
            <div class="container-fluid p-0">
                <div class="adm-product-sub-div">
                    <div class="page-title green-title-bg">
                        <span> <a>Product Submission </a> / March 2019  </span>
                    </div>

                    <div class="adm-product-sub-main main-div gray-bg">
                        <div class="row m-0">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div id="datatable" class="datatable">
                                    <v-client-table :data="tableData" :columns="columns" :options="options">
                                        <div slot="SELECT" slot-scope="props" class="action-btn">
                                            <checkbox label="" cbvalue="1"></checkbox>
                                        </div>
                                        <div slot="ACTION" slot-scope="props" class="action-btn">
                                            <a class="fa fa-download  "></a>
                                            <a class="fa fa-edit ml10"></a>
                                        </div>
                                        <div slot="afterFilter" class="datatable-filter-div">
                                            <datatable-buttons actionClass="datatable-filter ml3"
                                                               fontAwesomeClass="fa-upload"
                                                               actionLabel="Export"></datatable-buttons>
                                            <datatable-buttons actionClass="datatable-filter ml3"
                                                               fontAwesomeClass="fa-share"
                                                               actionLabel="Share"></datatable-buttons>
                                            <datatable-buttons actionClass="datatable-filter ml3"
                                                               fontAwesomeClass="fa-paper-plane"
                                                               actionLabel="Notify" dataLink="/product-sub/adm-send-notification"></datatable-buttons>
                                            <datatable-buttons actionClass="datatable-filter ml3"
                                                               fontAwesomeClass="fa-eye"
                                                               actionLabel="Unhide"></datatable-buttons>
                                            <datatable-buttons actionClass="datatable-filter ml3"
                                                               fontAwesomeClass="fa-eye-slash"
                                                               actionLabel="Hide"></datatable-buttons>
                                            <datatable-buttons actionClass="datatable-filter ml3"
                                                               fontAwesomeClass="fa-window-maximize"
                                                               actionLabel="Ungroup"></datatable-buttons>
                                            <datatable-buttons actionClass="datatable-filter ml3"
                                                               fontAwesomeClass="fa-window-restore"
                                                               actionLabel="Group"></datatable-buttons>
                                            <datatable-buttons actionClass="datatable-filter ml3"
                                                               fontAwesomeClass="fa-plus"
                                                               actionLabel="Add Row"></datatable-buttons>
                                            <datatable-buttons actionClass="datatable-filter ml3"
                                                               fontAwesomeClass="fa-filter"datatable-action-btn
                                                               actionLabel="Filter"></datatable-buttons>
                                        </div>
                                    </v-client-table>
                                </div>
                            </div>
                        </div>
                        <div class="row m-0">
                            <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 item-box xs-p-15 sm-p-15 mtminus90">

                                <button-block btnClass="mt30 green-bg mr10" btnLabel="SAVE CHANGES"></button-block>
                                <button-block btnClass="mt30 mr10" btnLabel="Discard"></button-block>

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
    import DatatableButtons from '../partials/DatatableButtons.vue'
    import ButtonBlock from '../partials/ButtonBlock.vue'
    import Checkbox from '../partials/Checkbox.vue'

    import Vue from 'vue'
    import {ServerTable, ClientTable, Event} from 'vue-tables-2'

    Vue.use(ClientTable, {}, false, 'bootstrap4', 'default');

    export default {
        data() {
            return {
                columns: ['SELECT', 'ID', 'SPACE', 'VENDOR', 'CATEGORY', 'BRAND', 'PRODUCT_CODE', 'SF_PRODUCT_CODE', 'SF_PRODUCT_DESCRIPTION', 'UOM', 'SCAN_$', 'OFF_INVOICE', 'EVERDAY_COST', 'PROMO_COST', 'FINAL_PRICE', 'MARGIN', 'COMMENTS', 'ACTION'],
                tableData: [
                    {
                        SELECT: "",
                        ID: 1,
                        SPACE: "Front",
                        VENDOR: "Wilsonc",
                        CATEGORY: "Dry",
                        BRAND: "Diamond",
                        PRODUCT_CODE: "IIT01",
                        SF_PRODUCT_CODE: "PASTAP5",
                        SF_PRODUCT_DESCRIPTION: "Penne Pasta 5Kg",
                        UOM: "BAG",
                        SCAN_$: "$1.08",
                        OFF_INVOICE: "$13.06",
                        EVERDAY_COST: "$13.06",
                        PROMO_COST: "$10.90",
                        FINAL_PRICE: "$12.50",
                        MARGIN: "2.80%",
                        COMMENTS: "Vegan",
                        ACTION: ""
                    },
                    {
                        SELECT: "",
                        ID: 2,
                        SPACE: "Front",
                        VENDOR: "Wilsonc",
                        CATEGORY: "Dry",
                        BRAND: "Diamond",
                        PRODUCT_CODE: "IIT01",
                        SF_PRODUCT_CODE: "PASTAP5",
                        SF_PRODUCT_DESCRIPTION: "Penne Pasta 5Kg",
                        UOM: "BAG",
                        SCAN_$: "$1.08",
                        OFF_INVOICE: "$13.06",
                        EVERDAY_COST: "$13.06",
                        PROMO_COST: "$10.90",
                        FINAL_PRICE: "$12.50",
                        MARGIN: "2.80%",
                        COMMENTS: "Vegan",
                        ACTION: ""
                    },
                    {
                        SELECT: "",
                        ID: 3,
                        SPACE: "Front",
                        VENDOR: "Wilsonc",
                        CATEGORY: "Dry",
                        BRAND: "Diamond",
                        PRODUCT_CODE: "IIT01",
                        SF_PRODUCT_CODE: "PASTAP5",
                        SF_PRODUCT_DESCRIPTION: "Penne Pasta 5Kg",
                        UOM: "BAG",
                        SCAN_$: "$1.08",
                        OFF_INVOICE: "$13.06",
                        EVERDAY_COST: "$13.06",
                        PROMO_COST: "$10.90",
                        FINAL_PRICE: "$12.50",
                        MARGIN: "2.80%",
                        COMMENTS: "Vegan",
                        ACTION: ""
                    },
                    {
                        SELECT: "",
                        ID: 4,
                        SPACE: "Front",
                        VENDOR: "Wilsonc",
                        CATEGORY: "Dry",
                        BRAND: "Diamond",
                        PRODUCT_CODE: "IIT01",
                        SF_PRODUCT_CODE: "PASTAP5",
                        SF_PRODUCT_DESCRIPTION: "Penne Pasta 5Kg",
                        UOM: "BAG",
                        SCAN_$: "$1.08",
                        OFF_INVOICE: "$13.06",
                        EVERDAY_COST: "$13.06",
                        PROMO_COST: "$10.90",
                        FINAL_PRICE: "$12.50",
                        MARGIN: "2.80%",
                        COMMENTS: "Vegan",
                        ACTION: ""
                    },
                    {
                        SELECT: "",
                        ID: 5,
                        SPACE: "Front",
                        VENDOR: "Wilsonc",
                        CATEGORY: "Dry",
                        BRAND: "Diamond",
                        PRODUCT_CODE: "IIT01",
                        SF_PRODUCT_CODE: "PASTAP5",
                        SF_PRODUCT_DESCRIPTION: "Penne Pasta 5Kg",
                        UOM: "BAG",
                        SCAN_$: "$1.08",
                        OFF_INVOICE: "$13.06",
                        EVERDAY_COST: "$13.06",
                        PROMO_COST: "$10.90",
                        FINAL_PRICE: "$12.50",
                        MARGIN: "2.80%",
                        COMMENTS: "Vegan",
                        ACTION: ""
                    },
                    {
                        SELECT: "",
                        ID: 6,
                        SPACE: "Front",
                        VENDOR: "Wilsonc",
                        CATEGORY: "Dry",
                        BRAND: "Diamond",
                        PRODUCT_CODE: "IIT01",
                        SF_PRODUCT_CODE: "PASTAP5",
                        SF_PRODUCT_DESCRIPTION: "Penne Pasta 5Kg",
                        UOM: "BAG",
                        SCAN_$: "$1.08",
                        OFF_INVOICE: "$13.06",
                        EVERDAY_COST: "$13.06",
                        PROMO_COST: "$10.90",
                        FINAL_PRICE: "$12.50",
                        MARGIN: "2.80%",
                        COMMENTS: "Vegan",
                        ACTION: ""
                    },
                    {
                        SELECT: "",
                        ID: 7,
                        SPACE: "Front",
                        VENDOR: "Wilsonc",
                        CATEGORY: "Dry",
                        BRAND: "Diamond",
                        PRODUCT_CODE: "IIT01",
                        SF_PRODUCT_CODE: "PASTAP5",
                        SF_PRODUCT_DESCRIPTION: "Penne Pasta 5Kg",
                        UOM: "BAG",
                        SCAN_$: "$1.08",
                        OFF_INVOICE: "$13.06",
                        EVERDAY_COST: "$13.06",
                        PROMO_COST: "$10.90",
                        FINAL_PRICE: "$12.50",
                        MARGIN: "2.80%",
                        COMMENTS: "Vegan",
                        ACTION: ""
                    },
                    {
                        SELECT: "",
                        ID: 8,
                        SPACE: "Front",
                        VENDOR: "Wilsonc",
                        CATEGORY: "Dry",
                        BRAND: "Diamond",
                        PRODUCT_CODE: "IIT01",
                        SF_PRODUCT_CODE: "PASTAP5",
                        SF_PRODUCT_DESCRIPTION: "Penne Pasta 5Kg",
                        UOM: "BAG",
                        SCAN_$: "$1.08",
                        OFF_INVOICE: "$13.06",
                        EVERDAY_COST: "$13.06",
                        PROMO_COST: "$10.90",
                        FINAL_PRICE: "$12.50",
                        MARGIN: "2.80%",
                        COMMENTS: "Vegan",
                        ACTION: ""
                    },
                    {
                        SELECT: "",
                        ID: 9,
                        SPACE: "Front",
                        VENDOR: "Wilsonc",
                        CATEGORY: "Dry",
                        BRAND: "Diamond",
                        PRODUCT_CODE: "IIT01",
                        SF_PRODUCT_CODE: "PASTAP5",
                        SF_PRODUCT_DESCRIPTION: "Penne Pasta 5Kg",
                        UOM: "BAG",
                        SCAN_$: "$1.08",
                        OFF_INVOICE: "$13.06",
                        EVERDAY_COST: "$13.06",
                        PROMO_COST: "$10.90",
                        FINAL_PRICE: "$12.50",
                        MARGIN: "2.80%",
                        COMMENTS: "Vegan",
                        ACTION: ""
                    },
                    {
                        SELECT: "",
                        ID: 10,
                        SPACE: "Front",
                        VENDOR: "Wilsonc",
                        CATEGORY: "Dry",
                        BRAND: "Diamond",
                        PRODUCT_CODE: "IIT01",
                        SF_PRODUCT_CODE: "PASTAP5",
                        SF_PRODUCT_DESCRIPTION: "Penne Pasta 5Kg",
                        UOM: "BAG",
                        SCAN_$: "$1.08",
                        OFF_INVOICE: "$13.06",
                        EVERDAY_COST: "$13.06",
                        PROMO_COST: "$10.90",
                        FINAL_PRICE: "$12.50",
                        MARGIN: "2.80%",
                        COMMENTS: "Vegan",
                        ACTION: ""
                    },
                    {
                        SELECT: "",
                        ID: 11,
                        SPACE: "Front",
                        VENDOR: "Wilsonc",
                        CATEGORY: "Dry",
                        BRAND: "Diamond",
                        PRODUCT_CODE: "IIT01",
                        SF_PRODUCT_CODE: "PASTAP5",
                        SF_PRODUCT_DESCRIPTION: "Penne Pasta 5Kg",
                        UOM: "BAG",
                        SCAN_$: "$1.08",
                        OFF_INVOICE: "$13.06",
                        EVERDAY_COST: "$13.06",
                        PROMO_COST: "$10.90",
                        FINAL_PRICE: "$12.50",
                        MARGIN: "2.80%",
                        COMMENTS: "Vegan",
                        ACTION: ""
                    },


                ],

                options: {
                    perPageValues: [10, 20, 30, 40, 50],
                    texts: {filterPlaceholder: "Search"},
                    sortable: ['SPACE', 'VENDOR', 'CATEGORY', 'BRAND']
                    // see the options API
                }
            }
        },
        components: {
            AdmHeader, DatatableButtons, ButtonBlock, Checkbox
        }
    }

</script>
<style lang="scss">
</style>