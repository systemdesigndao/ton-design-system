<script setup lang="ts">
import './assets/styles/global.css';
</script>

<template>
  <layout-element>
    <main slot="content">
      <card-light>
        <div slot="content">
          <button-primary link="https://t.me"></button-primary>
        </div>
      </card-light>
      <spacing-block type="top" :payload="12"></spacing-block>
      <card-light>
        <div slot="content">
          <button-outline link="https://github.com"></button-outline>
        </div>
      </card-light>
      <spacing-block type="top" :payload="12"></spacing-block>
      <card-light>
        <div slot="content">
          <text-black>
            <span slot="text">text black</span>
          </text-black>
        </div>
      </card-light>
      <spacing-block type="top" :payload="12"></spacing-block>
      <card-light>
        <div slot="content">
          <text-bold>
            <span slot="text">text bold</span>
          </text-bold>
        </div>
      </card-light>
      <spacing-block type="top" :payload="12"></spacing-block>
      <card-light>
        <div slot="content">
          <text-regular>
            <span slot="text">text regular</span>
          </text-regular>
        </div>
      </card-light>
      <spacing-block type="top" :payload="12"></spacing-block>
      <card-dark>
        <div slot="content">
          <text-white>
            <span slot="text">text white</span>
          </text-white>
        </div>
      </card-dark>
      <spacing-block type="top" :payload="12"></spacing-block>
      <card-dark>
        <div slot="content">
          <ton-logo-dark></ton-logo-dark>
        </div>
      </card-dark>
      <spacing-block type="top" :payload="12"></spacing-block>
      <card-light>
        <div slot="content">
          <ton-logo-light></ton-logo-light>
        </div>
      </card-light>
      <spacing-block type="top" :payload="12"></spacing-block>
       <card-light>
        <div slot="content">
          <ton-symbol></ton-symbol>
        </div>
      </card-light>
      <spacing-block type="top" :payload="12"></spacing-block>
      <card-dark>
        <div slot="content">
          <gem-logo-dark></gem-logo-dark>
        </div>
      </card-dark>
      <spacing-block type="top" :payload="12"></spacing-block>
      <card-light>
        <div slot="content">
          <gem-logo-light></gem-logo-light>
        </div>
      </card-light>
      <spacing-block type="top" :payload="12"></spacing-block>
      <card-light>
        <div slot="content">
          <gem-symbol></gem-symbol>
        </div>
      </card-light>
      <spacing-block type="top" :payload="12"></spacing-block>
      <card-light>
        <div slot="content">
          <chart-candle-stick></chart-candle-stick>
        </div>
      </card-light>
      <spacing-block type="top" :payload="12"></spacing-block>
      <card-light>
        <div slot="content">
          <chart-line></chart-line>
        </div>
      </card-light>
      <spacing-block type="top" :payload="12"></spacing-block>
    </main>
  </layout-element>
</template>