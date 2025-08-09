// CSS 파일 동적 로딩 유틸리티

type StylesheetEl = HTMLLinkElement | HTMLStyleElement;
interface LoadedStylesheets {
  [key: string]: StylesheetEl;
}

const loadedStylesheets: LoadedStylesheets = {};

// 애니메이션 CSS 정의
const ANIMATION_CSS: { [key: string]: string } = {
  flip: `
    /* Flip Animations */
    .flip-horizontal-bottom {
      -webkit-animation: flip-horizontal-bottom 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
      animation: flip-horizontal-bottom 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
    }
    @-webkit-keyframes flip-horizontal-bottom {
      0% { -webkit-transform: rotateX(0); transform: rotateX(0); }
      100% { -webkit-transform: rotateX(-180deg); transform: rotateX(-180deg); }
    }
    @keyframes flip-horizontal-bottom {
      0% { -webkit-transform: rotateX(0); transform: rotateX(0); }
      100% { -webkit-transform: rotateX(-180deg); transform: rotateX(-180deg); }
    }
    
    .flip-horizontal-top {
      -webkit-animation: flip-horizontal-top 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
      animation: flip-horizontal-top 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
    }
    @-webkit-keyframes flip-horizontal-top {
      0% { -webkit-transform: rotateX(0); transform: rotateX(0); }
      100% { -webkit-transform: rotateX(180deg); transform: rotateX(180deg); }
    }
    @keyframes flip-horizontal-top {
      0% { -webkit-transform: rotateX(0); transform: rotateX(0); }
      100% { -webkit-transform: rotateX(180deg); transform: rotateX(180deg); }
    }
    
    .flip-horizontal-fwd {
      -webkit-animation: flip-horizontal-fwd 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
      animation: flip-horizontal-fwd 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
    }
    @-webkit-keyframes flip-horizontal-fwd {
      0% { -webkit-transform: translateZ(0) rotateX(0); transform: translateZ(0) rotateX(0); }
      100% { -webkit-transform: translateZ(160px) rotateX(-180deg); transform: translateZ(160px) rotateX(-180deg); }
    }
    @keyframes flip-horizontal-fwd {
      0% { -webkit-transform: translateZ(0) rotateX(0); transform: translateZ(0) rotateX(0); }
      100% { -webkit-transform: translateZ(160px) rotateX(-180deg); transform: translateZ(160px) rotateX(-180deg); }
    }
    
    .flip-horizontal-bck {
      -webkit-animation: flip-horizontal-bck 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
      animation: flip-horizontal-bck 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
    }
    @-webkit-keyframes flip-horizontal-bck {
      0% { -webkit-transform: translateZ(0) rotateX(0); transform: translateZ(0) rotateX(0); }
      100% { -webkit-transform: translateZ(-160px) rotateX(-180deg); transform: translateZ(-160px) rotateX(-180deg); }
    }
    @keyframes flip-horizontal-bck {
      0% { -webkit-transform: translateZ(0) rotateX(0); transform: translateZ(0) rotateX(0); }
      100% { -webkit-transform: translateZ(-160px) rotateX(-180deg); transform: translateZ(-160px) rotateX(-180deg); }
    }
    
    .flip-vertical-left {
      -webkit-animation: flip-vertical-left 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
      animation: flip-vertical-left 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
    }
    @-webkit-keyframes flip-vertical-left {
      0% { -webkit-transform: rotateY(0); transform: rotateY(0); }
      100% { -webkit-transform: rotateY(-180deg); transform: rotateY(-180deg); }
    }
    @keyframes flip-vertical-left {
      0% { -webkit-transform: rotateY(0); transform: rotateY(0); }
      100% { -webkit-transform: rotateY(-180deg); transform: rotateY(-180deg); }
    }
    
    .flip-vertical-right {
      -webkit-animation: flip-vertical-right 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
      animation: flip-vertical-right 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
    }
    @-webkit-keyframes flip-vertical-right {
      0% { -webkit-transform: rotateY(0); transform: rotateY(0); }
      100% { -webkit-transform: rotateY(180deg); transform: rotateY(180deg); }
    }
    @keyframes flip-vertical-right {
      0% { -webkit-transform: rotateY(0); transform: rotateY(0); }
      100% { -webkit-transform: rotateY(180deg); transform: rotateY(180deg); }
    }
    
    .flip-vertical-fwd {
      -webkit-animation: flip-vertical-fwd 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
      animation: flip-vertical-fwd 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
    }
    @-webkit-keyframes flip-vertical-fwd {
      0% { -webkit-transform: translateZ(0) rotateY(0); transform: translateZ(0) rotateY(0); }
      100% { -webkit-transform: translateZ(160px) rotateY(-180deg); transform: translateZ(160px) rotateY(-180deg); }
    }
    @keyframes flip-vertical-fwd {
      0% { -webkit-transform: translateZ(0) rotateY(0); transform: translateZ(0) rotateY(0); }
      100% { -webkit-transform: translateZ(160px) rotateY(-180deg); transform: translateZ(160px) rotateY(-180deg); }
    }
    
    .flip-vertical-bck {
      -webkit-animation: flip-vertical-bck 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
      animation: flip-vertical-bck 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
    }
    @-webkit-keyframes flip-vertical-bck {
      0% { -webkit-transform: translateZ(0) rotateY(0); transform: translateZ(0) rotateY(0); }
      100% { -webkit-transform: translateZ(-160px) rotateY(-180deg); transform: translateZ(-160px) rotateY(-180deg); }
    }
    @keyframes flip-vertical-bck {
      0% { -webkit-transform: translateZ(0) rotateY(0); transform: translateZ(0) rotateY(0); }
      100% { -webkit-transform: translateZ(-160px) rotateY(-180deg); transform: translateZ(-160px) rotateY(-180deg); }
    }
    
    .flip-diagonal-1-fwd {
      -webkit-animation: flip-diagonal-1-fwd 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
      animation: flip-diagonal-1-fwd 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
    }
    @-webkit-keyframes flip-diagonal-1-fwd {
      0% { -webkit-transform: translateZ(0) rotateX(0) rotateY(0); transform: translateZ(0) rotateX(0) rotateY(0); }
      100% { -webkit-transform: translateZ(160px) rotateX(-180deg) rotateY(-180deg); transform: translateZ(160px) rotateX(-180deg) rotateY(-180deg); }
    }
    @keyframes flip-diagonal-1-fwd {
      0% { -webkit-transform: translateZ(0) rotateX(0) rotateY(0); transform: translateZ(0) rotateX(0) rotateY(0); }
      100% { -webkit-transform: translateZ(160px) rotateX(-180deg) rotateY(-180deg); transform: translateZ(160px) rotateX(-180deg) rotateY(-180deg); }
    }
    
    .flip-diagonal-1-bck {
      -webkit-animation: flip-diagonal-1-bck 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
      animation: flip-diagonal-1-bck 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
    }
    @-webkit-keyframes flip-diagonal-1-bck {
      0% { -webkit-transform: translateZ(0) rotateX(0) rotateY(0); transform: translateZ(0) rotateX(0) rotateY(0); }
      100% { -webkit-transform: translateZ(-160px) rotateX(-180deg) rotateY(-180deg); transform: translateZ(-160px) rotateX(-180deg) rotateY(-180deg); }
    }
    @keyframes flip-diagonal-1-bck {
      0% { -webkit-transform: translateZ(0) rotateX(0) rotateY(0); transform: translateZ(0) rotateX(0) rotateY(0); }
      100% { -webkit-transform: translateZ(-160px) rotateX(-180deg) rotateY(-180deg); transform: translateZ(-160px) rotateX(-180deg) rotateY(-180deg); }
    }
    
    .flip-diagonal-1-bl {
      -webkit-animation: flip-diagonal-1-bl 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
      animation: flip-diagonal-1-bl 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
    }
    @-webkit-keyframes flip-diagonal-1-bl {
      0% { -webkit-transform: rotateX(0) rotateY(0); transform: rotateX(0) rotateY(0); -webkit-transform-origin: 0% 100%; transform-origin: 0% 100%; }
      100% { -webkit-transform: rotateX(-180deg) rotateY(-180deg); transform: rotateX(-180deg) rotateY(-180deg); -webkit-transform-origin: 0% 100%; transform-origin: 0% 100%; }
    }
    @keyframes flip-diagonal-1-bl {
      0% { -webkit-transform: rotateX(0) rotateY(0); transform: rotateX(0) rotateY(0); -webkit-transform-origin: 0% 100%; transform-origin: 0% 100%; }
      100% { -webkit-transform: rotateX(-180deg) rotateY(-180deg); transform: rotateX(-180deg) rotateY(-180deg); -webkit-transform-origin: 0% 100%; transform-origin: 0% 100%; }
    }
    
    .flip-diagonal-1-tr {
      -webkit-animation: flip-diagonal-1-tr 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
      animation: flip-diagonal-1-tr 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
    }
    @-webkit-keyframes flip-diagonal-1-tr {
      0% { -webkit-transform: rotateX(0) rotateY(0); transform: rotateX(0) rotateY(0); -webkit-transform-origin: 100% 0%; transform-origin: 100% 0%; }
      100% { -webkit-transform: rotateX(180deg) rotateY(180deg); transform: rotateX(180deg) rotateY(180deg); -webkit-transform-origin: 100% 0%; transform-origin: 100% 0%; }
    }
    @keyframes flip-diagonal-1-tr {
      0% { -webkit-transform: rotateX(0) rotateY(0); transform: rotateX(0) rotateY(0); -webkit-transform-origin: 100% 0%; transform-origin: 100% 0%; }
      100% { -webkit-transform: rotateX(180deg) rotateY(180deg); transform: rotateX(180deg) rotateY(180deg); -webkit-transform-origin: 100% 0%; transform-origin: 100% 0%; }
    }
    
    .flip-diagonal-2-fwd {
      -webkit-animation: flip-diagonal-2-fwd 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
      animation: flip-diagonal-2-fwd 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
    }
    @-webkit-keyframes flip-diagonal-2-fwd {
      0% { -webkit-transform: translateZ(0) rotateX(0) rotateY(0); transform: translateZ(0) rotateX(0) rotateY(0); }
      100% { -webkit-transform: translateZ(160px) rotateX(180deg) rotateY(-180deg); transform: translateZ(160px) rotateX(180deg) rotateY(-180deg); }
    }
    @keyframes flip-diagonal-2-fwd {
      0% { -webkit-transform: translateZ(0) rotateX(0) rotateY(0); transform: translateZ(0) rotateX(0) rotateY(0); }
      100% { -webkit-transform: translateZ(160px) rotateX(180deg) rotateY(-180deg); transform: translateZ(160px) rotateX(180deg) rotateY(-180deg); }
    }
    
    .flip-diagonal-2-bck {
      -webkit-animation: flip-diagonal-2-bck 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
      animation: flip-diagonal-2-bck 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
    }
    @-webkit-keyframes flip-diagonal-2-bck {
      0% { -webkit-transform: translateZ(0) rotateX(0) rotateY(0); transform: translateZ(0) rotateX(0) rotateY(0); }
      100% { -webkit-transform: translateZ(-160px) rotateX(180deg) rotateY(-180deg); transform: translateZ(-160px) rotateX(180deg) rotateY(-180deg); }
    }
    @keyframes flip-diagonal-2-bck {
      0% { -webkit-transform: translateZ(0) rotateX(0) rotateY(0); transform: translateZ(0) rotateX(0) rotateY(0); }
      100% { -webkit-transform: translateZ(-160px) rotateX(180deg) rotateY(-180deg); transform: translateZ(-160px) rotateX(180deg) rotateY(-180deg); }
    }
    
    .flip-diagonal-2-br {
      -webkit-animation: flip-diagonal-2-br 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
      animation: flip-diagonal-2-br 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
    }
    @-webkit-keyframes flip-diagonal-2-br {
      0% { -webkit-transform: rotateX(0) rotateY(0); transform: rotateX(0) rotateY(0); -webkit-transform-origin: 100% 100%; transform-origin: 100% 100%; }
      100% { -webkit-transform: rotateX(180deg) rotateY(-180deg); transform: rotateX(180deg) rotateY(-180deg); -webkit-transform-origin: 100% 100%; transform-origin: 100% 100%; }
    }
    @keyframes flip-diagonal-2-br {
      0% { -webkit-transform: rotateX(0) rotateY(0); transform: rotateX(0) rotateY(0); -webkit-transform-origin: 100% 100%; transform-origin: 100% 100%; }
      100% { -webkit-transform: rotateX(180deg) rotateY(-180deg); transform: rotateX(180deg) rotateY(-180deg); -webkit-transform-origin: 100% 100%; transform-origin: 100% 100%; }
    }
    
    .flip-diagonal-2-tl {
      -webkit-animation: flip-diagonal-2-tl 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
      animation: flip-diagonal-2-tl 0.4s cubic-bezier(0.455, 0.03, 0.515, 0.955) both;
    }
    @-webkit-keyframes flip-diagonal-2-tl {
      0% { -webkit-transform: rotateX(0) rotateY(0); transform: rotateX(0) rotateY(0); -webkit-transform-origin: 0% 0%; transform-origin: 0% 0%; }
      100% { -webkit-transform: rotateX(-180deg) rotateY(180deg); transform: rotateX(-180deg) rotateY(180deg); -webkit-transform-origin: 0% 0%; transform-origin: 0% 0%; }
    }
    @keyframes flip-diagonal-2-tl {
      0% { -webkit-transform: rotateX(0) rotateY(0); transform: rotateX(0) rotateY(0); -webkit-transform-origin: 0% 0%; transform-origin: 0% 0%; }
      100% { -webkit-transform: rotateX(-180deg) rotateY(180deg); transform: rotateX(-180deg) rotateY(180deg); -webkit-transform-origin: 0% 0%; transform-origin: 0% 0%; }
    }
  `,
  'scale-up': `
    /* Scale Up Animations */
    .scale-up-center {
      -webkit-animation: scale-up-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
      animation: scale-up-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
    }
    @-webkit-keyframes scale-up-center {
      0% { -webkit-transform: scale(0.5); transform: scale(0.5); }
      100% { -webkit-transform: scale(1); transform: scale(1); }
    }
    @keyframes scale-up-center {
      0% { -webkit-transform: scale(0.5); transform: scale(0.5); }
      100% { -webkit-transform: scale(1); transform: scale(1); }
    }
    
    .scale-up-top {
      -webkit-animation: scale-up-top 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
      animation: scale-up-top 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
    }
    @-webkit-keyframes scale-up-top {
      0% { -webkit-transform: scale(0.5); transform: scale(0.5); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
      100% { -webkit-transform: scale(1); transform: scale(1); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
    }
    @keyframes scale-up-top {
      0% { -webkit-transform: scale(0.5); transform: scale(0.5); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
      100% { -webkit-transform: scale(1); transform: scale(1); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
    }
    
    .scale-up-bottom {
      -webkit-animation: scale-up-bottom 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
      animation: scale-up-bottom 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
    }
    @-webkit-keyframes scale-up-bottom {
      0% { -webkit-transform: scale(0.5); transform: scale(0.5); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
      100% { -webkit-transform: scale(1); transform: scale(1); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
    }
    @keyframes scale-up-bottom {
      0% { -webkit-transform: scale(0.5); transform: scale(0.5); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
      100% { -webkit-transform: scale(1); transform: scale(1); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
    }
    
    .scale-up-left {
      -webkit-animation: scale-up-left 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
      animation: scale-up-left 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
    }
    @-webkit-keyframes scale-up-left {
      0% { -webkit-transform: scale(0.5); transform: scale(0.5); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
      100% { -webkit-transform: scale(1); transform: scale(1); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
    }
    @keyframes scale-up-left {
      0% { -webkit-transform: scale(0.5); transform: scale(0.5); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
      100% { -webkit-transform: scale(1); transform: scale(1); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
    }
    
    .scale-up-right {
      -webkit-animation: scale-up-right 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
      animation: scale-up-right 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
    }
    @-webkit-keyframes scale-up-right {
      0% { -webkit-transform: scale(0.5); transform: scale(0.5); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
      100% { -webkit-transform: scale(1); transform: scale(1); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
    }
    @keyframes scale-up-right {
      0% { -webkit-transform: scale(0.5); transform: scale(0.5); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
      100% { -webkit-transform: scale(1); transform: scale(1); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
    }
    
    .scale-up-hor-left {
      -webkit-animation: scale-up-hor-left 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
      animation: scale-up-hor-left 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
    }
    @-webkit-keyframes scale-up-hor-left {
      0% { -webkit-transform: scaleX(0.4); transform: scaleX(0.4); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
      100% { -webkit-transform: scaleX(1); transform: scaleX(1); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
    }
    @keyframes scale-up-hor-left {
      0% { -webkit-transform: scaleX(0.4); transform: scaleX(0.4); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
      100% { -webkit-transform: scaleX(1); transform: scaleX(1); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
    }
    
    .scale-up-hor-center {
      -webkit-animation: scale-up-hor-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
      animation: scale-up-hor-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
    }
    @-webkit-keyframes scale-up-hor-center {
      0% { -webkit-transform: scaleX(0.4); transform: scaleX(0.4); }
      100% { -webkit-transform: scaleX(1); transform: scaleX(1); }
    }
    @keyframes scale-up-hor-center {
      0% { -webkit-transform: scaleX(0.4); transform: scaleX(0.4); }
      100% { -webkit-transform: scaleX(1); transform: scaleX(1); }
    }
    
    .scale-up-hor-right {
      -webkit-animation: scale-up-hor-right 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
      animation: scale-up-hor-right 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
    }
    @-webkit-keyframes scale-up-hor-right {
      0% { -webkit-transform: scaleX(0.4); transform: scaleX(0.4); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
      100% { -webkit-transform: scaleX(1); transform: scaleX(1); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
    }
    @keyframes scale-up-hor-right {
      0% { -webkit-transform: scaleX(0.4); transform: scaleX(0.4); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
      100% { -webkit-transform: scaleX(1); transform: scaleX(1); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
    }
    
    .scale-up-ver-top {
      -webkit-animation: scale-up-ver-top 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
      animation: scale-up-ver-top 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
    }
    @-webkit-keyframes scale-up-ver-top {
      0% { -webkit-transform: scaleY(0.4); transform: scaleY(0.4); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
      100% { -webkit-transform: scaleY(1); transform: scaleY(1); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
    }
    @keyframes scale-up-ver-top {
      0% { -webkit-transform: scaleY(0.4); transform: scaleY(0.4); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
      100% { -webkit-transform: scaleY(1); transform: scaleY(1); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
    }
    
    .scale-up-ver-center {
      -webkit-animation: scale-up-ver-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
      animation: scale-up-ver-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
    }
    @-webkit-keyframes scale-up-ver-center {
      0% { -webkit-transform: scaleY(0.4); transform: scaleY(0.4); }
      100% { -webkit-transform: scaleY(1); transform: scaleY(1); }
    }
    @keyframes scale-up-ver-center {
      0% { -webkit-transform: scaleY(0.4); transform: scaleY(0.4); }
      100% { -webkit-transform: scaleY(1); transform: scaleY(1); }
    }
    
    .scale-up-ver-bottom {
      -webkit-animation: scale-up-ver-bottom 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
      animation: scale-up-ver-bottom 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
    }
    @-webkit-keyframes scale-up-ver-bottom {
      0% { -webkit-transform: scaleY(0.4); transform: scaleY(0.4); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
      100% { -webkit-transform: scaleY(1); transform: scaleY(1); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
    }
    @keyframes scale-up-ver-bottom {
      0% { -webkit-transform: scaleY(0.4); transform: scaleY(0.4); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
      100% { -webkit-transform: scaleY(1); transform: scaleY(1); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
    }
    
    .scale-up-tl {
      -webkit-animation: scale-up-tl 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
      animation: scale-up-tl 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
    }
    @-webkit-keyframes scale-up-tl {
      0% { -webkit-transform: scale(0.5); transform: scale(0.5); -webkit-transform-origin: 0% 0%; transform-origin: 0% 0%; }
      100% { -webkit-transform: scale(1); transform: scale(1); -webkit-transform-origin: 0% 0%; transform-origin: 0% 0%; }
    }
    @keyframes scale-up-tl {
      0% { -webkit-transform: scale(0.5); transform: scale(0.5); -webkit-transform-origin: 0% 0%; transform-origin: 0% 0%; }
      100% { -webkit-transform: scale(1); transform: scale(1); -webkit-transform-origin: 0% 0%; transform-origin: 0% 0%; }
    }
    
    .scale-up-tr {
      -webkit-animation: scale-up-tr 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
      animation: scale-up-tr 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
    }
    @-webkit-keyframes scale-up-tr {
      0% { -webkit-transform: scale(0.5); transform: scale(0.5); -webkit-transform-origin: 100% 0%; transform-origin: 100% 0%; }
      100% { -webkit-transform: scale(1); transform: scale(1); -webkit-transform-origin: 100% 0%; transform-origin: 100% 0%; }
    }
    @keyframes scale-up-tr {
      0% { -webkit-transform: scale(0.5); transform: scale(0.5); -webkit-transform-origin: 100% 0%; transform-origin: 100% 0%; }
      100% { -webkit-transform: scale(1); transform: scale(1); -webkit-transform-origin: 100% 0%; transform-origin: 100% 0%; }
    }
    
    .scale-up-bl {
      -webkit-animation: scale-up-bl 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
      animation: scale-up-bl 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
    }
    @-webkit-keyframes scale-up-bl {
      0% { -webkit-transform: scale(0.5); transform: scale(0.5); -webkit-transform-origin: 0% 100%; transform-origin: 0% 100%; }
      100% { -webkit-transform: scale(1); transform: scale(1); -webkit-transform-origin: 0% 100%; transform-origin: 0% 100%; }
    }
    @keyframes scale-up-bl {
      0% { -webkit-transform: scale(0.5); transform: scale(0.5); -webkit-transform-origin: 0% 100%; transform-origin: 0% 100%; }
      100% { -webkit-transform: scale(1); transform: scale(1); -webkit-transform-origin: 0% 100%; transform-origin: 0% 100%; }
    }
    
    .scale-up-br {
      -webkit-animation: scale-up-br 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
      animation: scale-up-br 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
    }
    @-webkit-keyframes scale-up-br {
      0% { -webkit-transform: scale(0.5); transform: scale(0.5); -webkit-transform-origin: 100% 100%; transform-origin: 100% 100%; }
      100% { -webkit-transform: scale(1); transform: scale(1); -webkit-transform-origin: 100% 100%; transform-origin: 100% 100%; }
    }
    @keyframes scale-up-br {
      0% { -webkit-transform: scale(0.5); transform: scale(0.5); -webkit-transform-origin: 100% 100%; transform-origin: 100% 100%; }
      100% { -webkit-transform: scale(1); transform: scale(1); -webkit-transform-origin: 100% 100%; transform-origin: 100% 100%; }
    }
  `,
  swing: `
    /* Swing Animations */
    .swing-top-fwd {
      -webkit-animation: swing-top-fwd 0.6s ease-out both;
      animation: swing-top-fwd 0.6s ease-out both;
    }
    @-webkit-keyframes swing-top-fwd {
      0% { -webkit-transform: rotateX(0deg); transform: rotateX(0deg); -webkit-transform-origin: top; transform-origin: top; }
      100% { -webkit-transform: rotateX(180deg); transform: rotateX(180deg); -webkit-transform-origin: top; transform-origin: top; }
    }
    @keyframes swing-top-fwd {
      0% { -webkit-transform: rotateX(0deg); transform: rotateX(0deg); -webkit-transform-origin: top; transform-origin: top; }
      100% { -webkit-transform: rotateX(180deg); transform: rotateX(180deg); -webkit-transform-origin: top; transform-origin: top; }
    }
    
    .swing-top-bck {
      -webkit-animation: swing-top-bck 0.6s ease-out both;
      animation: swing-top-bck 0.6s ease-out both;
    }
    @-webkit-keyframes swing-top-bck {
      0% { -webkit-transform: rotateX(0deg); transform: rotateX(0deg); -webkit-transform-origin: top; transform-origin: top; }
      100% { -webkit-transform: rotateX(-180deg); transform: rotateX(-180deg); -webkit-transform-origin: top; transform-origin: top; }
    }
    @keyframes swing-top-bck {
      0% { -webkit-transform: rotateX(0deg); transform: rotateX(0deg); -webkit-transform-origin: top; transform-origin: top; }
      100% { -webkit-transform: rotateX(-180deg); transform: rotateX(-180deg); -webkit-transform-origin: top; transform-origin: top; }
    }
    
    .swing-bottom-fwd {
      -webkit-animation: swing-bottom-fwd 0.6s ease-out both;
      animation: swing-bottom-fwd 0.6s ease-out both;
    }
    @-webkit-keyframes swing-bottom-fwd {
      0% { -webkit-transform: rotateX(0deg); transform: rotateX(0deg); -webkit-transform-origin: bottom; transform-origin: bottom; }
      100% { -webkit-transform: rotateX(-180deg); transform: rotateX(-180deg); -webkit-transform-origin: bottom; transform-origin: bottom; }
    }
    @keyframes swing-bottom-fwd {
      0% { -webkit-transform: rotateX(0deg); transform: rotateX(0deg); -webkit-transform-origin: bottom; transform-origin: bottom; }
      100% { -webkit-transform: rotateX(-180deg); transform: rotateX(-180deg); -webkit-transform-origin: bottom; transform-origin: bottom; }
    }
    
    .swing-bottom-bck {
      -webkit-animation: swing-bottom-bck 0.6s ease-out both;
      animation: swing-bottom-bck 0.6s ease-out both;
    }
    @-webkit-keyframes swing-bottom-bck {
      0% { -webkit-transform: rotateX(0deg); transform: rotateX(0deg); -webkit-transform-origin: bottom; transform-origin: bottom; }
      100% { -webkit-transform: rotateX(180deg); transform: rotateX(180deg); -webkit-transform-origin: bottom; transform-origin: bottom; }
    }
    @keyframes swing-bottom-bck {
      0% { -webkit-transform: rotateX(0deg); transform: rotateX(0deg); -webkit-transform-origin: bottom; transform-origin: bottom; }
      100% { -webkit-transform: rotateX(180deg); transform: rotateX(180deg); -webkit-transform-origin: bottom; transform-origin: bottom; }
    }
    
    .swing-left-fwd {
      -webkit-animation: swing-left-fwd 0.6s ease-out both;
      animation: swing-left-fwd 0.6s ease-out both;
    }
    @-webkit-keyframes swing-left-fwd {
      0% { -webkit-transform: rotateY(0deg); transform: rotateY(0deg); -webkit-transform-origin: left; transform-origin: left; }
      100% { -webkit-transform: rotateY(-180deg); transform: rotateY(-180deg); -webkit-transform-origin: left; transform-origin: left; }
    }
    @keyframes swing-left-fwd {
      0% { -webkit-transform: rotateY(0deg); transform: rotateY(0deg); -webkit-transform-origin: left; transform-origin: left; }
      100% { -webkit-transform: rotateY(-180deg); transform: rotateY(-180deg); -webkit-transform-origin: left; transform-origin: left; }
    }
    
    .swing-left-bck {
      -webkit-animation: swing-left-bck 0.6s ease-out both;
      animation: swing-left-bck 0.6s ease-out both;
    }
    @-webkit-keyframes swing-left-bck {
      0% { -webkit-transform: rotateY(0deg); transform: rotateY(0deg); -webkit-transform-origin: left; transform-origin: left; }
      100% { -webkit-transform: rotateY(180deg); transform: rotateY(180deg); -webkit-transform-origin: left; transform-origin: left; }
    }
    @keyframes swing-left-bck {
      0% { -webkit-transform: rotateY(0deg); transform: rotateY(0deg); -webkit-transform-origin: left; transform-origin: left; }
      100% { -webkit-transform: rotateY(180deg); transform: rotateY(180deg); -webkit-transform-origin: left; transform-origin: left; }
    }
    
    .swing-right-fwd {
      -webkit-animation: swing-right-fwd 0.6s ease-out both;
      animation: swing-right-fwd 0.6s ease-out both;
    }
    @-webkit-keyframes swing-right-fwd {
      0% { -webkit-transform: rotateY(0deg); transform: rotateY(0deg); -webkit-transform-origin: right; transform-origin: right; }
      100% { -webkit-transform: rotateY(180deg); transform: rotateY(180deg); -webkit-transform-origin: right; transform-origin: right; }
    }
    @keyframes swing-right-fwd {
      0% { -webkit-transform: rotateY(0deg); transform: rotateY(0deg); -webkit-transform-origin: right; transform-origin: right; }
      100% { -webkit-transform: rotateY(180deg); transform: rotateY(180deg); -webkit-transform-origin: right; transform-origin: right; }
    }
    
    .swing-right-bck {
      -webkit-animation: swing-right-bck 0.6s ease-out both;
      animation: swing-right-bck 0.6s ease-out both;
    }
    @-webkit-keyframes swing-right-bck {
      0% { -webkit-transform: rotateY(0deg); transform: rotateY(0deg); -webkit-transform-origin: right; transform-origin: right; }
      100% { -webkit-transform: rotateY(-180deg); transform: rotateY(-180deg); -webkit-transform-origin: right; transform-origin: right; }
    }
    @keyframes swing-right-bck {
      0% { -webkit-transform: rotateY(0deg); transform: rotateY(0deg); -webkit-transform-origin: right; transform-origin: right; }
      100% { -webkit-transform: rotateY(-180deg); transform: rotateY(-180deg); -webkit-transform-origin: right; transform-origin: right; }
    }
    
    .swing-top-left-fwd {
      -webkit-animation: swing-top-left-fwd 0.6s ease-out both;
      animation: swing-top-left-fwd 0.6s ease-out both;
    }
    @-webkit-keyframes swing-top-left-fwd {
      0% { -webkit-transform: rotateX(0deg) rotateY(0deg); transform: rotateX(0deg) rotateY(0deg); -webkit-transform-origin: 0% 0%; transform-origin: 0% 0%; }
      100% { -webkit-transform: rotateX(180deg) rotateY(-180deg); transform: rotateX(180deg) rotateY(-180deg); -webkit-transform-origin: 0% 0%; transform-origin: 0% 0%; }
    }
    @keyframes swing-top-left-fwd {
      0% { -webkit-transform: rotateX(0deg) rotateY(0deg); transform: rotateX(0deg) rotateY(0deg); -webkit-transform-origin: 0% 0%; transform-origin: 0% 0%; }
      100% { -webkit-transform: rotateX(180deg) rotateY(-180deg); transform: rotateX(180deg) rotateY(-180deg); -webkit-transform-origin: 0% 0%; transform-origin: 0% 0%; }
    }
    
    .swing-top-left-bck {
      -webkit-animation: swing-top-left-bck 0.6s ease-out both;
      animation: swing-top-left-bck 0.6s ease-out both;
    }
    @-webkit-keyframes swing-top-left-bck {
      0% { -webkit-transform: rotateX(0deg) rotateY(0deg); transform: rotateX(0deg) rotateY(0deg); -webkit-transform-origin: 0% 0%; transform-origin: 0% 0%; }
      100% { -webkit-transform: rotateX(-180deg) rotateY(180deg); transform: rotateX(-180deg) rotateY(180deg); -webkit-transform-origin: 0% 0%; transform-origin: 0% 0%; }
    }
    @keyframes swing-top-left-bck {
      0% { -webkit-transform: rotateX(0deg) rotateY(0deg); transform: rotateX(0deg) rotateY(0deg); -webkit-transform-origin: 0% 0%; transform-origin: 0% 0%; }
      100% { -webkit-transform: rotateX(-180deg) rotateY(180deg); transform: rotateX(-180deg) rotateY(180deg); -webkit-transform-origin: 0% 0%; transform-origin: 0% 0%; }
    }
    
    .swing-top-right-fwd {
      -webkit-animation: swing-top-right-fwd 0.6s ease-out both;
      animation: swing-top-right-fwd 0.6s ease-out both;
    }
    @-webkit-keyframes swing-top-right-fwd {
      0% { -webkit-transform: rotateX(0deg) rotateY(0deg); transform: rotateX(0deg) rotateY(0deg); -webkit-transform-origin: 100% 0%; transform-origin: 100% 0%; }
      100% { -webkit-transform: rotateX(180deg) rotateY(180deg); transform: rotateX(180deg) rotateY(180deg); -webkit-transform-origin: 100% 0%; transform-origin: 100% 0%; }
    }
    @keyframes swing-top-right-fwd {
      0% { -webkit-transform: rotateX(0deg) rotateY(0deg); transform: rotateX(0deg) rotateY(0deg); -webkit-transform-origin: 100% 0%; transform-origin: 100% 0%; }
      100% { -webkit-transform: rotateX(180deg) rotateY(180deg); transform: rotateX(180deg) rotateY(180deg); -webkit-transform-origin: 100% 0%; transform-origin: 100% 0%; }
    }
    
    .swing-top-right-bck {
      -webkit-animation: swing-top-right-bck 0.6s ease-out both;
      animation: swing-top-right-bck 0.6s ease-out both;
    }
    @-webkit-keyframes swing-top-right-bck {
      0% { -webkit-transform: rotateX(0deg) rotateY(0deg); transform: rotateX(0deg) rotateY(0deg); -webkit-transform-origin: 100% 0%; transform-origin: 100% 0%; }
      100% { -webkit-transform: rotateX(-180deg) rotateY(-180deg); transform: rotateX(-180deg) rotateY(-180deg); -webkit-transform-origin: 100% 0%; transform-origin: 100% 0%; }
    }
    @keyframes swing-top-right-bck {
      0% { -webkit-transform: rotateX(0deg) rotateY(0deg); transform: rotateX(0deg) rotateY(0deg); -webkit-transform-origin: 100% 0%; transform-origin: 100% 0%; }
      100% { -webkit-transform: rotateX(-180deg) rotateY(-180deg); transform: rotateX(-180deg) rotateY(-180deg); -webkit-transform-origin: 100% 0%; transform-origin: 100% 0%; }
    }
    
    .swing-bottom-left-fwd {
      -webkit-animation: swing-bottom-left-fwd 0.6s ease-out both;
      animation: swing-bottom-left-fwd 0.6s ease-out both;
    }
    @-webkit-keyframes swing-bottom-left-fwd {
      0% { -webkit-transform: rotateX(0deg) rotateY(0deg); transform: rotateX(0deg) rotateY(0deg); -webkit-transform-origin: 0% 100%; transform-origin: 0% 100%; }
      100% { -webkit-transform: rotateX(-180deg) rotateY(-180deg); transform: rotateX(-180deg) rotateY(-180deg); -webkit-transform-origin: 0% 100%; transform-origin: 0% 100%; }
    }
    @keyframes swing-bottom-left-fwd {
      0% { -webkit-transform: rotateX(0deg) rotateY(0deg); transform: rotateX(0deg) rotateY(0deg); -webkit-transform-origin: 0% 100%; transform-origin: 0% 100%; }
      100% { -webkit-transform: rotateX(-180deg) rotateY(-180deg); transform: rotateX(-180deg) rotateY(-180deg); -webkit-transform-origin: 0% 100%; transform-origin: 0% 100%; }
    }
    
    .swing-bottom-left-bck {
      -webkit-animation: swing-bottom-left-bck 0.6s ease-out both;
      animation: swing-bottom-left-bck 0.6s ease-out both;
    }
    @-webkit-keyframes swing-bottom-left-bck {
      0% { -webkit-transform: rotateX(0deg) rotateY(0deg); transform: rotateX(0deg) rotateY(0deg); -webkit-transform-origin: 0% 100%; transform-origin: 0% 100%; }
      100% { -webkit-transform: rotateX(180deg) rotateY(180deg); transform: rotateX(180deg) rotateY(180deg); -webkit-transform-origin: 0% 100%; transform-origin: 0% 100%; }
    }
    @keyframes swing-bottom-left-bck {
      0% { -webkit-transform: rotateX(0deg) rotateY(0deg); transform: rotateX(0deg) rotateY(0deg); -webkit-transform-origin: 0% 100%; transform-origin: 0% 100%; }
      100% { -webkit-transform: rotateX(180deg) rotateY(180deg); transform: rotateX(180deg) rotateY(180deg); -webkit-transform-origin: 0% 100%; transform-origin: 0% 100%; }
    }
    
    .swing-bottom-right-fwd {
      -webkit-animation: swing-bottom-right-fwd 0.6s ease-out both;
      animation: swing-bottom-right-fwd 0.6s ease-out both;
    }
    @-webkit-keyframes swing-bottom-right-fwd {
      0% { -webkit-transform: rotateX(0deg) rotateY(0deg); transform: rotateX(0deg) rotateY(0deg); -webkit-transform-origin: 100% 100%; transform-origin: 100% 100%; }
      100% { -webkit-transform: rotateX(-180deg) rotateY(180deg); transform: rotateX(-180deg) rotateY(180deg); -webkit-transform-origin: 100% 100%; transform-origin: 100% 100%; }
    }
    @keyframes swing-bottom-right-fwd {
      0% { -webkit-transform: rotateX(0deg) rotateY(0deg); transform: rotateX(0deg) rotateY(0deg); -webkit-transform-origin: 100% 100%; transform-origin: 100% 100%; }
      100% { -webkit-transform: rotateX(-180deg) rotateY(180deg); transform: rotateX(-180deg) rotateY(180deg); -webkit-transform-origin: 100% 100%; transform-origin: 100% 100%; }
    }
    
    .swing-bottom-right-bck {
      -webkit-animation: swing-bottom-right-bck 0.6s ease-out both;
      animation: swing-bottom-right-bck 0.6s ease-out both;
    }
    @-webkit-keyframes swing-bottom-right-bck {
      0% { -webkit-transform: rotateX(0deg) rotateY(0deg); transform: rotateX(0deg) rotateY(0deg); -webkit-transform-origin: 100% 100%; transform-origin: 100% 100%; }
      100% { -webkit-transform: rotateX(180deg) rotateY(-180deg); transform: rotateX(180deg) rotateY(-180deg); -webkit-transform-origin: 100% 100%; transform-origin: 100% 100%; }
    }
    @keyframes swing-bottom-right-bck {
      0% { -webkit-transform: rotateX(0deg) rotateY(0deg); transform: rotateX(0deg) rotateY(0deg); -webkit-transform-origin: 100% 100%; transform-origin: 100% 100%; }
      100% { -webkit-transform: rotateX(180deg) rotateY(-180deg); transform: rotateX(180deg) rotateY(-180deg); -webkit-transform-origin: 100% 100%; transform-origin: 100% 100%; }
    }
  `,
  'scale-down': `
    /* Scale Down Animations */
    .scale-down-center {
      -webkit-animation: scale-down-center 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: scale-down-center 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes scale-down-center {
      0% { -webkit-transform: scale(1); transform: scale(1); }
      100% { -webkit-transform: scale(0.5); transform: scale(0.5); }
    }
    @keyframes scale-down-center {
      0% { -webkit-transform: scale(1); transform: scale(1); }
      100% { -webkit-transform: scale(0.5); transform: scale(0.5); }
    }
    
    .scale-down-top {
      -webkit-animation: scale-down-top 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: scale-down-top 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes scale-down-top {
      0% { -webkit-transform: scale(1); transform: scale(1); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
      100% { -webkit-transform: scale(0.5); transform: scale(0.5); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
    }
    @keyframes scale-down-top {
      0% { -webkit-transform: scale(1); transform: scale(1); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
      100% { -webkit-transform: scale(0.5); transform: scale(0.5); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
    }
    
    .scale-down-bottom {
      -webkit-animation: scale-down-bottom 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: scale-down-bottom 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes scale-down-bottom {
      0% { -webkit-transform: scale(1); transform: scale(1); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
      100% { -webkit-transform: scale(0.5); transform: scale(0.5); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
    }
    @keyframes scale-down-bottom {
      0% { -webkit-transform: scale(1); transform: scale(1); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
      100% { -webkit-transform: scale(0.5); transform: scale(0.5); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
    }
    
    .scale-down-left {
      -webkit-animation: scale-down-left 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: scale-down-left 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes scale-down-left {
      0% { -webkit-transform: scale(1); transform: scale(1); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
      100% { -webkit-transform: scale(0.5); transform: scale(0.5); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
    }
    @keyframes scale-down-left {
      0% { -webkit-transform: scale(1); transform: scale(1); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
      100% { -webkit-transform: scale(0.5); transform: scale(0.5); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
    }
    
    .scale-down-right {
      -webkit-animation: scale-down-right 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: scale-down-right 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes scale-down-right {
      0% { -webkit-transform: scale(1); transform: scale(1); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
      100% { -webkit-transform: scale(0.5); transform: scale(0.5); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
    }
    @keyframes scale-down-right {
      0% { -webkit-transform: scale(1); transform: scale(1); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
      100% { -webkit-transform: scale(0.5); transform: scale(0.5); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
    }
    
    .scale-down-hor-left {
      -webkit-animation: scale-down-hor-left 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: scale-down-hor-left 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes scale-down-hor-left {
      0% { -webkit-transform: scaleX(1); transform: scaleX(1); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
      100% { -webkit-transform: scaleX(0.4); transform: scaleX(0.4); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
    }
    @keyframes scale-down-hor-left {
      0% { -webkit-transform: scaleX(1); transform: scaleX(1); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
      100% { -webkit-transform: scaleX(0.4); transform: scaleX(0.4); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
    }
    
    .scale-down-hor-center {
      -webkit-animation: scale-down-hor-center 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: scale-down-hor-center 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes scale-down-hor-center {
      0% { -webkit-transform: scaleX(1); transform: scaleX(1); }
      100% { -webkit-transform: scaleX(0.4); transform: scaleX(0.4); }
    }
    @keyframes scale-down-hor-center {
      0% { -webkit-transform: scaleX(1); transform: scaleX(1); }
      100% { -webkit-transform: scaleX(0.4); transform: scaleX(0.4); }
    }
    
    .scale-down-hor-right {
      -webkit-animation: scale-down-hor-right 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: scale-down-hor-right 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes scale-down-hor-right {
      0% { -webkit-transform: scaleX(1); transform: scaleX(1); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
      100% { -webkit-transform: scaleX(0.4); transform: scaleX(0.4); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
    }
    @keyframes scale-down-hor-right {
      0% { -webkit-transform: scaleX(1); transform: scaleX(1); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
      100% { -webkit-transform: scaleX(0.4); transform: scaleX(0.4); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
    }
    
    .scale-down-ver-top {
      -webkit-animation: scale-down-ver-top 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: scale-down-ver-top 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes scale-down-ver-top {
      0% { -webkit-transform: scaleY(1); transform: scaleY(1); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
      100% { -webkit-transform: scaleY(0.4); transform: scaleY(0.4); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
    }
    @keyframes scale-down-ver-top {
      0% { -webkit-transform: scaleY(1); transform: scaleY(1); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
      100% { -webkit-transform: scaleY(0.4); transform: scaleY(0.4); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
    }
    
    .scale-down-ver-center {
      -webkit-animation: scale-down-ver-center 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: scale-down-ver-center 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes scale-down-ver-center {
      0% { -webkit-transform: scaleY(1); transform: scaleY(1); }
      100% { -webkit-transform: scaleY(0.4); transform: scaleY(0.4); }
    }
    @keyframes scale-down-ver-center {
      0% { -webkit-transform: scaleY(1); transform: scaleY(1); }
      100% { -webkit-transform: scaleY(0.4); transform: scaleY(0.4); }
    }
    
    .scale-down-ver-bottom {
      -webkit-animation: scale-down-ver-bottom 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: scale-down-ver-bottom 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes scale-down-ver-bottom {
      0% { -webkit-transform: scaleY(1); transform: scaleY(1); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
      100% { -webkit-transform: scaleY(0.4); transform: scaleY(0.4); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
    }
    @keyframes scale-down-ver-bottom {
      0% { -webkit-transform: scaleY(1); transform: scaleY(1); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
      100% { -webkit-transform: scaleY(0.4); transform: scaleY(0.4); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
    }
    
    .scale-down-tl {
      -webkit-animation: scale-down-tl 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: scale-down-tl 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes scale-down-tl {
      0% { -webkit-transform: scale(1); transform: scale(1); -webkit-transform-origin: 0% 0%; transform-origin: 0% 0%; }
      100% { -webkit-transform: scale(0.5); transform: scale(0.5); -webkit-transform-origin: 0% 0%; transform-origin: 0% 0%; }
    }
    @keyframes scale-down-tl {
      0% { -webkit-transform: scale(1); transform: scale(1); -webkit-transform-origin: 0% 0%; transform-origin: 0% 0%; }
      100% { -webkit-transform: scale(0.5); transform: scale(0.5); -webkit-transform-origin: 0% 0%; transform-origin: 0% 0%; }
    }
    
    .scale-down-tr {
      -webkit-animation: scale-down-tr 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: scale-down-tr 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes scale-down-tr {
      0% { -webkit-transform: scale(1); transform: scale(1); -webkit-transform-origin: 100% 0%; transform-origin: 100% 0%; }
      100% { -webkit-transform: scale(0.5); transform: scale(0.5); -webkit-transform-origin: 100% 0%; transform-origin: 100% 0%; }
    }
    @keyframes scale-down-tr {
      0% { -webkit-transform: scale(1); transform: scale(1); -webkit-transform-origin: 100% 0%; transform-origin: 100% 0%; }
      100% { -webkit-transform: scale(0.5); transform: scale(0.5); -webkit-transform-origin: 100% 0%; transform-origin: 100% 0%; }
    }
    
    .scale-down-bl {
      -webkit-animation: scale-down-bl 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: scale-down-bl 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes scale-down-bl {
      0% { -webkit-transform: scale(1); transform: scale(1); -webkit-transform-origin: 0% 100%; transform-origin: 0% 100%; }
      100% { -webkit-transform: scale(0.5); transform: scale(0.5); -webkit-transform-origin: 0% 100%; transform-origin: 0% 100%; }
    }
    @keyframes scale-down-bl {
      0% { -webkit-transform: scale(1); transform: scale(1); -webkit-transform-origin: 0% 100%; transform-origin: 0% 100%; }
      100% { -webkit-transform: scale(0.5); transform: scale(0.5); -webkit-transform-origin: 0% 100%; transform-origin: 0% 100%; }
    }
    
    .scale-down-br {
      -webkit-animation: scale-down-br 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: scale-down-br 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes scale-down-br {
      0% { -webkit-transform: scale(1); transform: scale(1); -webkit-transform-origin: 100% 100%; transform-origin: 100% 100%; }
      100% { -webkit-transform: scale(0.5); transform: scale(0.5); -webkit-transform-origin: 100% 100%; transform-origin: 100% 100%; }
    }
    @keyframes scale-down-br {
      0% { -webkit-transform: scale(1); transform: scale(1); -webkit-transform-origin: 100% 100%; transform-origin: 100% 100%; }
      100% { -webkit-transform: scale(0.5); transform: scale(0.5); -webkit-transform-origin: 100% 100%; transform-origin: 100% 100%; }
    }
  `,
  slide: `
    /* Slide Animations */
    .slide-top {
      -webkit-animation: slide-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: slide-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes slide-top {
      0% { -webkit-transform: translateY(-100px); transform: translateY(-100px); }
      100% { -webkit-transform: translateY(0); transform: translateY(0); }
    }
    @keyframes slide-top {
      0% { -webkit-transform: translateY(-100px); transform: translateY(-100px); }
      100% { -webkit-transform: translateY(0); transform: translateY(0); }
    }
    
    .slide-bottom {
      -webkit-animation: slide-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: slide-bottom 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes slide-bottom {
      0% { -webkit-transform: translateY(100px); transform: translateY(100px); }
      100% { -webkit-transform: translateY(0); transform: translateY(0); }
    }
    @keyframes slide-bottom {
      0% { -webkit-transform: translateY(100px); transform: translateY(100px); }
      100% { -webkit-transform: translateY(0); transform: translateY(0); }
    }
    
    .slide-left {
      -webkit-animation: slide-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: slide-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes slide-left {
      0% { -webkit-transform: translateX(-100px); transform: translateX(-100px); }
      100% { -webkit-transform: translateX(0); transform: translateX(0); }
    }
    @keyframes slide-left {
      0% { -webkit-transform: translateX(-100px); transform: translateX(-100px); }
      100% { -webkit-transform: translateX(0); transform: translateX(0); }
    }
    
    .slide-right {
      -webkit-animation: slide-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: slide-right 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes slide-right {
      0% { -webkit-transform: translateX(100px); transform: translateX(100px); }
      100% { -webkit-transform: translateX(0); transform: translateX(0); }
    }
    @keyframes slide-right {
      0% { -webkit-transform: translateX(100px); transform: translateX(100px); }
      100% { -webkit-transform: translateX(0); transform: translateX(0); }
    }
    
    .slide-tl {
      -webkit-animation: slide-tl 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: slide-tl 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes slide-tl {
      0% { -webkit-transform: translateX(-100px) translateY(-100px); transform: translateX(-100px) translateY(-100px); }
      100% { -webkit-transform: translateX(0) translateY(0); transform: translateX(0) translateY(0); }
    }
    @keyframes slide-tl {
      0% { -webkit-transform: translateX(-100px) translateY(-100px); transform: translateX(-100px) translateY(-100px); }
      100% { -webkit-transform: translateX(0) translateY(0); transform: translateX(0) translateY(0); }
    }
    
    .slide-tr {
      -webkit-animation: slide-tr 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: slide-tr 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes slide-tr {
      0% { -webkit-transform: translateX(100px) translateY(-100px); transform: translateX(100px) translateY(-100px); }
      100% { -webkit-transform: translateX(0) translateY(0); transform: translateX(0) translateY(0); }
    }
    @keyframes slide-tr {
      0% { -webkit-transform: translateX(100px) translateY(-100px); transform: translateX(100px) translateY(-100px); }
      100% { -webkit-transform: translateX(0) translateY(0); transform: translateX(0) translateY(0); }
    }
    
    .slide-bl {
      -webkit-animation: slide-bl 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: slide-bl 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes slide-bl {
      0% { -webkit-transform: translateX(-100px) translateY(100px); transform: translateX(-100px) translateY(100px); }
      100% { -webkit-transform: translateX(0) translateY(0); transform: translateX(0) translateY(0); }
    }
    @keyframes slide-bl {
      0% { -webkit-transform: translateX(-100px) translateY(100px); transform: translateX(-100px) translateY(100px); }
      100% { -webkit-transform: translateX(0) translateY(0); transform: translateX(0) translateY(0); }
    }
    
    .slide-br {
      -webkit-animation: slide-br 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: slide-br 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes slide-br {
      0% { -webkit-transform: translateX(100px) translateY(100px); transform: translateX(100px) translateY(100px); }
      100% { -webkit-transform: translateX(0) translateY(0); transform: translateX(0) translateY(0); }
    }
    @keyframes slide-br {
      0% { -webkit-transform: translateX(100px) translateY(100px); transform: translateX(100px) translateY(100px); }
      100% { -webkit-transform: translateX(0) translateY(0); transform: translateX(0) translateY(0); }
    }
  `,
  'slide-fwd': `
    /* Slide Forward Animations */
    .slide-fwd-center {
      -webkit-animation: slide-fwd-center 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: slide-fwd-center 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes slide-fwd-center {
      0% { -webkit-transform: translateZ(0); transform: translateZ(0); }
      100% { -webkit-transform: translateZ(160px); transform: translateZ(160px); }
    }
    @keyframes slide-fwd-center {
      0% { -webkit-transform: translateZ(0); transform: translateZ(0); }
      100% { -webkit-transform: translateZ(160px); transform: translateZ(160px); }
    }
    
    .slide-fwd-top {
      -webkit-animation: slide-fwd-top 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: slide-fwd-top 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes slide-fwd-top {
      0% { -webkit-transform: translateZ(0) translateY(-100px); transform: translateZ(0) translateY(-100px); }
      100% { -webkit-transform: translateZ(160px) translateY(0); transform: translateZ(160px) translateY(0); }
    }
    @keyframes slide-fwd-top {
      0% { -webkit-transform: translateZ(0) translateY(-100px); transform: translateZ(0) translateY(-100px); }
      100% { -webkit-transform: translateZ(160px) translateY(0); transform: translateZ(160px) translateY(0); }
    }
    
    .slide-fwd-bottom {
      -webkit-animation: slide-fwd-bottom 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: slide-fwd-bottom 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes slide-fwd-bottom {
      0% { -webkit-transform: translateZ(0) translateY(100px); transform: translateZ(0) translateY(100px); }
      100% { -webkit-transform: translateZ(160px) translateY(0); transform: translateZ(160px) translateY(0); }
    }
    @keyframes slide-fwd-bottom {
      0% { -webkit-transform: translateZ(0) translateY(100px); transform: translateZ(0) translateY(100px); }
      100% { -webkit-transform: translateZ(160px) translateY(0); transform: translateZ(160px) translateY(0); }
    }
    
    .slide-fwd-left {
      -webkit-animation: slide-fwd-left 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: slide-fwd-left 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes slide-fwd-left {
      0% { -webkit-transform: translateZ(0) translateX(-100px); transform: translateZ(0) translateX(-100px); }
      100% { -webkit-transform: translateZ(160px) translateX(0); transform: translateZ(160px) translateX(0); }
    }
    @keyframes slide-fwd-left {
      0% { -webkit-transform: translateZ(0) translateX(-100px); transform: translateZ(0) translateX(-100px); }
      100% { -webkit-transform: translateZ(160px) translateX(0); transform: translateZ(160px) translateX(0); }
    }
    
    .slide-fwd-right {
      -webkit-animation: slide-fwd-right 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: slide-fwd-right 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes slide-fwd-right {
      0% { -webkit-transform: translateZ(0) translateX(100px); transform: translateZ(0) translateX(100px); }
      100% { -webkit-transform: translateZ(160px) translateX(0); transform: translateZ(160px) translateX(0); }
    }
    @keyframes slide-fwd-right {
      0% { -webkit-transform: translateZ(0) translateX(100px); transform: translateZ(0) translateX(100px); }
      100% { -webkit-transform: translateZ(160px) translateX(0); transform: translateZ(160px) translateX(0); }
    }
    
    .slide-fwd-tl {
      -webkit-animation: slide-fwd-tl 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: slide-fwd-tl 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes slide-fwd-tl {
      0% { -webkit-transform: translateZ(0) translateX(-100px) translateY(-100px); transform: translateZ(0) translateX(-100px) translateY(-100px); }
      100% { -webkit-transform: translateZ(160px) translateX(0) translateY(0); transform: translateZ(160px) translateX(0) translateY(0); }
    }
    @keyframes slide-fwd-tl {
      0% { -webkit-transform: translateZ(0) translateX(-100px) translateY(-100px); transform: translateZ(0) translateX(-100px) translateY(-100px); }
      100% { -webkit-transform: translateZ(160px) translateX(0) translateY(0); transform: translateZ(160px) translateX(0) translateY(0); }
    }
    
    .slide-fwd-tr {
      -webkit-animation: slide-fwd-tr 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: slide-fwd-tr 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes slide-fwd-tr {
      0% { -webkit-transform: translateZ(0) translateX(100px) translateY(-100px); transform: translateZ(0) translateX(100px) translateY(-100px); }
      100% { -webkit-transform: translateZ(160px) translateX(0) translateY(0); transform: translateZ(160px) translateX(0) translateY(0); }
    }
    @keyframes slide-fwd-tr {
      0% { -webkit-transform: translateZ(0) translateX(100px) translateY(-100px); transform: translateZ(0) translateX(100px) translateY(-100px); }
      100% { -webkit-transform: translateZ(160px) translateX(0) translateY(0); transform: translateZ(160px) translateX(0) translateY(0); }
    }
    
    .slide-fwd-bl {
      -webkit-animation: slide-fwd-bl 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: slide-fwd-bl 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes slide-fwd-bl {
      0% { -webkit-transform: translateZ(0) translateX(-100px) translateY(100px); transform: translateZ(0) translateX(-100px) translateY(100px); }
      100% { -webkit-transform: translateZ(160px) translateX(0) translateY(0); transform: translateZ(160px) translateX(0) translateY(0); }
    }
    @keyframes slide-fwd-bl {
      0% { -webkit-transform: translateZ(0) translateX(-100px) translateY(100px); transform: translateZ(0) translateX(-100px) translateY(100px); }
      100% { -webkit-transform: translateZ(160px) translateX(0) translateY(0); transform: translateZ(160px) translateX(0) translateY(0); }
    }
    
    .slide-fwd-br {
      -webkit-animation: slide-fwd-br 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: slide-fwd-br 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes slide-fwd-br {
      0% { -webkit-transform: translateZ(0) translateX(100px) translateY(100px); transform: translateZ(0) translateX(100px) translateY(100px); }
      100% { -webkit-transform: translateZ(160px) translateX(0) translateY(0); transform: translateZ(160px) translateX(0) translateY(0); }
    }
    @keyframes slide-fwd-br {
      0% { -webkit-transform: translateZ(0) translateX(100px) translateY(100px); transform: translateZ(0) translateX(100px) translateY(100px); }
      100% { -webkit-transform: translateZ(160px) translateX(0) translateY(0); transform: translateZ(160px) translateX(0) translateY(0); }
    }
  `,
  'slide-bck': `
    /* Slide Back Animations */
    .slide-bck-center {
      -webkit-animation: slide-bck-center 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: slide-bck-center 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes slide-bck-center {
      0% { -webkit-transform: translateZ(0); transform: translateZ(0); }
      100% { -webkit-transform: translateZ(-400px); transform: translateZ(-400px); }
    }
    @keyframes slide-bck-center {
      0% { -webkit-transform: translateZ(0); transform: translateZ(0); }
      100% { -webkit-transform: translateZ(-400px); transform: translateZ(-400px); }
    }
    
    .slide-bck-top {
      -webkit-animation: slide-bck-top 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: slide-bck-top 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes slide-bck-top {
      0% { -webkit-transform: translateZ(0) translateY(0); transform: translateZ(0) translateY(0); }
      100% { -webkit-transform: translateZ(-400px) translateY(-100px); transform: translateZ(-400px) translateY(-100px); }
    }
    @keyframes slide-bck-top {
      0% { -webkit-transform: translateZ(0) translateY(0); transform: translateZ(0) translateY(0); }
      100% { -webkit-transform: translateZ(-400px) translateY(-100px); transform: translateZ(-400px) translateY(-100px); }
    }
    
    .slide-bck-bottom {
      -webkit-animation: slide-bck-bottom 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: slide-bck-bottom 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes slide-bck-bottom {
      0% { -webkit-transform: translateZ(0) translateY(0); transform: translateZ(0) translateY(0); }
      100% { -webkit-transform: translateZ(-400px) translateY(100px); transform: translateZ(-400px) translateY(100px); }
    }
    @keyframes slide-bck-bottom {
      0% { -webkit-transform: translateZ(0) translateY(0); transform: translateZ(0) translateY(0); }
      100% { -webkit-transform: translateZ(-400px) translateY(100px); transform: translateZ(-400px) translateY(100px); }
    }
    
    .slide-bck-left {
      -webkit-animation: slide-bck-left 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: slide-bck-left 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes slide-bck-left {
      0% { -webkit-transform: translateZ(0) translateX(0); transform: translateZ(0) translateX(0); }
      100% { -webkit-transform: translateZ(-400px) translateX(-100px); transform: translateZ(-400px) translateX(-100px); }
    }
    @keyframes slide-bck-left {
      0% { -webkit-transform: translateZ(0) translateX(0); transform: translateZ(0) translateX(0); }
      100% { -webkit-transform: translateZ(-400px) translateX(-100px); transform: translateZ(-400px) translateX(-100px); }
    }
    
    .slide-bck-right {
      -webkit-animation: slide-bck-right 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: slide-bck-right 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes slide-bck-right {
      0% { -webkit-transform: translateZ(0) translateX(0); transform: translateZ(0) translateX(0); }
      100% { -webkit-transform: translateZ(-400px) translateX(100px); transform: translateZ(-400px) translateX(100px); }
    }
    @keyframes slide-bck-right {
      0% { -webkit-transform: translateZ(0) translateX(0); transform: translateZ(0) translateX(0); }
      100% { -webkit-transform: translateZ(-400px) translateX(100px); transform: translateZ(-400px) translateX(100px); }
    }
    
    .slide-bck-tl {
      -webkit-animation: slide-bck-tl 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: slide-bck-tl 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes slide-bck-tl {
      0% { -webkit-transform: translateZ(0) translateX(0) translateY(0); transform: translateZ(0) translateX(0) translateY(0); }
      100% { -webkit-transform: translateZ(-400px) translateX(-100px) translateY(-100px); transform: translateZ(-400px) translateX(-100px) translateY(-100px); }
    }
    @keyframes slide-bck-tl {
      0% { -webkit-transform: translateZ(0) translateX(0) translateY(0); transform: translateZ(0) translateX(0) translateY(0); }
      100% { -webkit-transform: translateZ(-400px) translateX(-100px) translateY(-100px); transform: translateZ(-400px) translateX(-100px) translateY(-100px); }
    }
    
    .slide-bck-tr {
      -webkit-animation: slide-bck-tr 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: slide-bck-tr 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes slide-bck-tr {
      0% { -webkit-transform: translateZ(0) translateX(0) translateY(0); transform: translateZ(0) translateX(0) translateY(0); }
      100% { -webkit-transform: translateZ(-400px) translateX(100px) translateY(-100px); transform: translateZ(-400px) translateX(100px) translateY(-100px); }
    }
    @keyframes slide-bck-tr {
      0% { -webkit-transform: translateZ(0) translateX(0) translateY(0); transform: translateZ(0) translateX(0) translateY(0); }
      100% { -webkit-transform: translateZ(-400px) translateX(100px) translateY(-100px); transform: translateZ(-400px) translateX(100px) translateY(-100px); }
    }
    
    .slide-bck-bl {
      -webkit-animation: slide-bck-bl 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: slide-bck-bl 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes slide-bck-bl {
      0% { -webkit-transform: translateZ(0) translateX(0) translateY(0); transform: translateZ(0) translateX(0) translateY(0); }
      100% { -webkit-transform: translateZ(-400px) translateX(-100px) translateY(100px); transform: translateZ(-400px) translateX(-100px) translateY(100px); }
    }
    @keyframes slide-bck-bl {
      0% { -webkit-transform: translateZ(0) translateX(0) translateY(0); transform: translateZ(0) translateX(0) translateY(0); }
      100% { -webkit-transform: translateZ(-400px) translateX(-100px) translateY(100px); transform: translateZ(-400px) translateX(-100px) translateY(100px); }
    }
    
    .slide-bck-br {
      -webkit-animation: slide-bck-br 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: slide-bck-br 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes slide-bck-br {
      0% { -webkit-transform: translateZ(0) translateX(0) translateY(0); transform: translateZ(0) translateX(0) translateY(0); }
      100% { -webkit-transform: translateZ(-400px) translateX(100px) translateY(100px); transform: translateZ(-400px) translateX(100px) translateY(100px); }
    }
    @keyframes slide-bck-br {
      0% { -webkit-transform: translateZ(0) translateX(0) translateY(0); transform: translateZ(0) translateX(0) translateY(0); }
      100% { -webkit-transform: translateZ(-400px) translateX(100px) translateY(100px); transform: translateZ(-400px) translateX(100px) translateY(100px); }
    }
  `,
  'slide-rotate': `
    /* Slide Rotate Animations */
    .slide-rotate-hor-top {
      -webkit-animation: slide-rotate-hor-top 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: slide-rotate-hor-top 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes slide-rotate-hor-top {
      0% { -webkit-transform: translateY(0) rotateX(0deg); transform: translateY(0) rotateX(0deg); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
      100% { -webkit-transform: translateY(-100px) rotateX(-180deg); transform: translateY(-100px) rotateX(-180deg); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
    }
    @keyframes slide-rotate-hor-top {
      0% { -webkit-transform: translateY(0) rotateX(0deg); transform: translateY(0) rotateX(0deg); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
      100% { -webkit-transform: translateY(-100px) rotateX(-180deg); transform: translateY(-100px) rotateX(-180deg); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
    }
    
    .slide-rotate-hor-bottom {
      -webkit-animation: slide-rotate-hor-bottom 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: slide-rotate-hor-bottom 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes slide-rotate-hor-bottom {
      0% { -webkit-transform: translateY(0) rotateX(0deg); transform: translateY(0) rotateX(0deg); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
      100% { -webkit-transform: translateY(100px) rotateX(180deg); transform: translateY(100px) rotateX(180deg); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
    }
    @keyframes slide-rotate-hor-bottom {
      0% { -webkit-transform: translateY(0) rotateX(0deg); transform: translateY(0) rotateX(0deg); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
      100% { -webkit-transform: translateY(100px) rotateX(180deg); transform: translateY(100px) rotateX(180deg); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
    }
    
    .slide-rotate-ver-left {
      -webkit-animation: slide-rotate-ver-left 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: slide-rotate-ver-left 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes slide-rotate-ver-left {
      0% { -webkit-transform: translateX(0) rotateY(0deg); transform: translateX(0) rotateY(0deg); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
      100% { -webkit-transform: translateX(-100px) rotateY(-180deg); transform: translateX(-100px) rotateY(-180deg); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
    }
    @keyframes slide-rotate-ver-left {
      0% { -webkit-transform: translateX(0) rotateY(0deg); transform: translateX(0) rotateY(0deg); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
      100% { -webkit-transform: translateX(-100px) rotateY(-180deg); transform: translateX(-100px) rotateY(-180deg); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
    }
    
    .slide-rotate-ver-right {
      -webkit-animation: slide-rotate-ver-right 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: slide-rotate-ver-right 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes slide-rotate-ver-right {
      0% { -webkit-transform: translateX(0) rotateY(0deg); transform: translateX(0) rotateY(0deg); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
      100% { -webkit-transform: translateX(100px) rotateY(180deg); transform: translateX(100px) rotateY(180deg); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
    }
    @keyframes slide-rotate-ver-right {
      0% { -webkit-transform: translateX(0) rotateY(0deg); transform: translateX(0) rotateY(0deg); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
      100% { -webkit-transform: translateX(100px) rotateY(180deg); transform: translateX(100px) rotateY(180deg); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
    }
    
    .slide-rotate-hor-t-fwd {
      -webkit-animation: slide-rotate-hor-t-fwd 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: slide-rotate-hor-t-fwd 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes slide-rotate-hor-t-fwd {
      0% { -webkit-transform: translateZ(0) translateY(-100px) rotateX(0deg); transform: translateZ(0) translateY(-100px) rotateX(0deg); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
      100% { -webkit-transform: translateZ(160px) translateY(0) rotateX(180deg); transform: translateZ(160px) translateY(0) rotateX(180deg); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
    }
    @keyframes slide-rotate-hor-t-fwd {
      0% { -webkit-transform: translateZ(0) translateY(-100px) rotateX(0deg); transform: translateZ(0) translateY(-100px) rotateX(0deg); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
      100% { -webkit-transform: translateZ(160px) translateY(0) rotateX(180deg); transform: translateZ(160px) translateY(0) rotateX(180deg); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
    }
    
    .slide-rotate-hor-t-bck {
      -webkit-animation: slide-rotate-hor-t-bck 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: slide-rotate-hor-t-bck 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes slide-rotate-hor-t-bck {
      0% { -webkit-transform: translateZ(0) translateY(-100px) rotateX(0deg); transform: translateZ(0) translateY(-100px) rotateX(0deg); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
      100% { -webkit-transform: translateZ(-160px) translateY(0) rotateX(-180deg); transform: translateZ(-160px) translateY(0) rotateX(-180deg); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
    }
    @keyframes slide-rotate-hor-t-bck {
      0% { -webkit-transform: translateZ(0) translateY(-100px) rotateX(0deg); transform: translateZ(0) translateY(-100px) rotateX(0deg); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
      100% { -webkit-transform: translateZ(-160px) translateY(0) rotateX(-180deg); transform: translateZ(-160px) translateY(0) rotateX(-180deg); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
    }
    
    .slide-rotate-hor-b-fwd {
      -webkit-animation: slide-rotate-hor-b-fwd 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: slide-rotate-hor-b-fwd 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes slide-rotate-hor-b-fwd {
      0% { -webkit-transform: translateZ(0) translateY(100px) rotateX(0deg); transform: translateZ(0) translateY(100px) rotateX(0deg); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
      100% { -webkit-transform: translateZ(160px) translateY(0) rotateX(-180deg); transform: translateZ(160px) translateY(0) rotateX(-180deg); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
    }
    @keyframes slide-rotate-hor-b-fwd {
      0% { -webkit-transform: translateZ(0) translateY(100px) rotateX(0deg); transform: translateZ(0) translateY(100px) rotateX(0deg); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
      100% { -webkit-transform: translateZ(160px) translateY(0) rotateX(-180deg); transform: translateZ(160px) translateY(0) rotateX(-180deg); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
    }
    
    .slide-rotate-hor-b-bck {
      -webkit-animation: slide-rotate-hor-b-bck 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: slide-rotate-hor-b-bck 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes slide-rotate-hor-b-bck {
      0% { -webkit-transform: translateZ(0) translateY(100px) rotateX(0deg); transform: translateZ(0) translateY(100px) rotateX(0deg); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
      100% { -webkit-transform: translateZ(-160px) translateY(0) rotateX(180deg); transform: translateZ(-160px) translateY(0) rotateX(180deg); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
    }
    @keyframes slide-rotate-hor-b-bck {
      0% { -webkit-transform: translateZ(0) translateY(100px) rotateX(0deg); transform: translateZ(0) translateY(100px) rotateX(0deg); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
      100% { -webkit-transform: translateZ(-160px) translateY(0) rotateX(180deg); transform: translateZ(-160px) translateY(0) rotateX(180deg); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
    }
    
    .slide-rotate-ver-l-fwd {
      -webkit-animation: slide-rotate-ver-l-fwd 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: slide-rotate-ver-l-fwd 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes slide-rotate-ver-l-fwd {
      0% { -webkit-transform: translateZ(0) translateX(-100px) rotateY(0deg); transform: translateZ(0) translateX(-100px) rotateY(0deg); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
      100% { -webkit-transform: translateZ(160px) translateX(0) rotateY(-180deg); transform: translateZ(160px) translateX(0) rotateY(-180deg); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
    }
    @keyframes slide-rotate-ver-l-fwd {
      0% { -webkit-transform: translateZ(0) translateX(-100px) rotateY(0deg); transform: translateZ(0) translateX(-100px) rotateY(0deg); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
      100% { -webkit-transform: translateZ(160px) translateX(0) rotateY(-180deg); transform: translateZ(160px) translateX(0) rotateY(-180deg); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
    }
    
    .slide-rotate-ver-l-bck {
      -webkit-animation: slide-rotate-ver-l-bck 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: slide-rotate-ver-l-bck 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes slide-rotate-ver-l-bck {
      0% { -webkit-transform: translateZ(0) translateX(-100px) rotateY(0deg); transform: translateZ(0) translateX(-100px) rotateY(0deg); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
      100% { -webkit-transform: translateZ(-160px) translateX(0) rotateY(180deg); transform: translateZ(-160px) translateX(0) rotateY(180deg); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
    }
    @keyframes slide-rotate-ver-l-bck {
      0% { -webkit-transform: translateZ(0) translateX(-100px) rotateY(0deg); transform: translateZ(0) translateX(-100px) rotateY(0deg); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
      100% { -webkit-transform: translateZ(-160px) translateX(0) rotateY(180deg); transform: translateZ(-160px) translateX(0) rotateY(180deg); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
    }
    
    .slide-rotate-ver-r-fwd {
      -webkit-animation: slide-rotate-ver-r-fwd 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: slide-rotate-ver-r-fwd 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes slide-rotate-ver-r-fwd {
      0% { -webkit-transform: translateZ(0) translateX(100px) rotateY(0deg); transform: translateZ(0) translateX(100px) rotateY(0deg); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
      100% { -webkit-transform: translateZ(160px) translateX(0) rotateY(180deg); transform: translateZ(160px) translateX(0) rotateY(180deg); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
    }
    @keyframes slide-rotate-ver-r-fwd {
      0% { -webkit-transform: translateZ(0) translateX(100px) rotateY(0deg); transform: translateZ(0) translateX(100px) rotateY(0deg); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
      100% { -webkit-transform: translateZ(160px) translateX(0) rotateY(180deg); transform: translateZ(160px) translateX(0) rotateY(180deg); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
    }
    
    .slide-rotate-ver-r-bck {
      -webkit-animation: slide-rotate-ver-r-bck 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: slide-rotate-ver-r-bck 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes slide-rotate-ver-r-bck {
      0% { -webkit-transform: translateZ(0) translateX(100px) rotateY(0deg); transform: translateZ(0) translateX(100px) rotateY(0deg); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
      100% { -webkit-transform: translateZ(-160px) translateX(0) rotateY(-180deg); transform: translateZ(-160px) translateX(0) rotateY(-180deg); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
    }
    @keyframes slide-rotate-ver-r-bck {
      0% { -webkit-transform: translateZ(0) translateX(100px) rotateY(0deg); transform: translateZ(0) translateX(100px) rotateY(0deg); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
      100% { -webkit-transform: translateZ(-160px) translateX(0) rotateY(-180deg); transform: translateZ(-160px) translateX(0) rotateY(-180deg); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
    }
  `,
  'rotate-90': `
    /* Rotate 90 Animations */
    .rotate-90-cw {
      -webkit-animation: rotate-90-cw 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: rotate-90-cw 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes rotate-90-cw {
      0% { -webkit-transform: rotate(0); transform: rotate(0); }
      100% { -webkit-transform: rotate(90deg); transform: rotate(90deg); }
    }
    @keyframes rotate-90-cw {
      0% { -webkit-transform: rotate(0); transform: rotate(0); }
      100% { -webkit-transform: rotate(90deg); transform: rotate(90deg); }
    }
    
    .rotate-90-ccw {
      -webkit-animation: rotate-90-ccw 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: rotate-90-ccw 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes rotate-90-ccw {
      0% { -webkit-transform: rotate(0); transform: rotate(0); }
      100% { -webkit-transform: rotate(-90deg); transform: rotate(-90deg); }
    }
    @keyframes rotate-90-ccw {
      0% { -webkit-transform: rotate(0); transform: rotate(0); }
      100% { -webkit-transform: rotate(-90deg); transform: rotate(-90deg); }
    }
    
    .rotate-90-tl-cw {
      -webkit-animation: rotate-90-tl-cw 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: rotate-90-tl-cw 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes rotate-90-tl-cw {
      0% { -webkit-transform: rotate(0); transform: rotate(0); -webkit-transform-origin: 0% 0%; transform-origin: 0% 0%; }
      100% { -webkit-transform: rotate(90deg); transform: rotate(90deg); -webkit-transform-origin: 0% 0%; transform-origin: 0% 0%; }
    }
    @keyframes rotate-90-tl-cw {
      0% { -webkit-transform: rotate(0); transform: rotate(0); -webkit-transform-origin: 0% 0%; transform-origin: 0% 0%; }
      100% { -webkit-transform: rotate(90deg); transform: rotate(90deg); -webkit-transform-origin: 0% 0%; transform-origin: 0% 0%; }
    }
    
    .rotate-90-tl-ccw {
      -webkit-animation: rotate-90-tl-ccw 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: rotate-90-tl-ccw 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes rotate-90-tl-ccw {
      0% { -webkit-transform: rotate(0); transform: rotate(0); -webkit-transform-origin: 0% 0%; transform-origin: 0% 0%; }
      100% { -webkit-transform: rotate(-90deg); transform: rotate(-90deg); -webkit-transform-origin: 0% 0%; transform-origin: 0% 0%; }
    }
    @keyframes rotate-90-tl-ccw {
      0% { -webkit-transform: rotate(0); transform: rotate(0); -webkit-transform-origin: 0% 0%; transform-origin: 0% 0%; }
      100% { -webkit-transform: rotate(-90deg); transform: rotate(-90deg); -webkit-transform-origin: 0% 0%; transform-origin: 0% 0%; }
    }
    
    .rotate-90-tr-cw {
      -webkit-animation: rotate-90-tr-cw 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: rotate-90-tr-cw 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes rotate-90-tr-cw {
      0% { -webkit-transform: rotate(0); transform: rotate(0); -webkit-transform-origin: 100% 0%; transform-origin: 100% 0%; }
      100% { -webkit-transform: rotate(90deg); transform: rotate(90deg); -webkit-transform-origin: 100% 0%; transform-origin: 100% 0%; }
    }
    @keyframes rotate-90-tr-cw {
      0% { -webkit-transform: rotate(0); transform: rotate(0); -webkit-transform-origin: 100% 0%; transform-origin: 100% 0%; }
      100% { -webkit-transform: rotate(90deg); transform: rotate(90deg); -webkit-transform-origin: 100% 0%; transform-origin: 100% 0%; }
    }
    
    .rotate-90-tr-ccw {
      -webkit-animation: rotate-90-tr-ccw 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: rotate-90-tr-ccw 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes rotate-90-tr-ccw {
      0% { -webkit-transform: rotate(0); transform: rotate(0); -webkit-transform-origin: 100% 0%; transform-origin: 100% 0%; }
      100% { -webkit-transform: rotate(-90deg); transform: rotate(-90deg); -webkit-transform-origin: 100% 0%; transform-origin: 100% 0%; }
    }
    @keyframes rotate-90-tr-ccw {
      0% { -webkit-transform: rotate(0); transform: rotate(0); -webkit-transform-origin: 100% 0%; transform-origin: 100% 0%; }
      100% { -webkit-transform: rotate(-90deg); transform: rotate(-90deg); -webkit-transform-origin: 100% 0%; transform-origin: 100% 0%; }
    }
    
    .rotate-90-bl-cw {
      -webkit-animation: rotate-90-bl-cw 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: rotate-90-bl-cw 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes rotate-90-bl-cw {
      0% { -webkit-transform: rotate(0); transform: rotate(0); -webkit-transform-origin: 0% 100%; transform-origin: 0% 100%; }
      100% { -webkit-transform: rotate(90deg); transform: rotate(90deg); -webkit-transform-origin: 0% 100%; transform-origin: 0% 100%; }
    }
    @keyframes rotate-90-bl-cw {
      0% { -webkit-transform: rotate(0); transform: rotate(0); -webkit-transform-origin: 0% 100%; transform-origin: 0% 100%; }
      100% { -webkit-transform: rotate(90deg); transform: rotate(90deg); -webkit-transform-origin: 0% 100%; transform-origin: 0% 100%; }
    }
    
    .rotate-90-bl-ccw {
      -webkit-animation: rotate-90-bl-ccw 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: rotate-90-bl-ccw 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes rotate-90-bl-ccw {
      0% { -webkit-transform: rotate(0); transform: rotate(0); -webkit-transform-origin: 0% 100%; transform-origin: 0% 100%; }
      100% { -webkit-transform: rotate(-90deg); transform: rotate(-90deg); -webkit-transform-origin: 0% 100%; transform-origin: 0% 100%; }
    }
    @keyframes rotate-90-bl-ccw {
      0% { -webkit-transform: rotate(0); transform: rotate(0); -webkit-transform-origin: 0% 100%; transform-origin: 0% 100%; }
      100% { -webkit-transform: rotate(-90deg); transform: rotate(-90deg); -webkit-transform-origin: 0% 100%; transform-origin: 0% 100%; }
    }
    
    .rotate-90-br-cw {
      -webkit-animation: rotate-90-br-cw 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: rotate-90-br-cw 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes rotate-90-br-cw {
      0% { -webkit-transform: rotate(0); transform: rotate(0); -webkit-transform-origin: 100% 100%; transform-origin: 100% 100%; }
      100% { -webkit-transform: rotate(90deg); transform: rotate(90deg); -webkit-transform-origin: 100% 100%; transform-origin: 100% 100%; }
    }
    @keyframes rotate-90-br-cw {
      0% { -webkit-transform: rotate(0); transform: rotate(0); -webkit-transform-origin: 100% 100%; transform-origin: 100% 100%; }
      100% { -webkit-transform: rotate(90deg); transform: rotate(90deg); -webkit-transform-origin: 100% 100%; transform-origin: 100% 100%; }
    }
    
    .rotate-90-br-ccw {
      -webkit-animation: rotate-90-br-ccw 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: rotate-90-br-ccw 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes rotate-90-br-ccw {
      0% { -webkit-transform: rotate(0); transform: rotate(0); -webkit-transform-origin: 100% 100%; transform-origin: 100% 100%; }
      100% { -webkit-transform: rotate(-90deg); transform: rotate(-90deg); -webkit-transform-origin: 100% 100%; transform-origin: 100% 100%; }
    }
    @keyframes rotate-90-br-ccw {
      0% { -webkit-transform: rotate(0); transform: rotate(0); -webkit-transform-origin: 100% 100%; transform-origin: 100% 100%; }
      100% { -webkit-transform: rotate(-90deg); transform: rotate(-90deg); -webkit-transform-origin: 100% 100%; transform-origin: 100% 100%; }
    }
  `,
  rotate: `
    /* Rotate Animations */
    .rotate-center {
      -webkit-animation: rotate-center 0.6s ease-in-out both;
      animation: rotate-center 0.6s ease-in-out both;
    }
    @-webkit-keyframes rotate-center {
      0% { -webkit-transform: rotate(0); transform: rotate(0); }
      100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }
    }
    @keyframes rotate-center {
      0% { -webkit-transform: rotate(0); transform: rotate(0); }
      100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }
    }
    
    .rotate-tl {
      -webkit-animation: rotate-tl 0.6s ease-in-out both;
      animation: rotate-tl 0.6s ease-in-out both;
    }
    @-webkit-keyframes rotate-tl {
      0% { -webkit-transform: rotate(0); transform: rotate(0); -webkit-transform-origin: 0% 0%; transform-origin: 0% 0%; }
      100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); -webkit-transform-origin: 0% 0%; transform-origin: 0% 0%; }
    }
    @keyframes rotate-tl {
      0% { -webkit-transform: rotate(0); transform: rotate(0); -webkit-transform-origin: 0% 0%; transform-origin: 0% 0%; }
      100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); -webkit-transform-origin: 0% 0%; transform-origin: 0% 0%; }
    }
    
    .rotate-tr {
      -webkit-animation: rotate-tr 0.6s ease-in-out both;
      animation: rotate-tr 0.6s ease-in-out both;
    }
    @-webkit-keyframes rotate-tr {
      0% { -webkit-transform: rotate(0); transform: rotate(0); -webkit-transform-origin: 100% 0%; transform-origin: 100% 0%; }
      100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); -webkit-transform-origin: 100% 0%; transform-origin: 100% 0%; }
    }
    @keyframes rotate-tr {
      0% { -webkit-transform: rotate(0); transform: rotate(0); -webkit-transform-origin: 100% 0%; transform-origin: 100% 0%; }
      100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); -webkit-transform-origin: 100% 0%; transform-origin: 100% 0%; }
    }
    
    .rotate-bl {
      -webkit-animation: rotate-bl 0.6s ease-in-out both;
      animation: rotate-bl 0.6s ease-in-out both;
    }
    @-webkit-keyframes rotate-bl {
      0% { -webkit-transform: rotate(0); transform: rotate(0); -webkit-transform-origin: 0% 100%; transform-origin: 0% 100%; }
      100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); -webkit-transform-origin: 0% 100%; transform-origin: 0% 100%; }
    }
    @keyframes rotate-bl {
      0% { -webkit-transform: rotate(0); transform: rotate(0); -webkit-transform-origin: 0% 100%; transform-origin: 0% 100%; }
      100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); -webkit-transform-origin: 0% 100%; transform-origin: 0% 100%; }
    }
    
    .rotate-br {
      -webkit-animation: rotate-br 0.6s ease-in-out both;
      animation: rotate-br 0.6s ease-in-out both;
    }
    @-webkit-keyframes rotate-br {
      0% { -webkit-transform: rotate(0); transform: rotate(0); -webkit-transform-origin: 100% 100%; transform-origin: 100% 100%; }
      100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); -webkit-transform-origin: 100% 100%; transform-origin: 100% 100%; }
    }
    @keyframes rotate-br {
      0% { -webkit-transform: rotate(0); transform: rotate(0); -webkit-transform-origin: 100% 100%; transform-origin: 100% 100%; }
      100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); -webkit-transform-origin: 100% 100%; transform-origin: 100% 100%; }
    }
    
    .rotate-top {
      -webkit-animation: rotate-top 0.6s ease-in-out both;
      animation: rotate-top 0.6s ease-in-out both;
    }
    @-webkit-keyframes rotate-top {
      0% { -webkit-transform: rotate(0); transform: rotate(0); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
      100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
    }
    @keyframes rotate-top {
      0% { -webkit-transform: rotate(0); transform: rotate(0); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
      100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
    }
    
    .rotate-bottom {
      -webkit-animation: rotate-bottom 0.6s ease-in-out both;
      animation: rotate-bottom 0.6s ease-in-out both;
    }
    @-webkit-keyframes rotate-bottom {
      0% { -webkit-transform: rotate(0); transform: rotate(0); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
      100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
    }
    @keyframes rotate-bottom {
      0% { -webkit-transform: rotate(0); transform: rotate(0); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
      100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
    }
    
    .rotate-left {
      -webkit-animation: rotate-left 0.6s ease-in-out both;
      animation: rotate-left 0.6s ease-in-out both;
    }
    @-webkit-keyframes rotate-left {
      0% { -webkit-transform: rotate(0); transform: rotate(0); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
      100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
    }
    @keyframes rotate-left {
      0% { -webkit-transform: rotate(0); transform: rotate(0); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
      100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
    }
    
    .rotate-right {
      -webkit-animation: rotate-right 0.6s ease-in-out both;
      animation: rotate-right 0.6s ease-in-out both;
    }
    @-webkit-keyframes rotate-right {
      0% { -webkit-transform: rotate(0); transform: rotate(0); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
      100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
    }
    @keyframes rotate-right {
      0% { -webkit-transform: rotate(0); transform: rotate(0); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
      100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
    }
    
    .rotate-diagonal-1 {
      -webkit-animation: rotate-diagonal-1 0.6s ease-in-out both;
      animation: rotate-diagonal-1 0.6s ease-in-out both;
    }
    @-webkit-keyframes rotate-diagonal-1 {
      0% { -webkit-transform: rotate(0); transform: rotate(0); -webkit-transform-origin: 0% 100%; transform-origin: 0% 100%; }
      100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); -webkit-transform-origin: 0% 100%; transform-origin: 0% 100%; }
    }
    @keyframes rotate-diagonal-1 {
      0% { -webkit-transform: rotate(0); transform: rotate(0); -webkit-transform-origin: 0% 100%; transform-origin: 0% 100%; }
      100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); -webkit-transform-origin: 0% 100%; transform-origin: 0% 100%; }
    }
    
    .rotate-diagonal-2 {
      -webkit-animation: rotate-diagonal-2 0.6s ease-in-out both;
      animation: rotate-diagonal-2 0.6s ease-in-out both;
    }
    @-webkit-keyframes rotate-diagonal-2 {
      0% { -webkit-transform: rotate(0); transform: rotate(0); -webkit-transform-origin: 100% 100%; transform-origin: 100% 100%; }
      100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); -webkit-transform-origin: 100% 100%; transform-origin: 100% 100%; }
    }
    @keyframes rotate-diagonal-2 {
      0% { -webkit-transform: rotate(0); transform: rotate(0); -webkit-transform-origin: 100% 100%; transform-origin: 100% 100%; }
      100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); -webkit-transform-origin: 100% 100%; transform-origin: 100% 100%; }
    }
  `,
  'rotate-scale': `
    /* Rotate Scale Animations */
    .rotate-scale-up {
      -webkit-animation: rotate-scale-up 0.65s linear both;
      animation: rotate-scale-up 0.65s linear both;
    }
    @-webkit-keyframes rotate-scale-up {
      0% { -webkit-transform: scale(1) rotateZ(0); transform: scale(1) rotateZ(0); }
      50% { -webkit-transform: scale(2) rotateZ(180deg); transform: scale(2) rotateZ(180deg); }
      100% { -webkit-transform: scale(1) rotateZ(360deg); transform: scale(1) rotateZ(360deg); }
    }
    @keyframes rotate-scale-up {
      0% { -webkit-transform: scale(1) rotateZ(0); transform: scale(1) rotateZ(0); }
      50% { -webkit-transform: scale(2) rotateZ(180deg); transform: scale(2) rotateZ(180deg); }
      100% { -webkit-transform: scale(1) rotateZ(360deg); transform: scale(1) rotateZ(360deg); }
    }
    
    .rotate-scale-down {
      -webkit-animation: rotate-scale-down 0.65s linear both;
      animation: rotate-scale-down 0.65s linear both;
    }
    @-webkit-keyframes rotate-scale-down {
      0% { -webkit-transform: scale(1) rotateZ(0); transform: scale(1) rotateZ(0); }
      50% { -webkit-transform: scale(0.5) rotateZ(180deg); transform: scale(0.5) rotateZ(180deg); }
      100% { -webkit-transform: scale(1) rotateZ(360deg); transform: scale(1) rotateZ(360deg); }
    }
    @keyframes rotate-scale-down {
      0% { -webkit-transform: scale(1) rotateZ(0); transform: scale(1) rotateZ(0); }
      50% { -webkit-transform: scale(0.5) rotateZ(180deg); transform: scale(0.5) rotateZ(180deg); }
      100% { -webkit-transform: scale(1) rotateZ(360deg); transform: scale(1) rotateZ(360deg); }
    }
    
    .rotate-scale-left {
      -webkit-animation: rotate-scale-left 0.65s ease-in-out both;
      animation: rotate-scale-left 0.65s ease-in-out both;
    }
    @-webkit-keyframes rotate-scale-left {
      0% { -webkit-transform: scale(1) rotateZ(0); transform: scale(1) rotateZ(0); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
      50% { -webkit-transform: scale(1.5) rotateZ(-180deg); transform: scale(1.5) rotateZ(-180deg); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
      100% { -webkit-transform: scale(1) rotateZ(-360deg); transform: scale(1) rotateZ(-360deg); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
    }
    @keyframes rotate-scale-left {
      0% { -webkit-transform: scale(1) rotateZ(0); transform: scale(1) rotateZ(0); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
      50% { -webkit-transform: scale(1.5) rotateZ(-180deg); transform: scale(1.5) rotateZ(-180deg); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
      100% { -webkit-transform: scale(1) rotateZ(-360deg); transform: scale(1) rotateZ(-360deg); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
    }
    
    .rotate-scale-right {
      -webkit-animation: rotate-scale-right 0.65s ease-in-out both;
      animation: rotate-scale-right 0.65s ease-in-out both;
    }
    @-webkit-keyframes rotate-scale-right {
      0% { -webkit-transform: scale(1) rotateZ(0); transform: scale(1) rotateZ(0); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
      50% { -webkit-transform: scale(1.5) rotateZ(180deg); transform: scale(1.5) rotateZ(180deg); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
      100% { -webkit-transform: scale(1) rotateZ(360deg); transform: scale(1) rotateZ(360deg); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
    }
    @keyframes rotate-scale-right {
      0% { -webkit-transform: scale(1) rotateZ(0); transform: scale(1) rotateZ(0); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
      50% { -webkit-transform: scale(1.5) rotateZ(180deg); transform: scale(1.5) rotateZ(180deg); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
      100% { -webkit-transform: scale(1) rotateZ(360deg); transform: scale(1) rotateZ(360deg); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
    }
    
    .rotate-scale-tl {
      -webkit-animation: rotate-scale-tl 0.65s ease-in-out both;
      animation: rotate-scale-tl 0.65s ease-in-out both;
    }
    @-webkit-keyframes rotate-scale-tl {
      0% { -webkit-transform: scale(1) rotateZ(0); transform: scale(1) rotateZ(0); -webkit-transform-origin: 0% 0%; transform-origin: 0% 0%; }
      50% { -webkit-transform: scale(1.5) rotateZ(-180deg); transform: scale(1.5) rotateZ(-180deg); -webkit-transform-origin: 0% 0%; transform-origin: 0% 0%; }
      100% { -webkit-transform: scale(1) rotateZ(-360deg); transform: scale(1) rotateZ(-360deg); -webkit-transform-origin: 0% 0%; transform-origin: 0% 0%; }
    }
    @keyframes rotate-scale-tl {
      0% { -webkit-transform: scale(1) rotateZ(0); transform: scale(1) rotateZ(0); -webkit-transform-origin: 0% 0%; transform-origin: 0% 0%; }
      50% { -webkit-transform: scale(1.5) rotateZ(-180deg); transform: scale(1.5) rotateZ(-180deg); -webkit-transform-origin: 0% 0%; transform-origin: 0% 0%; }
      100% { -webkit-transform: scale(1) rotateZ(-360deg); transform: scale(1) rotateZ(-360deg); -webkit-transform-origin: 0% 0%; transform-origin: 0% 0%; }
    }
    
    .rotate-scale-tr {
      -webkit-animation: rotate-scale-tr 0.65s ease-in-out both;
      animation: rotate-scale-tr 0.65s ease-in-out both;
    }
    @-webkit-keyframes rotate-scale-tr {
      0% { -webkit-transform: scale(1) rotateZ(0); transform: scale(1) rotateZ(0); -webkit-transform-origin: 100% 0%; transform-origin: 100% 0%; }
      50% { -webkit-transform: scale(1.5) rotateZ(180deg); transform: scale(1.5) rotateZ(180deg); -webkit-transform-origin: 100% 0%; transform-origin: 100% 0%; }
      100% { -webkit-transform: scale(1) rotateZ(360deg); transform: scale(1) rotateZ(360deg); -webkit-transform-origin: 100% 0%; transform-origin: 100% 0%; }
    }
    @keyframes rotate-scale-tr {
      0% { -webkit-transform: scale(1) rotateZ(0); transform: scale(1) rotateZ(0); -webkit-transform-origin: 100% 0%; transform-origin: 100% 0%; }
      50% { -webkit-transform: scale(1.5) rotateZ(180deg); transform: scale(1.5) rotateZ(180deg); -webkit-transform-origin: 100% 0%; transform-origin: 100% 0%; }
      100% { -webkit-transform: scale(1) rotateZ(360deg); transform: scale(1) rotateZ(360deg); -webkit-transform-origin: 100% 0%; transform-origin: 100% 0%; }
    }
    
    .rotate-scale-bl {
      -webkit-animation: rotate-scale-bl 0.65s ease-in-out both;
      animation: rotate-scale-bl 0.65s ease-in-out both;
    }
    @-webkit-keyframes rotate-scale-bl {
      0% { -webkit-transform: scale(1) rotateZ(0); transform: scale(1) rotateZ(0); -webkit-transform-origin: 0% 100%; transform-origin: 0% 100%; }
      50% { -webkit-transform: scale(1.5) rotateZ(-180deg); transform: scale(1.5) rotateZ(-180deg); -webkit-transform-origin: 0% 100%; transform-origin: 0% 100%; }
      100% { -webkit-transform: scale(1) rotateZ(-360deg); transform: scale(1) rotateZ(-360deg); -webkit-transform-origin: 0% 100%; transform-origin: 0% 100%; }
    }
    @keyframes rotate-scale-bl {
      0% { -webkit-transform: scale(1) rotateZ(0); transform: scale(1) rotateZ(0); -webkit-transform-origin: 0% 100%; transform-origin: 0% 100%; }
      50% { -webkit-transform: scale(1.5) rotateZ(-180deg); transform: scale(1.5) rotateZ(-180deg); -webkit-transform-origin: 0% 100%; transform-origin: 0% 100%; }
      100% { -webkit-transform: scale(1) rotateZ(-360deg); transform: scale(1) rotateZ(-360deg); -webkit-transform-origin: 0% 100%; transform-origin: 0% 100%; }
    }
    
    .rotate-scale-br {
      -webkit-animation: rotate-scale-br 0.65s ease-in-out both;
      animation: rotate-scale-br 0.65s ease-in-out both;
    }
    @-webkit-keyframes rotate-scale-br {
      0% { -webkit-transform: scale(1) rotateZ(0); transform: scale(1) rotateZ(0); -webkit-transform-origin: 100% 100%; transform-origin: 100% 100%; }
      50% { -webkit-transform: scale(1.5) rotateZ(180deg); transform: scale(1.5) rotateZ(180deg); -webkit-transform-origin: 100% 100%; transform-origin: 100% 100%; }
      100% { -webkit-transform: scale(1) rotateZ(360deg); transform: scale(1) rotateZ(360deg); -webkit-transform-origin: 100% 100%; transform-origin: 100% 100%; }
    }
    @keyframes rotate-scale-br {
      0% { -webkit-transform: scale(1) rotateZ(0); transform: scale(1) rotateZ(0); -webkit-transform-origin: 100% 100%; transform-origin: 100% 100%; }
      50% { -webkit-transform: scale(1.5) rotateZ(180deg); transform: scale(1.5) rotateZ(180deg); -webkit-transform-origin: 100% 100%; transform-origin: 100% 100%; }
      100% { -webkit-transform: scale(1) rotateZ(360deg); transform: scale(1) rotateZ(360deg); -webkit-transform-origin: 100% 100%; transform-origin: 100% 100%; }
    }
  `,
  'flip-2': `
    /* Flip 2 Animations */
    .flip-2-hor-top-1 {
      -webkit-animation: flip-2-hor-top-1 0.6s ease-out both;
      animation: flip-2-hor-top-1 0.6s ease-out both;
    }
    @-webkit-keyframes flip-2-hor-top-1 {
      0% { -webkit-transform: translateY(0) rotateX(0); transform: translateY(0) rotateX(0); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
      100% { -webkit-transform: translateY(-100px) rotateX(-180deg); transform: translateY(-100px) rotateX(-180deg); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
    }
    @keyframes flip-2-hor-top-1 {
      0% { -webkit-transform: translateY(0) rotateX(0); transform: translateY(0) rotateX(0); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
      100% { -webkit-transform: translateY(-100px) rotateX(-180deg); transform: translateY(-100px) rotateX(-180deg); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
    }
    
    .flip-2-hor-top-2 {
      -webkit-animation: flip-2-hor-top-2 0.6s ease-out both;
      animation: flip-2-hor-top-2 0.6s ease-out both;
    }
    @-webkit-keyframes flip-2-hor-top-2 {
      0% { -webkit-transform: translateY(0) rotateX(0); transform: translateY(0) rotateX(0); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
      100% { -webkit-transform: translateY(-100px) rotateX(180deg); transform: translateY(-100px) rotateX(180deg); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
    }
    @keyframes flip-2-hor-top-2 {
      0% { -webkit-transform: translateY(0) rotateX(0); transform: translateY(0) rotateX(0); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
      100% { -webkit-transform: translateY(-100px) rotateX(180deg); transform: translateY(-100px) rotateX(180deg); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
    }
    
    .flip-2-hor-bottom-1 {
      -webkit-animation: flip-2-hor-bottom-1 0.6s ease-out both;
      animation: flip-2-hor-bottom-1 0.6s ease-out both;
    }
    @-webkit-keyframes flip-2-hor-bottom-1 {
      0% { -webkit-transform: translateY(0) rotateX(0); transform: translateY(0) rotateX(0); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
      100% { -webkit-transform: translateY(100px) rotateX(180deg); transform: translateY(100px) rotateX(180deg); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
    }
    @keyframes flip-2-hor-bottom-1 {
      0% { -webkit-transform: translateY(0) rotateX(0); transform: translateY(0) rotateX(0); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
      100% { -webkit-transform: translateY(100px) rotateX(180deg); transform: translateY(100px) rotateX(180deg); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
    }
    
    .flip-2-hor-bottom-2 {
      -webkit-animation: flip-2-hor-bottom-2 0.6s ease-out both;
      animation: flip-2-hor-bottom-2 0.6s ease-out both;
    }
    @-webkit-keyframes flip-2-hor-bottom-2 {
      0% { -webkit-transform: translateY(0) rotateX(0); transform: translateY(0) rotateX(0); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
      100% { -webkit-transform: translateY(100px) rotateX(-180deg); transform: translateY(100px) rotateX(-180deg); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
    }
    @keyframes flip-2-hor-bottom-2 {
      0% { -webkit-transform: translateY(0) rotateX(0); transform: translateY(0) rotateX(0); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
      100% { -webkit-transform: translateY(100px) rotateX(-180deg); transform: translateY(100px) rotateX(-180deg); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
    }
    
    .flip-2-ver-left-1 {
      -webkit-animation: flip-2-ver-left-1 0.6s ease-out both;
      animation: flip-2-ver-left-1 0.6s ease-out both;
    }
    @-webkit-keyframes flip-2-ver-left-1 {
      0% { -webkit-transform: translateX(0) rotateY(0); transform: translateX(0) rotateY(0); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
      100% { -webkit-transform: translateX(-100px) rotateY(180deg); transform: translateX(-100px) rotateY(180deg); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
    }
    @keyframes flip-2-ver-left-1 {
      0% { -webkit-transform: translateX(0) rotateY(0); transform: translateX(0) rotateY(0); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
      100% { -webkit-transform: translateX(-100px) rotateY(180deg); transform: translateX(-100px) rotateY(180deg); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
    }
    
    .flip-2-ver-left-2 {
      -webkit-animation: flip-2-ver-left-2 0.6s ease-out both;
      animation: flip-2-ver-left-2 0.6s ease-out both;
    }
    @-webkit-keyframes flip-2-ver-left-2 {
      0% { -webkit-transform: translateX(0) rotateY(0); transform: translateX(0) rotateY(0); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
      100% { -webkit-transform: translateX(-100px) rotateY(-180deg); transform: translateX(-100px) rotateY(-180deg); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
    }
    @keyframes flip-2-ver-left-2 {
      0% { -webkit-transform: translateX(0) rotateY(0); transform: translateX(0) rotateY(0); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
      100% { -webkit-transform: translateX(-100px) rotateY(-180deg); transform: translateX(-100px) rotateY(-180deg); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
    }
    
    .flip-2-ver-right-1 {
      -webkit-animation: flip-2-ver-right-1 0.6s ease-out both;
      animation: flip-2-ver-right-1 0.6s ease-out both;
    }
    @-webkit-keyframes flip-2-ver-right-1 {
      0% { -webkit-transform: translateX(0) rotateY(0); transform: translateX(0) rotateY(0); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
      100% { -webkit-transform: translateX(100px) rotateY(-180deg); transform: translateX(100px) rotateY(-180deg); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
    }
    @keyframes flip-2-ver-right-1 {
      0% { -webkit-transform: translateX(0) rotateY(0); transform: translateX(0) rotateY(0); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
      100% { -webkit-transform: translateX(100px) rotateY(-180deg); transform: translateX(100px) rotateY(-180deg); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
    }
    
    .flip-2-ver-right-2 {
      -webkit-animation: flip-2-ver-right-2 0.6s ease-out both;
      animation: flip-2-ver-right-2 0.6s ease-out both;
    }
    @-webkit-keyframes flip-2-ver-right-2 {
      0% { -webkit-transform: translateX(0) rotateY(0); transform: translateX(0) rotateY(0); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
      100% { -webkit-transform: translateX(100px) rotateY(180deg); transform: translateX(100px) rotateY(180deg); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
    }
    @keyframes flip-2-ver-right-2 {
      0% { -webkit-transform: translateX(0) rotateY(0); transform: translateX(0) rotateY(0); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
      100% { -webkit-transform: translateX(100px) rotateY(180deg); transform: translateX(100px) rotateY(180deg); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
    }
  `,
  'shadow-drop': `
    /* Shadow Drop Animations */
    .shadow-drop-center {
      -webkit-animation: shadow-drop-center 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: shadow-drop-center 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes shadow-drop-center {
      0% { -webkit-box-shadow: 0 0 0 0 transparent; box-shadow: 0 0 0 0 transparent; }
      100% { -webkit-box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35); box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35); }
    }
    @keyframes shadow-drop-center {
      0% { -webkit-box-shadow: 0 0 0 0 transparent; box-shadow: 0 0 0 0 transparent; }
      100% { -webkit-box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35); box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35); }
    }
    
    .shadow-drop-top {
      -webkit-animation: shadow-drop-top 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: shadow-drop-top 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes shadow-drop-top {
      0% { -webkit-box-shadow: 0 0 0 0 transparent; box-shadow: 0 0 0 0 transparent; }
      100% { -webkit-box-shadow: 0 -12px 20px -12px rgba(0, 0, 0, 0.35); box-shadow: 0 -12px 20px -12px rgba(0, 0, 0, 0.35); }
    }
    @keyframes shadow-drop-top {
      0% { -webkit-box-shadow: 0 0 0 0 transparent; box-shadow: 0 0 0 0 transparent; }
      100% { -webkit-box-shadow: 0 -12px 20px -12px rgba(0, 0, 0, 0.35); box-shadow: 0 -12px 20px -12px rgba(0, 0, 0, 0.35); }
    }
    
    .shadow-drop-bottom {
      -webkit-animation: shadow-drop-bottom 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: shadow-drop-bottom 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes shadow-drop-bottom {
      0% { -webkit-box-shadow: 0 0 0 0 transparent; box-shadow: 0 0 0 0 transparent; }
      100% { -webkit-box-shadow: 0 12px 20px -12px rgba(0, 0, 0, 0.35); box-shadow: 0 12px 20px -12px rgba(0, 0, 0, 0.35); }
    }
    @keyframes shadow-drop-bottom {
      0% { -webkit-box-shadow: 0 0 0 0 transparent; box-shadow: 0 0 0 0 transparent; }
      100% { -webkit-box-shadow: 0 12px 20px -12px rgba(0, 0, 0, 0.35); box-shadow: 0 12px 20px -12px rgba(0, 0, 0, 0.35); }
    }
    
    .shadow-drop-left {
      -webkit-animation: shadow-drop-left 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: shadow-drop-left 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes shadow-drop-left {
      0% { -webkit-box-shadow: 0 0 0 0 transparent; box-shadow: 0 0 0 0 transparent; }
      100% { -webkit-box-shadow: -12px 0 20px -12px rgba(0, 0, 0, 0.35); box-shadow: -12px 0 20px -12px rgba(0, 0, 0, 0.35); }
    }
    @keyframes shadow-drop-left {
      0% { -webkit-box-shadow: 0 0 0 0 transparent; box-shadow: 0 0 0 0 transparent; }
      100% { -webkit-box-shadow: -12px 0 20px -12px rgba(0, 0, 0, 0.35); box-shadow: -12px 0 20px -12px rgba(0, 0, 0, 0.35); }
    }
    
    .shadow-drop-right {
      -webkit-animation: shadow-drop-right 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: shadow-drop-right 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes shadow-drop-right {
      0% { -webkit-box-shadow: 0 0 0 0 transparent; box-shadow: 0 0 0 0 transparent; }
      100% { -webkit-box-shadow: 12px 0 20px -12px rgba(0, 0, 0, 0.35); box-shadow: 12px 0 20px -12px rgba(0, 0, 0, 0.35); }
    }
    @keyframes shadow-drop-right {
      0% { -webkit-box-shadow: 0 0 0 0 transparent; box-shadow: 0 0 0 0 transparent; }
      100% { -webkit-box-shadow: 12px 0 20px -12px rgba(0, 0, 0, 0.35); box-shadow: 12px 0 20px -12px rgba(0, 0, 0, 0.35); }
    }
  `,
  'shadow-drop-2': `
    /* Shadow Drop 2 Animations */
    .shadow-drop-2-center {
      -webkit-animation: shadow-drop-2-center 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: shadow-drop-2-center 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes shadow-drop-2-center {
      0% { -webkit-transform: translateZ(0); transform: translateZ(0); -webkit-box-shadow: 0 0 0 0 transparent; box-shadow: 0 0 0 0 transparent; }
      100% { -webkit-transform: translateZ(50px); transform: translateZ(50px); -webkit-box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35); box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35); }
    }
    @keyframes shadow-drop-2-center {
      0% { -webkit-transform: translateZ(0); transform: translateZ(0); -webkit-box-shadow: 0 0 0 0 transparent; box-shadow: 0 0 0 0 transparent; }
      100% { -webkit-transform: translateZ(50px); transform: translateZ(50px); -webkit-box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35); box-shadow: 0 0 20px 0px rgba(0, 0, 0, 0.35); }
    }
    
    .shadow-drop-2-top {
      -webkit-animation: shadow-drop-2-top 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: shadow-drop-2-top 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes shadow-drop-2-top {
      0% { -webkit-transform: translateZ(0) translateY(0); transform: translateZ(0) translateY(0); -webkit-box-shadow: 0 0 0 0 transparent; box-shadow: 0 0 0 0 transparent; }
      100% { -webkit-transform: translateZ(50px) translateY(-25px); transform: translateZ(50px) translateY(-25px); -webkit-box-shadow: 0 -12px 20px -12px rgba(0, 0, 0, 0.35); box-shadow: 0 -12px 20px -12px rgba(0, 0, 0, 0.35); }
    }
    @keyframes shadow-drop-2-top {
      0% { -webkit-transform: translateZ(0) translateY(0); transform: translateZ(0) translateY(0); -webkit-box-shadow: 0 0 0 0 transparent; box-shadow: 0 0 0 0 transparent; }
      100% { -webkit-transform: translateZ(50px) translateY(-25px); transform: translateZ(50px) translateY(-25px); -webkit-box-shadow: 0 -12px 20px -12px rgba(0, 0, 0, 0.35); box-shadow: 0 -12px 20px -12px rgba(0, 0, 0, 0.35); }
    }
    
    .shadow-drop-2-bottom {
      -webkit-animation: shadow-drop-2-bottom 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: shadow-drop-2-bottom 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes shadow-drop-2-bottom {
      0% { -webkit-transform: translateZ(0) translateY(0); transform: translateZ(0) translateY(0); -webkit-box-shadow: 0 0 0 0 transparent; box-shadow: 0 0 0 0 transparent; }
      100% { -webkit-transform: translateZ(50px) translateY(25px); transform: translateZ(50px) translateY(25px); -webkit-box-shadow: 0 12px 20px -12px rgba(0, 0, 0, 0.35); box-shadow: 0 12px 20px -12px rgba(0, 0, 0, 0.35); }
    }
    @keyframes shadow-drop-2-bottom {
      0% { -webkit-transform: translateZ(0) translateY(0); transform: translateZ(0) translateY(0); -webkit-box-shadow: 0 0 0 0 transparent; box-shadow: 0 0 0 0 transparent; }
      100% { -webkit-transform: translateZ(50px) translateY(25px); transform: translateZ(50px) translateY(25px); -webkit-box-shadow: 0 12px 20px -12px rgba(0, 0, 0, 0.35); box-shadow: 0 12px 20px -12px rgba(0, 0, 0, 0.35); }
    }
    
    .shadow-drop-2-left {
      -webkit-animation: shadow-drop-2-left 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: shadow-drop-2-left 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes shadow-drop-2-left {
      0% { -webkit-transform: translateZ(0) translateX(0); transform: translateZ(0) translateX(0); -webkit-box-shadow: 0 0 0 0 transparent; box-shadow: 0 0 0 0 transparent; }
      100% { -webkit-transform: translateZ(50px) translateX(-25px); transform: translateZ(50px) translateX(-25px); -webkit-box-shadow: -12px 0 20px -12px rgba(0, 0, 0, 0.35); box-shadow: -12px 0 20px -12px rgba(0, 0, 0, 0.35); }
    }
    @keyframes shadow-drop-2-left {
      0% { -webkit-transform: translateZ(0) translateX(0); transform: translateZ(0) translateX(0); -webkit-box-shadow: 0 0 0 0 transparent; box-shadow: 0 0 0 0 transparent; }
      100% { -webkit-transform: translateZ(50px) translateX(-25px); transform: translateZ(50px) translateX(-25px); -webkit-box-shadow: -12px 0 20px -12px rgba(0, 0, 0, 0.35); box-shadow: -12px 0 20px -12px rgba(0, 0, 0, 0.35); }
    }
    
    .shadow-drop-2-right {
      -webkit-animation: shadow-drop-2-right 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: shadow-drop-2-right 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes shadow-drop-2-right {
      0% { -webkit-transform: translateZ(0) translateX(0); transform: translateZ(0) translateX(0); -webkit-box-shadow: 0 0 0 0 transparent; box-shadow: 0 0 0 0 transparent; }
      100% { -webkit-transform: translateZ(50px) translateX(25px); transform: translateZ(50px) translateX(25px); -webkit-box-shadow: 12px 0 20px -12px rgba(0, 0, 0, 0.35); box-shadow: 12px 0 20px -12px rgba(0, 0, 0, 0.35); }
    }
    @keyframes shadow-drop-2-right {
      0% { -webkit-transform: translateZ(0) translateX(0); transform: translateZ(0) translateX(0); -webkit-box-shadow: 0 0 0 0 transparent; box-shadow: 0 0 0 0 transparent; }
      100% { -webkit-transform: translateZ(50px) translateX(25px); transform: translateZ(50px) translateX(25px); -webkit-box-shadow: 12px 0 20px -12px rgba(0, 0, 0, 0.35); box-shadow: 12px 0 20px -12px rgba(0, 0, 0, 0.35); }
    }
  `,
  'shadow-inset': `
    /* Shadow Inset Animations */
    .shadow-inset-center {
      -webkit-animation: shadow-inset-center 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: shadow-inset-center 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes shadow-inset-center {
      0% { -webkit-box-shadow: inset 0 0 0 0 transparent; box-shadow: inset 0 0 0 0 transparent; }
      100% { -webkit-box-shadow: inset 0 0 14px 0px rgba(0, 0, 0, 0.5); box-shadow: inset 0 0 14px 0px rgba(0, 0, 0, 0.5); }
    }
    @keyframes shadow-inset-center {
      0% { -webkit-box-shadow: inset 0 0 0 0 transparent; box-shadow: inset 0 0 0 0 transparent; }
      100% { -webkit-box-shadow: inset 0 0 14px 0px rgba(0, 0, 0, 0.5); box-shadow: inset 0 0 14px 0px rgba(0, 0, 0, 0.5); }
    }
    
    .shadow-inset-top {
      -webkit-animation: shadow-inset-top 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: shadow-inset-top 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes shadow-inset-top {
      0% { -webkit-box-shadow: inset 0 0 0 0 transparent; box-shadow: inset 0 0 0 0 transparent; }
      100% { -webkit-box-shadow: inset 0 4px 10px -4px rgba(0, 0, 0, 0.5); box-shadow: inset 0 4px 10px -4px rgba(0, 0, 0, 0.5); }
    }
    @keyframes shadow-inset-top {
      0% { -webkit-box-shadow: inset 0 0 0 0 transparent; box-shadow: inset 0 0 0 0 transparent; }
      100% { -webkit-box-shadow: inset 0 4px 10px -4px rgba(0, 0, 0, 0.5); box-shadow: inset 0 4px 10px -4px rgba(0, 0, 0, 0.5); }
    }
    
    .shadow-inset-bottom {
      -webkit-animation: shadow-inset-bottom 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: shadow-inset-bottom 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes shadow-inset-bottom {
      0% { -webkit-box-shadow: inset 0 0 0 0 transparent; box-shadow: inset 0 0 0 0 transparent; }
      100% { -webkit-box-shadow: inset 0 -4px 10px -4px rgba(0, 0, 0, 0.5); box-shadow: inset 0 -4px 10px -4px rgba(0, 0, 0, 0.5); }
    }
    @keyframes shadow-inset-bottom {
      0% { -webkit-box-shadow: inset 0 0 0 0 transparent; box-shadow: inset 0 0 0 0 transparent; }
      100% { -webkit-box-shadow: inset 0 -4px 10px -4px rgba(0, 0, 0, 0.5); box-shadow: inset 0 -4px 10px -4px rgba(0, 0, 0, 0.5); }
    }
    
    .shadow-inset-left {
      -webkit-animation: shadow-inset-left 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: shadow-inset-left 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes shadow-inset-left {
      0% { -webkit-box-shadow: inset 0 0 0 0 transparent; box-shadow: inset 0 0 0 0 transparent; }
      100% { -webkit-box-shadow: inset 4px 0 10px -4px rgba(0, 0, 0, 0.5); box-shadow: inset 4px 0 10px -4px rgba(0, 0, 0, 0.5); }
    }
    @keyframes shadow-inset-left {
      0% { -webkit-box-shadow: inset 0 0 0 0 transparent; box-shadow: inset 0 0 0 0 transparent; }
      100% { -webkit-box-shadow: inset 4px 0 10px -4px rgba(0, 0, 0, 0.5); box-shadow: inset 4px 0 10px -4px rgba(0, 0, 0, 0.5); }
    }
    
    .shadow-inset-right {
      -webkit-animation: shadow-inset-right 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
      animation: shadow-inset-right 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    }
    @-webkit-keyframes shadow-inset-right {
      0% { -webkit-box-shadow: inset 0 0 0 0 transparent; box-shadow: inset 0 0 0 0 transparent; }
      100% { -webkit-box-shadow: inset -4px 0 10px -4px rgba(0, 0, 0, 0.5); box-shadow: inset -4px 0 10px -4px rgba(0, 0, 0, 0.5); }
    }
    @keyframes shadow-inset-right {
      0% { -webkit-box-shadow: inset 0 0 0 0 transparent; box-shadow: inset 0 0 0 0 transparent; }
      100% { -webkit-box-shadow: inset -4px 0 10px -4px rgba(0, 0, 0, 0.5); box-shadow: inset -4px 0 10px -4px rgba(0, 0, 0, 0.5); }
    }
  `,
  'shadow-pop': `
    /* Shadow Pop Animations */
    .shadow-pop-tl {
      -webkit-animation: shadow-pop-tl 0.3s cubic-bezier(0.47, 0, 0.745, 0.715) both;
      animation: shadow-pop-tl 0.3s cubic-bezier(0.47, 0, 0.745, 0.715) both;
    }
    @-webkit-keyframes shadow-pop-tl {
      0% { -webkit-box-shadow: 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e; box-shadow: 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e; -webkit-transform: translateX(0) translateY(0); transform: translateX(0) translateY(0); }
      100% { -webkit-box-shadow: 1px 1px #3e3e3e, 2px 2px #3e3e3e, 3px 3px #3e3e3e, 4px 4px #3e3e3e, 5px 5px #3e3e3e, 6px 6px #3e3e3e, 7px 7px #3e3e3e, 8px 8px #3e3e3e; box-shadow: 1px 1px #3e3e3e, 2px 2px #3e3e3e, 3px 3px #3e3e3e, 4px 4px #3e3e3e, 5px 5px #3e3e3e, 6px 6px #3e3e3e, 7px 7px #3e3e3e, 8px 8px #3e3e3e; -webkit-transform: translateX(-8px) translateY(-8px); transform: translateX(-8px) translateY(-8px); }
    }
    @keyframes shadow-pop-tl {
      0% { -webkit-box-shadow: 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e; box-shadow: 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e; -webkit-transform: translateX(0) translateY(0); transform: translateX(0) translateY(0); }
      100% { -webkit-box-shadow: 1px 1px #3e3e3e, 2px 2px #3e3e3e, 3px 3px #3e3e3e, 4px 4px #3e3e3e, 5px 5px #3e3e3e, 6px 6px #3e3e3e, 7px 7px #3e3e3e, 8px 8px #3e3e3e; box-shadow: 1px 1px #3e3e3e, 2px 2px #3e3e3e, 3px 3px #3e3e3e, 4px 4px #3e3e3e, 5px 5px #3e3e3e, 6px 6px #3e3e3e, 7px 7px #3e3e3e, 8px 8px #3e3e3e; -webkit-transform: translateX(-8px) translateY(-8px); transform: translateX(-8px) translateY(-8px); }
    }
    
    .shadow-pop-tr {
      -webkit-animation: shadow-pop-tr 0.3s cubic-bezier(0.47, 0, 0.745, 0.715) both;
      animation: shadow-pop-tr 0.3s cubic-bezier(0.47, 0, 0.745, 0.715) both;
    }
    @-webkit-keyframes shadow-pop-tr {
      0% { -webkit-box-shadow: 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e; box-shadow: 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e; -webkit-transform: translateX(0) translateY(0); transform: translateX(0) translateY(0); }
      100% { -webkit-box-shadow: -1px 1px #3e3e3e, -2px 2px #3e3e3e, -3px 3px #3e3e3e, -4px 4px #3e3e3e, -5px 5px #3e3e3e, -6px 6px #3e3e3e, -7px 7px #3e3e3e, -8px 8px #3e3e3e; box-shadow: -1px 1px #3e3e3e, -2px 2px #3e3e3e, -3px 3px #3e3e3e, -4px 4px #3e3e3e, -5px 5px #3e3e3e, -6px 6px #3e3e3e, -7px 7px #3e3e3e, -8px 8px #3e3e3e; -webkit-transform: translateX(8px) translateY(-8px); transform: translateX(8px) translateY(-8px); }
    }
    @keyframes shadow-pop-tr {
      0% { -webkit-box-shadow: 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e; box-shadow: 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e; -webkit-transform: translateX(0) translateY(0); transform: translateX(0) translateY(0); }
      100% { -webkit-box-shadow: -1px 1px #3e3e3e, -2px 2px #3e3e3e, -3px 3px #3e3e3e, -4px 4px #3e3e3e, -5px 5px #3e3e3e, -6px 6px #3e3e3e, -7px 7px #3e3e3e, -8px 8px #3e3e3e; box-shadow: -1px 1px #3e3e3e, -2px 2px #3e3e3e, -3px 3px #3e3e3e, -4px 4px #3e3e3e, -5px 5px #3e3e3e, -6px 6px #3e3e3e, -7px 7px #3e3e3e, -8px 8px #3e3e3e; -webkit-transform: translateX(8px) translateY(-8px); transform: translateX(8px) translateY(-8px); }
    }
    
    .shadow-pop-bl {
      -webkit-animation: shadow-pop-bl 0.3s cubic-bezier(0.47, 0, 0.745, 0.715) both;
      animation: shadow-pop-bl 0.3s cubic-bezier(0.47, 0, 0.745, 0.715) both;
    }
    @-webkit-keyframes shadow-pop-bl {
      0% { -webkit-box-shadow: 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e; box-shadow: 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e; -webkit-transform: translateX(0) translateY(0); transform: translateX(0) translateY(0); }
      100% { -webkit-box-shadow: 1px -1px #3e3e3e, 2px -2px #3e3e3e, 3px -3px #3e3e3e, 4px -4px #3e3e3e, 5px -5px #3e3e3e, 6px -6px #3e3e3e, 7px -7px #3e3e3e, 8px -8px #3e3e3e; box-shadow: 1px -1px #3e3e3e, 2px -2px #3e3e3e, 3px -3px #3e3e3e, 4px -4px #3e3e3e, 5px -5px #3e3e3e, 6px -6px #3e3e3e, 7px -7px #3e3e3e, 8px -8px #3e3e3e; -webkit-transform: translateX(-8px) translateY(8px); transform: translateX(-8px) translateY(8px); }
    }
    @keyframes shadow-pop-bl {
      0% { -webkit-box-shadow: 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e; box-shadow: 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e; -webkit-transform: translateX(0) translateY(0); transform: translateX(0) translateY(0); }
      100% { -webkit-box-shadow: 1px -1px #3e3e3e, 2px -2px #3e3e3e, 3px -3px #3e3e3e, 4px -4px #3e3e3e, 5px -5px #3e3e3e, 6px -6px #3e3e3e, 7px -7px #3e3e3e, 8px -8px #3e3e3e; box-shadow: 1px -1px #3e3e3e, 2px -2px #3e3e3e, 3px -3px #3e3e3e, 4px -4px #3e3e3e, 5px -5px #3e3e3e, 6px -6px #3e3e3e, 7px -7px #3e3e3e, 8px -8px #3e3e3e; -webkit-transform: translateX(-8px) translateY(8px); transform: translateX(-8px) translateY(8px); }
    }
    
    .shadow-pop-br {
      -webkit-animation: shadow-pop-br 0.3s cubic-bezier(0.47, 0, 0.745, 0.715) both;
      animation: shadow-pop-br 0.3s cubic-bezier(0.47, 0, 0.745, 0.715) both;
    }
    @-webkit-keyframes shadow-pop-br {
      0% { -webkit-box-shadow: 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e; box-shadow: 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e; -webkit-transform: translateX(0) translateY(0); transform: translateX(0) translateY(0); }
      100% { -webkit-box-shadow: -1px -1px #3e3e3e, -2px -2px #3e3e3e, -3px -3px #3e3e3e, -4px -4px #3e3e3e, -5px -5px #3e3e3e, -6px -6px #3e3e3e, -7px -7px #3e3e3e, -8px -8px #3e3e3e; box-shadow: -1px -1px #3e3e3e, -2px -2px #3e3e3e, -3px -3px #3e3e3e, -4px -4px #3e3e3e, -5px -5px #3e3e3e, -6px -6px #3e3e3e, -7px -7px #3e3e3e, -8px -8px #3e3e3e; -webkit-transform: translateX(8px) translateY(8px); transform: translateX(8px) translateY(8px); }
    }
    @keyframes shadow-pop-br {
      0% { -webkit-box-shadow: 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e; box-shadow: 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e, 0 0 #3e3e3e; -webkit-transform: translateX(0) translateY(0); transform: translateX(0) translateY(0); }
      100% { -webkit-box-shadow: -1px -1px #3e3e3e, -2px -2px #3e3e3e, -3px -3px #3e3e3e, -4px -4px #3e3e3e, -5px -5px #3e3e3e, -6px -6px #3e3e3e, -7px -7px #3e3e3e, -8px -8px #3e3e3e; box-shadow: -1px -1px #3e3e3e, -2px -2px #3e3e3e, -3px -3px #3e3e3e, -4px -4px #3e3e3e, -5px -5px #3e3e3e, -6px -6px #3e3e3e, -7px -7px #3e3e3e, -8px -8px #3e3e3e; -webkit-transform: translateX(8px) translateY(8px); transform: translateX(8px) translateY(8px); }
    }
  `,
  'flip-scale': `
    /* Flip Scale Animations */
    .flip-scale-hor-top {
      -webkit-animation: flip-scale-hor-top 0.5s linear both;
      animation: flip-scale-hor-top 0.5s linear both;
    }
    @-webkit-keyframes flip-scale-hor-top {
      0% { -webkit-transform: scale(1) rotateX(0); transform: scale(1) rotateX(0); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
      50% { -webkit-transform: scale(1.5) rotateX(-90deg); transform: scale(1.5) rotateX(-90deg); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
      100% { -webkit-transform: scale(1) rotateX(-180deg); transform: scale(1) rotateX(-180deg); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
    }
    @keyframes flip-scale-hor-top {
      0% { -webkit-transform: scale(1) rotateX(0); transform: scale(1) rotateX(0); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
      50% { -webkit-transform: scale(1.5) rotateX(-90deg); transform: scale(1.5) rotateX(-90deg); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
      100% { -webkit-transform: scale(1) rotateX(-180deg); transform: scale(1) rotateX(-180deg); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
    }
    
    .flip-scale-hor-bottom {
      -webkit-animation: flip-scale-hor-bottom 0.5s linear both;
      animation: flip-scale-hor-bottom 0.5s linear both;
    }
    @-webkit-keyframes flip-scale-hor-bottom {
      0% { -webkit-transform: scale(1) rotateX(0); transform: scale(1) rotateX(0); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
      50% { -webkit-transform: scale(1.5) rotateX(90deg); transform: scale(1.5) rotateX(90deg); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
      100% { -webkit-transform: scale(1) rotateX(180deg); transform: scale(1) rotateX(180deg); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
    }
    @keyframes flip-scale-hor-bottom {
      0% { -webkit-transform: scale(1) rotateX(0); transform: scale(1) rotateX(0); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
      50% { -webkit-transform: scale(1.5) rotateX(90deg); transform: scale(1.5) rotateX(90deg); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
      100% { -webkit-transform: scale(1) rotateX(180deg); transform: scale(1) rotateX(180deg); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
    }
    
    .flip-scale-ver-left {
      -webkit-animation: flip-scale-ver-left 0.5s linear both;
      animation: flip-scale-ver-left 0.5s linear both;
    }
    @-webkit-keyframes flip-scale-ver-left {
      0% { -webkit-transform: scale(1) rotateY(0); transform: scale(1) rotateY(0); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
      50% { -webkit-transform: scale(1.5) rotateY(-90deg); transform: scale(1.5) rotateY(-90deg); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
      100% { -webkit-transform: scale(1) rotateY(-180deg); transform: scale(1) rotateY(-180deg); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
    }
    @keyframes flip-scale-ver-left {
      0% { -webkit-transform: scale(1) rotateY(0); transform: scale(1) rotateY(0); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
      50% { -webkit-transform: scale(1.5) rotateY(-90deg); transform: scale(1.5) rotateY(-90deg); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
      100% { -webkit-transform: scale(1) rotateY(-180deg); transform: scale(1) rotateY(-180deg); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
    }
    
    .flip-scale-ver-right {
      -webkit-animation: flip-scale-ver-right 0.5s linear both;
      animation: flip-scale-ver-right 0.5s linear both;
    }
    @-webkit-keyframes flip-scale-ver-right {
      0% { -webkit-transform: scale(1) rotateY(0); transform: scale(1) rotateY(0); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
      50% { -webkit-transform: scale(1.5) rotateY(90deg); transform: scale(1.5) rotateY(90deg); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
      100% { -webkit-transform: scale(1) rotateY(180deg); transform: scale(1) rotateY(180deg); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
    }
    @keyframes flip-scale-ver-right {
      0% { -webkit-transform: scale(1) rotateY(0); transform: scale(1) rotateY(0); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
      50% { -webkit-transform: scale(1.5) rotateY(90deg); transform: scale(1.5) rotateY(90deg); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
      100% { -webkit-transform: scale(1) rotateY(180deg); transform: scale(1) rotateY(180deg); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
    }
  `,
  'flip-scale-2': `
    /* Flip Scale 2 Animations */
    .flip-scale-2-hor-top {
      -webkit-animation: flip-scale-2-hor-top 0.5s ease-out both;
      animation: flip-scale-2-hor-top 0.5s ease-out both;
    }
    @-webkit-keyframes flip-scale-2-hor-top {
      0% { -webkit-transform: scale(1) rotateX(0); transform: scale(1) rotateX(0); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
      25% { -webkit-transform: scale(1.3) rotateX(0); transform: scale(1.3) rotateX(0); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
      50% { -webkit-transform: scale(1.3) rotateX(-90deg); transform: scale(1.3) rotateX(-90deg); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
      75% { -webkit-transform: scale(1.3) rotateX(-180deg); transform: scale(1.3) rotateX(-180deg); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
      100% { -webkit-transform: scale(1) rotateX(-180deg); transform: scale(1) rotateX(-180deg); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
    }
    @keyframes flip-scale-2-hor-top {
      0% { -webkit-transform: scale(1) rotateX(0); transform: scale(1) rotateX(0); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
      25% { -webkit-transform: scale(1.3) rotateX(0); transform: scale(1.3) rotateX(0); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
      50% { -webkit-transform: scale(1.3) rotateX(-90deg); transform: scale(1.3) rotateX(-90deg); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
      75% { -webkit-transform: scale(1.3) rotateX(-180deg); transform: scale(1.3) rotateX(-180deg); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
      100% { -webkit-transform: scale(1) rotateX(-180deg); transform: scale(1) rotateX(-180deg); -webkit-transform-origin: 50% 0%; transform-origin: 50% 0%; }
    }
    
    .flip-scale-2-hor-bottom {
      -webkit-animation: flip-scale-2-hor-bottom 0.5s ease-out both;
      animation: flip-scale-2-hor-bottom 0.5s ease-out both;
    }
    @-webkit-keyframes flip-scale-2-hor-bottom {
      0% { -webkit-transform: scale(1) rotateX(0); transform: scale(1) rotateX(0); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
      25% { -webkit-transform: scale(1.3) rotateX(0); transform: scale(1.3) rotateX(0); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
      50% { -webkit-transform: scale(1.3) rotateX(90deg); transform: scale(1.3) rotateX(90deg); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
      75% { -webkit-transform: scale(1.3) rotateX(180deg); transform: scale(1.3) rotateX(180deg); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
      100% { -webkit-transform: scale(1) rotateX(180deg); transform: scale(1) rotateX(180deg); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
    }
    @keyframes flip-scale-2-hor-bottom {
      0% { -webkit-transform: scale(1) rotateX(0); transform: scale(1) rotateX(0); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
      25% { -webkit-transform: scale(1.3) rotateX(0); transform: scale(1.3) rotateX(0); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
      50% { -webkit-transform: scale(1.3) rotateX(90deg); transform: scale(1.3) rotateX(90deg); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
      75% { -webkit-transform: scale(1.3) rotateX(180deg); transform: scale(1.3) rotateX(180deg); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
      100% { -webkit-transform: scale(1) rotateX(180deg); transform: scale(1) rotateX(180deg); -webkit-transform-origin: 50% 100%; transform-origin: 50% 100%; }
    }
    
    .flip-scale-2-ver-left {
      -webkit-animation: flip-scale-2-ver-left 0.5s ease-out both;
      animation: flip-scale-2-ver-left 0.5s ease-out both;
    }
    @-webkit-keyframes flip-scale-2-ver-left {
      0% { -webkit-transform: scale(1) rotateY(0); transform: scale(1) rotateY(0); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
      25% { -webkit-transform: scale(1.3) rotateY(0); transform: scale(1.3) rotateY(0); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
      50% { -webkit-transform: scale(1.3) rotateY(-90deg); transform: scale(1.3) rotateY(-90deg); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
      75% { -webkit-transform: scale(1.3) rotateY(-180deg); transform: scale(1.3) rotateY(-180deg); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
      100% { -webkit-transform: scale(1) rotateY(-180deg); transform: scale(1) rotateY(-180deg); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
    }
    @keyframes flip-scale-2-ver-left {
      0% { -webkit-transform: scale(1) rotateY(0); transform: scale(1) rotateY(0); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
      25% { -webkit-transform: scale(1.3) rotateY(0); transform: scale(1.3) rotateY(0); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
      50% { -webkit-transform: scale(1.3) rotateY(-90deg); transform: scale(1.3) rotateY(-90deg); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
      75% { -webkit-transform: scale(1.3) rotateY(-180deg); transform: scale(1.3) rotateY(-180deg); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
      100% { -webkit-transform: scale(1) rotateY(-180deg); transform: scale(1) rotateY(-180deg); -webkit-transform-origin: 0% 50%; transform-origin: 0% 50%; }
    }
    
    .flip-scale-2-ver-right {
      -webkit-animation: flip-scale-2-ver-right 0.5s ease-out both;
      animation: flip-scale-2-ver-right 0.5s ease-out both;
    }
    @-webkit-keyframes flip-scale-2-ver-right {
      0% { -webkit-transform: scale(1) rotateY(0); transform: scale(1) rotateY(0); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
      25% { -webkit-transform: scale(1.3) rotateY(0); transform: scale(1.3) rotateY(0); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
      50% { -webkit-transform: scale(1.3) rotateY(90deg); transform: scale(1.3) rotateY(90deg); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
      75% { -webkit-transform: scale(1.3) rotateY(180deg); transform: scale(1.3) rotateY(180deg); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
      100% { -webkit-transform: scale(1) rotateY(180deg); transform: scale(1) rotateY(180deg); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
    }
    @keyframes flip-scale-2-ver-right {
      0% { -webkit-transform: scale(1) rotateY(0); transform: scale(1) rotateY(0); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
      25% { -webkit-transform: scale(1.3) rotateY(0); transform: scale(1.3) rotateY(0); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
      50% { -webkit-transform: scale(1.3) rotateY(90deg); transform: scale(1.3) rotateY(90deg); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
      75% { -webkit-transform: scale(1.3) rotateY(180deg); transform: scale(1.3) rotateY(180deg); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
      100% { -webkit-transform: scale(1) rotateY(180deg); transform: scale(1) rotateY(180deg); -webkit-transform-origin: 100% 50%; transform-origin: 100% 50%; }
    }
  `
};

