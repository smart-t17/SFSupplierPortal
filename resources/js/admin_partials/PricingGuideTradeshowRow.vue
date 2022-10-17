<template>
    <tr>
        <td>{{firstColumnContent}}</td>
        <td>{{secondColumnContent}}</td>
        <td>
            <div class="float-right"><a href="" class="fa fa-edit"></a></div>
        </td>
    </tr>
    <!--<tr>
        <td>{{firstColumnContent}}</td>
        <td><input-text-block type="text" inputlabel="" name="" id="" required="true" inputClass="input-textbox"
                              placeholder=""></input-text-block></td>
        <td><div class="float-right price-edit"><a href="" class="pr5"><img src="../../assets/images/price_right.png"></a><a href="" class=""><img src="../../assets/images/price_close.png"></a></div></td>
    </tr>-->
</template>


<script>
    import InputTextBlock from '../partials/InputTextBlock.vue'
    export default {
        components: {
            InputTextBlock
        },
        props: ['firstColumnContent', 'secondColumnContent']
    }
</script>




