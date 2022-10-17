<template>
    <div class="main-container">
        <!-- Header -->
        <adm-header></adm-header>
        <!-- Header End -->

        <!-- Main -->
        <div class="main-content">
            <div class="container-fluid p-0">
                <div class="adm-ac-sublist-div">
                    <div class="page-title sky-title-bg">
                        <span> Annual Catalogue Submission List  </span>
                    </div>

                    <div class="adm-ac-sublist-main main-div gray-bg">
                        <div class="row m-0">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div id="datatable" class="datatable">
                                    <v-client-table :data="tableData" :columns="columns" :options="options">
                                        <div slot="ACTION" slot-scope="props" class="action-btn">
                                            <a class="fa fa-download  "></a>
                                            <a class="fa fa-edit ml10" href="/annual-catalogue-sub/adm-edit"></a>
                                        </div>
                                        <div slot="afterFilter" class="datatable-filter-div">
                                            <datatable-buttons actionClass="datatable-filter ml5"
                                                               fontAwesomeClass="fa-upload"
                                                               actionLabel="Export"></datatable-buttons>
                                            <datatable-buttons actionClass="datatable-filter ml5"
                                                               fontAwesomeClass="fa-share"
                                                               actionLabel="Share"></datatable-buttons>
                                            <datatable-buttons actionClass="datatable-filter ml5"
                                                               fontAwesomeClass="fa-paper-plane"
                                                               actionLabel="Notify"></datatable-buttons>
                                            <datatable-buttons actionClass="datatable-filter ml5"
                                                               fontAwesomeClass="fa-eye"
                                                               actionLabel="Unhide"></datatable-buttons>
                                            <datatable-buttons actionClass="datatable-filter ml5"
                                                               fontAwesomeClass="fa-eye-slash"
                                                               actionLabel="Hide"></datatable-buttons>
                                            <datatable-buttons actionClass="datatable-filter"
                                                               fontAwesomeClass="fa-filter"
                                                               actionLabel="Filter"></datatable-buttons>
                                        </div>
                                    </v-client-table>
                                </div>
                            </div>
                        </div>

                        <div class="row m-0">
                            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 item-box xs-p-15 sm-p-15 mtminus90">

                                <button-block btnClass="mt30 green-bg mr10" btnLabel="SAVE CHANGES"></button-block>
                                <button-block btnClass="mt30 mr10" btnLabel="Discard"></button-block>

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
    import ButtonBlock from '../partials/ButtonBlock.vue'

    import Vue from 'vue'
    import {ServerTable, ClientTable, Event} from 'vue-tables-2'

    Vue.use(ClientTable, {}, false, 'bootstrap4', 'default');

    export default {
        data() {
            return {
                columns: ['ID', 'COMPANY', 'NAME', 'EMAIL', 'CATALOGUE', 'SPACE', 'CREATE_ARTWORK', 'ARTWORK_SUPPLIED', 'ADDRESS', 'ACTION'],
                tableData: [
                    {
                        ID: 1,
                        COMPANY: "Wilson",
                        NAME: "John Smith",
                        EMAIL: "j.smith@wilsonconsumer.co.nz",
                        CATALOGUE: "Product Catalogue",
                        SPACE: "Half Pafe",
                        CREATE_ARTWORK: "Yes",
                        ARTWORK_SUPPLIED: "Yes",
                        ADDRESS: "Hamilton",
                        ACTION: ""
                    },
                    {
                        ID: 2,
                        COMPANY: "Wilson",
                        NAME: "John Smith",
                        EMAIL: "j.smith@wilsonconsumer.co.nz",
                        CATALOGUE: "Product Catalogue",
                        SPACE: "Half Pafe",
                        CREATE_ARTWORK: "Yes",
                        ARTWORK_SUPPLIED: "Yes",
                        ADDRESS: "Hamilton",
                        ACTION: ""
                    },
                    {
                        ID: 3,
                        COMPANY: "Wilson",
                        NAME: "John Smith",
                        EMAIL: "j.smith@wilsonconsumer.co.nz",
                        CATALOGUE: "Product Catalogue",
                        SPACE: "Half Pafe",
                        CREATE_ARTWORK: "Yes",
                        ARTWORK_SUPPLIED: "Yes",
                        ADDRESS: "Hamilton",
                        ACTION: ""
                    },
                    {
                        ID: 4,
                        COMPANY: "Wilson",
                        NAME: "John Smith",
                        EMAIL: "j.smith@wilsonconsumer.co.nz",
                        CATALOGUE: "Product Catalogue",
                        SPACE: "Half Pafe",
                        CREATE_ARTWORK: "Yes",
                        ARTWORK_SUPPLIED: "Yes",
                        ADDRESS: "Hamilton",
                        ACTION: ""
                    },
                    {
                        ID: 5,
                        COMPANY: "Wilson",
                        NAME: "John Smith",
                        EMAIL: "j.smith@wilsonconsumer.co.nz",
                        CATALOGUE: "Product Catalogue",
                        SPACE: "Half Pafe",
                        CREATE_ARTWORK: "Yes",
                        ARTWORK_SUPPLIED: "Yes",
                        ADDRESS: "Hamilton",
                        ACTION: ""
                    },
                    {
                        ID: 6,
                        COMPANY: "Wilson",
                        NAME: "John Smith",
                        EMAIL: "j.smith@wilsonconsumer.co.nz",
                        CATALOGUE: "Product Catalogue",
                        SPACE: "Half Pafe",
                        CREATE_ARTWORK: "Yes",
                        ARTWORK_SUPPLIED: "Yes",
                        ADDRESS: "Hamilton",
                        ACTION: ""
                    },
                    {
                        ID: 7,
                        COMPANY: "Wilson",
                        NAME: "John Smith",
                        EMAIL: "j.smith@wilsonconsumer.co.nz",
                        CATALOGUE: "Product Catalogue",
                        SPACE: "Half Pafe",
                        CREATE_ARTWORK: "Yes",
                        ARTWORK_SUPPLIED: "Yes",
                        ADDRESS: "Hamilton",
                        ACTION: ""
                    },
                    {
                        ID: 8,
                        COMPANY: "Wilson",
                        NAME: "John Smith",
                        EMAIL: "j.smith@wilsonconsumer.co.nz",
                        CATALOGUE: "Product Catalogue",
                        SPACE: "Half Pafe",
                        CREATE_ARTWORK: "Yes",
                        ARTWORK_SUPPLIED: "Yes",
                        ADDRESS: "Hamilton",
                        ACTION: ""
                    },
                    {
                        ID: 9,
                        COMPANY: "Wilson",
                        NAME: "John Smith",
                        EMAIL: "j.smith@wilsonconsumer.co.nz",
                        CATALOGUE: "Product Catalogue",
                        SPACE: "Half Pafe",
                        CREATE_ARTWORK: "Yes",
                        ARTWORK_SUPPLIED: "Yes",
                        ADDRESS: "Hamilton",
                        ACTION: ""
                    },
                    {
                        ID: 10,
                        COMPANY: "Wilson",
                        NAME: "John Smith",
                        EMAIL: "j.smith@wilsonconsumer.co.nz",
                        CATALOGUE: "Product Catalogue",
                        SPACE: "Half Pafe",
                        CREATE_ARTWORK: "Yes",
                        ARTWORK_SUPPLIED: "Yes",
                        ADDRESS: "Hamilton",
                        ACTION: ""
                    },
                    {
                        ID: 11,
                        COMPANY: "Wilson",
                        NAME: "John Smith",
                        EMAIL: "j.smith@wilsonconsumer.co.nz",
                        CATALOGUE: "Product Catalogue",
                        SPACE: "Half Pafe",
                        CREATE_ARTWORK: "Yes",
                        ARTWORK_SUPPLIED: "Yes",
                        ADDRESS: "Hamilton",
                        ACTION: ""
                    },
                    {
                        ID: 12,
                        COMPANY: "Wilson",
                        NAME: "John Smith",
                        EMAIL: "j.smith@wilsonconsumer.co.nz",
                        CATALOGUE: "Product Catalogue",
                        SPACE: "Half Pafe",
                        CREATE_ARTWORK: "Yes",
                        ARTWORK_SUPPLIED: "Yes",
                        ADDRESS: "Hamilton",
                        ACTION: ""
                    },
                    {
                        ID: 13,
                        COMPANY: "Wilson",
                        NAME: "John Smith",
                        EMAIL: "j.smith@wilsonconsumer.co.nz",
                        CATALOGUE: "Product Catalogue",
                        SPACE: "Half Pafe",
                        CREATE_ARTWORK: "Yes",
                        ARTWORK_SUPPLIED: "Yes",
                        ADDRESS: "Hamilton",
                        ACTION: ""
                    },

                ],

                options: {
                    perPageValues: [10, 20, 30, 40, 50],
                    texts: {filterPlaceholder: "Search"},
                    sortable: ['COMPANY', 'NAME', 'CATALOGUE', 'SPACE', 'CREATE_ARTWORK', 'ARTWORK_SUPPLIED']
                    // see the options API
                }
            }
        },
        components: {
            AdmHeader, DatatableButtons, ButtonBlock
        }
    }

</script>
<style lang="scss">
</style>