# VueJs
## Creating an application
## Template syntax
![alt text](image.png)
## Reactivity fundamentals
  - `ref()`
  - `<script setup>`
  - `reactive()`
## Computed properties
  - `const now = computed(() => Date.now())`
## Binding HTML classes & inner styles
  - `<div :class="" :style=""></div>`
## Conditional rendering
  - `v-if`
  - `v-else`
  - `v-else-if`
  - `v-if on <template>`
  - `v-show`
## List rendering
  - `v-for with object`
    - ` <li v-for="value in myObject">`
  - `v-for with a range`
    - `<li v-for="(value, key, index) in myObject">`
  - `v-for on <template>`
    - `<template v-for="item in items">`
  - `v-for with v-if`
    - `<li v-for="todo in todos" v-if="!todo.isComplete">`
  - `key`
    - `<div v-for="item in items" :key="item.id">`
  - `Mutation methods`
    - `push()`
    - `pop()`
    - `shift()`
    - `unshift()`
    - `splice()`
    - `sort()`
    - `reverse()`
  - `Replacing `
    - `filter()`
    - `concat()`
    - `slice()`
## Event Handling
  - `Inline handlers`
    - `<button @click="count++">Add 1</button>`
  - `Method handlers`
    - `function greet(event){}`<br />
      `<button @click="greet">Greet</button>`
  - `Event modifiers`
    - `.stop`
    - `.prevent`
    - `.self`
    - `.capture`
    - `.once`
    - `.passive`
  - `Key modifiers`
    - `.enter`
    - `.tab`
    - `.delete (captures both "Delete" and "Backspace" keys)`
    - `.esc`
    - `.space`
    - `.up`
    - `.down`
    - `.left`
    - `.right`
  - `Mouse button modifiers`
    - `.left`
    - `.right`
    - `.middle`
## Form Input Bindings
  - `Basic usage`
    - `v-model="message"`
  - `Value bindings`
  - `Modifiers`
    - `.lazy: <input v-model.lazy="msg" />`
    - `.number: <input v-model.number="age" />`
    - `.trim: <input v-model.trim="msg" />`
## Lifecycle Hooks
  <img src="image-1.png" alt="Lifecycle Hooks" width="600px">

## Watchers
  - `Basic`
    - `watch(source, callback);`
  - `Deep Watchers`
    - `{ deep: true }`
  - `Eager Watchers`
    - `{ immediate: true }: force a watcher's callback to be executed immediately`
  - `Once Watchers`
    - `{ once: true }:  trigger only once when the source changes`
  - `watchEffect()`
    - `Allows us to track the callback's reactive dependencies automatically.`
  - `Side Effect Cleanup`
    - 
  - `Callback Flush Timing`
  - `Stopping a Watcher`

## Template Refs
  - `<input ref="input"> `
  - `Refs inside v-for`
    - `<li v-for="item in list" ref="items">`
  - `Function Refs`
    - `<input :ref="(el) => { /* assign el to a property or ref */ }">`
  - `Ref on Component`
    - `<Child ref="child" />`
## Components Basics
  - `<script setup>`
  - `import ... from ...`
  - `defineProps(['title'])`
  - `const postFontSize = ref(1), <div :style="{ fontSize: postFontSize + 'em' }">`
  - `<slot />`
  - `<component :is="tabs[currentTab]"></component>`