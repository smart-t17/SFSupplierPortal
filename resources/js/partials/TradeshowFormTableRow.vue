<template>
    <tr>
        <td>
            <checkbox :label="cblabel" :cbvalue="cbvalue"></checkbox>
        </td>
        <td>{{tsdate}}</td>
        <td>{{tstime}}</td>
        <td>{{tsdescription}}</td>
        <td>{{tsprice}}</td>
        <td>
            <!--<select-box :dropdownName="dropdownname" :dropdwnOptions="dropdwnOptions"
                        :selectPlaceholder="selectPlaceholder"></select-box>-->
            <div class="float-right td-form-counter">
                <a href="" class="pr5"><img src="../../assets/images/plus.png"></a>
                <input-text-block type="text" inputlabel="" name="" id="" required="true" inputClass="input-textbox"
                                  placeholder=""></input-text-block>
                <a href="" class="pl5"><img src="../../assets/images/minus.png"></a>
            </div>
        </td>
    </tr>
</template>

<script>
    import Checkbox from '../partials/Checkbox.vue'
    import SelectBox from '../partials/SelectBox.vue'
    import InputTextBlock from '../partials/InputTextBlock.vue'

    export default {
        props: ['cblabel', 'cbvalue', 'tsdate', 'tstime', 'tsdescription', 'tsprice', 'dropdownname', 'dropdwnOptions', 'selectPlaceholder'],
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
            SelectBox, Checkbox, InputTextBlock
        }
    }
</script>