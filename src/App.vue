<template>
  <div>
    <router-link to="/">HomePage</router-link> |
    <router-link to="/write">入力画面</router-link> |
    <router-link to="/read-page">閲覧画面</router-link>|
    <router-link to="/calendar">カレンダー</router-link>|
    <router-link to="/analysis">分析</router-link>
  </div>
  <router-view />
</template>
