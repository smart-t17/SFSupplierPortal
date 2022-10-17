<template>
    <div class="main-container">
        <!-- Header -->
        <adm-header></adm-header>
        <!-- Header End -->

        <!-- Main -->
        <div class="main-content">
            <div class="container-fluid p-0">
                <div class="adm-subapproved-div">
                    <div class="page-title orange-title-bg">
                        <span><a>Scan Back Submission List</a> / Declined </span>
                    </div>

                    <div class="adm-subapproved-main main-div gray-bg">
                        <div class="row m-0">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div id="datatable" class="datatable">
                                    <v-client-table :data="tableData" :columns="columns" :options="options">
                                        <div slot="ACTION" slot-scope="props" class="action-btn">
                                            <a class="fa fa-edit"></a>
                                        </div>
                                        <div slot="afterFilter" class="datatable-filter-div">
                                            <datatable-buttons actionClass="datatable-filter ml5" fontAwesomeClass="fa-upload"
                                                               actionLabel="Export"></datatable-buttons>
                                            <datatable-buttons actionClass="datatable-filter" fontAwesomeClass="fa-filter"
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
                columns: ['ID' , 'VENDOR' , 'BRANCH', 'SF_PRODUCT_CODE', 'BRAND' , 'SF_PRODUCT_DESCRIPTION', 'CUSTOMER_NAME', 'CLAIM_$','FREE_STOCK', 'SUBMISSION_DATE' , 'DECLINED_DATE' , 'APPROVED_BY', 'ACTION'],
                tableData: [
                    {ID: 1, VENDOR: "Wilsonc", BRANCH: "Auckland", SF_PRODUCT_CODE: "PASTAP5" , BRAND: "Diamond" , SF_PRODUCT_DESCRIPTION: "Penne Pasta 5Kg ", CUSTOMER_NAME: "Papamo’s" , CLAIM_$: "$15.00" , FREE_STOCK: "1 Ctn" ,  SUBMISSION_DATE:"02-08-18" , DECLINED_DATE: "15-08-18" , APPROVED_BY: "Cathy Yee" },
                    {ID: 2, VENDOR: "Wilsonc", BRANCH: "Auckland", SF_PRODUCT_CODE: "PASTAP5" , BRAND: "Diamond" , SF_PRODUCT_DESCRIPTION: "Penne Pasta 5Kg ", CUSTOMER_NAME: "Papamo’s" , CLAIM_$: "$15.00" , FREE_STOCK: "1 Ctn" ,  SUBMISSION_DATE:"02-08-18" , DECLINED_DATE: "15-08-18" , APPROVED_BY: "Cathy Yee" },
                    {ID: 3, VENDOR: "Wilsonc", BRANCH: "Auckland", SF_PRODUCT_CODE: "PASTAP5" , BRAND: "Diamond" , SF_PRODUCT_DESCRIPTION: "Penne Pasta 5Kg ", CUSTOMER_NAME: "Papamo’s" , CLAIM_$: "$15.00" , FREE_STOCK: "1 Ctn" ,  SUBMISSION_DATE:"02-08-18" , DECLINED_DATE: "15-08-18" , APPROVED_BY: "Cathy Yee" },
                    {ID: 4, VENDOR: "Wilsonc", BRANCH: "Auckland", SF_PRODUCT_CODE: "PASTAP5" , BRAND: "Diamond" , SF_PRODUCT_DESCRIPTION: "Penne Pasta 5Kg ", CUSTOMER_NAME: "Papamo’s" , CLAIM_$: "$15.00" , FREE_STOCK: "1 Ctn" ,  SUBMISSION_DATE:"02-08-18" , DECLINED_DATE: "15-08-18" , APPROVED_BY: "Cathy Yee" },
                    {ID: 5, VENDOR: "Wilsonc", BRANCH: "Auckland", SF_PRODUCT_CODE: "PASTAP5" , BRAND: "Diamond" , SF_PRODUCT_DESCRIPTION: "Penne Pasta 5Kg ", CUSTOMER_NAME: "Papamo’s" , CLAIM_$: "$15.00" , FREE_STOCK: "1 Ctn" ,  SUBMISSION_DATE:"02-08-18" , DECLINED_DATE: "15-08-18" , APPROVED_BY: "Cathy Yee" },
                    {ID: 6, VENDOR: "Wilsonc", BRANCH: "Auckland", SF_PRODUCT_CODE: "PASTAP5" , BRAND: "Diamond" , SF_PRODUCT_DESCRIPTION: "Penne Pasta 5Kg ", CUSTOMER_NAME: "Papamo’s" , CLAIM_$: "$15.00" , FREE_STOCK: "1 Ctn" ,  SUBMISSION_DATE:"02-08-18" , DECLINED_DATE: "15-08-18" , APPROVED_BY: "Cathy Yee" },
                    {ID: 7, VENDOR: "Wilsonc", BRANCH: "Auckland", SF_PRODUCT_CODE: "PASTAP5" , BRAND: "Diamond" , SF_PRODUCT_DESCRIPTION: "Penne Pasta 5Kg ", CUSTOMER_NAME: "Papamo’s" , CLAIM_$: "$15.00" , FREE_STOCK: "1 Ctn" ,  SUBMISSION_DATE:"02-08-18" , DECLINED_DATE: "15-08-18" , APPROVED_BY: "Cathy Yee" },
                    {ID: 8, VENDOR: "Wilsonc", BRANCH: "Auckland", SF_PRODUCT_CODE: "PASTAP5" , BRAND: "Diamond" , SF_PRODUCT_DESCRIPTION: "Penne Pasta 5Kg ", CUSTOMER_NAME: "Papamo’s" , CLAIM_$: "$15.00" , FREE_STOCK: "1 Ctn" ,  SUBMISSION_DATE:"02-08-18" , DECLINED_DATE: "15-08-18" , APPROVED_BY: "Cathy Yee" },
                    {ID: 9, VENDOR: "Wilsonc", BRANCH: "Auckland", SF_PRODUCT_CODE: "PASTAP5" , BRAND: "Diamond" , SF_PRODUCT_DESCRIPTION: "Penne Pasta 5Kg ", CUSTOMER_NAME: "Papamo’s" , CLAIM_$: "$15.00" , FREE_STOCK: "1 Ctn" ,  SUBMISSION_DATE:"02-08-18" , DECLINED_DATE: "15-08-18" , APPROVED_BY: "Cathy Yee" },
                    {ID: 10, VENDOR: "Wilsonc", BRANCH: "Auckland", SF_PRODUCT_CODE: "PASTAP5" , BRAND: "Diamond" , SF_PRODUCT_DESCRIPTION: "Penne Pasta 5Kg ", CUSTOMER_NAME: "Papamo’s" , CLAIM_$: "$15.00" , FREE_STOCK: "1 Ctn" ,  SUBMISSION_DATE:"02-08-18" , DECLINED_DATE: "15-08-18" , APPROVED_BY: "Cathy Yee" },
                    {ID: 11, VENDOR: "Wilsonc", BRANCH: "Auckland", SF_PRODUCT_CODE: "PASTAP5" , BRAND: "Diamond" , SF_PRODUCT_DESCRIPTION: "Penne Pasta 5Kg ", CUSTOMER_NAME: "Papamo’s" , CLAIM_$: "$15.00" , FREE_STOCK: "1 Ctn" ,  SUBMISSION_DATE:"02-08-18" , DECLINED_DATE: "15-08-18" , APPROVED_BY: "Cathy Yee" },
                    {ID: 12, VENDOR: "Wilsonc", BRANCH: "Auckland", SF_PRODUCT_CODE: "PASTAP5" , BRAND: "Diamond" , SF_PRODUCT_DESCRIPTION: "Penne Pasta 5Kg ", CUSTOMER_NAME: "Papamo’s" , CLAIM_$: "$15.00" , FREE_STOCK: "1 Ctn" ,  SUBMISSION_DATE:"02-08-18" , DECLINED_DATE: "15-08-18" , APPROVED_BY: "Cathy Yee" },
                ],

                options: {
                    perPageValues: [10, 20, 30, 40, 50],
                    texts: {filterPlaceholder: "Search"},
                    sortable: ['VENDOR' , 'BRANCH', 'BRAND']
                    // see the options API
                }
            }
        },
        components: {
            AdmHeader,DatatableButtons
        }
    }

</script>
<style lang="scss">
</style>