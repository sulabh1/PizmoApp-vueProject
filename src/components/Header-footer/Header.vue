<template>
    <header>
        <div class="container clear">

            <div class="logo">
                <img :src="logoIcon"/>
            </div>
            <div class="nav">

                <img :src="menuIcon"
                @click="showSidepanel = !showSidepanel"
                />
            </div>
            <md-drawer
                class="side-drawer"
                :md-right="true"
                :md-active.sync = "showSidepanel"
            />
        </div>
        
        
    </header>

</template>
<script>
        import Logo from '../../assets/images/logo.png';
        import Menu from '../../assets/images/menu.png';
        export default{
            data(){
                return{
                    logoIcon:Logo,
                    menuIcon:Menu,
                    showSidepanel: false
                }
            }
        }
</script>
