<template>
    <div class="textarea-div">
        <div class="input-label" v-if="textarealabel"><label> {{textarealabel}}<span v-if="required">*</span></label>
        </div>
        <div class="textarea-bottom"></div>
        <textarea :placeholder="placeholder" rows="1" class="input-textarea" :name="name" :id="id"></textarea>
    </div>
</template>

<script>
    export default {
        props: ['textarealabel', 'name', 'id', 'required', 'placeholder']
    }
</script>