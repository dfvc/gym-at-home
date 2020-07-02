import Vue from 'vue';
import GhIcon from '@/components/GhIcon/GhIcon.vue';

const globalComponents = {
  GhIcon,
};

Object.entries(globalComponents).forEach(
  ([name, component]) => { Vue.component(name, component) },
);
