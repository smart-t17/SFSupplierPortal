<template>
    <div class="main-container">
        <!-- Header -->
        <app-header></app-header>
        <!-- Header End -->

        <!-- Main -->
        <div class="main-content">
            <div class="container-fluid p-0">
                <div class="mysubmissions-div">
                    <div class="page-title submission-title-bg">
                        <span>My Submissions</span>
                    </div>

                    <div class="mysubmissions-main main-div">
                        <div id="datatable" class="datatable">
                            <v-client-table :data="tableData" :columns="columns" :options="options">
                                <div slot="action" slot-scope="props" class="action-btn"><a class="fa fa-share"></a>
                                    <small-icon-block fontAwesomeClass="fa fa-plus" inputLabel=""></small-icon-block>
                                </div>
                                <div slot="afterFilter" class="datatable-filter-div">
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
                columns: ['Form', 'Date', 'action'],
                tableData: [
                    {id: "1", Form: "MONTHLY SPECIALS", Date: "5/10/18"},
                    {id: "2", Form: "MONTHLY SPECIALS", Date: "5/10/18"},
                    {id: "3", Form: "MONTHLY SPECIALS", Date: "5/10/18"},
                    {id: "4", Form: "MONTHLY SPECIALS", Date: "5/10/18"},
                    {id: "5", Form: "MONTHLY SPECIALS", Date: "5/10/18"},
                    {id: "6", Form: "MONTHLY SPECIALS", Date: "5/10/18"},
                    {id: "7", Form: "MONTHLY SPECIALS", Date: "5/10/18"},
                    {id: "8", Form: "MONTHLY SPECIALS", Date: "5/10/18"},
                    {id: "9", Form: "MONTHLY SPECIALS", Date: "5/10/18"},
                    {id: "10", Form: "MONTHLY SPECIALS", Date: "5/10/18"},
                    {id: "11", Form: "MONTHLY SPECIALS", Date: "5/10/18"},
                    {id: "12", Form: "MONTHLY SPECIALS", Date: "5/10/18"},
                    {id: "13", Form: "MONTHLY SPECIALS", Date: "5/10/18"},
                    {id: "14", Form: "MONTHLY SPECIALS", Date: "5/10/18"},
                ],
                options: {
                    perPageValues: [10, 20, 30, 40, 50],
                    texts: {filterPlaceholder: "Search"},
                    sortable: ['Form', 'Date', 'age']
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