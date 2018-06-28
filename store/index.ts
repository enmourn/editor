import { MutationTree, ActionTree } from 'vuex';
import { State } from '~/types'

export const state = () : State => ({
  instruments_active_instrument: 'photo',
  popups_active_popup: '',
  photo_autocomplete: true,
  popup_add_photo_active_panel: 'device'
});

export const mutations: MutationTree<State> = {
  set_instruments_active_instrument(state: State, instrument: string) {
    state.instruments_active_instrument = instrument;
  },
  set_popups_active_popup(state: State, popup: string) {
    state.popups_active_popup = popup;
  },
  change_photo_autocomplete(state: State) {
    state.photo_autocomplete = !state.photo_autocomplete;
  },
  set_popup_add_photo_active_panel(state: State, panel_name: string) {
    state.popup_add_photo_active_panel = panel_name;
  }
};