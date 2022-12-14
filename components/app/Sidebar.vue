<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { Dropdown } from 'floating-vue'

const route = useRoute()

const menus = ref([
  {
    text: 'Home',
    to: '/dashboard',
    icon: 'ri:home-line',
    isActive() {
      return route.path.startsWith('/dashboard')
    },
  },
  {
    text: 'Forms',
    icon: 'ri:table-2',
    isActive() {
      return route.path.startsWith('/forms')
    },
    items: [
      {
        text: 'All Fields',
        to: '/forms',
      },
      {
        text: 'Validation',
        to: '/forms/validation',
      },
      {
        text: 'In Modal',
        to: '/forms/modal',
      },
    ],
  },
  {
    text: 'Components',
    icon: 'ri:boxing-line',
    isActive() {
      return route.path.startsWith('/components')
    },
    items: [
      {
        text: 'Alert',
        to: '/components/alert',
      },
      {
        text: 'Badge',
        to: '/components/badge',
      },
      {
        text: 'Button',
        to: '/components/buttons',
      },
      {
        text: 'DataTable',
        to: '/components/data-table',
      },
      {
        text: 'Dropdown',
        to: '/components/dropdown',
      },
      {
        text: 'Input',
        to: '/components/input',
      },
      {
        text: 'Select',
        to: '/components/select',
      },
      {
        text: 'MultiSelect',
        to: '/components/multi-select',
      },
      {
        text: 'Pagination',
        to: '/components/pagination',
      },
      {
        text: 'Switch',
        to: '/components/switch',
      },
      {
        text: 'Tabs',
        to: '/components/tabs',
      },
      {
        text: 'Toast',
        to: '/components/toast',
      },
    ],
  },
  {
    text: 'Bantuan',
    to: '/help',
    icon: 'ri:question-fill',
  },
])

const layout = useLayoutStore()
const { sidebar, miniSidebar } = storeToRefs(layout)
</script>

<template>
  <VNavDrawer
    v-model="sidebar"
    color="dark"
    :fixed="isMobile"
    :overlay="isMobile"
    :mini="miniSidebar"
    :sticky="!isMobile"
    class="p-0.5"
  >
    <div class="h-[58px] flex justify-center items-center">
      <slot name="logo">
        <VLogo v-if="!miniSidebar" white />
      </slot>
    </div>
    <VList hover class="p-2 space-y-1">
      <template
        v-for="menu in menus"
        :key="menu.text"
      >
        <!-- mini nav -->
        <Dropdown
          v-if="miniSidebar && menu.items"
          placement="right-start"
        >
          <VListItem
            :prepend-icon="menu.icon"
            :to="menu.to"
            prepend-icon-size="lg"
            hover
            hover-class="hover:bg-gray-700"
            exact-active-class="!bg-gray-700"
            hide-append
            hide-text
          >
            {{ menu.text }}
          </VListItem>
          <template #popper>
            <VList class="p-1" small>
              <VListItemHeader class="font-semibold !text-xs">
                {{ menu.text }}
              </VListItemHeader>
              <VListItem
                v-for="subMenu in menu.items"
                :key="subMenu.text"
                v-close-popper
                :to="subMenu.to"
                hide-prepend
                hide-append
              >
                {{ subMenu.text }}
              </VListItem>
            </VList>
          </template>
        </Dropdown>
        <!-- default nav -->
        <VListCollapse
          v-else-if="menu.items"
          :model-value="menu.isActive()"
        >
          <template #activator="{ isOpen, toggle }">
            <VListItem
              :prepend-icon="menu.icon"
              :to="menu.to"
              :aria-label="menu.text"
              :prepend-icon-size="miniSidebar ? 'lg' : 'md'"
              as="button"
              hover
              hover-class="hover:bg-gray-700"
              exact-active-class="!bg-gray-700"
              append-icon="ri:arrow-down-s-line"
              :append-icon-class="isOpen ? 'rotate-180' : ''"
              @click="toggle"
            >
              {{ menu.text }}
            </VListItem>
          </template>
          <VList>
            <VListItem
              v-for="subMenu in menu.items"
              :key="subMenu.text"
              :to="subMenu.to"
              hover
              hover-class="hover:bg-gray-700"
              exact-active-class="!bg-gray-700"
            >
              {{ subMenu.text }}
            </VListItem>
          </VList>
        </VListCollapse>
        <VListItem
          v-else
          v-tooltip.right="miniSidebar && menu.text"
          :prepend-icon="menu.icon"
          :to="menu.to"
          :hide-text="miniSidebar"
          :hide-append="miniSidebar"
          :prepend-icon-size="miniSidebar ? 'lg' : 'md'"
          hover
          hover-class="hover:bg-gray-700"
          exact-active-class="!bg-gray-700"
        >
          {{ menu.text }}
        </VListItem>
      </template>
    </VList>
  </VNavDrawer>
</template>