/**
 * 애니메이션 CSS를 동적으로 주입
 * @param animationType - 애니메이션 타입 (swing, flip, scale-up 등)
 * @returns Promise<void>
 */
export async function loadAnimationCSS(animationType: string): Promise<void> {
  const stylesheetId = `animation-${animationType}`;
  
  // 이미 로드된 경우 스킵
  if (loadedStylesheets[stylesheetId]) {
    return Promise.resolve();
  }

  const cssContent = ANIMATION_CSS[animationType];
  if (!cssContent) {
    return Promise.reject(new Error(`No CSS defined for animation type: ${animationType}`));
  }

  return new Promise((resolve) => {
    const style = document.createElement('style');
    style.type = 'text/css';
    style.id = stylesheetId;
    style.innerHTML = cssContent;
    
    document.head.appendChild(style);
    loadedStylesheets[stylesheetId] = style as HTMLLinkElement | HTMLStyleElement;
    resolve();
  });
}

/**
 * 특정 애니메이션 CSS 파일을 언로드
 * @param animationType - 애니메이션 타입
 */
export function unloadAnimationCSS(animationType: string): void {
  const stylesheetId = `animation-${animationType}`;
  const link = loadedStylesheets[stylesheetId];
  
  if (link && link.parentNode) {
    link.parentNode.removeChild(link);
    delete loadedStylesheets[stylesheetId];
  }
}

