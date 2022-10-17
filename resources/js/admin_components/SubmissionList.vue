<template>
    <div class="main-container">
        <!-- Header -->
        <adm-header></adm-header>
        <!-- Header End -->

        <!-- Main -->
        <div class="main-content">
            <div class="container-fluid p-0">
                <div class="adm-submission-list-div">
                    <div class="page-title submission-title-bg">
                        <span>Submission List</span>
                    </div>

                    <div class="adm-submission-list-main main-div gray-bg">
                        <div class="row m-0">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div id="datatable" class="datatable">
                                    <v-client-table :data="tableData" :columns="columns" :options="options">
                                        <div slot="action" slot-scope="props" class="action-btn">
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
                columns: ['Id' ,'Date', 'Vendor', 'Title'],
                tableData: [
                    {Id: 1, Date: "29-01-19", Vendor: "Tegel", Title: "Monthly Specials"},
                    {Id: 2, Date: "29-01-19", Vendor: "Tegel", Title: "Monthly Specials"},
                    {Id: 3, Date: "29-01-19", Vendor: "Tegel", Title: "Monthly Specials"},
                    {Id: 4, Date: "29-01-19", Vendor: "Tegel", Title: "Monthly Specials"},
                    {Id: 5, Date: "29-01-19", Vendor: "Tegel", Title: "Monthly Specials"},
                    {Id: 6, Date: "29-01-19", Vendor: "Tegel", Title: "Monthly Specials"},
                    {Id: 7, Date: "29-01-19", Vendor: "Tegel", Title: "Monthly Specials"},
                    {Id: 8, Date: "29-01-19", Vendor: "Tegel", Title: "Monthly Specials"},
                    {Id: 9, Date: "29-01-19", Vendor: "Tegel", Title: "Monthly Specials"},
                    {Id: 10, Date: "29-01-19", Vendor: "Tegel", Title: "Monthly Specials"},
                    {Id: 11, Date: "29-01-19", Vendor: "Tegel", Title: "Monthly Specials"},



                ],
                options: {
                    perPageValues: [10, 20, 30, 40, 50],
                    texts: {filterPlaceholder: "Search"},
                    sortable: ['Date', 'Vendor' , 'Title']
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