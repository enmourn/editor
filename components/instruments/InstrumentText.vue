<template>
  <div class="instrument text" :class="{active: is_active()}">
    <button type="button" class="tab" @click="openTab">
      <span class="icon"></span>
    </button>
    <div class="head">
      <span class="title">Текст</span>
    </div>
    <div class="content">
      <textarea class="text" placeholder="Напишите текст"></textarea>
      <div class="text_align_and_shape">
        <label class="align left">
          <input type="radio" name="align"/>
          <div class="icon">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </label>
        <label class="align center">
          <input type="radio" name="align"/>
          <div class="icon">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </label>
        <label class="align right">
          <input type="radio" name="align"/>
          <div class="icon">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </label>
        <label class="shape bold">
          <input type="checkbox"/>
          <span class="icon">B</span>
        </label>
        <label class="shape italic">
          <input type="checkbox"/>
          <span class="icon">I</span>
        </label>
        <label class="shape underline">
          <input type="checkbox"/>
          <span class="icon">U</span>
        </label>
      </div>
      <div class="text_font">
        <span class="title">Шрифт</span>
        <select>
          <option>Lobster</option>
          <option>ArialMT</option>
          <option>Bickham Script Three</option>
        </select>
      </div>
      <div class="text_size">
        <span class="title">Размер текста</span>
        <input type="range" min="0" max="100" step="1" value="16"/>
      </div>
      <div class="text_color">
        <span class="title">Цвет текста</span>
        <div class="color_set">
          <span class="color black"></span>
          <span class="color grey"></span>
          <span class="color white"></span>
          <div class="color palette">
            <input type="color" value="#ff0000"/>
            <div class="icon">
              <div class="top_side">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div class="bottom_side">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Provide } from "nuxt-property-decorator"
  import Instrument from '../mixins/instrument/instrument'

  @Component({})
  export default class InstrumentText extends Instrument {
    @Provide() instrument_name = 'text';
  }
</script>

