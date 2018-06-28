<template>
  <section class="popup_add_photo">
    <span class="navigation_title">загрузить фотографии</span>
    <DevicePanel :connected="panel.device.connected"/>
    <VkPanel :connected="panel.vk.connected"/>
    <OdnoklassnikiPanel :connected="panel.odnoklassniki.connected"/>
    <FacebookPanel :connected="panel.facebook.connected"/>
    <InstagramPanel :connected="panel.instagram.connected"/>
    <ArchivePanel :connected="panel.archive.connected"/>
  </section>
</template>

<script lang="ts">
  import EditorLoader from "../../EditorLoader";

  import {Vue, Component, Provide} from 'nuxt-property-decorator';
  import DevicePanel from '~/components/popups/PopupAddPhoto/DevicePanel';
  import VkPanel from '~/components/popups/PopupAddPhoto/VkPanel';
  import OdnoklassnikiPanel from '~/components/popups/PopupAddPhoto/OdnoklassnikiPanel';
  import FacebookPanel from '~/components/popups/PopupAddPhoto/FacebookPanel';
  import InstagramPanel from '~/components/popups/PopupAddPhoto/InstagramPanel';
  import ArchivePanel from '~/components/popups/PopupAddPhoto/ArchivePanel';
  import {AxiosResponse} from "axios";

  @Component({
    components: {EditorLoader, DevicePanel, VkPanel, OdnoklassnikiPanel, FacebookPanel, InstagramPanel, ArchivePanel}
  })
  export default class PopupAddPhoto extends Vue {
    @Provide() host: string = 'http://localhost:3008';
    @Provide() loader_active = true;
    @Provide() panel = {
      device: {connected: false},
      vk: {connected: false},
      odnoklassniki: {connected: false},
      facebook: {connected: false},
      instagram: {connected: false},
      archive: {connected: false}
    };
    @Provide() async mounted() {
      let res_str: AxiosResponse = await this.$axios.get(this.host + '/accounts/api/social-auth/');
      let res = JSON.parse(res_str.request.response);
      this.panel.device.connected = true;
      this.panel.vk.connected = res.exist_social_links['vk-oauth2'] || false;
      this.panel.odnoklassniki.connected = res.exist_social_links['odnoklassniki-oauth2'] || false;
      this.panel.facebook.connected = res.exist_social_links['facebook'] || false;
      this.panel.instagram.connected = res.exist_social_links['instagram'] || false;
      this.panel.archive.connected = res.is_archive;
    }
  }
</script>

<style lang="scss" scoped>
  @import "../../../assets/scss/base.scss";
  .popup_add_photo {
    display: flex;
    flex-direction: column;
    width: 255px;
    height: 460px;
    padding: 50px 955px 30px 30px;
    background: $color_grey;
    .navigation_title {
      font-family: $c35;
      font-size: 20px;
      font-weight: 700;
      text-transform: uppercase;
      color: $color_dark_grey;
      &:after {
        content: '';
        display: block;
        width: 20px;
        height: 2px;
        background: $color_orange;
        margin: 15px auto 60px 0;
      }
    }
  }
</style>