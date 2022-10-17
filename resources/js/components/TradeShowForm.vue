<template>
    <div class="main-container">
        <!-- Header -->
        <app-header></app-header>
        <!-- Header End -->

        <!-- Main -->
        <div class="main-content">
            <div class="container-fluid p-0">
                <div class="tradeshowform-div">
                    <div class="page-title pink-title-bg">
                        <span>Trade Show Form</span>
                    </div>

                    <div class="tradeshowform-main main-div">
                        <div class="row m-0 mb30">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="overflow-auto">
                                    <table class="tradeshowform-table">
                                        <tbody>
                                        <tr class="pink-dynamic-cl">
                                            <td>
                                                <checkbox label="Select All" cbvalue="1"></checkbox>
                                            </td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>

                                        <tradeshow-form-table-row cblabel="Christchurch" cbvalue="1"
                                                                  tsdate="5th August 2019" tstime="1:30 - 4:30pm"
                                                                  tsdescription="Addington Raceway and Events Centre"
                                                                  tsprice="$800" dropdownname="dropdownname"
                                                                  selectPlaceholder="Number of Attendees"></tradeshow-form-table-row>
                                        <tradeshow-form-table-row cblabel="Westport" cbvalue="1"
                                                                  tsdate="6th August 2019" tstime="1:30 - 4:30pm"
                                                                  tsdescription="Westport Stadium"
                                                                  tsprice="$800" dropdownname="dropdownname"
                                                                  selectPlaceholder="Number of Attendees"></tradeshow-form-table-row>
                                        <tradeshow-form-table-row cblabel="Auckland" cbvalue="1"
                                                                  tsdate="12th August 2019" tstime="1:30 - 4:30pm"
                                                                  tsdescription="Alexandra Park"
                                                                  tsprice="$800" dropdownname="dropdownname"
                                                                  selectPlaceholder="Number of Attendees"></tradeshow-form-table-row>
                                        <tradeshow-form-table-row cblabel="Hamilton" cbvalue="1"
                                                                  tsdate="13th August 2019" tstime="1:30 - 4:30pm"
                                                                  tsdescription="Hamilton Show Ground"
                                                                  tsprice="$800" dropdownname="dropdownname"
                                                                  selectPlaceholder="Number of Attendees"></tradeshow-form-table-row>
                                        <tradeshow-form-table-row cblabel="Tauranga" cbvalue="1"
                                                                  tsdate="19th August 2019" tstime="1:30 - 4:30pm"
                                                                  tsdescription="Tauranga ASB Events"
                                                                  tsprice="$800" dropdownname="dropdownname"
                                                                  selectPlaceholder="Number of Attendees"></tradeshow-form-table-row>
                                        <tradeshow-form-table-row cblabel="Rotorua" cbvalue="1"
                                                                  tsdate="20th August 2019" tstime="1:30 - 4:30pm"
                                                                  tsdescription="Rotorua Events centre"
                                                                  tsprice="$800" dropdownname="dropdownname"
                                                                  selectPlaceholder="Number of Attendees"></tradeshow-form-table-row>
                                        <tradeshow-form-table-row cblabel="Gisborne" cbvalue="1"
                                                                  tsdate="26th August 2019" tstime="1:30 - 4:30pm"
                                                                  tsdescription="Gisborne Fishing Club"
                                                                  tsprice="$800" dropdownname="dropdownname"
                                                                  selectPlaceholder="Number of Attendees"></tradeshow-form-table-row>
                                        <tradeshow-form-table-row cblabel="Napier" cbvalue="1"
                                                                  tsdate="27th August 2019" tstime="1:30 - 4:30pm"
                                                                  tsdescription="Napier Sailing Club"
                                                                  tsprice="$800" dropdownname="dropdownname"
                                                                  selectPlaceholder="Number of Attendees"></tradeshow-form-table-row>
                                        <tradeshow-form-table-row cblabel="Wellinton" cbvalue="1"
                                                                  tsdate="2nd September 2019" tstime="1:30 - 4:30pm"
                                                                  tsdescription="Westpac Stadium"
                                                                  tsprice="$800" dropdownname="dropdownname"
                                                                  selectPlaceholder="Number of Attendees"></tradeshow-form-table-row>


                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div class="row m-0 mb30 mt40">
                            <div class="col-lg-7 col-md-12 col-sm-12 col-xs-12">
                                <input-text-block inputlabel="Electric Appliances You May Be Using" type="text" name=""
                                                  id="" inputClass="input-textbox"
                                                  placeholder="Laptop, Fry Pan"></input-text-block>
                            </div>
                            <div class="col-lg-2 col-md-6 col-sm-12 col-xs-12 xs-mt-25 sm-mt-25">
                                <input-text-block inputlabel="Voltage Required" type="text" name="" id=""
                                                  inputClass="input-textbox"></input-text-block>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-12 col-xs-12 xs-mt-25 sm-mt-25">
                                <div class="w80 float-left">
                                    <select-box drpdwnlabel="How Many" dropdownName="dropdownname"
                                                :dropdwnOptions="dropdwnOptions" selectPlaceholder=""></select-box>
                                </div>
                                <div class="w20 float-right">
                                    <small-icon-block fontAwesomeClass="fa fa-plus"
                                                      inputLabel="label"></small-icon-block>
                                </div>
                            </div>
                            <!--<div class="col-lg-1 col-md-6 col-sm-12 col-xs-12 xs-mt-25 sm-mt-25">
                                <small-icon-block fontAwesomeClass="fa fa-plus" inputLabel="label"></small-icon-block>
                            </div>-->
                        </div>
                        <div class="row m-0 mb30 mt30">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <input-text-block inputlabel="Comments" type="text" name="" id=""
                                                  inputClass="input-textbox" placeholder="Optional"></input-text-block>
                            </div>
                        </div>

                        <div class="row m-0 mt30">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12 item-box">
                                <a class="btn mt1 mb1 mr15">Save As Draft</a>
                                <a class="btn mt1 mb1 green-bg">Submit</a>
                            </div>
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
    import SelectBox from '../partials/SelectBox.vue'
    import Checkbox from '../partials/Checkbox.vue'
    import InputTextBlock from '../partials/InputTextBlock'
    import TradeshowFormTableRow from '../partials/TradeshowFormTableRow.vue'
    import SmallIconBlock from '../partials/SmallIconBlock.vue'

    export default {
        data() {
            return {
                dropdwnOptions: [
                    {label: 'Option1', value: '1'},
                    {label: 'Option2', value: '2'},
                    {label: 'Option3', value: '3'},
                ]
            }
        },
        components: {
            AppHeader, AppFooter, TradeshowFormTableRow, SelectBox, Checkbox, InputTextBlock, SmallIconBlock
        }
    }
</script>
<style lang="scss">
</style>