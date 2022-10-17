<template>
    <div class="main-container">
        <!-- Header -->
        <app-header></app-header>
        <!-- Header End -->

        <!-- Main -->
        <div class="main-content">
            <div class="container-fluid p-0">
                <div class="drafts-div">
                    <div class="page-title draft-title-bg">
                        <span>Drafts</span>
                    </div>

                    <div class="drafts-main main-div">
                        <div id="datatable" class="datatable">
                            <v-client-table :data="tableData" :columns="columns" :options="options">
                                <div slot="ACTION" slot-scope="props" class="action-btn">
                                    <a class="fa fa-edit"></a>
                                    <a class="fa fa-share"></a>
                                    <small-icon-block fontAwesomeClass="fa fa-times" inputLabel=""></small-icon-block>
                                </div>
                                <div slot="afterFilter" class="datatable-filter-div">
                                    <datatable-buttons actionClass="datatable-filter" fontAwesomeClass="fa-filter"
                                                       actionLabel="Filter"></datatable-buttons>
                                    <!--<datatable-buttons actionClass="datatable-filter" fontAwesomeClass="fa-share" actionLabel="Share"></datatable-buttons>-->
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
                columns: ['FORM', 'DATE', 'ACTION'],
                tableData: [
                    {id: "1", FORM: "MONTHLY SPECIALS", DATE: "5/10/18"},
                    {id: "2", FORM: "MONTHLY SPECIALS", DATE: "5/10/18"},
                    {id: "3", FORM: "MONTHLY SPECIALS", DATE: "5/10/18"},
                    {id: "4", FORM: "MONTHLY SPECIALS", DATE: "5/10/18"},
                    {id: "1", FORM: "MONTHLY SPECIALS", DATE: "5/10/18"},
                    {id: "2", FORM: "MONTHLY SPECIALS", DATE: "5/10/18"},
                    {id: "3", FORM: "MONTHLY SPECIALS", DATE: "5/10/18"},
                    {id: "4", FORM: "MONTHLY SPECIALS", DATE: "5/10/18"},
                    {id: "1", FORM: "MONTHLY SPECIALS", DATE: "5/10/18"},
                    {id: "2", FORM: "MONTHLY SPECIALS", DATE: "5/10/18"},
                    {id: "3", FORM: "MONTHLY SPECIALS", DATE: "5/10/18"},
                    {id: "4", FORM: "MONTHLY SPECIALS", DATE: "5/10/18"},
                    {id: "1", FORM: "MONTHLY SPECIALS", DATE: "5/10/18"},
                    {id: "2", FORM: "MONTHLY SPECIALS", DATE: "5/10/18"},
                    {id: "3", FORM: "MONTHLY SPECIALS", DATE: "5/10/18"},
                    {id: "4", FORM: "MONTHLY SPECIALS", DATE: "5/10/18"},
                    {id: "1", FORM: "MONTHLY SPECIALS", DATE: "5/10/18"},
                    {id: "2", FORM: "MONTHLY SPECIALS", DATE: "5/10/18"},
                    {id: "3", FORM: "MONTHLY SPECIALS", DATE: "5/10/18"},
                    {id: "4", FORM: "MONTHLY SPECIALS", DATE: "5/10/18"},
                    {id: "1", FORM: "MONTHLY SPECIALS", DATE: "5/10/18"},
                    {id: "2", FORM: "MONTHLY SPECIALS", DATE: "5/10/18"},
                    {id: "3", FORM: "MONTHLY SPECIALS", DATE: "5/10/18"},
                    {id: "4", FORM: "MONTHLY SPECIALS", DATE: "5/10/18"},
                    {id: "1", FORM: "MONTHLY SPECIALS", DATE: "5/10/18"},
                    {id: "2", FORM: "MONTHLY SPECIALS", DATE: "5/10/18"},
                    {id: "3", FORM: "MONTHLY SPECIALS", DATE: "5/10/18"},
                    {id: "4", FORM: "MONTHLY SPECIALS", DATE: "5/10/18"},
                    {id: "1", FORM: "MONTHLY SPECIALS", DATE: "5/10/18"},
                    {id: "2", FORM: "MONTHLY SPECIALS", DATE: "5/10/18"},
                    {id: "3", FORM: "MONTHLY SPECIALS", DATE: "5/10/18"},
                    {id: "4", FORM: "MONTHLY SPECIALS", DATE: "5/10/18"},
                ],
                options: {
                    perPageValues: [10, 20, 30, 40, 50],
                    texts: {filterPlaceholder: "Search"},
                    sortable: ['FORM', 'DATE', 'age']
                    // see the options API
                }
            }
        },
        components: {
            DatatableButtons,
            AppHeader, AppFooter, SmallIconBlock
        }
    }
</script>
<style lang="scss">
</style>
