<template>
    <a class="btn" :class="btnClass">{{btnLabel}}</a>
</template>

<script>
    export default {
        props: ['btnClass', 'btnLabel']
    }
</script>