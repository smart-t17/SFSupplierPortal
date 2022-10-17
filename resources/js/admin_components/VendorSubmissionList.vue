<template>
    <div class="main-container">
        <!-- Header -->
        <adm-header></adm-header>
        <!-- Header End -->

        <!-- Main -->
        <div class="main-content">
            <div class="container-fluid p-0">
                <div class="adm-vendor-sublist-div">
                    <div class="page-title pink-title-bg">
                        <span> <a>Trade Shows </a> / Vendor Submission List </span>
                    </div>

                    <div class="adm-vendor-sublist-main main-div gray-bg">
                        <div class="row m-0">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div id="datatable" class="datatable">
                                    <v-client-table :data="tableData" :columns="columns" :options="options">
                                        <div slot="ACTION" slot-scope="props" class="action-btn">
                                            <!--<a class="fa fa-file-pdf-o "></a>-->
                                            <a class="fa fa-edit" href="/tradeshows/adm-edit-vendor"></a>
                                        </div>
                                        <div slot="afterFilter" class="datatable-filter-div">
                                            <datatable-buttons actionClass="datatable-filter ml5" fontAwesomeClass="fa-upload"
                                                               actionLabel="Export"></datatable-buttons>
                                            <datatable-buttons actionClass="datatable-filter ml5" fontAwesomeClass="fa-share"
                                                               actionLabel="Share"></datatable-buttons>
                                            <datatable-buttons actionClass="datatable-filter ml5" fontAwesomeClass="fa-paper-plane"
                                                               actionLabel="Notify"></datatable-buttons>
                                            <datatable-buttons actionClass="datatable-filter ml5" fontAwesomeClass="fa-eye"
                                                               actionLabel="Unhide"></datatable-buttons>
                                            <datatable-buttons actionClass="datatable-filter ml5" fontAwesomeClass="fa-eye-slash"
                                                               actionLabel="Hide"></datatable-buttons>
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
                columns: ['ID' , 'LOCATION', 'NAME' , 'COMPANY' , 'EMAIL' , 'APPLIANCES_1' , 'VOLT' , 'APPLIANCES_2' , 'VOLT' , 'APPLIANCES_3' , 'VOLT', 'COMMENTS' , 'ACTION'],
                tableData: [
                    {ID: 1, LOCATION: "Hamilton" , NAME: "Karen Neal", COMPANY: "Willow Cafe", EMAIL: "Willowcafe@gmail.com", APPLIANCES_1: "Laptop" , VOLT: "1200" , APPLIANCES_2: "Microwave" , VOLT: "" , APPLIANCES_3: "" , VOLT: "" ,  
    COMMENTS: "send wine sample to head branch." , ACTION: "" },
                    {ID: 2, LOCATION: "Hamilton" , NAME: "Karen Neal", COMPANY: "Willow Cafe", EMAIL: "Willowcafe@gmail.com", APPLIANCES_1: "Laptop" , VOLT: "1200" , APPLIANCES_2: "Microwave" , VOLT: "" , APPLIANCES_3: "" , VOLT: "" ,  
    COMMENTS: "send wine sample to head branch." , ACTION: "" },
                    {ID: 3, LOCATION: "Hamilton" , NAME: "Karen Neal", COMPANY: "Willow Cafe", EMAIL: "Willowcafe@gmail.com", APPLIANCES_1: "Laptop" , VOLT: "1200" , APPLIANCES_2: "Microwave" , VOLT: "" , APPLIANCES_3: "" , VOLT: "" ,  
    COMMENTS: "send wine sample to head branch." , ACTION: "" },
                    {ID: 4, LOCATION: "Hamilton" , NAME: "Karen Neal", COMPANY: "Willow Cafe", EMAIL: "Willowcafe@gmail.com", APPLIANCES_1: "Laptop" , VOLT: "1200" , APPLIANCES_2: "Microwave" , VOLT: "" , APPLIANCES_3: "" , VOLT: "" ,  
    COMMENTS: "send wine sample to head branch." , ACTION: "" },
                    {ID: 5, LOCATION: "Hamilton" , NAME: "Karen Neal", COMPANY: "Willow Cafe", EMAIL: "Willowcafe@gmail.com", APPLIANCES_1: "Laptop" , VOLT: "1200" , APPLIANCES_2: "Microwave" , VOLT: "" , APPLIANCES_3: "" , VOLT: "" ,  
    COMMENTS: "send wine sample to head branch." , ACTION: "" },
                    {ID: 6, LOCATION: "Hamilton" , NAME: "Karen Neal", COMPANY: "Willow Cafe", EMAIL: "Willowcafe@gmail.com", APPLIANCES_1: "Laptop" , VOLT: "1200" , APPLIANCES_2: "Microwave" , VOLT: "" , APPLIANCES_3: "" , VOLT: "" ,  
    COMMENTS: "send wine sample to head branch." , ACTION: "" },
                    {ID: 7, LOCATION: "Hamilton" , NAME: "Karen Neal", COMPANY: "Willow Cafe", EMAIL: "Willowcafe@gmail.com", APPLIANCES_1: "Laptop" , VOLT: "1200" , APPLIANCES_2: "Microwave" , VOLT: "" , APPLIANCES_3: "" , VOLT: "" ,  
    COMMENTS: "send wine sample to head branch." , ACTION: "" },
                    {ID: 8, LOCATION: "Hamilton" , NAME: "Karen Neal", COMPANY: "Willow Cafe", EMAIL: "Willowcafe@gmail.com", APPLIANCES_1: "Laptop" , VOLT: "1200" , APPLIANCES_2: "Microwave" , VOLT: "" , APPLIANCES_3: "" , VOLT: "" ,  
    COMMENTS: "send wine sample to head branch." , ACTION: "" },
                    {ID: 9, LOCATION: "Hamilton" , NAME: "Karen Neal", COMPANY: "Willow Cafe", EMAIL: "Willowcafe@gmail.com", APPLIANCES_1: "Laptop" , VOLT: "1200" , APPLIANCES_2: "Microwave" , VOLT: "" , APPLIANCES_3: "" , VOLT: "" ,  
    COMMENTS: "send wine sample to head branch." , ACTION: "" },
                    {ID: 10, LOCATION: "Hamilton" , NAME: "Karen Neal", COMPANY: "Willow Cafe", EMAIL: "Willowcafe@gmail.com", APPLIANCES_1: "Laptop" , VOLT: "1200" , APPLIANCES_2: "Microwave" , VOLT: "" , APPLIANCES_3: "" , VOLT: "" ,  
    COMMENTS: "send wine sample to head branch." , ACTION: "" },

                ],

                options: {
                    perPageValues: [10, 20, 30, 40, 50],
                    texts: {filterPlaceholder: "Search"},
                    sortable: [ 'LOCATION', 'NAME' , 'COMPANY' , 'EMAIL' ]
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