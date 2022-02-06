<template>
<div>
    <nav class="nav-desk">
        <center>
            <div class="nav-items">
                <NavLinks />
            </div>
        </center>
    </nav>

    <div class="menu-wrap">
        <input type="checkbox" class="toggler">
        <div class="hamburger">
            <div></div>
        </div>
        <div class="menu">
            <NavLinks />
        </div>
    </div>
</div>
</template>

<script>
import NavLinks from './NavLinks'

export default {
  components: {
    NavLinks
  }
};
</script>