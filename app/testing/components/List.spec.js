'use strict'

import Vue from 'vue'
import List from '../../components/List.vue'

describe('List.vue', () => {
  it('should render default table header', () => {
    /* const vm = new Vue(List).$mount();

    expect(vm.$el.querySelector('h1').textContent).toEqual('My Table'); */
    let els = getAllRenderedElements(List);
    expect(els.querySelector('h1').textContent).toEqual('My Table');
  });

  it('should render a different table header if one is provided', () => {
    let els = getAllRenderedElements(List, {tableTitle: 'Fancy List'});
    expect(els.querySelector('h1').textContent).toEqual('Fancy List');
  });
});

// helper function that mounts and returns the rendered text
function getAllRenderedElements (Component, propsData) {
  const Ctor = Vue.extend(Component)
  const vm = new Ctor({ propsData }).$mount()
  return vm.$el
}