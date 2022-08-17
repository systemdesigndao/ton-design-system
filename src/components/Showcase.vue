<script setup lang="ts">
import Details from './Details.vue';
import Layout from './Layout.vue';
import CardLight from './CardLight.vue';
import CardDark from './CardDark.vue';
import Row from './Row.vue';
import TextBlack from './TextBlack.vue';
import TextBold from './TextBold.vue';
import TextRegular from './TextRegular.vue';
import TextWhite from './TextWhite.vue';
import GemLogoDark from './GemLogoDark.vue';
import GemLogoLight from './GemLogoLight.vue';
import GemSymbol from './GemSymbol.vue';
import TONLogoDark from './TONLogoDark.vue';
import TONLogoLight from './TONLogoLight.vue';
import TONSymbol from './TONSymbol.vue';
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
            <CardLight>
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
            <CardLight>
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
            <CardLight>
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
            <CardDark class="m-l-1">
              <template v-slot:content>
                <Details />
              </template>
            </CardDark>
          </template>
        </Row>
        <Row class="d-flex justify-content-center m-1">
          <template v-slot:content>
            <CardLight>
              <template v-slot:content>
                <GemLogoLight />
              </template>
            </CardLight>
            <CardDark class="m-l-1">
              <template v-slot:content>
                <GemLogoDark />
              </template>
            </CardDark>
          </template>
        </Row>
        <Row class="d-flex justify-content-center m-1">
          <template v-slot:content>
            <CardLight>
              <template v-slot:content>
                <GemSymbol />
              </template>
            </CardLight>
            <CardDark class="m-l-1">
              <template v-slot:content>
                <GemSymbol />
              </template>
            </CardDark>
          </template>
        </Row>
        <Row class="d-flex justify-content-center m-1">
          <template v-slot:content>
            <CardLight>
              <template v-slot:content>
                <TONLogoLight />
              </template>
            </CardLight>
            <CardDark class="m-l-1">
              <template v-slot:content>
                <TONLogoDark />
              </template>
            </CardDark>
          </template>
        </Row>
        <Row class="d-flex justify-content-center m-1">
          <template v-slot:content>
            <CardLight>
              <template v-slot:content>
                <TONSymbol />
              </template>
            </CardLight>
            <CardDark class="m-l-1">
              <template v-slot:content>
                <TONSymbol />
              </template>
            </CardDark>
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