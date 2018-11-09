import { configure } from '@storybook/react'
import { setOptions } from '@storybook/addon-options'
//import '@storybook/addon-console'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

setOptions({
  name: 'Small Bricks',
  url: '',
  goFullScreen: false,
  showLeftPanel: true,
  showDownPanel: true,
  showSearchBox: false,
  downPanelInRight: true,
  sortStoriesByKind: true,
  hierarchySeparator: /\//,
  sidebarAnimations: true,
  selectedAddonPanel: undefined,
})

/*
  load language files in storybook via select box
*/


/*
  add global decorator
*/

Enzyme.configure({ adapter: new Adapter() });

const req = require.context('./../src/', true, /\.stories\.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}

configure(loadStories, module);
