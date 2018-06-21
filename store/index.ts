import { MutationTree, ActionTree } from 'vuex';
import { State } from '~/types'

export const state = () : State => ({
  instruments_active_instrument: 'photo',
  popups_active_popup: '',
  photo_autocomplete: true
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
  }
};