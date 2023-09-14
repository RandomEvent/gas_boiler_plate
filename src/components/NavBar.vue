<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#"><router-link to="/">Home</router-link></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <a class="nav-item nav-link"><router-link to="/">Home</router-link></a>
                <a class="nav-item nav-link"><router-link to="/about">About</router-link></a>
            </div>
        </div>
    </nav>
</template>

<script>

</script>

<style scoped>
</style>
