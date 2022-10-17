<template>
    <div class="main-container">
        <!-- Header -->
        <adm-header></adm-header>
        <!-- Header End -->

        <!-- Main -->
        <div class="main-content">
            <div class="container-fluid p-0">
                <div class="adm-productedit-req-div">
                    <div class="page-title purple-title-bg">
                        <span> Product Edit Request List </span>
                    </div>

                    <div class="adm-productedit-req-main main-div gray-bg">
                        <div class="row m-0">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div id="datatable" class="datatable">
                                    <v-client-table :data="tableData" :columns="columns" :options="options">
                                        <div slot="ACTION" slot-scope="props" class="action-btn">
                                            <a class="fa fa-edit" href="/adm-edit-myproduct-request"></a>
                                            <a class="fa fa-share ml5"></a>
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
                columns: ['ID' , 'BRANCH', 'VENDOR' , 'SF_PRODUCT_CODE', 'BRAND', 'SF_PRODUCT_DESCRIPTION','CATAGORY', 'UOM' , 'SUBMISSION_DATE' , 'ACTION'],
                tableData: [
                    {ID: 1, BRANCH: "Auckland", VENDOR: "Wilsonc", SF_PRODUCT_CODE: "PASTAP5", BRAND: "Diamond" , SF_PRODUCT_DESCRIPTION: "Penne Pasta 5Kg" , CATAGORY: "Dry" , UOM:"BTL", SUBMISSION_DATE:"02-08-18" , ACTION: "" },
                    {ID: 2, BRANCH: "Auckland", VENDOR: "Wilsonc", SF_PRODUCT_CODE: "PASTAP5", BRAND: "Diamond" , SF_PRODUCT_DESCRIPTION: "Penne Pasta 5Kg" , CATAGORY: "Dry" , UOM:"BTL", SUBMISSION_DATE:"02-08-18" , ACTION: "" },
                    {ID: 3, BRANCH: "Auckland", VENDOR: "Wilsonc", SF_PRODUCT_CODE: "PASTAP5", BRAND: "Diamond" , SF_PRODUCT_DESCRIPTION: "Penne Pasta 5Kg" , CATAGORY: "Dry" , UOM:"BTL", SUBMISSION_DATE:"02-08-18" , ACTION: "" },
                    {ID: 4, BRANCH: "Auckland", VENDOR: "Wilsonc", SF_PRODUCT_CODE: "PASTAP5", BRAND: "Diamond" , SF_PRODUCT_DESCRIPTION: "Penne Pasta 5Kg" , CATAGORY: "Dry" , UOM:"BTL", SUBMISSION_DATE:"02-08-18" , ACTION: "" },
                    {ID: 5, BRANCH: "Auckland", VENDOR: "Wilsonc", SF_PRODUCT_CODE: "PASTAP5", BRAND: "Diamond" , SF_PRODUCT_DESCRIPTION: "Penne Pasta 5Kg" , CATAGORY: "Dry" , UOM:"BTL", SUBMISSION_DATE:"02-08-18" , ACTION: "" },
                    {ID: 6, BRANCH: "Auckland", VENDOR: "Wilsonc", SF_PRODUCT_CODE: "PASTAP5", BRAND: "Diamond" , SF_PRODUCT_DESCRIPTION: "Penne Pasta 5Kg" , CATAGORY: "Dry" , UOM:"BTL", SUBMISSION_DATE:"02-08-18" , ACTION: "" },
                    {ID: 7, BRANCH: "Auckland", VENDOR: "Wilsonc", SF_PRODUCT_CODE: "PASTAP5", BRAND: "Diamond" , SF_PRODUCT_DESCRIPTION: "Penne Pasta 5Kg" , CATAGORY: "Dry" , UOM:"BTL", SUBMISSION_DATE:"02-08-18" , ACTION: "" },
                    {ID: 8, BRANCH: "Auckland", VENDOR: "Wilsonc", SF_PRODUCT_CODE: "PASTAP5", BRAND: "Diamond" , SF_PRODUCT_DESCRIPTION: "Penne Pasta 5Kg" , CATAGORY: "Dry" , UOM:"BTL", SUBMISSION_DATE:"02-08-18" , ACTION: "" },
                    {ID: 9, BRANCH: "Auckland", VENDOR: "Wilsonc", SF_PRODUCT_CODE: "PASTAP5", BRAND: "Diamond" , SF_PRODUCT_DESCRIPTION: "Penne Pasta 5Kg" , CATAGORY: "Dry" , UOM:"BTL", SUBMISSION_DATE:"02-08-18" , ACTION: "" },


                ],

                options: {
                    perPageValues: [10, 20, 30, 40, 50],
                    texts: {filterPlaceholder: "Search"},
                    sortable: ['BRANCH', 'VENDOR' ]
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