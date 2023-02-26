<template>
  <div class="index">
    <Welcome class="index__welcome"/>
    <HowItWork class="index__how-work"/>
    <Excursions class="index__excursions"/>
  </div>
</template>

<script>
import Welcome from '~/components/index/Welcome'
import HowItWork from '~/components/index/HowItWork'
import Excursions from '~/components/index/Excursions'

export default {
  layout: 'indexLayout',
  
  components: {
    Welcome,
    HowItWork,
    Excursions
  },

  name: 'IndexPage'
}
</script>

<style lang="scss">
.index {
  &__welcome {
    width: 100%;
    height: 100vh;
  }

  &__how-work {
    margin: 60px 0 200px 0;

    @media (max-width: $xxl) {
      margin: 40px 0 170px 0;
    }

    @media (max-width: $md) {
      margin: 30px 0 150px 0;
    }

    @media (max-width: $xs) {
      margin: 30px 0 100px 0;
    }
  }

  &__excursions {
    margin-bottom: 200px;
  }
}
</style>
