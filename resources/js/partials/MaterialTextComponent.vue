<template>
    <div :class="['col-sm-' + size]">
        <!--<div class="styled-input">
            <input :type="type ? type : 'text'" :name="name" :id="id" :required="required"/>
            <label class="input-label">{{label}}<span v-if="required">*</span></label>
            <span></span>
        </div>-->

        <div class="floating-label">
            <input class="floating-input" :type="type ? type : 'text'" :name="name" :id="id" :required="required"
                   placeholder=" "/>
            <span class="highlight"></span>
            <label>{{label}}<span v-if="required">*</span></label>
        </div>
        <slot name="extra"></slot>
    </div>
</template>
<script>
    export default {
        props: ['name', 'id', 'size', 'label', 'required','type']
    }
</script>