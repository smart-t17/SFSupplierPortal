<template>
    <div class="main-container">
        <!-- Header -->
        <adm-header></adm-header>
        <!-- Header End -->

        <!-- Main -->
        <div class="main-content">
            <div class="container-fluid p-0">
                <div class="adm-vendor-request-div">
                    <div class="page-title draft-title-bg">
                        <span> <a href="">Vendors</a> / New Request</span>
                    </div>

                    <div class="adm-vendor-request-main main-div gray-bg">
                        <div class="row m-0">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div id="datatable" class="datatable">
                                    <v-client-table :data="tableData" :columns="columns" :options="options">
                                        <div slot="Action" slot-scope="props" class="action-btn">
                                            <a class="fa fa-edit" href="/vendor/adm-new-request"></a>
                                        </div>
                                        <div slot="afterFilter" class="datatable-filter-div">
                                            <datatable-buttons actionClass="datatable-filter ml5" fontAwesomeClass="fa-upload"
                                                               actionLabel="Export"></datatable-buttons>
                                            <datatable-buttons actionClass="datatable-filter ml5" fontAwesomeClass="fa-share"
                                                               actionLabel="Share"></datatable-buttons>
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
                columns: ['Id' , 'Vendor', 'Name' , 'Company', 'Email', 'Job_Title', 'Action'],
                tableData: [
                    {Id: 1, Vendor: "Willow", Name: "Karen Neal", Company: "Willow Cafe", Email: "Willowcafe@gmail.com" , Job_Title: "Sales Rep" , Action: "" },
                    {Id: 2, Vendor: "Willow", Name: "Karen Neal", Company: "Willow Cafe", Email: "Willowcafe@gmail.com" , Job_Title: "Sales Rep" , Action: "" },
                    {Id: 3, Vendor: "Willow", Name: "Karen Neal", Company: "Willow Cafe", Email: "Willowcafe@gmail.com" , Job_Title: "Sales Rep" , Action: "" },
                    {Id: 4, Vendor: "Willow", Name: "Karen Neal", Company: "Willow Cafe", Email: "Willowcafe@gmail.com" , Job_Title: "Sales Rep" , Action: "" },
                    {Id: 5, Vendor: "Willow", Name: "Karen Neal", Company: "Willow Cafe", Email: "Willowcafe@gmail.com" , Job_Title: "Sales Rep" , Action: "" },
                    {Id: 6, Vendor: "Willow", Name: "Karen Neal", Company: "Willow Cafe", Email: "Willowcafe@gmail.com" , Job_Title: "Sales Rep" , Action: "" },
                    {Id: 7, Vendor: "Willow", Name: "Karen Neal", Company: "Willow Cafe", Email: "Willowcafe@gmail.com" , Job_Title: "Sales Rep" , Action: "" },
                    {Id: 8, Vendor: "Willow", Name: "Karen Neal", Company: "Willow Cafe", Email: "Willowcafe@gmail.com" , Job_Title: "Sales Rep" , Action: "" },
                    {Id: 9, Vendor: "Willow", Name: "Karen Neal", Company: "Willow Cafe", Email: "Willowcafe@gmail.com" , Job_Title: "Sales Rep" , Action: "" },



                ],

                options: {
                    perPageValues: [10, 20, 30, 40, 50],
                    texts: {filterPlaceholder: "Search"},
                    sortable: ['Vendor', 'Name' , 'Company', 'Email']
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