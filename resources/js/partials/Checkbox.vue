<template>
    <label class="checkbox-container">
        {{label}}
        <span class="small-txt" v-if="smalltxt">{{smalltxt}}</span>
        <input type="checkbox" :value="cbvalue"> <span class="checkmark"></span>
    </label>
</template>

<script>
    export default {
        props: ['label', 'cbvalue', 'smalltxt']
    }
</script>