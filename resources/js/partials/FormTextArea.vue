<template>
    <div class="textarea-div">
        <div class="input-label" v-if="textarealabel"><label> {{textarealabel}}<span v-if="required">*</span></label>
        </div>
        <textarea :placeholder="placeholder" :rows="rows" class="input-textarea" :name="name" :id="id"></textarea>
    </div>
</template>

<script>
    export default {
        props: ['textarealabel', 'name', 'id', 'required', 'placeholder', 'rows']
    }
</script>