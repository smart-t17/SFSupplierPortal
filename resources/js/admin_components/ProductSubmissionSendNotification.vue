<template>
    <div class="main-container">
        <!-- Header -->
        <adm-header></adm-header>
        <!-- Header End -->

        <!-- Main -->
        <div class="main-content">
            <div class="container-fluid p-0">
                <div class="adm-ps-send-notifcn-div adm-send-notifcn-div">
                    <div class="page-title green-title-bg">
                        <span> <a>Product Submission </a> / <a> March 2019 </a> / Send Notification </span>
                    </div>

                    <div class="adm-ps-send-notifcn-main main-div adm-send-notifcn-main">
                        <div class="row m-0">
                            <div class="col-lg-8 col-md-12 col-sm-12 col-xs-12 gray-bg">
                                <div id="datatable" class="datatable ">
                                    <v-client-table :data="tableData" :columns="columns" :options="options">
                                        <div slot="SELECT" slot-scope="props" class="action-btn">
                                            <checkbox label="" cbvalue="1"></checkbox>
                                        </div>
                                        <div slot="afterFilter" class="datatable-filter-div">
                                            <datatable-buttons actionClass="datatable-filter" fontAwesomeClass=""
                                                               actionLabel="Select All"></datatable-buttons>
                                        </div>
                                    </v-client-table>
                                </div>
                            </div>

                            <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12 dark-grey-bg">
                                <div class="right-bar">
                                    <div class="row m-0">
                                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <select-box drpdwnlabel="NOTIFICATION TYPE" dropdownName="dropdownname"
                                                        :dropdwnOptions="dropdwnOptions"
                                                        selectPlaceholder=""></select-box>
                                        </div>
                                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 mt25">
                                            <select-box drpdwnlabel="DEVICE" dropdownName="dropdownname"
                                                        :dropdwnOptions="dropdwnOptions"
                                                        selectPlaceholder=""></select-box>
                                        </div>
                                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 mt25">
                                            <input-text-block type="text" inputlabel="DATE" name="" id=""
                                                              inputClass="input-textbox"
                                                              placeholder=""></input-text-block>
                                        </div>
                                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 mt25">
                                            <input-text-block type="text" inputlabel="MESSAGE TITLE" name="" id=""
                                                              inputClass="input-textbox"
                                                              placeholder=""></input-text-block>
                                        </div>
                                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 mt25">
                                            <form-text-area textarealabel="MESSAGE" name="" id="" required=""
                                                            placeholder="" rows="5"></form-text-area>
                                        </div>
                                        <div class="row m-0 mt25">
                                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 item-box">
                                                <button-block btnClass="mt30 mr10 green-bg"
                                                              btnLabel="Send"></button-block>
                                                <button-block btnClass="mt30" btnLabel="Discard"></button-block>
                                            </div>
                                        </div>

                                    </div>
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
                columns: ['SELECT', 'ID', 'VENDOR', 'NAME', 'COMPANY', 'EMAIL', 'JOB_TITLE'],
                tableData: [
                    {
                        SELECT: "",
                        ID: 1,
                        VENDOR: "Willow",
                        NAME: "Karen Neal",
                        COMPANY: "Willow Cafe",
                        EMAIL: "Willowcafe@gmail.com",
                        JOB_TITLE: "Sales Rep"
                    },
                    {
                        SELECT: "",
                        ID: 2,
                        VENDOR: "Willow",
                        NAME: "Karen Neal",
                        COMPANY: "Willow Cafe",
                        EMAIL: "Willowcafe@gmail.com",
                        JOB_TITLE: "Sales Rep"
                    },
                    {
                        SELECT: "",
                        ID: 3,
                        VENDOR: "Willow",
                        NAME: "Karen Neal",
                        COMPANY: "Willow Cafe",
                        EMAIL: "Willowcafe@gmail.com",
                        JOB_TITLE: "Sales Rep"
                    },
                    {
                        SELECT: "",
                        ID: 4,
                        VENDOR: "Willow",
                        NAME: "Karen Neal",
                        COMPANY: "Willow Cafe",
                        EMAIL: "Willowcafe@gmail.com",
                        JOB_TITLE: "Sales Rep"
                    },
                    {
                        SELECT: "",
                        ID: 5,
                        VENDOR: "Willow",
                        NAME: "Karen Neal",
                        COMPANY: "Willow Cafe",
                        EMAIL: "Willowcafe@gmail.com",
                        JOB_TITLE: "Sales Rep"
                    },
                    {
                        SELECT: "",
                        ID: 6,
                        VENDOR: "Willow",
                        NAME: "Karen Neal",
                        COMPANY: "Willow Cafe",
                        EMAIL: "Willowcafe@gmail.com",
                        JOB_TITLE: "Sales Rep"
                    },
                    {
                        SELECT: "",
                        ID: 7,
                        VENDOR: "Willow",
                        NAME: "Karen Neal",
                        COMPANY: "Willow Cafe",
                        EMAIL: "Willowcafe@gmail.com",
                        JOB_TITLE: "Sales Rep"
                    },
                    {
                        SELECT: "",
                        ID: 8,
                        VENDOR: "Willow",
                        NAME: "Karen Neal",
                        COMPANY: "Willow Cafe",
                        EMAIL: "Willowcafe@gmail.com",
                        JOB_TITLE: "Sales Rep"
                    },
                    {
                        SELECT: "",
                        ID: 9,
                        VENDOR: "Willow",
                        NAME: "Karen Neal",
                        COMPANY: "Willow Cafe",
                        EMAIL: "Willowcafe@gmail.com",
                        JOB_TITLE: "Sales Rep"
                    },
                    {
                        SELECT: "",
                        ID: 10,
                        VENDOR: "Willow",
                        NAME: "Karen Neal",
                        COMPANY: "Willow Cafe",
                        EMAIL: "Willowcafe@gmail.com",
                        JOB_TITLE: "Sales Rep"
                    },
                    {
                        SELECT: "",
                        ID: 11,
                        VENDOR: "Willow",
                        NAME: "Karen Neal",
                        COMPANY: "Willow Cafe",
                        EMAIL: "Willowcafe@gmail.com",
                        JOB_TITLE: "Sales Rep"
                    },
                    {
                        SELECT: "",
                        ID: 12,
                        VENDOR: "Willow",
                        NAME: "Karen Neal",
                        COMPANY: "Willow Cafe",
                        EMAIL: "Willowcafe@gmail.com",
                        JOB_TITLE: "Sales Rep"
                    },
                ],

                options: {
                    perPageValues: [10, 20, 30, 40, 50],
                    texts: {filterPlaceholder: "Search"},
                    sortable: ['VENDOR' , 'NAME', 'COMPANY']
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