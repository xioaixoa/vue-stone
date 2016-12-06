import Switch from './components/switch';
import Power from './components/power';
import Panel from './components/panel';

const install = (Vue, options = {}) => {

  if (install.installed) {
    return;
  }
  Vue.component(Switch.name, Switch);
  Vue.component(Power.name, Power);
  Vue.component(Panel.name, Panel);
};
install.installed = false;

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

const Store = {
  install,
};
export default Store;
