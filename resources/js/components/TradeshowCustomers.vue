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
                        <span>Trade Show Customers</span>
                    </div>

                    <div class="tradeshow-customers-main main-div">
                        <div id="datatable" class="datatable">
                            <v-client-table :data="tableData" :columns="columns" :options="options">
                                <div slot="action" slot-scope="props" class="action-btn">
                                    <a class="fa fa-edit"></a>
                                </div>
                                <div slot="afterFilter" class="datatable-filter-div">
                                    <datatable-buttons fontAwesomeClass="fa-share" actionLabel="Share"
                                                       dataToggle="modal" dataTarget="#shareModal"></datatable-buttons>
                                    <datatable-buttons fontAwesomeClass="fa-upload"
                                                       actionLabel="Export"></datatable-buttons>
                                    <datatable-buttons fontAwesomeClass="fa-filter"
                                                       actionLabel="Filter"></datatable-buttons>
                                </div>
                            </v-client-table>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <!-- Main End -->


        <!-- The Share Modal -->
        <div class="modal fade" id="shareModal">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">

                    <!-- Modal Header -->
                    <div class="modal-header">
                        <h4 class="modal-title"><i class="fa fa-share"></i> TRADESHOW_LOCATION_VENDORCODE_00/00/19_00:00
                        </h4>
                        <button type="button" class="close" data-dismiss="modal">&times;</button>
                    </div>

                    <!-- Modal body -->
                    <div class="modal-body">
                        <form>
                            <div class="row">
                                <div class="col-sm-12">
                                    <div>
                                        <label class="visbybold"> To: </label>
                                        <input type="text" placeholder="Email">
                                        <i class="fa fa-plus"></i>
                                    </div>
                                </div>
                                <hr>
                                <div class="col-sm-12">
                                    <textarea placeholder="Add a message [Optional]" rows="5"></textarea>
                                </div>
                                <div class="col-sm-12">
                                    <button type="submit" class="btn btn-default login-submit submit-btn"> Share
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

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
