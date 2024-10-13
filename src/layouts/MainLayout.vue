<template>
  <q-layout view="hHh lpR lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          <div class="absolute-center">
            <q-icon name="fitness_center" />
            Fitness Tracker
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      class="bg-primary"
      show-if-above
      bordered
      :width="200"
    >
      <q-list>
        <q-item-label class="text-white" header> Navigation </q-item-label>

        <EssentialLink
          v-for="link in linksList"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import EssentialLink, { NavLinkProps } from 'components/NavLink.vue';

defineOptions({
  name: 'MainLayout',
});

const linksList: NavLinkProps[] = [
  {
    title: 'Profile',
    icon: 'home',
    link: '/',
  },
  {
    title: 'Workouts',
    icon: 'favorite',
    link: '/workouts',
  },
  {
    title: 'Exercises',
    icon: 'fitness_center',
    link: '/exercises',
  },
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
