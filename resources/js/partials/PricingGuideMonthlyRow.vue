<template>
    <tr>
        <td>{{firstColumnContent}}</td>
        <td>{{secondColumnContent}}</td>
        <td>{{thirdColumnContent}}</td>
    </tr>
</template>


<script>
    export default {
        props: ['firstColumnContent', 'secondColumnContent', 'thirdColumnContent']
    }
</script>




