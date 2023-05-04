<template>
        <nav class="navbar navbar-dark bg-dark navbar-expand-lg">
    <div class="container-fluid">
        <a class="navbar-brand" href="#">Troncoweb</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item me-3 mb-2 mb-lg-0">
                <router-link class="navBtn" to="/">Home</router-link>
            </li>
            <li class="nav-item me-3 mb-2 mb-lg-0">
                <router-link class="navBtn" to="/about">About</router-link>
            </li>
            <li class="nav-item me-3 mb-2 mb-lg-0">
                <router-link class="navBtn" to="/merch">Merch</router-link> 
            </li>
            <li class="nav-item me-3 mb-2 mb-lg-0">
                <router-link class="navBtn" to="/login">Login</router-link>
            </li>
        </ul>
        <!-- <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-outline-success" type="submit">Search</button>
        </form> -->
        </div>
    </div>
    </nav>
</template>

<script>

</script>

<style scoped>
.navBtn{
    text-decoration: none;
    color: white;
}
</style>