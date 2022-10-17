<template>
    <thead :class="dynamicClass">
    <tr>
        <td> {{firstColumnHeading}}</td>
        <td>{{secondColumnHeading}}</td>
        <td v-if="thirdColumnHeading">{{thirdColumnHeading}}</td>
        <td></td>
    </tr>
    </thead>
</template>


<script>
    export default {
        props: ['firstColumnHeading', 'secondColumnHeading', 'thirdColumnHeading', 'dynamicClass']
    }
</script>




