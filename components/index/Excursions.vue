<template>
  <div class="excursions">
    <p class="excursions__back-text">walk with me</p>

    <div class="excursions__title-wrapper">
      <h2 class="excursions__title wrapper">Экскурсии</h2>
    </div>

    <ExcursionsSlider class="excursions__slider" v-if="isInit" />

    <div class="excursions__wrapper-btn">
      <ButtonUI link="/" class="excursions__btn">Попробовать</ButtonUI>
    </div>
  </div>
</template>

<script>
import ExcursionsSlider from '~/components/index/ExcursionsSlider'
import ButtonUI from '~/components/ui/ButtonUI'

export default {
  components: {
    ExcursionsSlider,
    ButtonUI
  },

  data() {
    return {
      isInit: false
    }
  },

  mounted() {
    this.isInit = true
  },

  name: 'Excursions'
}
</script>

<style lang="scss" scoped>
.excursions {
  position: relative;

  padding: 60px 0;

  background: $black--light;

  @media (max-width: $xxl) {
    padding: 40px 0 50px 0;
  }

  @media (max-width: $lg) {
    padding: 60px 0;
  }

  &__title-wrapper {
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 0 60px;

    @media (max-width: $xl) {
      padding: 0 30px;
    }

    @media (max-width: $md) {
      padding: 0 15px;
    }
  }

  &__title {
    @include h2;

    margin: 0 auto 60px auto;

    @media (max-width: $xxxl) {
      margin: 0 auto 40px auto;

      @include text-bg;
      font-weight: 500;
    }

    @media (max-width: $md) {
      margin: 0 auto 30px auto;

      @include text-md;
      font-weight: 500;
    }
  }

  &__slider {
    margin: 0 60px;

    @media (max-width: $xl) {
      margin: 0 30px;
    }

    @media (max-width: $md) {
      margin: 0 15px;
    }
  }

  &__wrapper-btn {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 60px;

    @media (max-width: $xxl) {
      margin-top: 50px;
    }

    @media (max-width: $lg) {
      margin-top: 60px;
    }
  }

  &__btn {
    @media (max-width: $xxxl) {
      @include text-sm;
      font-weight: 700;

      padding: 15px 60px;
    }

    @media (max-width: $md) {
      @include text-sm-2;
      font-weight: 700;

      padding: 10px 40px;
    }
  }

  &__back-text {
    font-weight: 700;
    font-size: 128px;
    line-height: 155px;

    color: rgba(240, 240, 240, 0.8);
    text-shadow: 0px -5px 10px rgba(240, 240, 240, 0.4);
    white-space: nowrap;

    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -60%);

    z-index: -1;

    @media (max-width: $xxxl) {
      font-weight: 700;
      font-size: 96px;
      line-height: 116px;
    }

    @media (max-width: $md) {
      font-weight: 700;
      font-size: 64px;
      line-height: 77px;
    }

    @media (max-width: $sm) {
      font-weight: 700;
      font-size: 48px;
      line-height: 58px;
    }
  }
}
</style>