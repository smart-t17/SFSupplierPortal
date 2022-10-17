<template>
    <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
        <div class="box">
            <a :href="dashboardLink">
                <div class="home-box" :class="dynamicClass">
                    <div class="containbox">
                        <div class="containbox-img">
                            <img :src="imgsrc" class="img-responsive"/>
                            <slot name="extra"></slot>
                        </div>
                        <span>{{label}}</span>
                    </div>
                </div>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['label', 'imgsrc', 'dynamicClass', 'dashboardLink']
    }
</script>