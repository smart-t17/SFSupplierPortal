<template>
    <div class="main-container">
        <!-- Header -->
        <adm-header></adm-header>
        <!-- Header End -->

        <!-- Main -->
        <div class="main-content">
            <div class="container-fluid p-0">
                <div class="adm-cust-reg-list-div">
                    <div class="page-title pink-title-bg">
                        <span> <a>Trade Shows </a> / Customer Registration List </span>
                    </div>

                    <div class="adm-cust-reg-list-main main-div gray-bg">
                        <div class="row m-0">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div id="datatable" class="datatable">
                                    <v-client-table :data="tableData" :columns="columns" :options="options">
                                        <div slot="ACTION" slot-scope="props" class="action-btn">
                                            <a class="fa fa-file-pdf-o " href="/tradeshows/adm-edit-customer"></a>
                                            <a class="fa fa-edit ml5"></a>
                                        </div>
                                        <div slot="afterFilter" class="datatable-filter-div">
                                            <datatable-buttons actionClass="datatable-filter ml5" fontAwesomeClass="fa-upload"
                                                               actionLabel="Export"></datatable-buttons>
                                            <datatable-buttons actionClass="datatable-filter ml5" fontAwesomeClass="fa-share"
                                                               actionLabel="Share"></datatable-buttons>
                                            <datatable-buttons actionClass="datatable-filter ml5" fontAwesomeClass="fa-paper-plane"
                                                               actionLabel="Notify" dataLink="/tradeshows/adm-send-notification"></datatable-buttons>
                                            <datatable-buttons actionClass="datatable-filter ml5" fontAwesomeClass="fa-eye"
                                                               actionLabel="Unhide"></datatable-buttons>
                                            <datatable-buttons actionClass="datatable-filter ml5" fontAwesomeClass="fa-eye-slash"
                                                               actionLabel="Hide"></datatable-buttons>
                                            <datatable-buttons actionClass="datatable-filter ml5" fontAwesomeClass="fa-comment"
                                                               actionLabel="Coment"></datatable-buttons>
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
                columns: ['ID' , 'LOCATION', 'NAME' , 'COMPANY' , 'EMAIL' , 'REGISTERED_BY' , 'DATE' , 'ACTION'],
                tableData: [
                    {ID: 1, LOCATION: "Hamilton" , NAME: "Karen Neal", COMPANY: "Willow Cafe", EMAIL: "Willowcafe@gmail.com", REGISTERED_BY: "Portal", DATE: "29-01-19", ACTION: "" },
                    {ID: 2, LOCATION: "Hamilton" , NAME: "Karen Neal", COMPANY: "Willow Cafe", EMAIL: "Willowcafe@gmail.com", REGISTERED_BY: "Portal", DATE: "29-01-19", ACTION: "" },
                    {ID: 3, LOCATION: "Hamilton" , NAME: "Karen Neal", COMPANY: "Willow Cafe", EMAIL: "Willowcafe@gmail.com", REGISTERED_BY: "Portal", DATE: "29-01-19", ACTION: "" },
                    {ID: 4, LOCATION: "Hamilton" , NAME: "Karen Neal", COMPANY: "Willow Cafe", EMAIL: "Willowcafe@gmail.com", REGISTERED_BY: "Portal", DATE: "29-01-19", ACTION: "" },
                    {ID: 5, LOCATION: "Hamilton" , NAME: "Karen Neal", COMPANY: "Willow Cafe", EMAIL: "Willowcafe@gmail.com", REGISTERED_BY: "Portal", DATE: "29-01-19", ACTION: "" },
                    {ID: 6, LOCATION: "Hamilton" , NAME: "Karen Neal", COMPANY: "Willow Cafe", EMAIL: "Willowcafe@gmail.com", REGISTERED_BY: "Portal", DATE: "29-01-19", ACTION: "" },
                    {ID: 7, LOCATION: "Hamilton" , NAME: "Karen Neal", COMPANY: "Willow Cafe", EMAIL: "Willowcafe@gmail.com", REGISTERED_BY: "Portal", DATE: "29-01-19", ACTION: "" },
                    {ID: 8, LOCATION: "Hamilton" , NAME: "Karen Neal", COMPANY: "Willow Cafe", EMAIL: "Willowcafe@gmail.com", REGISTERED_BY: "Portal", DATE: "29-01-19", ACTION: "" },
                    {ID: 9, LOCATION: "Hamilton" , NAME: "Karen Neal", COMPANY: "Willow Cafe", EMAIL: "Willowcafe@gmail.com", REGISTERED_BY: "Portal", DATE: "29-01-19", ACTION: "" },
                    {ID: 10, LOCATION: "Hamilton" , NAME: "Karen Neal", COMPANY: "Willow Cafe", EMAIL: "Willowcafe@gmail.com", REGISTERED_BY: "Portal", DATE: "29-01-19", ACTION: "" },

                ],

                options: {
                    perPageValues: [10, 20, 30, 40, 50],
                    texts: {filterPlaceholder: "Search"},
                    sortable: [ 'LOCATION', 'NAME' , 'COMPANY' , 'EMAIL' , 'REGISTERED_BY' , 'DATE' ]
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