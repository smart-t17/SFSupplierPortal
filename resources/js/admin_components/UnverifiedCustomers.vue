<template>
    <div class="main-container">
        <!-- Header -->
        <adm-header></adm-header>
        <!-- Header End -->

        <!-- Main -->
        <div class="main-content">
            <div class="container-fluid p-0">
                <div class="adm-unverified-cust-div">
                    <div class="page-title pink-title-bg">
                        <span> <a href="">Trade shows</a> / Unverified Customers </span>
                    </div>

                    <div class="adm-unverified-cust-main main-div gray-bg">
                        <div class="row m-0">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div id="datatable" class="datatable">
                                    <v-client-table :data="tableData" :columns="columns" :options="options">
                                        <div slot="Action" slot-scope="props" class="action-btn">
                                            <a class="fa fa-edit"></a>
                                        </div>
                                        <div slot="afterFilter" class="datatable-filter-div">
                                            <datatable-buttons actionClass="datatable-filter ml5" fontAwesomeClass="fa-upload"
                                                               actionLabel="Export"></datatable-buttons>
                                            <datatable-buttons actionClass="datatable-filter ml5" fontAwesomeClass="fa-share"
                                                               actionLabel="Share"></datatable-buttons>
                                            <datatable-buttons actionClass="datatable-filter ml5"
                                                               fontAwesomeClass="fa-filter"
                                                               actionLabel="Filter"></datatable-buttons>
                                            <datatable-buttons actionClass="datatable-filter green-bg"
                                                               actionLabel="Verify All"></datatable-buttons>
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
                columns: ['Id', 'Location', 'Name', 'Company', 'Email', 'Action'],
                tableData: [
                    {
                        Id: 1,
                        Location: "Hamilton",
                        Name: "Karen Neal",
                        Company: "Hamilton Cafe",
                        Email: "Hamiltoncafe@gmail.com",
                        Action: ""
                    },
                    {
                        Id: 2,
                        Location: "Hamilton",
                        Name: "Karen Neal",
                        Company: "Hamilton Cafe",
                        Email: "Hamiltoncafe@gmail.com",
                        Action: ""
                    },
                    {
                        Id: 3,
                        Location: "Hamilton",
                        Name: "Karen Neal",
                        Company: "Hamilton Cafe",
                        Email: "Hamiltoncafe@gmail.com",
                        Action: ""
                    },
                    {
                        Id: 4,
                        Location: "Hamilton",
                        Name: "Karen Neal",
                        Company: "Hamilton Cafe",
                        Email: "Hamiltoncafe@gmail.com",
                        Action: ""
                    },
                    {
                        Id: 5,
                        Location: "Hamilton",
                        Name: "Karen Neal",
                        Company: "Hamilton Cafe",
                        Email: "Hamiltoncafe@gmail.com",
                        Action: ""
                    },
                    {
                        Id: 6,
                        Location: "Hamilton",
                        Name: "Karen Neal",
                        Company: "Hamilton Cafe",
                        Email: "Hamiltoncafe@gmail.com",
                        Action: ""
                    },
                    {
                        Id: 7,
                        Location: "Hamilton",
                        Name: "Karen Neal",
                        Company: "Hamilton Cafe",
                        Email: "Hamiltoncafe@gmail.com",
                        Action: ""
                    },
                    {
                        Id: 8,
                        Location: "Hamilton",
                        Name: "Karen Neal",
                        Company: "Hamilton Cafe",
                        Email: "Hamiltoncafe@gmail.com",
                        Action: ""
                    },
                    {
                        Id: 9,
                        Location: "Hamilton",
                        Name: "Karen Neal",
                        Company: "Hamilton Cafe",
                        Email: "Hamiltoncafe@gmail.com",
                        Action: ""
                    },



                ],

                options: {
                    perPageValues: [10, 20, 30, 40, 50],
                    texts: {filterPlaceholder: "Search"},
                    sortable: ['Location', 'Name', 'Company', 'Email']
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