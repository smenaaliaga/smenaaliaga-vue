<template>
    <ul>
        <li><span><router-link to="/" v-bind:style="activate('home')">Home</router-link></span></li>
        <li><span><router-link to="/projects" v-bind:style="activate('projects')">Projects</router-link></span></li>
        <li><span><A href="https://drive.google.com/file/d/1mpp7oHTdCf0VSssrvH3_44AiLkvSQom4/view?usp=sharing">My CV</a></span></li>
        <li><span><router-link to="/contact" v-bind:style="activate('contact')">Contact</router-link></span></li>
    </ul>
</template>

<script>
export default {
    methods:{
        activate(route){
            if (this.$route.name == route){
                return 'text-decoration: line-through;'
            } else {
                return ''
            }
        },
    }
};
</script>

<!-- 

    style="text-decoration: line-through;"
 -->