<template>
    <div class="main-container">
        <!-- Header -->
        <adm-header></adm-header>
        <!-- Header End -->

        <!-- Main -->
        <div class="main-content">
            <div class="container-fluid p-0">
                <div class="adm-sb-sublist-div">
                    <div class="page-title orange-title-bg">
                        <span> Scan Back Submission List </span>
                    </div>

                    <div class="adm-sb-sublist-main main-div gray-bg">
                        <div class="row m-0">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div id="datatable" class="datatable">
                                    <v-client-table :data="tableData" :columns="columns" :options="options">
                                        <div slot="ACTION" slot-scope="props" class="action-btn">
                                            <a class="fa fa-edit mr5" href="/scan-back/adm-submission-edit"></a>
                                            <a class="fa fa-share"></a>
                                        </div>
                                        <div slot="afterFilter" class="datatable-filter-div">
                                            <datatable-buttons actionClass="datatable-filter"
                                                               fontAwesomeClass="fa-filter"
                                                               actionLabel="Filter"></datatable-buttons>

                                        </div>
                                    </v-client-table>
                                </div>
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

    import Vue from 'vue'
    import {ServerTable, ClientTable, Event} from 'vue-tables-2'

    Vue.use(ClientTable, {}, false, 'bootstrap4', 'default');

    export default {
        data() {
            return {
                columns: ['ID', 'BRANCH', 'VENDOR', 'SF_BUYER', 'SF_REP', 'CUSTOMER_NAME', 'VENDOR_PRODUCT_CODE', 'SF_PRODUCT_CODE', 'BRAND', 'SF_PRODUCT_DESCRIPTION', 'CLAIM_$', 'FREE_STOCK', 'ACTION'],
                tableData: [
                    {
                        ID: 1,
                        BRANCH: "Auckland",
                        VENDOR: "Wilsonc",
                        SF_BUYER: "Saurabh P",
                        SF_REP: "Saurabh P",
                        CUSTOMER_NAME: "Shed 5",
                        VENDOR_PRODUCT_CODE: "IIT01",
                        SF_PRODUCT_CODE: "PASTAP5",
                        BRAND: "Diamond",
                        SF_PRODUCT_DESCRIPTION: "bcbcbcv",
                        CLAIM_$: "$15.00",
                        FREE_STOCK: "1 CTN",
                        ACTION: ""
                    },
                    {
                        ID: 2,
                        BRANCH: "Auckland",
                        VENDOR: "Wilsonc",
                        SF_BUYER: "Saurabh P",
                        SF_REP: "Bobbie S",
                        CUSTOMER_NAME: "Shed 5",
                        VENDOR_PRODUCT_CODE: "IIT01",
                        SF_PRODUCT_CODE: "PASTAP5",
                        BRAND: "Diamond",
                        SF_PRODUCT_DESCRIPTION: "Penne Pasta 5Kg",
                        CLAIM_$: "$15.00",
                        FREE_STOCK: "1 CTN",
                        ACTION: ""
                    },
                    {
                        ID: 3,
                        BRANCH: "Auckland",
                        VENDOR: "Wilsonc",
                        SF_BUYER: "Saurabh P",
                        SF_REP: "Bobbie S",
                        CUSTOMER_NAME: "Shed 5",
                        VENDOR_PRODUCT_CODE: "IIT01",
                        SF_PRODUCT_CODE: "PASTAP5",
                        BRAND: "Diamond",
                        SF_PRODUCT_DESCRIPTION: "Penne Pasta 5Kg",
                        CLAIM_$: "$15.00",
                        FREE_STOCK: "1 CTN",
                        ACTION: ""
                    },
                    {
                        ID: 4,
                        BRANCH: "Auckland",
                        VENDOR: "Wilsonc",
                        SF_BUYER: "Saurabh P",
                        SF_REP: "Bobbie S",
                        CUSTOMER_NAME: "Shed 5",
                        VENDOR_PRODUCT_CODE: "IIT01",
                        SF_PRODUCT_CODE: "PASTAP5",
                        BRAND: "Diamond",
                        SF_PRODUCT_DESCRIPTION: "Penne Pasta 5Kg",
                        CLAIM_$: "$15.00",
                        FREE_STOCK: "1 CTN",
                        ACTION: ""
                    },
                    {
                        ID: 5,
                        BRANCH: "Auckland",
                        VENDOR: "Wilsonc",
                        SF_BUYER: "Saurabh P",
                        SF_REP: "Bobbie S",
                        CUSTOMER_NAME: "Shed 5",
                        VENDOR_PRODUCT_CODE: "IIT01",
                        SF_PRODUCT_CODE: "PASTAP5",
                        BRAND: "Diamond",
                        SF_PRODUCT_DESCRIPTION: "Penne Pasta 5Kg",
                        CLAIM_$: "$15.00",
                        FREE_STOCK: "1 CTN",
                        ACTION: ""
                    },
                    {
                        ID: 6,
                        BRANCH: "Auckland",
                        VENDOR: "Wilsonc",
                        SF_BUYER: "Saurabh P",
                        SF_REP: "Bobbie S",
                        CUSTOMER_NAME: "Shed 5",
                        VENDOR_PRODUCT_CODE: "IIT01",
                        SF_PRODUCT_CODE: "PASTAP5",
                        BRAND: "Diamond",
                        SF_PRODUCT_DESCRIPTION: "Penne Pasta 5Kg",
                        CLAIM_$: "$15.00",
                        FREE_STOCK: "1 CTN",
                        ACTION: ""
                    },
                    {
                        ID: 7,
                        BRANCH: "Auckland",
                        VENDOR: "Wilsonc",
                        SF_BUYER: "Saurabh P",
                        SF_REP: "Bobbie S",
                        CUSTOMER_NAME: "Shed 5",
                        VENDOR_PRODUCT_CODE: "IIT01",
                        SF_PRODUCT_CODE: "PASTAP5",
                        BRAND: "Diamond",
                        SF_PRODUCT_DESCRIPTION: "Penne Pasta 5Kg",
                        CLAIM_$: "$15.00",
                        FREE_STOCK: "1 CTN",
                        ACTION: ""
                    },
                    {
                        ID: 8,
                        BRANCH: "Auckland",
                        VENDOR: "Wilsonc",
                        SF_BUYER: "Saurabh P",
                        SF_REP: "Bobbie S",
                        CUSTOMER_NAME: "Shed 5",
                        VENDOR_PRODUCT_CODE: "IIT01",
                        SF_PRODUCT_CODE: "PASTAP5",
                        BRAND: "Diamond",
                        SF_PRODUCT_DESCRIPTION: "Penne Pasta 5Kg",
                        CLAIM_$: "$15.00",
                        FREE_STOCK: "1 CTN",
                        ACTION: ""
                    },
                    {
                        ID: 9,
                        BRANCH: "Auckland",
                        VENDOR: "Wilsonc",
                        SF_BUYER: "Saurabh P",
                        SF_REP: "Bobbie S",
                        CUSTOMER_NAME: "Shed 5",
                        VENDOR_PRODUCT_CODE: "IIT01",
                        SF_PRODUCT_CODE: "PASTAP5",
                        BRAND: "Diamond",
                        SF_PRODUCT_DESCRIPTION: "Penne Pasta 5Kg",
                        CLAIM_$: "$15.00",
                        FREE_STOCK: "1 CTN",
                        ACTION: ""
                    },
                    {
                        ID: 10,
                        BRANCH: "Auckland",
                        VENDOR: "Wilsonc",
                        SF_BUYER: "Saurabh P",
                        SF_REP: "Bobbie S",
                        CUSTOMER_NAME: "Shed 5",
                        VENDOR_PRODUCT_CODE: "IIT01",
                        SF_PRODUCT_CODE: "PASTAP5",
                        BRAND: "Diamond",
                        SF_PRODUCT_DESCRIPTION: "Penne Pasta 5Kg",
                        CLAIM_$: "$15.00",
                        FREE_STOCK: "1 CTN",
                        ACTION: ""
                    },
                    {
                        ID: 11,
                        BRANCH: "Auckland",
                        VENDOR: "Wilsonc",
                        SF_BUYER: "Saurabh P",
                        SF_REP: "Bobbie S",
                        CUSTOMER_NAME: "Shed 5",
                        VENDOR_PRODUCT_CODE: "IIT01",
                        SF_PRODUCT_CODE: "PASTAP5",
                        BRAND: "Diamond",
                        SF_PRODUCT_DESCRIPTION: "Penne Pasta 5Kg",
                        CLAIM_$: "$15.00",
                        FREE_STOCK: "1 CTN",
                        ACTION: ""
                    },
                    {
                        ID: 12,
                        BRANCH: "Auckland",
                        VENDOR: "Wilsonc",
                        SF_BUYER: "Saurabh P",
                        SF_REP: "Bobbie S",
                        CUSTOMER_NAME: "Shed 5",
                        VENDOR_PRODUCT_CODE: "IIT01",
                        SF_PRODUCT_CODE: "PASTAP5",
                        BRAND: "Diamond",
                        SF_PRODUCT_DESCRIPTION: "Penne Pasta 5Kg",
                        CLAIM_$: "$15.00",
                        FREE_STOCK: "1 CTN",
                        ACTION: ""
                    },
                    {
                        ID: 13,
                        BRANCH: "Auckland",
                        VENDOR: "Wilsonc",
                        SF_BUYER: "Saurabh P",
                        SF_REP: "Bobbie S",
                        CUSTOMER_NAME: "Shed 5",
                        VENDOR_PRODUCT_CODE: "IIT01",
                        SF_PRODUCT_CODE: "PASTAP5",
                        BRAND: "Diamond",
                        SF_PRODUCT_DESCRIPTION: "Penne Pasta 5Kg",
                        CLAIM_$: "$15.00",
                        FREE_STOCK: "1 CTN",
                        ACTION: ""
                    },
                    {
                        ID: 14,
                        BRANCH: "Auckland",
                        VENDOR: "Wilsonc",
                        SF_BUYER: "Saurabh P",
                        SF_REP: "Bobbie S",
                        CUSTOMER_NAME: "Shed 5",
                        VENDOR_PRODUCT_CODE: "IIT01",
                        SF_PRODUCT_CODE: "PASTAP5",
                        BRAND: "Diamond",
                        SF_PRODUCT_DESCRIPTION: "Penne Pasta 5Kg",
                        CLAIM_$: "$15.00",
                        FREE_STOCK: "1 CTN",
                        ACTION: ""
                    },

                ],

                options: {
                    perPageValues: [10, 20, 30, 40, 50],
                    texts: {filterPlaceholder: "Search"},
                    sortable: ['BRANCH', 'VENDOR']
                    // see the options API
                }
            }
        },
        components: {
            AdmHeader, DatatableButtons
        }
    }

</script>
<style lang="scss">
</style>