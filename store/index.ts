import { MutationTree, ActionTree } from 'vuex';
import { State } from '~/types'

export const state = () : State => ({
  instruments_active_instrument: 'photo'
});

export const mutations: MutationTree<State> = {
  set_instruments_active_instrument(state: State, instrument: string) {
    state.instruments_active_instrument = instrument;
  }
};