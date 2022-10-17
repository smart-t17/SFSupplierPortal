<template>
    <div class="main-container">
        <!-- Header -->
        <app-header></app-header>
        <!-- Header End -->

        <!-- Main -->
        <div class="main-content">
            <div class="container-fluid p-0">
                <div class="tradeshow-customers-div">
                    <div class="page-title pink-title-bg">
                        <span>Trade Show Comments</span>
                    </div>

                    <div class="tradeshow-customers-main main-div">
                        <div id="datatable" class="datatable">
                            <v-client-table :data="tableData" :columns="columns" :options="options">
                                <div slot="action" slot-scope="props" class="action-btn">
                                    <a class="fa fa-edit"></a>
                                </div>
                                <div slot="afterFilter" class="datatable-filter-div">
                                    <datatable-buttons actionClass="datatable-filter" fontAwesomeClass="fa-share"
                                                       actionLabel="Share"></datatable-buttons>
                                    <datatable-buttons actionClass="datatable-filter" fontAwesomeClass="fa-upload"
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
        <!-- Main End -->

        <!-- Footer -->
        <app-footer></app-footer>
        <!-- Footer End -->


    </div>
</template>
<script>
    import AppHeader from '../components/Header.vue'
    import AppFooter from '../components/Footer.vue'
    import SmallIconBlock from '../partials/SmallIconBlock.vue'
    import DatatableButtons from '../partials/DatatableButtons.vue'
    import Vue from 'vue'
    import {ServerTable, ClientTable, Event} from 'vue-tables-2'

    Vue.use(ClientTable, {}, false, 'bootstrap4', 'default');

    export default {
        data() {
            return {
                columns: ['NAME', 'COMPANY', 'EMAIL', 'LOCATION', 'COMMENT', 'action'],
                tableData: [
                    {
                        id: "1",
                        NAME: "Karen Neal",
                        COMPANY: "Willow Cafe",
                        EMAIL: "Willowcafe@gmail.com",
                        LOCATION: "Wellington",
                        COMMENT: "CTN"
                    },
                    {
                        id: "2",
                        NAME: "Karen Neal",
                        COMPANY: "Willow Cafe",
                        EMAIL: "Willowcafe@gmail.com",
                        LOCATION: "Wellington",
                        COMMENT: "CTN"
                    },
                    {
                        id: "3",
                        NAME: "Karen Neal",
                        COMPANY: "Willow Cafe",
                        EMAIL: "Willowcafe@gmail.com",
                        LOCATION: "Wellington",
                        COMMENT: "CTN"
                    },
                    {
                        id: "4",
                        NAME: "Karen Neal",
                        COMPANY: "Willow Cafe",
                        EMAIL: "Willowcafe@gmail.com",
                        LOCATION: "Wellington",
                        COMMENT: "CTN"
                    },
                    {
                        id: "1",
                        NAME: "Karen Neal",
                        COMPANY: "Willow Cafe",
                        EMAIL: "Willowcafe@gmail.com",
                        LOCATION: "Wellington",
                        COMMENT: "CTN"
                    },
                    {
                        id: "2",
                        NAME: "Karen Neal",
                        COMPANY: "Willow Cafe",
                        EMAIL: "Willowcafe@gmail.com",
                        LOCATION: "Wellington",
                        COMMENT: "CTN"
                    },
                    {
                        id: "3",
                        NAME: "Karen Neal",
                        COMPANY: "Willow Cafe",
                        EMAIL: "Willowcafe@gmail.com",
                        LOCATION: "Wellington",
                        COMMENT: "CTN"
                    },
                    {
                        id: "4",
                        NAME: "Karen Neal",
                        COMPANY: "Willow Cafe",
                        EMAIL: "Willowcafe@gmail.com",
                        LOCATION: "Wellington",
                        COMMENT: "CTN"
                    },
                    {
                        id: "1",
                        NAME: "Karen Neal",
                        COMPANY: "Willow Cafe",
                        EMAIL: "Willowcafe@gmail.com",
                        LOCATION: "Wellington",
                        COMMENT: "CTN"
                    },
                    {
                        id: "2",
                        NAME: "Karen Neal",
                        COMPANY: "Willow Cafe",
                        EMAIL: "Willowcafe@gmail.com",
                        LOCATION: "Wellington",
                        COMMENT: "CTN"
                    },
                    {
                        id: "3",
                        NAME: "Karen Neal",
                        COMPANY: "Willow Cafe",
                        EMAIL: "Willowcafe@gmail.com",
                        LOCATION: "Wellington",
                        COMMENT: "CTN"
                    },
                    {
                        id: "4",
                        NAME: "Karen Neal",
                        COMPANY: "Willow Cafe",
                        EMAIL: "Willowcafe@gmail.com",
                        LOCATION: "Wellington",
                        COMMENT: "CTN"
                    },
                ],
                options: {
                    perPageValues: [10, 20, 30, 40, 50],
                    texts: {filterPlaceholder: "Search"},
                    sortable: ['NAME', 'COMPANY', 'EMAIL', 'LOCATION', 'COMMENT']
                    // see the options API
                }
            }
        },
        components: {
            AppHeader, AppFooter, SmallIconBlock, DatatableButtons
        }
    }
</script>
<style lang="scss">
</style>
