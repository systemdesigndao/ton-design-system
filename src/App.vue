<script setup lang="ts">
import Details from './components/Details.vue';
import Layout from './components/Layout.vue';
import CardLight from './components/CardLight.vue';
// import CardDark from './components/CardDark.vue';
import TextRegular from './components/TextRegular.vue';
import Row from './components/Row.vue';
</script>

<template>
  <Layout>
    <template v-slot:header>
      <a>
        <TextRegular>
          <template v-slot:text>
            TON Creation
          </template>
        </TextRegular>
      </a>
    </template>
    <template v-slot:content>
      <div class="container">
        <Row class="d-flex justify-content-center">
          <template v-slot:content>
            <CardLight>
              <template v-slot:content>
                <Details />
              </template>
            </CardLight>
            <CardLight class="m-l-1">
              <template v-slot:content>
                <TextRegular>
                  <template v-slot:text>
                    Text Regular
                  </template>
                </TextRegular>
              </template>
            </CardLight>
          </template>
        </Row>
      </div>
    </template>
    <template v-slot:footer>
      <a className="d-flex align-items-center">
        <TextRegular>
          <template v-slot:text>
            Based on
          </template>
        </TextRegular>
        <img class="w-20 m-l-1" src="/icons/ton-logo-light.svg" alt="Logo" />
        </a>
    </template>
  </Layout>
</template>