<script setup lang="ts">
import Details from './components/Details.vue';
import Layout from './components/Layout.vue';
import CardLight from './components/CardLight.vue';
import CardDark from './components/CardDark.vue';
import Row from './components/Row.vue';
import TextBlack from './components/TextBlack.vue';
import TextBold from './components/TextBold.vue';
import TextRegular from './components/TextRegular.vue';
import TextWhite from './components/TextWhite.vue';
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
        <Row class="d-flex justify-content-center m-1">
          <template v-slot:content>
            <CardLight class="m-l-1">
              <template v-slot:content>
                <TextBlack>
                  <template v-slot:text>
                    Text Black
                  </template>
                </TextBlack>
              </template>
            </CardLight>
            <CardDark class="m-l-1">
              <template v-slot:content>
                <TextBlack>
                  <template v-slot:text>
                    <TextWhite>
                      <template v-slot:text>
                        Text Black White
                      </template>
                    </TextWhite>
                  </template>
                </TextBlack>
              </template>
            </CardDark>
          </template>
        </Row>
        <Row class="d-flex justify-content-center m-1">
          <template v-slot:content>
            <CardLight class="m-l-1">
              <template v-slot:content>
                <TextBold>
                  <template v-slot:text>
                    Text Bold
                  </template>
                </TextBold>
              </template>
            </CardLight>
            <CardDark class="m-l-1">
              <template v-slot:content>
                <TextBold>
                  <template v-slot:text>
                    <TextWhite>
                      <template v-slot:text>
                        Text Bold White
                      </template>
                    </TextWhite>
                  </template>
                </TextBold>
              </template>
            </CardDark>
          </template>
        </Row>
        <Row class="d-flex justify-content-center m-1">
          <template v-slot:content>
            <CardLight class="m-l-1">
              <template v-slot:content>
                <TextRegular>
                  <template v-slot:text>
                    Text Regular Black
                  </template>
                </TextRegular>
              </template>
            </CardLight>
            <CardDark class="m-l-1">
              <template v-slot:content>
                <TextRegular>
                  <template v-slot:text>
                    <TextWhite>
                      <template v-slot:text>
                        Text Regular White
                      </template>
                    </TextWhite>
                  </template>
                </TextRegular>
              </template>
            </CardDark>
          </template>
        </Row>
        <Row class="d-flex justify-content-center m-1">
          <template v-slot:content>
            <CardLight>
              <template v-slot:content>
                <Details />
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