<style lang="scss" scoped>
  @import "../../assets/scss/vars";
  @import "../../assets/scss/sprite";
  @import "../mixins/instrument/instrument";
  @include instrument($text, $text_active, 4);
  .content {
    display: flex;
    flex-direction: column;
    .text {
      resize: none;
      height: 120px;
      margin: 20px 10px;
      padding: 5px 10px;
      flex-grow: 1;
      border: 1px solid #d3d3d3;
      font-family: $c35;
      font-size: 15px;
      color: $color_dark_grey;
      outline: none;
      &:focus {
        border: 1px solid $color_dark_grey;
      }
      &::placeholder {
        color: #a8b2ba;
      }
    }
    .text_align_and_shape {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 15px 10px;
      border-bottom: 1px solid #d3d3d3;
      .align {
        cursor: pointer;
        padding: 5px;
        .icon {
          display: flex;
          flex-direction: column;
          span {
            display: block;
            height: 1px;
            background: #a8b2ba;
            margin-bottom: 1px;
            &:nth-of-type(1) { width: 15px; }
            &:nth-of-type(2) { width: 10px; }
            &:nth-of-type(3) { width: 5px; }
            &:nth-of-type(4) { width: 13px; }
            &:nth-of-type(5) { width: 15px; }
            &:nth-of-type(6) { width: 10px; }
          }
        }
        &.center {
          .icon {
            align-items: center;
          }
        }
        &.right {
          .icon {
            align-items: flex-end;
          }
        }
        input {
          display: none;
        }
        input:checked + .icon span {
          background: $color_blue;
        }
      }
      .shape {
        cursor: pointer;
        padding: 5px;
        .icon {
          font-family: $c55;
          font-size: 16px;
          color: #a8b2ba;
        }
        &.underline {
          .icon {
            text-decoration: underline;
          }
        }
        input {
          display: none;
        }
        input:checked + .icon {
          color: $color_blue;
        }
      }
    }
    .text_font {
      padding: 10px 15px 15px;
      border-bottom: 1px solid #d3d3d3;
      display: flex;
      flex-direction: column;
      .title {
        font-family: $c35;
        font-size: 12px;
        color: #a8b2ba;
      }
      select {
        margin-top: 10px;
        padding: 5px;
        border: 1px solid #d3d3d3;
        outline: none;
        font-size: 16px;
        &:focus {
          border: 1px solid $color_dark_grey;
        }
      }
    }
    .text_size {
      padding: 10px 15px 15px;
      border-bottom: 1px solid #d3d3d3;
      display: flex;
      flex-direction: column;
      .title {
        font-family: $c35;
        font-size: 12px;
        color: #a8b2ba;
      }
      input {
        -webkit-appearance: none;
        outline: none;
        $back_color: #c4c4c4;
        $thumb_color: $color_dark_grey;
        $margin: 20px 0 10px;

        &::-webkit-slider-runnable-track {
          width: 100%;
          height: 2px;
          background: $back_color;
          cursor: pointer;
          margin: $margin;
        }

        &::-moz-range-track {
          width: 100%;
          height: 2px;
          background: $back_color;
          cursor: pointer;
          margin: $margin;
        }

        &::-webkit-slider-thumb {
          width: 12px;
          height: 12px;
          background: $thumb_color;
          border-radius: 50%;
          border: none;
          -webkit-appearance: none;
          margin-top: -5px;
        }

        &::-moz-range-thumb {
          width: 12px;
          height: 12px;
          background: $thumb_color;
          border-radius: 50%;
          border: none;
          -webkit-appearance: none;
          margin-top: -5px;
        }
      }
    }
    .text_color {
      padding: 10px 15px 15px;
      border-bottom: 1px solid #d3d3d3;
      .title {
        display: block;
        font-family: $c35;
        font-size: 12px;
        color: #a8b2ba;
        margin-bottom: 10px;
      }
      .color_set {
        display: flex;
        .color {
          display: block;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          margin-right: 10px;
          cursor: pointer;
          &.black {
            background: black;
          }
          &.grey {
            background: $color_dark_grey;
          }
          &.white {
            background: white;
            width: 18px;
            height: 18px;
            border: 1px solid black;
          }
          &.palette {
            input {
              display: none;
            }
            .icon {
              width: inherit;
              height: inherit;
              border-radius: inherit;
              position: relative;
              overflow: hidden;
              .top_side {
                position: absolute;
                width: 100%;
                height: 100%;
                bottom: 50%;
                filter: blur(1px);
                overflow: hidden;
                span:nth-of-type(1) {
                  width: 50%;
                  height: 50%;
                  background: #9ED110;
                  position: absolute;
                  left: 0;
                  bottom: 0;
                  transform-origin: 100% 100%;
                  transform: rotate(0deg);
                }
                span:nth-of-type(2) {
                  width: 50%;
                  height: 50%;
                  background: #50B517;
                  position: absolute;
                  left: 0;
                  bottom: 0;
                  transform-origin: 100% 100%;
                  transform: rotate(30deg);
                }
                span:nth-of-type(3) {
                  width: 50%;
                  height: 50%;
                  background: #179067;
                  position: absolute;
                  left: 0;
                  bottom: 0;
                  transform-origin: 100% 100%;
                  transform: rotate(60deg);
                }
                span:nth-of-type(4) {
                  width: 50%;
                  height: 50%;
                  background: #476EAF;
                  position: absolute;
                  left: 0;
                  bottom: 0;
                  transform-origin: 100% 100%;
                  transform: rotate(90deg);
                }
                span:nth-of-type(5) {
                  width: 50%;
                  height: 50%;
                  background: #9f49ac;
                  position: absolute;
                  left: 0;
                  bottom: 0;
                  transform-origin: 100% 100%;
                  transform: rotate(120deg);
                }
                span:nth-of-type(6) {
                  width: 50%;
                  height: 50%;
                  background: #CC42A2;
                  position: absolute;
                  left: 0;
                  bottom: 0;
                  transform-origin: 100% 100%;
                  transform: rotate(150deg);
                }
              }
              .bottom_side {
                position: absolute;
                width: 100%;
                height: 100%;
                top: 50%;
                filter: blur(1px);
                overflow: hidden;
                span:nth-of-type(1) {
                  width: 50%;
                  height: 50%;
                  background: #FF3BA7;
                  position: absolute;
                  left: 50%;
                  transform-origin: 0 0;
                  transform: rotate(0deg);
                }
                span:nth-of-type(2) {
                  width: 50%;
                  height: 50%;
                  background: #FF5800;
                  position: absolute;
                  left: 50%;
                  transform-origin: 0 0;
                  transform: rotate(30deg);
                }
                span:nth-of-type(3) {
                  width: 50%;
                  height: 50%;
                  background: #FF8100;
                  position: absolute;
                  left: 50%;
                  transform-origin: 0 0;
                  transform: rotate(60deg);
                }
                span:nth-of-type(4) {
                  width: 50%;
                  height: 50%;
                  background: #FEAC00;
                  position: absolute;
                  left: 50%;
                  transform-origin: 0 0;
                  transform: rotate(90deg);
                }
                span:nth-of-type(5) {
                  width: 50%;
                  height: 50%;
                  background: #FFCC00;
                  position: absolute;
                  left: 50%;
                  transform-origin: 0 0;
                  transform: rotate(120deg);
                }
                span:nth-of-type(6) {
                  width: 50%;
                  height: 50%;
                  background: #EDE604;
                  position: absolute;
                  left: 50%;
                  transform-origin: 0 0;
                  transform: rotate(150deg);
                }
              }
            }
          }
        }
      }
    }
  }
</style>