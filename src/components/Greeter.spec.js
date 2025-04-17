import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import Greeter from './Greeter.vue'

describe('Greeter.vue', () => {
  it('renders the button', () => {
    const wrapper = mount(Greeter, {
      props: { message: 'Test Message' }
    })
    expect(wrapper.find('button').exists()).toBe(true)
  })

  it('logs the message on click', () => {
    console.log = vi.fn()
    const wrapper = mount(Greeter, {
      props: { message: 'Hello Test!' }
    })
    wrapper.find('button').trigger('click')
    expect(console.log).toHaveBeenCalledWith('Hello Test!')
  })
})
