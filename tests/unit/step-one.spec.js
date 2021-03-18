import {mount, shallowMount} from '@vue/test-utils';
import stepOne from '@/components/step-one.vue';

const wrapper = shallowMount(stepOne)
const vm = wrapper.vm

const counterValue = wrapper.find('.counter-value')

const btnIncrease = wrapper.find('.btn-increase')
const btnDecrease = wrapper.find('.btn-decrease')
const btnReset = wrapper.find('.btn-reset')

describe('Step One', () => {

  /*
  it('Is instance of Vue', () => {
    const wrapper = mount(counter)
    expect(wrapper.isVueInstance()).toBe(true)
  })
  */

  it('Display correct HTML markup', () => {
    expect(wrapper.html()).toContain('<div class="counter-value">0</div>')
  })

  it('Has increase button', () => {
    expect(wrapper.find('.btn-increase').exists()).toBe(true)
  })

  it('Has decrease button', () => {
    expect(wrapper.find('.btn-decrease').exists()).toBe(true)
  })

  it('Has reset button', () => {
    expect(wrapper.find('.btn-reset').exists()).toBe(true)
  })

  it('Increase button should increase counter by 1', () => {
    btnIncrease.trigger('click')
    expect(vm.count).toBe(1)
  })

  it('Reset button should reset counter in 0', () => {
    btnReset.trigger('click')
    expect(vm.count).toBe(0)
  })

  it('Decrease button should decrease counter by 1', () => {
    btnDecrease.trigger('click')
    expect(vm.count).toBe(-1)
  })

  it('set counter to value 10 should be 10', async() => {
    await wrapper.setData({count: 10})
    expect(vm.count).toBe(10)
  })

  it('get current counter value should be 10', () => {
    expect(vm.getCount()).toBe(10)
  })
})