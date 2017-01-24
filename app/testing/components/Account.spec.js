import Vue from 'vue'
import Account from '../../components/Account.vue'

describe('Account.vue', () => {
  it('should increment count when updateCount is called', () => {
    // Scaffold
    const vm = new Vue(Account).$mount();
    // Assert Init
    expect(vm.count).toEqual(0);
    // Run Fn
    vm.updateCount();
    // Assert Final
    expect(vm.count).toEqual(1);
  });

  it('should set message', function() {
    const Ctor = Vue.extend(Account);
    const vm = new Ctor().$mount();
    /* expect(vm.$el.querySelector('h1').textContent).toEqual('My Table'); */
    expect(vm.$el.querySelector('h1').textContent).toEqual(vm.message);
  });

});

// helper function that mounts and returns the rendered text
function getAllRenderedElements (Component, propsData) {
  const Ctor = Vue.extend(Component)
  const vm = new Ctor({ propsData }).$mount()
  return vm.$el
}