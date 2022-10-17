<template>
    <div class="main-container">
        <!-- Header -->
        <adm-header></adm-header>
        <!-- Header End -->

        <!-- Main -->
        <div class="main-content">
            <div class="container-fluid p-0">
                <div class="adm-user-list-div">
                    <div class="page-title green-title-bg">
                        <span> User List </span>
                    </div>

                    <div class="adm-user-list-main main-div adm-send-notifcn-main">
                        <div class="row m-0">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 gray-bg">
                                <div id="datatable" class="datatable ">
                                    <v-client-table :data="tableData" :columns="columns" :options="options">
                                        <div slot="afterFilter" class="datatable-filter-div">
                                            <datatable-buttons actionClass="datatable-filter "
                                                               fontAwesomeClass="fa fa-plus"
                                                               actionLabel="Add"></datatable-buttons>
                                        </div>
                                        <div slot="ACTION" slot-scope="props" class="action-btn">
                                            <a class="fa fa-edit"></a>
                                            <a class="fa fa-window-close ml5"></a>

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
    import Checkbox from '../partials/Checkbox.vue'
    import InputTextBlock from '../partials/InputTextBlock.vue'
    import SelectBox from '../partials/SelectBox.vue'
    import FormTextArea from '../partials/FormTextArea.vue'
    import ButtonBlock from '../partials/ButtonBlock.vue'

    import Vue from 'vue'
    import {ServerTable, ClientTable, Event} from 'vue-tables-2'

    Vue.use(ClientTable, {}, false, 'bootstrap4', 'default');

    export default {
        data() {
            return {
                columns: [ 'ID', 'NAME', 'LOCATION', 'EMAIL', 'JOB_TITLE', 'ACTION'],
                tableData: [
                    {
                        
                        ID: 1,
                        
                        NAME: "Karen Neal",
                        LOCATION: "Willow Cafe",
                        EMAIL: "Willowcafe@gmail.com",
                        JOB_TITLE: "Sales Rep",
                        ACTION: ""
                    },
                    {
                        
                        ID: 2,
                        
                        NAME: "Karen Neal",
                        LOCATION: "Willow Cafe",
                        EMAIL: "Willowcafe@gmail.com",
                        JOB_TITLE: "Sales Rep",
                        ACTION: ""
                    },
                    {
                        
                        ID: 3,
                        
                        NAME: "Karen Neal",
                        LOCATION: "Willow Cafe",
                        EMAIL: "Willowcafe@gmail.com",
                        JOB_TITLE: "Sales Rep",
                        ACTION: ""
                    },
                    {
                        
                        ID: 4,
                        
                        NAME: "Karen Neal",
                        LOCATION: "Willow Cafe",
                        EMAIL: "Willowcafe@gmail.com",
                        JOB_TITLE: "Sales Rep",
                        ACTION: ""
                    },
                    {
                        
                        ID: 5,
                        
                        NAME: "Karen Neal",
                        LOCATION: "Willow Cafe",
                        EMAIL: "Willowcafe@gmail.com",
                        JOB_TITLE: "Sales Rep",
                        ACTION: ""
                    },
                    {
                        
                        ID: 6,
                        
                        NAME: "Karen Neal",
                        LOCATION: "Willow Cafe",
                        EMAIL: "Willowcafe@gmail.com",
                        JOB_TITLE: "Sales Rep",
                        ACTION: ""
                    },
                    {
                        
                        ID: 7,
                        
                        NAME: "Karen Neal",
                        LOCATION: "Willow Cafe",
                        EMAIL: "Willowcafe@gmail.com",
                        JOB_TITLE: "Sales Rep",
                        ACTION: ""
                    },
                    {
                        
                        ID: 8,
                        
                        NAME: "Karen Neal",
                        LOCATION: "Willow Cafe",
                        EMAIL: "Willowcafe@gmail.com",
                        JOB_TITLE: "Sales Rep",
                        ACTION: ""
                    },
                    {
                        
                        ID: 9,
                        
                        NAME: "Karen Neal",
                        LOCATION: "Willow Cafe",
                        EMAIL: "Willowcafe@gmail.com",
                        JOB_TITLE: "Sales Rep",
                        ACTION: ""
                    },
                    {
                        
                        ID: 10,
                        
                        NAME: "Karen Neal",
                        LOCATION: "Willow Cafe",
                        EMAIL: "Willowcafe@gmail.com",
                        JOB_TITLE: "Sales Rep",
                        ACTION: ""
                    },
                    {
                        
                        ID: 11,
                        
                        NAME: "Karen Neal",
                        LOCATION: "Willow Cafe",
                        EMAIL: "Willowcafe@gmail.com",
                        JOB_TITLE: "Sales Rep",
                        ACTION: ""
                    },
                    {
                        
                        ID: 12,
                        
                        NAME: "Karen Neal",
                        LOCATION: "Willow Cafe",
                        EMAIL: "Willowcafe@gmail.com",
                        JOB_TITLE: "Sales Rep",
                        ACTION: ""
                    },
                ],

                options: {
                    perPageValues: [10, 20, 30, 40, 50],
                    texts: {filterPlaceholder: "Search"},
                    sortable: ['VENDOR', 'NAME', 'LOCATION']
                    // see the options API
                }
            }
        },
        components: {
            AdmHeader, DatatableButtons, Checkbox, InputTextBlock, SelectBox, FormTextArea, ButtonBlock
        }
    }

</script>
<style lang="scss">
</style>