/**
 * 모든 애니메이션 CSS 파일 언로드
 */
export function unloadAllAnimationCSS(): void {
  Object.keys(loadedStylesheets).forEach(stylesheetId => {
    const link = loadedStylesheets[stylesheetId];
    if (link && link.parentNode) {
      link.parentNode.removeChild(link);
    }
  });
  
  // 로드된 스타일시트 목록 초기화
  Object.keys(loadedStylesheets).forEach(key => {
    delete loadedStylesheets[key];
  });
}

/**
 * 현재 로드된 애니메이션 CSS 목록 반환
 * @returns string[] - 로드된 애니메이션 타입 목록
 */
export function getLoadedAnimationCSS(): string[] {
  return Object.keys(loadedStylesheets).map(id => 
    id.replace('animation-', '')
  );
}

/**
 * 특정 애니메이션이 로드되었는지 확인
 * @param animationType - 애니메이션 타입
 * @returns boolean
 */
export function isAnimationCSSLoaded(animationType: string): boolean {
  const stylesheetId = `animation-${animationType}`;
  return !!loadedStylesheets[stylesheetId];
}

/**
 * 특정 애니메이션 타입의 CSS 내용을 반환 (외부 사용자용 코드 생성에 사용)
 * @param animationType - 애니메이션 타입
 * @returns string | null - CSS 내용 또는 null
 */
