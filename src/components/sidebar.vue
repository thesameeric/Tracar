<template>
    <div id="sidebar">
        <aside class="flex column align-items-center nowrap sidebar vh-100">
            <div class="nl">
                <!-- Tracar -->
            </div>
            <div>
                <menu class="flex column align-items-center nowrap">
                    <router-link to="/"><p class="profile-icon">S</p></router-link>
                    <router-link to="/dashboard/overview" class="active">
                        <i class="material-icons">timeline</i>
                    </router-link>
                    <router-link to="/dashboard/map"><i class="material-icons">map</i></router-link>
                    <router-link to="/"><i class="material-icons">devices_other</i></router-link>
                    <router-link to="/"><i class="material-icons">near_me</i></router-link>
                    <router-link to="/"><i class="material-icons">help_outline</i></router-link>
                </menu>
            </div>
        </aside>
    </div>
</template>
<style lang="scss" scoped>
.nl{
    display: block;
    height: 30px;
    width: 100%;
}
.sidebar{
    position: relative;
    top: 0; left: 0;
    border-right: 1px solid #f5f5f5;
    width: 60px;
    overflow: hidden;
    background: #FFF;
    a {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #636363;
        text-align: left;
        padding: 5px;
        margin-bottom: 10px;
        i {
            font-size: 25px;
        }
    }
    a:hover {
        color: #b89afd;
    }
    a.router-link-exact-active {
        color: #6f32ff;
    }
    .profile-icon {
        display:flex;
        justify-content: center;
        align-items: center;
        width: 45px; height: 45px;
        border-radius: 8px;
        color: #6f32ff;
        font-weight: bold;
        font-size: 20px;
        margin-bottom: 30px;
        text-transform: uppercase;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 2px 5px;
    }
}
</style>
