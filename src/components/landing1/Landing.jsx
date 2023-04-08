// import { useEffect,useState } from 'react';
// import classes from './landing.module.css';
// import cover__image from '../../assats/cover-1024x577.jpg';


// const Landing = () => {
//   const [offset, setOffset] = useState(0);
//   useEffect(() => {
//       const onScroll = () => setOffset(window.pageYOffset);
//       // clean up code
//       window.removeEventListener('scroll', onScroll);
//       window.addEventListener('scroll', onScroll, { passive: true });
//       return () => window.removeEventListener('scroll', onScroll);
//   }, []);

//   return (
//     <section className={classes.cover } >
//         <div className={classes.cover_outer_image}>
//         <picture >
//         <img className={classes.cover__image} src={cover__image} alt="" 
//         style={{opacity:`${offset > 0?0.5:0.8}`}}
//         />
//         </picture>
//         </div>
//     <div className={classes.cover__main}>
//         <div className={classes.cover__header}>
//           <h1 className={classes.cover__header_title}  >Salla سلَّة</h1>
//           {/* <img className={classes.cover__header_subtitle} src={hanwag_cover_subtitle} alt="hanwag-cover-subtitle" /> */}
//           <div  className={classes.cover__header_subtitle}>
//         <svg width="1576" height="662" viewBox="0 0 1576 662" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <path d="M1574.27 470.23L1535.98 151.03C1525.68 65.09 1452.63 0.26001 1366.06 0.26001H1000.35C913.78 0.26001 840.73 65.09 830.43 151.03L792.18 470.23C786.36 518.78 801.62 567.61 834.09 604.18C866.52 640.78 913.19 661.74 962.1 661.74H1404.35C1453.22 661.74 1499.89 640.78 1532.36 604.18C1564.79 567.62 1580.09 518.79 1574.27 470.23ZM1469.38 548.71C1452 568.29 1428.02 579.06 1401.88 579.06H964.58C938.4 579.06 914.41 568.29 897.08 548.71C879.7 529.13 871.88 504.05 874.98 478.06L912.8 162.44C918.23 117.15 956.75 82.94 1002.4 82.94H1364.02C1409.66 82.94 1448.19 117.14 1453.62 162.44L1491.48 478.06C1494.58 504.05 1486.71 529.13 1469.38 548.71Z" fill="#004956"></path>
//     <path d="M1402.94 372.25C1396.92 363.02 1387.67 356.69 1376.89 354.42C1366.09 352.15 1355.09 354.22 1345.86 360.23C1235.75 432.04 1128.59 432.03 1018.27 360.22C1009.04 354.21 998.01 352.14 987.24 354.43C976.46 356.71 967.22 363.05 961.21 372.28C955.2 381.51 953.14 392.53 955.42 403.31C957.7 414.09 964.04 423.33 973.27 429.34C1042.21 474.22 1112.49 496.97 1182.16 496.97C1251.84 496.97 1322.07 474.21 1390.91 429.32C1400.14 423.3 1406.47 414.05 1408.74 403.27C1411.02 392.5 1408.96 381.48 1402.94 372.25Z" fill="#004956"></path>
//     <path d="M652.79 199.93L613.67 213.41C617.94 227.22 623.2 246.94 623.2 258.44C623.2 270.93 615.31 278.49 600.19 278.49C584.74 278.49 575.54 274.87 575.54 254.49V219.32H534.12V254.49C534.12 274.87 524.92 278.49 508.48 278.49C492.37 278.49 483.17 274.87 483.17 254.49V219.32H441.42V254.16C441.42 274.87 430.24 278.48 406.25 278.48C381.6 278.48 373.05 273.55 373.05 246.59V95.73H329.33V248.91C329.33 273.89 320.78 278.49 296.14 278.49H296.13C276.73 278.49 265.24 274.56 265.24 249.9V136.81H224.14V160.17C146.23 176.25 118.3 208.8 118.3 249.57C118.3 288.34 143.93 313.34 181.4 313.34C209.36 313.34 223.47 299.2 229.73 280.13C235.32 313.99 255.01 333.69 293.44 333.71L293.5 333.72C322.76 333.72 339.19 320.57 346.09 300.52C354.64 322.87 374.03 333.72 403.61 333.72C430.89 333.72 448.64 323.86 455.54 303.48C462.44 324.19 478.88 333.72 502.22 333.72C525.56 333.72 541.67 323.86 548.24 303.15C555.14 323.86 571.91 333.72 598.86 333.72C639.62 333.72 664.6 307.09 664.6 258.77C664.62 241.02 659.69 216.69 652.79 199.93ZM224.15 248.57C217.59 253.83 205.08 257.79 186.67 257.79C169.9 257.79 153.15 253.2 153.15 242.01C153.15 229.83 170.56 217.68 224.14 208.8V248.57H224.15Z" fill="#004956"></path>
//     <path d="M246.33 126.61C259.67 126.61 270.65 116.93 270.65 103.33C270.65 88.95 259.14 80.05 246.33 80.05C232.99 80.05 221.74 89.2 221.74 103.33C221.74 117.72 233.77 126.61 246.33 126.61Z" fill="#004956"></path>
//     <path d="M191.36 126.61C204.7 126.61 215.68 116.93 215.68 103.33C215.68 88.95 204.17 80.05 191.36 80.05C178.02 80.05 166.77 89.2 166.77 103.33C166.77 117.72 178.8 126.61 191.36 126.61Z" fill="#004956"></path>
//     <path d="M0.52002 569.07L6.99002 533.92C19.64 542.92 42.14 551.07 60.97 551.07C77.28 551.07 86.84 545.73 86.84 536.73C86.84 512.27 1.93001 535.04 1.93001 475.72C1.93001 444.79 27.52 424.55 68.85 424.55C91.06 424.55 111.59 430.74 126.21 438.33L119.18 472.63C105.4 465.32 87.97 458.57 71.1 458.57C55.64 458.57 46.08 464.47 46.08 472.91C46.08 498.5 130.99 476.57 130.99 531.95C130.99 562.32 102.03 583.68 59.29 583.68C33.7 583.69 13.17 576.1 0.52002 569.07Z" fill="#004956"></path>
//     <path d="M273.24 429.61H317.66V579.47H273.24V554.73C261.15 572.72 244 583.13 221.79 583.13C184.11 583.13 147.84 556.42 147.84 504.4C147.84 452.38 182.42 425.11 221.79 425.11C243.72 425.11 260.87 433.26 273.24 449.57V429.61ZM273.24 503.84C265.09 476 248.78 461.95 230.22 461.95C210.26 461.95 194.79 476.85 194.79 503.84C194.79 530.55 210.53 546.3 230.5 546.3C249.91 546.29 265.93 529.14 273.24 503.84Z" fill="#004956"></path>
//     <path d="M350.28 579.47V381.81H394.7V579.47H350.28Z" fill="#004956"></path>
//     <path d="M427.32 579.47V381.81H471.74V579.47H427.32Z" fill="#004956"></path>
//     <path d="M622.44 429.61H666.86V579.47H622.44V554.73C610.35 572.72 593.2 583.13 570.99 583.13C533.31 583.13 497.04 556.42 497.04 504.4C497.04 452.38 531.62 425.11 570.99 425.11C592.92 425.11 610.07 433.26 622.44 449.57V429.61ZM622.44 503.84C614.29 476 597.98 461.95 579.42 461.95C559.46 461.95 543.99 476.85 543.99 503.84C543.99 530.55 559.73 546.3 579.7 546.3C599.1 546.29 615.13 529.14 622.44 503.84Z" fill="#004956"></path>
//     </svg>
//         </div>
//             <div className={classes.cover__header_illustrations}>
//               {/* <img  src={hanwag_cover_shoes} alt="hanwag-cover-shoes" /> */}
//             </div>
//         </div>
//     </div>
  
