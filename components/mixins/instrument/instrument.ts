import { Vue, Component, Provide } from "nuxt-property-decorator"

@Component({})
export default class Instrument extends Vue {
  @Provide() instrument_name = '';
  @Provide() is_active(): boolean {
    return this.$store.state.instruments_active_instrument === this.instrument_name;
  }
  @Provide() openTab() {
    this.$store.commit('set_instruments_active_instrument', this.instrument_name);
  }
};