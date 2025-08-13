import React from 'react';

export function Supercoilsvgrepocom() {

  // Advanced Animation Styles (slide-bck-tl)
  const animationStyles = `
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
  `;

  // Inject styles on component mount
  React.useEffect(() => {
    const styleId = 'advanced-animation-styles';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.innerHTML = animationStyles;
      document.head.appendChild(style);
    }
  }, [animationStyles]);

  return (
    <div
      className="slide-bck-tl"
      style={{
        // Size property
        width: '294px',
        height: '294px',
        
        // Rotation property  
        transform: 'rotate(0deg)',
        
        // Opacity property
        opacity: 1,
        
        // Transition for smooth hover effects
        transition: 'all 1.5s ease-in-out',
        
        // Advanced Animation Override
        animationDuration: '2s',
        animationIterationCount: 'infinite',
        animationTimingFunction: 'ease',
        animationDelay: '0s',
      }}
      
    >
      <svg viewBox="0 0 1000 571" xmlns="http://www.w3.org/2000/svg">
  <path d="M 0 0 L 1000 0 L 1000 571 L 0 571 L 0 0 Z M 575 201 Q 544 237 517 277 L 515 278 L 492 247 Q 490 242 483 243 L 511 283 L 481 325 Q 480 327 487 326 L 514 290 Q 513 287 516 288 L 520 296 L 542 325 L 543 326 L 549 326 L 519 284 L 575 203 L 575 201 Z M 352 243 L 352 326 L 353 326 L 358 326 L 359 251 L 410 327 L 440 367 L 444 370 L 360 245 L 360 243 L 352 243 Z M 422 243 L 422 326 L 479 326 L 479 321 L 428 321 L 428 286 L 430 286 L 431 285 L 473 285 Q 474 287 475 285 Q 475 280 475 280 L 428 280 L 428 248 L 478 248 L 478 243 L 422 243 Z M 551 243 L 552 248 L 580 248 L 580 326 L 586 326 L 586 326 L 586 248 L 615 248 L 615 243 L 551 243 Z M 640 301 L 637 302 L 634 306 L 635 311 L 641 313 Q 646 311 644 317 L 642 318 L 637 315 Q 633 314 634 318 L 637 320 L 641 321 L 647 319 L 648 317 L 647 312 L 646 310 L 640 309 L 637 307 L 641 304 L 643 305 Q 645 304 644 307 L 648 306 Q 646 301 640 301 Z M 627 302 L 627 316 L 626 317 L 622 315 Q 618 314 619 318 L 625 321 L 630 319 L 631 316 L 630 314 L 630 312 L 630 304 L 631 303 L 627 302 Z M 614 316 L 612 318 L 614 320 Q 617 321 616 318 L 614 316 Z " fill="rgb(0,0,0)" stroke="rgb(0,0,0)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M 422.5 243 L 423 321.5 L 422 321.5 L 422.5 243 Z " fill="rgb(144,144,144)" stroke="rgb(144,144,144)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M 551.5 243 L 552 247 L 581 247 L 581 324.5 L 580 324.5 L 580 248 L 552.5 248 Q 549.8 246.8 551.5 243 Z " fill="rgb(144,144,144)" stroke="rgb(144,144,144)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M 614.5 243 L 615 246.5 L 614 246.5 L 614.5 243 Z " fill="rgb(144,144,144)" stroke="rgb(144,144,144)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M 477.5 246 L 476.5 248 L 429 247.5 L 476.5 247 L 477.5 246 Z " fill="rgb(144,144,144)" stroke="rgb(144,144,144)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M 585 247 L 590 247.5 L 586 248 L 585.5 321 L 585 247 Z " fill="rgb(144,144,144)" stroke="rgb(144,144,144)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M 591.5 247 L 613 247.5 L 591.5 248 L 591.5 247 Z " fill="rgb(144,144,144)" stroke="rgb(144,144,144)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M 357.5 250 L 358 253.5 L 357 253.5 L 357.5 250 Z " fill="rgb(144,144,144)" stroke="rgb(144,144,144)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M 357.5 255 L 358 324.5 L 357 324.5 L 357.5 255 Z " fill="rgb(144,144,144)" stroke="rgb(144,144,144)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M 474.5 281 L 475 284.5 L 474 284.5 L 474.5 281 Z " fill="rgb(144,144,144)" stroke="rgb(144,144,144)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M 510.5 281 L 512 283.5 L 511 283.5 L 510.5 281 Z " fill="rgb(144,144,144)" stroke="rgb(144,144,144)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M 637.5 302 L 639 302.5 L 636.5 304 L 637.5 302 Z " fill="rgb(144,144,144)" stroke="rgb(144,144,144)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M 643.5 304 L 647 306.5 L 645.5 307 L 643.5 304 Z " fill="rgb(144,144,144)" stroke="rgb(144,144,144)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M 635.5 309 L 640 311.5 L 638.5 312 L 635.5 309 Z " fill="rgb(144,144,144)" stroke="rgb(144,144,144)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M 634.5 315 L 636 317.5 L 634 316.5 L 634.5 315 Z " fill="rgb(144,144,144)" stroke="rgb(144,144,144)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M 437.5 360 L 440 363.5 L 437 361.5 L 437.5 360 Z " fill="rgb(144,144,144)" stroke="rgb(144,144,144)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M 567.5 211 L 566 213.5 L 518 283.5 L 548 326 L 542 325 L 515.5 287 L 485.5 326 Q 481.1 327.5 482 324.5 L 512 282.5 L 484 243.5 L 486.5 243 L 491 246.5 L 514.5 279 L 517 277.5 Q 540.5 242.5 567.5 211 Z " fill="rgb(238,238,238)" stroke="rgb(238,238,238)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M 354.5 243 L 357.5 243 L 362 247.5 L 435 356.5 L 432 354.5 L 411 326.5 L 358.5 250 Q 355.5 249.1 357 253.5 L 357 255.5 L 357 325.5 L 353 326 L 353 244.5 L 354.5 243 Z " fill="rgb(238,238,238)" stroke="rgb(238,238,238)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M 423.5 243 L 425.5 243 L 476.5 243 L 478 244.5 L 476.5 247 L 427 247 L 427 281 L 473.5 281 L 474 285 L 427 285 L 427 322 L 477.5 322 L 478 326 L 423.5 326 L 423 324.5 L 422 322.5 L 423 321.5 L 423.5 243 Z " fill="rgb(238,238,238)" stroke="rgb(238,238,238)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M 552 243 L 613.5 243 L 614 247 L 585 247 L 585 324.5 L 581 326 L 581 247 L 552.5 247 L 552 243 Z " fill="rgb(238,238,238)" stroke="rgb(238,238,238)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M 628.5 302 L 630 303.5 L 630 315.5 L 626.5 320 L 621 319 L 620 316.5 L 622 316 Q 620.6 319.7 626.5 318 L 628 316.5 L 628.5 302 Z " fill="rgb(238,238,238)" stroke="rgb(238,238,238)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M 639.5 302 Q 645.7 301.3 647 305.5 L 645.5 306 Q 644.3 302.8 638.5 304 Q 636 305.2 637 309 L 647 312.5 Q 648 318 644.5 319 L 638.5 320 L 636 319 L 635 315.5 L 638.5 318 Q 643.8 319.3 645 316.5 Q 646.5 312.1 643.5 313 L 635 308.5 Q 633.1 303.1 636.5 304 L 639.5 302 Z " fill="rgb(238,238,238)" stroke="rgb(238,238,238)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M 613 317 Q 616 315.8 615 319.5 L 613 318.5 L 613 317 Z " fill="rgb(238,238,238)" stroke="rgb(238,238,238)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M 352.5 250 L 353 323.5 L 352 323.5 L 352.5 250 Z " fill="rgb(128,128,128)" stroke="rgb(128,128,128)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M 627.5 303 L 628 313.5 L 627 313.5 L 627.5 303 Z " fill="rgb(128,128,128)" stroke="rgb(128,128,128)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M 428.5 321 L 472 321.5 L 428.5 322 L 428.5 321 Z " fill="rgb(128,128,128)" stroke="rgb(128,128,128)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M 473.5 321 L 478 321.5 L 473.5 322 L 473.5 321 Z " fill="rgb(128,128,128)" stroke="rgb(128,128,128)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M 575.5 200 L 575 201.5 Q 575.7 204.1 573 203 L 573 205.5 L 571 206.5 L 571 204.5 L 575.5 200 Z " fill="rgb(98,98,98)" stroke="rgb(98,98,98)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M 427.5 248 L 428 280 L 431 280.5 L 428.5 281 L 427 279.5 L 427.5 248 Z " fill="rgb(98,98,98)" stroke="rgb(98,98,98)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M 513.5 277 L 516 278.5 L 514.5 279 L 513.5 277 Z " fill="rgb(98,98,98)" stroke="rgb(98,98,98)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M 432.5 280 L 475 280.5 L 432.5 281 L 432.5 280 Z " fill="rgb(98,98,98)" stroke="rgb(98,98,98)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M 427.5 285 L 428 320.5 L 427 320.5 L 427.5 285 Z " fill="rgb(98,98,98)" stroke="rgb(98,98,98)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M 639.5 301 L 643 301.5 L 639.5 302 L 639.5 301 Z " fill="rgb(98,98,98)" stroke="rgb(98,98,98)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M 644.5 310 L 647 311.5 L 645.5 311 L 644.5 310 Z " fill="rgb(98,98,98)" stroke="rgb(98,98,98)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M 626.5 316 L 625.5 318 L 624 317.5 L 626.5 316 Z " fill="rgb(98,98,98)" stroke="rgb(98,98,98)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M 478.5 321 L 479 325.5 L 478 325.5 L 478.5 321 Z " fill="rgb(98,98,98)" stroke="rgb(98,98,98)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M 437.5 362 L 440 362.5 L 439.5 365 L 437.5 362 Z " fill="rgb(98,98,98)" stroke="rgb(98,98,98)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
  <path d="M 441.5 365 L 444 369.5 L 440 366.5 L 441.5 365 Z " fill="rgb(98,98,98)" stroke="rgb(98,98,98)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
</svg>
    </div>
  );
}