//     </section>
  
//   )
// }

// export default Landing

import { useEffect,useState } from 'react';
import classes from './landing.module.css';
import cover__image from '../../assats/cover-1024x577.jpg';
// import hanwag_cover_subtitle from '../../assats/hanwag-cover-subtitle.png'
// import hanwag_cover_shoes from '../../assats/hanwag-cover-shoes.png';

const Landing = () => {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
      const onScroll = () => setOffset(window.pageYOffset);
      // clean up code
      window.removeEventListener('scroll', onScroll);
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <section className={classes.cover } >
            <div className={classes.cover__header_illustrations}>
              <svg width="1576" height="662" viewBox="0 0 1576 662" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1574.27 470.23L1535.98 151.03C1525.68 65.09 1452.63 0.26001 1366.06 0.26001H1000.35C913.78 0.26001 840.73 65.09 830.43 151.03L792.18 470.23C786.36 518.78 801.62 567.61 834.09 604.18C866.52 640.78 913.19 661.74 962.1 661.74H1404.35C1453.22 661.74 1499.89 640.78 1532.36 604.18C1564.79 567.62 1580.09 518.79 1574.27 470.23ZM1469.38 548.71C1452 568.29 1428.02 579.06 1401.88 579.06H964.58C938.4 579.06 914.41 568.29 897.08 548.71C879.7 529.13 871.88 504.05 874.98 478.06L912.8 162.44C918.23 117.15 956.75 82.94 1002.4 82.94H1364.02C1409.66 82.94 1448.19 117.14 1453.62 162.44L1491.48 478.06C1494.58 504.05 1486.71 529.13 1469.38 548.71Z" fill="#004956"></path>
                <path d="M1402.94 372.25C1396.92 363.02 1387.67 356.69 1376.89 354.42C1366.09 352.15 1355.09 354.22 1345.86 360.23C1235.75 432.04 1128.59 432.03 1018.27 360.22C1009.04 354.21 998.01 352.14 987.24 354.43C976.46 356.71 967.22 363.05 961.21 372.28C955.2 381.51 953.14 392.53 955.42 403.31C957.7 414.09 964.04 423.33 973.27 429.34C1042.21 474.22 1112.49 496.97 1182.16 496.97C1251.84 496.97 1322.07 474.21 1390.91 429.32C1400.14 423.3 1406.47 414.05 1408.74 403.27C1411.02 392.5 1408.96 381.48 1402.94 372.25Z" fill="#004956"></path>
                <path d="M652.79 199.93L613.67 213.41C617.94 227.22 623.2 246.94 623.2 258.44C623.2 270.93 615.31 278.49 600.19 278.49C584.74 278.49 575.54 274.87 575.54 254.49V219.32H534.12V254.49C534.12 274.87 524.92 278.49 508.48 278.49C492.37 278.49 483.17 274.87 483.17 254.49V219.32H441.42V254.16C441.42 274.87 430.24 278.48 406.25 278.48C381.6 278.48 373.05 273.55 373.05 246.59V95.73H329.33V248.91C329.33 273.89 320.78 278.49 296.14 278.49H296.13C276.73 278.49 265.24 274.56 265.24 249.9V136.81H224.14V160.17C146.23 176.25 118.3 208.8 118.3 249.57C118.3 288.34 143.93 313.34 181.4 313.34C209.36 313.34 223.47 299.2 229.73 280.13C235.32 313.99 255.01 333.69 293.44 333.71L293.5 333.72C322.76 333.72 339.19 320.57 346.09 300.52C354.64 322.87 374.03 333.72 403.61 333.72C430.89 333.72 448.64 323.86 455.54 303.48C462.44 324.19 478.88 333.72 502.22 333.72C525.56 333.72 541.67 323.86 548.24 303.15C555.14 323.86 571.91 333.72 598.86 333.72C639.62 333.72 664.6 307.09 664.6 258.77C664.62 241.02 659.69 216.69 652.79 199.93ZM224.15 248.57C217.59 253.83 205.08 257.79 186.67 257.79C169.9 257.79 153.15 253.2 153.15 242.01C153.15 229.83 170.56 217.68 224.14 208.8V248.57H224.15Z" fill="#004956"></path>
                <path d="M246.33 126.61C259.67 126.61 270.65 116.93 270.65 103.33C270.65 88.95 259.14 80.05 246.33 80.05C232.99 80.05 221.74 89.2 221.74 103.33C221.74 117.72 233.77 126.61 246.33 126.61Z" fill="#004956"></path>
                <path d="M191.36 126.61C204.7 126.61 215.68 116.93 215.68 103.33C215.68 88.95 204.17 80.05 191.36 80.05C178.02 80.05 166.77 89.2 166.77 103.33C166.77 117.72 178.8 126.61 191.36 126.61Z" fill="#004956"></path>
                <path d="M0.52002 569.07L6.99002 533.92C19.64 542.92 42.14 551.07 60.97 551.07C77.28 551.07 86.84 545.73 86.84 536.73C86.84 512.27 1.93001 535.04 1.93001 475.72C1.93001 444.79 27.52 424.55 68.85 424.55C91.06 424.55 111.59 430.74 126.21 438.33L119.18 472.63C105.4 465.32 87.97 458.57 71.1 458.57C55.64 458.57 46.08 464.47 46.08 472.91C46.08 498.5 130.99 476.57 130.99 531.95C130.99 562.32 102.03 583.68 59.29 583.68C33.7 583.69 13.17 576.1 0.52002 569.07Z" fill="#004956"></path>
                <path d="M273.24 429.61H317.66V579.47H273.24V554.73C261.15 572.72 244 583.13 221.79 583.13C184.11 583.13 147.84 556.42 147.84 504.4C147.84 452.38 182.42 425.11 221.79 425.11C243.72 425.11 260.87 433.26 273.24 449.57V429.61ZM273.24 503.84C265.09 476 248.78 461.95 230.22 461.95C210.26 461.95 194.79 476.85 194.79 503.84C194.79 530.55 210.53 546.3 230.5 546.3C249.91 546.29 265.93 529.14 273.24 503.84Z" fill="#004956"></path>
                <path d="M350.28 579.47V381.81H394.7V579.47H350.28Z" fill="#004956"></path>
                <path d="M427.32 579.47V381.81H471.74V579.47H427.32Z" fill="#004956"></path>
                <path d="M622.44 429.61H666.86V579.47H622.44V554.73C610.35 572.72 593.2 583.13 570.99 583.13C533.31 583.13 497.04 556.42 497.04 504.4C497.04 452.38 531.62 425.11 570.99 425.11C592.92 425.11 610.07 433.26 622.44 449.57V429.61ZM622.44 503.84C614.29 476 597.98 461.95 579.42 461.95C559.46 461.95 543.99 476.85 543.99 503.84C543.99 530.55 559.73 546.3 579.7 546.3C599.1 546.29 615.13 529.14 622.44 503.84Z" fill="#004956"></path>
              </svg>
            </div>
    </section>
  
  )
}

export default Landing