export function getAnimationCSSContent(animationType: string): string | null {
  return ANIMATION_CSS[animationType] || null;
}

/**
 * 특정 애니메이션의 개별 클래스 CSS를 추출 (클래스 + 키프레임)
 * @param animationType - 애니메이션 타입 (예: 'flip')
 * @param direction - 애니메이션 방향 (예: 'horizontal-bottom')
 * @returns string - 해당 클래스의 CSS 코드
 */
export function getSpecificAnimationCSS(animationType: string, direction: string): string {
  const fullCSS = ANIMATION_CSS[animationType];
  if (!fullCSS) return '';

  const className = `${animationType}-${direction}`;
  let result = '';

  // CSS를 줄 단위로 분할하여 처리
  const lines = fullCSS.split('\n');
  let currentSection = '';
  let braceCount = 0;
  let inTargetSection = false;
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    
    // 빈 줄은 스킵
    if (!line) continue;
    
    // 타겟 클래스나 키프레임을 찾았는지 확인
    const isTargetClass = line.includes(`.${className}`) && line.includes('{');
    const isTargetWebkitKeyframe = line.includes(`@-webkit-keyframes ${className}`) && line.includes('{');
    const isTargetKeyframe = line.includes(`@keyframes ${className}`) && line.includes('{');
    
    if (isTargetClass || isTargetWebkitKeyframe || isTargetKeyframe) {
      inTargetSection = true;
      currentSection = line;
      braceCount = (line.match(/\{/g) || []).length - (line.match(/\}/g) || []).length;
      
      // 같은 줄에 닫는 중괄호가 있으면 바로 완료
      if (braceCount === 0) {
        result += currentSection + '\n';
        currentSection = '';
        inTargetSection = false;
      }
      continue;
    }
    
    // 타겟 섹션 안에 있다면 계속 수집
    if (inTargetSection) {
      currentSection += '\n' + line;
      braceCount += (line.match(/\{/g) || []).length - (line.match(/\}/g) || []).length;
      
      // 중괄호가 모두 닫혔으면 섹션 완료
      if (braceCount === 0) {
        result += currentSection + '\n';
        currentSection = '';
        inTargetSection = false;
      }
    }
  }
  
  return result.trim();
}