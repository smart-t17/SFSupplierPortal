<template>
    <div class="main-container">
        <!-- Header -->
        <adm-header></adm-header>
        <!-- Header End -->

        <!-- Main -->
        <div class="main-content">
            <div class="container-fluid p-0">
                <div class="product-presentation-req-div">
                    <div class="page-title presentation-title-bg">
                        <span> Product Presentation Request </span>
                    </div>

                    <div class="product-presentation-req-main main-div gray-bg">
                        <div class="row m-0">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div id="datatable" class="datatable">
                                    <v-client-table :data="tableData" :columns="columns" :options="options">
                                        <div slot="afterFilter" class="datatable-filter-div">
                                            <datatable-buttons actionClass="datatable-filter "
                                                               fontAwesomeClass="fa fa-filter"
                                                               actionLabel="Filter"></datatable-buttons>
                                        </div>
                                        <div slot="ACTION" slot-scope="props" class="action-btn">
                                            <a class="fa fa-edit" href="/adm-product-presentation-edit"></a>
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
                columns: ['ID', 'BRANCH', 'VENDOR', 'DATE', 'TIME', 'ACTION'],
                tableData: [
                    {ID: 1, BRANCH: "Auckland", VENDOR: "Seatreasure", DATE: "19-02-19", TIME: "12:40pm", ACTION: ""},
                    {ID: 2, BRANCH: "Auckland", VENDOR: "Seatreasure", DATE: "19-02-19", TIME: "12:40pm", ACTION: ""},
                    {ID: 3, BRANCH: "Auckland", VENDOR: "Seatreasure", DATE: "19-02-19", TIME: "12:40pm", ACTION: ""},
                    {ID: 4, BRANCH: "Auckland", VENDOR: "Seatreasure", DATE: "19-02-19", TIME: "12:40pm", ACTION: ""},
                    {ID: 5, BRANCH: "Auckland", VENDOR: "Seatreasure", DATE: "19-02-19", TIME: "12:40pm", ACTION: ""},
                    {ID: 6, BRANCH: "Auckland", VENDOR: "Seatreasure", DATE: "19-02-19", TIME: "12:40pm", ACTION: ""},
                    {ID: 7, BRANCH: "Auckland", VENDOR: "Seatreasure", DATE: "19-02-19", TIME: "12:40pm", ACTION: ""},
                    {ID: 8, BRANCH: "Auckland", VENDOR: "Seatreasure", DATE: "19-02-19", TIME: "12:40pm", ACTION: ""},
                    {ID: 9, BRANCH: "Auckland", VENDOR: "Seatreasure", DATE: "19-02-19", TIME: "12:40pm", ACTION: ""},
                    {ID: 10, BRANCH: "Auckland", VENDOR: "Seatreasure", DATE: "19-02-19", TIME: "12:40pm", ACTION: ""},
                    {ID: 11, BRANCH: "Auckland", VENDOR: "Seatreasure", DATE: "19-02-19", TIME: "12:40pm", ACTION: ""},
                    {ID: 12, BRANCH: "Auckland", VENDOR: "Seatreasure", DATE: "19-02-19", TIME: "12:40pm", ACTION: ""},

                ],

                options: {
                    perPageValues: [10, 20, 30, 40, 50],
                    texts: {filterPlaceholder: "Search"},
                    sortable: ['BRANCH', 'VENDOR']
                    // see the options API
                }
            }
        },
        components: {
            AdmHeader, DatatableButtons
        }
    }

</script>
<style lang="scss">
</style>