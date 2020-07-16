import Vue from 'vue'
import Vuetify from 'vuetify'
import { createLocalVue, mount } from '@vue/test-utils'
import Home from '@/components/Home.vue'

Vue.use(Vuetify)

const localVue = createLocalVue()

describe('@views/home', () => {
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })

  it('should render correct and matches snapshot', () => {
    const wrapper = mount(Home, { localVue, vuetify })

    expect(wrapper.html()).toMatchSnapshot()
    expect(wrapper.text()).toMatch('Welcome')
  })
})
